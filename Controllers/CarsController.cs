using AutoWebApi.Data;
using AutoWebApi.Helpers;
using AutoWebApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace AutoWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarsController : ControllerBase
    {
        private readonly AutoDbContext db;

        public CarsController(AutoDbContext db)
        {
            this.db = db;
        }
        // api/manufacturers
        [HttpGet]
        public async Task<IActionResult> GetAllCars(int? pageNumber, int? pageSize)
        {
            int currentPageNumber = pageNumber ?? 1;
            int currentPageSize = pageSize ?? 16;
            int pageCount = (int)Math.Ceiling((double)(db.Cars.ToArray().Length / pageSize));

            if (db.Cars == null)
            {
                return NotFound("No cars found!");
            }
            var cars = await (from car in db.Cars
                              select new
                              {
                                Id = car.Id,
                                Name = car.Manufacturer.Name + " " + car.Model.Name,
                                Image = car.ImageUrl,
                                Price = car.Price,
                                Mileage = car.Mileage,
                                Year = car.Year,
                                PageCount = pageCount,

                               }).ToListAsync();
            return Ok(cars.Skip((currentPageNumber - 1) * currentPageSize).Take(currentPageSize));
        }
        // api/manufacturers/{id}
        [HttpGet("{id}")]
        public IActionResult GetCar(int id)
        {
            //var car = await db.Cars.FindAsync(id);
            var carObj = (from car in db.Cars
                                where car.Id == id
                                select new
                                {
                                    CarId = car.Id,
                                    Name = car.Manufacturer.Name + " " + car.Model.Name,
                                    Image = car.ImageUrl,
                                    Price = car.Price,
                                    Mileage = car.Mileage,
                                    Year = car.Year,
                                    BodyStyle = car.BodyStyle.Name,
                                    Color = car.Color.Name,
                                    Drivetrain = car.Drivetrain.Name,
                                    FuelType = car.FuelType.Name,
                                    GearBox = car.GearBox.Name,
                                });
            if (carObj == null)
            {
                return NotFound("No car found with this id!");
            }
            return Ok(carObj);
        }
        // api/manufacturers
        [HttpPost]
        public async Task<IActionResult> Post([FromForm] Car car)
        {
            var imageUrl = await FileHelper.UploadImage(car.Image);
            car.ImageUrl = imageUrl;
            car.CreatedDate = DateTime.UtcNow.AddHours(4);
            await db.Cars.AddAsync(car);
            await db.SaveChangesAsync();
            return StatusCode(StatusCodes.Status201Created);
        }
        // api/manufacturers/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromForm] Car carObj)
        {
            var car = await db.Cars.FindAsync(id);
            if (car == null)
            {
                return NotFound("No car found with this id!");
            }
            car.ManufacturerId = carObj.ManufacturerId;
            car.ModelId = carObj.ModelId;
            car.BodyStyleId = carObj.BodyStyleId;
            car.ColorId = carObj.ColorId;
            car.FuelTypeId = carObj.FuelTypeId;
            car.DrivetrainId = carObj.DrivetrainId;
            car.GearBoxId = carObj.GearBoxId;
            car.Price = carObj.Price;
            car.Engine = carObj.Engine;
            car.Mileage = carObj.Mileage;
            car.ImageUrl = await FileHelper.UploadImage(carObj.Image);
            await db.SaveChangesAsync();
            return Ok("Car updated successfully!");
        }
        // api/manufacturers/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var car = await db.Cars.FindAsync(id);
            if (car == null)
            {
                return NotFound("No car found with this id!");
            }
            db.Cars.Remove(car);
            await db.SaveChangesAsync();
            return Ok("Car successfully deleted!");
        }
        [HttpGet("[action]")]
        public async Task<IActionResult> Filter(int? gearboxId, int? fueltypeId, int? bodystyleId)
        {
            if (db.Cars == null)
            {
                return NotFound("No cars found!");
            }
            var cars = await (from car in db.Cars
                              where car.GearBoxId == gearboxId && car.FuelTypeId == fueltypeId && car.BodyStyleId == bodystyleId ||
                              car.BodyStyleId == bodystyleId && car.FuelTypeId == fueltypeId ||
                              car.BodyStyleId == bodystyleId && car.GearBoxId == gearboxId ||
                              car.GearBoxId == gearboxId && car.FuelTypeId == fueltypeId ||
                              car.FuelTypeId == fueltypeId ||
                              car.BodyStyleId == bodystyleId ||
                              car.GearBoxId == gearboxId
                              select new
                              {
                                  Id = car.Id,
                                  Name = car.Manufacturer.Name + " " + car.Model.Name,
                                  Image = car.ImageUrl,
                                  Price = car.Price,
                                  Mileage = car.Mileage,
                                  Year = car.Year,

                              }).ToListAsync();
            if(cars.Count == 0)
            {
                return NotFound();
            }
            return Ok(cars);
        }
    }
}
