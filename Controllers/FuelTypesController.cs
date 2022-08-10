using AutoWebApi.Data;
using AutoWebApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;

namespace AutoWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FuelTypesController : ControllerBase
    {
        private readonly AutoDbContext db;
        public FuelTypesController(AutoDbContext db)
        {
            this.db = db;
        }
        // api/fueltypes
        [HttpGet]
        public async Task<IActionResult> GetAllFuelTypes()
        {
            if (db.FuelTypes == null)
            {
                return NotFound("No fuel types found!");
            }
            return Ok(await db.FuelTypes.ToListAsync());
        }
        // api/fueltypes/{id}
        [HttpGet("{id}")]
        public async Task<IActionResult> GetFuelType(int id)
        {
            var fuelType = await db.FuelTypes.FindAsync(id);
            if (fuelType == null)
            {
                return NotFound("No fuel type found with this id!");
            }
            return Ok(fuelType);
        }
        // api/fueltypes
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] FuelType fuelType)
        {
            await db.FuelTypes.AddAsync(fuelType);
            await db.SaveChangesAsync();
            return StatusCode(StatusCodes.Status201Created);
        }
        // api/fueltypes/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] FuelType fuelTypeObj)
        {
            var fuelType = await db.FuelTypes.FindAsync(id);
            if (fuelType == null)
            {
                return NotFound("No fuel type found with this id!");
            }
            fuelType.Name = fuelTypeObj.Name;
            await db.SaveChangesAsync();
            return Ok("Fuel type updated successfully!");
        }
        // api/fueltypes/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var fuelType = await db.FuelTypes.FindAsync(id);
            if (fuelType == null)
            {
                return NotFound("No fuel type found with this id!");
            }
            db.FuelTypes.Remove(fuelType);
            await db.SaveChangesAsync();
            return Ok("Fuel type successfully deleted!");
        }
    }
}
