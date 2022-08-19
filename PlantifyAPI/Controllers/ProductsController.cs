using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PlantifyAPI.Data;
using PlantifyAPI.Helpers;
using PlantifyAPI.Models.Entities;
using System;
using System.Threading.Tasks;
using System.Linq;

namespace PlantifyAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly PlantifyDbContext db;

        public ProductsController(PlantifyDbContext db)
        {
            this.db = db;
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromForm] Product product)
        {
            var imageUrl = await FileHelper.UploadImage(product.Image);
            product.ImageUrl = imageUrl;
            product.CreatedDate = DateTime.UtcNow.AddHours(4);
            await db.Products.AddAsync(product);
            await db.SaveChangesAsync();
            return StatusCode(StatusCodes.Status201Created);
        }
        [HttpGet("{id}")]
        public IActionResult GetProduct(int id)
        {
            var prod = (from product in db.Products
                        where product.Id == id
                        select new
                        {
                            Id = product.Id,
                            Name = product.Name,
                            Image = product.ImageUrl,
                            Price = product.Price,
                            Brand = product.Brand.Name,
                            Category = product.Category.Name,
                            StockKeepingUnit = product.StockKeepingUnit,
                            CreatedDate = product.CreatedDate.ToString("MM/dd/yyyy HH:mm:ss"),
                        });
            if (prod == null)
            {
                return NotFound("No product found with this id!");
            }
            return Ok(prod);
        }

        [HttpGet]
        public async Task<IActionResult> GetAllProducts(int? pageSize)
        {
            int currentPageSize = pageSize ?? db.Products.ToArray().Length;

            var products = await (from product in db.Products
                                  select new
                                  {
                                      Id = product.Id,
                                      Name = product.Name,
                                      Image = product.ImageUrl,
                                      Price = product.Price,
                                      CategoryId = product.CategoryId,
                                      BrandId = product.BrandId,
                                      Category = product.Category.Name,
                                      Brand = product.Brand.Name,
                                      StockKeepingUnit = product.StockKeepingUnit,
                                  }).ToListAsync();
            return Ok(products.Take(currentPageSize));
        }
        [HttpGet("[action]")]
        public async Task<IActionResult> CategoryProducts(int categoryId)
        {
            var products = await (from product in db.Products
                                  where product.CategoryId == categoryId
                                  select new
                                  {
                                      Id = product.Id,
                                      Name = product.Name,
                                      Image = product.ImageUrl,
                                      Price = product.Price,
                                      Category = product.Category.Name,
                                      Brand = product.Brand.Name,
                                  }).ToListAsync();
            return Ok(products);
        }
        [HttpGet("[action]")]
        public async Task<IActionResult> SearchProducts(string query)
        {
            var products = await (from product in db.Products
                                  where product.Name.StartsWith(query)
                                  select new
                                  {
                                      Id = product.Id,
                                      Name = product.Name,
                                      Image = product.ImageUrl,
                                      Price = product.Price,
                                      BrandId = product.BrandId,
                                  }).ToListAsync();
            return Ok(products);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateProduct(int id, [FromForm] Product prodObj)
        {
            var prod = await db.Products.FindAsync(id);
            if (prod == null)
            {
                return NotFound("No product found with this id!");
            }
            prod.Name = prodObj.Name;
            prod.ImageUrl = await FileHelper.UploadImage(prodObj.Image);
            prod.Price = prodObj.Price;
            prod.BrandId = prodObj.BrandId;
            prod.CategoryId = prodObj.CategoryId;
            await db.SaveChangesAsync();
            return Ok("Product updated successfully!");
        }
    }
}
