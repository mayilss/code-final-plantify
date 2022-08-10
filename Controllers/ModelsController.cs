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
    public class ModelsController : ControllerBase
    {
        private readonly AutoDbContext db;
        public ModelsController(AutoDbContext db)
        {
            this.db = db;
        }
        // api/models
        [HttpGet]
        public async Task<IActionResult> GetAllModels()
        {
            if (db.Models == null)
            {
                return NotFound("No modeles found!");
            }
            return Ok(await db.Models.ToListAsync());
        }
        // api/models/{id}
        [HttpGet("{id}")]
        public async Task<IActionResult> GetModel(int id)
        {
            var model = await db.Models.FindAsync(id);
            if (model == null)
            {
                return NotFound("No model found with this id!");
            }
            return Ok(model);
        }
        // api/models/modelscars/{id}
        [HttpGet("[action]/{id}")]
        public async Task<IActionResult> ModelsCars(int id)
        {
            var model = await db.Models.FindAsync(id);
            if (model == null)
            {
                return NotFound("No model found with this id!");
            }
            if (model.Cars == null)
            {
                return NotFound("No cars found with this model!");
            }
            var modelsCars = await db.Models.Where(m => m.Id == id).Include(c => c.Cars).ToListAsync();
            return Ok(modelsCars);
        }
        // api/models
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Model model)
        {
            await db.Models.AddAsync(model);
            await db.SaveChangesAsync();
            return StatusCode(StatusCodes.Status201Created);
        }
        // api/models/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Model modelObj)
        {
            var model = await db.Models.FindAsync(id);
            if (model == null)
            {
                return NotFound("No model found with this id!");
            }
            model.Name = modelObj.Name;
            model.ManufacturerId = modelObj.ManufacturerId;
            await db.SaveChangesAsync();
            return Ok("Model updated successfully!");
        }
        // api/models/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var model = await db.Models.FindAsync(id);
            if (model == null)
            {
                return NotFound("No model found with this id!");
            }
            db.Models.Remove(model);
            await db.SaveChangesAsync();
            return Ok("Model successfully deleted!");
        }
    }
}
