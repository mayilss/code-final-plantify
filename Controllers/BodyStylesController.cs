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
            var bodyStyles = await (from bodyStyle in db.BodyStyles
                                    select new
                                    {
                                        Id = bodyStyle.Id,
                                        Name = bodyStyle.Name,
                                    }).ToListAsync();
            return Ok(bodyStyles);
        }
        // api/bodystyles/{id}
        [HttpGet("{id}")]
        public async Task<IActionResult> GetBodyStyle(int id)
        {
            var bodyStyleObj = await (from bodyStyle in db.BodyStyles
                                      where bodyStyle.Id == id
                                    select new
                                    {
                                        Id = bodyStyle.Id,
                                        Name = bodyStyle.Name,
                                    }).ToListAsync();
            if (bodyStyleObj == null)
            {
                return NotFound("No body style found with this id!");
            }
            return Ok(bodyStyleObj);
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
