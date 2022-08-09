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
    public class BodyStylesController : ControllerBase
    {
        private readonly AutoDbContext db;

        public BodyStylesController(AutoDbContext db)
        {
            this.db = db;
        }
        // api/bodystyles
        [HttpGet]
        public async Task<IActionResult> GetAllBodyStyles()
        {
            if (db.BodyStyles == null)
            {
                return NotFound("No body style found!");
            }
            return Ok(await db.BodyStyles.ToListAsync());
        }
        // api/bodystyles/{id}
        [HttpGet("{id}")]
        public async Task<IActionResult> GetBodyStyle(int id)
        {
            var bodyStyle = await db.BodyStyles.FindAsync(id);
            if (bodyStyle == null)
            {
                return NotFound("No body style found with this id!");
            }
            return Ok(bodyStyle);
        }
        // api/bodystyles/bodystylecars/{id}
        [HttpGet("[action]/{id}")]
        public async Task<IActionResult> BodyStyleCars(int id)
        {
            var bodyStyle = await db.BodyStyles.FindAsync(id);
            if (bodyStyle == null)
            {
                return NotFound("No body style found with this id!");
            }
            if (bodyStyle.Cars == null)
            {
                return NotFound("No cars found with this body style!");
            }
            var bodyStyleCars = await db.BodyStyles.Where(m => m.Id == id).Include(c => c.Cars).ToListAsync();
            return Ok(bodyStyleCars);
        }
        // api/bodystyles
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] BodyStyle bodyStyle)
        {
            await db.BodyStyles.AddAsync(bodyStyle);
            await db.SaveChangesAsync();
            return StatusCode(StatusCodes.Status201Created);
        }
        // api/bodystyles/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] BodyStyle bodyStyleObj)
        {
            var bodyStyle = await db.BodyStyles.FindAsync(id);
            if (bodyStyle == null)
            {
                return NotFound("No body style found with this id!");
            }
            bodyStyle.Name = bodyStyleObj.Name;
            await db.SaveChangesAsync();
            return Ok("Body style updated successfully!");
        }
        // api/bodystyles/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var bodyStyle = await db.BodyStyles.FindAsync(id);
            if (bodyStyle == null)
            {
                return NotFound("No body style found with this id!");
            }
            db.BodyStyles.Remove(bodyStyle);
            await db.SaveChangesAsync();
            return Ok("Body style successfully deleted!");
        }
    }
}
