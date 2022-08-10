using AutoWebApi.Data;
using AutoWebApi.Helpers;
using AutoWebApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
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
        public async Task<IActionResult> GetAllManufacturers()
        {
            if (db.Cars == null)
            {
                return NotFound("No cars found!");
            }
            return Ok(await db.Cars.ToListAsync());
        }
        // api/manufacturers/{id}
        [HttpGet("{id}")]
        public async Task<IActionResult> GetCar(int id)
        {
            var car = await db.Cars.FindAsync(id);
            if (car == null)
            {
                return NotFound("No car found with this id!");
            }
            return Ok(car);
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
    }
}
