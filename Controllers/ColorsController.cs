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
    public class ColorsController : ControllerBase
    {
        private readonly AutoDbContext db;

        public ColorsController(AutoDbContext db)
        {
            this.db = db;
        }
        // api/colors
        [HttpGet]
        public async Task<IActionResult> GetAllColors()
        {
            if (db.Colors == null)
            {
                return NotFound("No color found!");
            }
            return Ok(await db.Colors.ToListAsync());
        }
        // api/colors/{id}
        [HttpGet("{id}")]
        public async Task<IActionResult> GetColor(int id)
        {
            var color = await db.Colors.FindAsync(id);
            if (color == null)
            {
                return NotFound("No color found with this id!");
            }
            return Ok(color);
        }
        // api/colors
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Color color)
        {
            await db.Colors.AddAsync(color);
            await db.SaveChangesAsync();
            return StatusCode(StatusCodes.Status201Created);
        }
        // api/colors/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Color colorObj)
        {
            var color = await db.Colors.FindAsync(id);
            if (color == null)
            {
                return NotFound("No color found with this id!");
            }
            color.Name = colorObj.Name;
            await db.SaveChangesAsync();
            return Ok("Color updated successfully!");
        }
        // api/colors/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var color = await db.Colors.FindAsync(id);
            if (color == null)
            {
                return NotFound("No color found with this id!");
            }
            db.Colors.Remove(color);
            await db.SaveChangesAsync();
            return Ok("Body style successfully deleted!");
        }
    }
}
