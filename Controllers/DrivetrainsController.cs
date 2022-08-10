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
    public class DrivetrainsController : ControllerBase
    {
        private readonly AutoDbContext db;
        public DrivetrainsController(AutoDbContext db)
        {
            this.db = db;
        }
        // api/drivetrains
        [HttpGet]
        public async Task<IActionResult> GetAllDrivetrains()
        {
            if (db.Drivetrains == null)
            {
                return NotFound("No drivetrain found!");
            }
            return Ok(await db.Drivetrains.ToListAsync());
        }
        // api/drivetrains/{id}
        [HttpGet("{id}")]
        public async Task<IActionResult> GetDrivetrain(int id)
        {
            var drivetrain = await db.Drivetrains.FindAsync(id);
            if (drivetrain == null)
            {
                return NotFound("No drivetrain found with this id!");
            }
            return Ok(drivetrain);
        }
        // api/drivetrains
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Drivetrain drivetrain)
        {
            await db.Drivetrains.AddAsync(drivetrain);
            await db.SaveChangesAsync();
            return StatusCode(StatusCodes.Status201Created);
        }
        // api/drivetrains/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Drivetrain drivetrainObj)
        {
            var drivetrain = await db.Drivetrains.FindAsync(id);
            if (drivetrain == null)
            {
                return NotFound("No drivetrain found with this id!");
            }
            drivetrain.Name = drivetrainObj.Name;
            await db.SaveChangesAsync();
            return Ok("Drivetrain updated successfully!");
        }
        // api/drivetrains/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var drivetrain = await db.Drivetrains.FindAsync(id);
            if (drivetrain == null)
            {
                return NotFound("No drivetrain found with this id!");
            }
            db.Drivetrains.Remove(drivetrain);
            await db.SaveChangesAsync();
            return Ok("Drivetrain successfully deleted!");
        }
    }
}
