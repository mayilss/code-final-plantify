using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PlantifyAPI.Data;
using PlantifyAPI.Helpers;
using PlantifyAPI.Models.Entities;
using System.Threading.Tasks;
using System.Linq;

namespace PlantifyAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        private readonly PlantifyDbContext db;

        public CategoriesController(PlantifyDbContext db)
        {
            this.db = db;
        }
        [HttpPost]
        public async Task<IActionResult> Post([FromForm] Category category)
        {
            var imageUrl = await FileHelper.UploadImage(category.Image);
            category.ImageUrl = imageUrl;
            await db.Categories.AddAsync(category);
            await db.SaveChangesAsync();
            return StatusCode(StatusCodes.Status201Created);
        }

        [HttpGet]
        public async Task<IActionResult> GetCategories()
        {
            var categories = await (from category in db.Categories
                                    select new
                                    {
                                        Id = category.Id,
                                        Name = category.Name,
                                        Image = category.ImageUrl,
                                    }).ToListAsync();
            return Ok(categories);
        }
        [HttpGet("[action]/{id}")]
        public async Task<IActionResult> CategoryProducts(int id)
        {
            var categoryProducts = await db.Categories.Where(c => c.Id == id).Include(c => c.Products).ToListAsync();
            return Ok(categoryProducts);
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateCategory(int id, [FromForm] Category categoryObj)
        {
            var category = await db.Categories.FindAsync(id);
            if (category == null)
            {
                return NotFound("No product found with this id!");
            }
            category.Name = categoryObj.Name;
            category.ImageUrl = await FileHelper.UploadImage(categoryObj.Image);
            await db.SaveChangesAsync();
            return Ok("Category updated successfully!");
        }
    }
}
