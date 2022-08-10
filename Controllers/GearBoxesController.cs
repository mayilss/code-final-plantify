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
    public class GearBoxesController : ControllerBase
    {
        private readonly AutoDbContext db;
        public GearBoxesController(AutoDbContext db)
        {
            this.db = db;
        }
        // api/gearboxes
        [HttpGet]
        public async Task<IActionResult> GetAllGearBoxes()
        {
            if (db.GearBoxes == null)
            {
                return NotFound("No gear boxes found!");
            }
            return Ok(await db.GearBoxes.ToListAsync());
        }
        // api/gearboxes/{id}
        [HttpGet("{id}")]
        public async Task<IActionResult> GetFuelType(int id)
        {
            var gearBox = await db.GearBoxes.FindAsync(id);
            if (gearBox == null)
            {
                return NotFound("No gear box found with this id!");
            }
            return Ok(gearBox);
        }
        // api/gearboxes/gearboxescars/{id}
        [HttpGet("[action]/{id}")]
        public async Task<IActionResult> GearBoxesCars(int id)
        {
            var gearBox = await db.GearBoxes.FindAsync(id);
            if (gearBox == null)
            {
                return NotFound("No gear box found with this id!");
            }
            if (gearBox.Cars == null)
            {
                return NotFound("No cars found with this gear box!");
            }
            var gearBoxsCars = await db.GearBoxes.Where(m => m.Id == id).Include(c => c.Cars).ToListAsync();
            return Ok(gearBoxsCars);
        }
        // api/gearboxes
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] GearBox gearBox)
        {
            await db.GearBoxes.AddAsync(gearBox);
            await db.SaveChangesAsync();
            return StatusCode(StatusCodes.Status201Created);
        }
        // api/gearboxes/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] GearBox gearBoxObj)
        {
            var gearBox = await db.GearBoxes.FindAsync(id);
            if (gearBox == null)
            {
                return NotFound("No gear box found with this id!");
            }
            gearBox.Name = gearBoxObj.Name;
            await db.SaveChangesAsync();
            return Ok("Gear box updated successfully!");
        }
        // api/gearboxes/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var gearBox = await db.GearBoxes.FindAsync(id);
            if (gearBox == null)
            {
                return NotFound("No gear box found with this id!");
            }
            db.GearBoxes.Remove(gearBox);
            await db.SaveChangesAsync();
            return Ok("Gear box successfully deleted!");
        }
    }
}
