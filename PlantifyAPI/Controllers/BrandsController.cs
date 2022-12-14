using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PlantifyAPI.Data;
using PlantifyAPI.Models.Entities;
using System.Threading.Tasks;
using System.Linq;

namespace PlantifyAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BrandsController : ControllerBase
    {
        private readonly PlantifyDbContext db;

        public BrandsController(PlantifyDbContext db)
        {
            this.db = db;
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Brand brand)
        {
            await db.Brands.AddAsync(brand);
            await db.SaveChangesAsync();
            return StatusCode(StatusCodes.Status201Created);
        }

        [HttpGet]
        public async Task<IActionResult> GetBrands()
        {
            var brands = await (from brand in db.Brands
                                select new
                                {
                                    Id = brand.Id,
                                    Name = brand.Name,
                                }).ToListAsync();
            return Ok(brands);
        }

        [HttpGet("[action]/{id}")]
        public async Task<IActionResult> BrandProducts(int id)
        {
            var brandProducts = await db.Brands.Where(p => p.Id == id).Include(p => p.Products).ToListAsync();
            return Ok(brandProducts);
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateBrand(int id, [FromBody] Brand brandObj)
        {
            var brand = await db.Brands.FindAsync(id);
            if (brand == null)
            {
                return NotFound("No brand found with this id!");
            }
            brand.Name = brandObj.Name;
            await db.SaveChangesAsync();
            return Ok("Brand updated successfully!");
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBrand(int id)
        {
            var brand = await db.Brands.FindAsync(id);
            if (brand == null)
            {
                return NotFound("No brand found with this id!");
            }
            db.Brands.Remove(brand);
            await db.SaveChangesAsync();
            return Ok("Brand removed successfully!");
        }
    }
}
