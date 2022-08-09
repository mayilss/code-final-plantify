using AutoWebApi.Data;
using AutoWebApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AutoWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ManufacturersController : ControllerBase
    {
        private readonly AutoDbContext db;

        public ManufacturersController(AutoDbContext db)
        {
            this.db = db;
        }
        // api/manufacturers
        [HttpGet]
        public async Task<IActionResult> GetAllManufacturers()
        {
            if(db.Manufacturers == null)
            {
                return NotFound("No manufacturer found!");
            }
            return Ok(await db.Manufacturers.ToListAsync());
        }
        // api/manufacturers/{id}
        [HttpGet("{id}")]
        public async Task<IActionResult> GetManufacturer(int id)
        {
            var manufacturer = await db.Manufacturers.FindAsync(id);
            if (manufacturer == null)
            {
                return NotFound("No manufacturer found with this id!");
            }
            return Ok(manufacturer);
        }
        // api/manufacturers/manufacturermodels/{id}
        [HttpGet("[action]/{id}")]
        public async Task<IActionResult> ManufacturerModels(int id)
        {
            var manufacturer = await db.Manufacturers.FindAsync(id);
            if (manufacturer == null)
            {
                return NotFound("No manufacturer found with this id!");
            }
            if (manufacturer.Models == null)
            {
                return NotFound("No models found by this manufacturer!");
            }
            var manufacturerModels = await db.Manufacturers.Where(m => m.Id == id).Include(c=>c.Models).ToListAsync();
            return Ok(manufacturerModels);
        }
        // api/manufacturers/manufacturercars/{id}
        [HttpGet("[action]/{id}")]
        public async Task<IActionResult> ManufacturerCars(int id)
        {
            var manufacturer = await db.Manufacturers.FindAsync(id);
            if (manufacturer == null)
            {
                return NotFound("No manufacturer found with this id!");
            }
            if(manufacturer.Cars == null)
            {
                return NotFound("No cars found by this manufacturer!");
            }
            var manufacturerCars = await db.Manufacturers.Where(m => m.Id == id).Include(c => c.Cars).ToListAsync();
            return Ok(manufacturerCars);
        }
        // api/manufacturers
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Manufacturer manufacturer)
        {
            await db.Manufacturers.AddAsync(manufacturer);
            await db.SaveChangesAsync();
            return StatusCode(StatusCodes.Status201Created);
        }
        // api/manufacturers/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Manufacturer manufacturerObj)
        {
            var manufacturer = await db.Manufacturers.FindAsync(id);
            if (manufacturer == null)
            {
                return NotFound("No manufacturer found with this id!");
            }
            manufacturer.Name = manufacturerObj.Name;
            await db.SaveChangesAsync();
            return Ok("Manufacturer updated successfully!");
        }
        // api/manufacturers/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var manufacturer = await db.Manufacturers.FindAsync(id);
            if(manufacturer == null)
            {
                return NotFound("No manufacturer found with this id!");
            }
            db.Manufacturers.Remove(manufacturer);
            await db.SaveChangesAsync();
            return Ok("Manufacturer successfully deleted!");
        }
    }
}
