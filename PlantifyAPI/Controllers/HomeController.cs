using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PlantifyAPI.Data;
using System.Threading.Tasks;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using PlantifyAPI.Models.Entities;
using PlantifyAPI.Helpers;

namespace PlantifyAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        private readonly PlantifyDbContext db;

        public HomeController(PlantifyDbContext db)
        {
            this.db = db;
        }
        [HttpGet("[action]")]
        public async Task<IActionResult> BannerSlider()
        {
            var items = await (from item in db.BannerSliderItems
                               select new
                               {
                                   Id = item.Id,
                                   Content = item.Content,
                                   Image = item.ImageUrl,
                               }).ToListAsync();
            return Ok(items);
        }
        [HttpPost("[action]")]
        public async Task<IActionResult> BannerSlider([FromForm] BannerSliderItem item)
        {
            var imageUrl = await FileHelper.UploadImage(item.Image);
            item.ImageUrl = imageUrl;
            await db.BannerSliderItems.AddAsync(item);
            await db.SaveChangesAsync();
            return StatusCode(StatusCodes.Status201Created);
        }
        [HttpPut("[action]/{id}")]
        public async Task<IActionResult> BannerSlider(int id, [FromForm] BannerSliderItem itemObj)
        {
            var item = await db.BannerSliderItems.FindAsync(id);
            if (item == null)
            {
                return NotFound("No item found with this id!");
            }
            item.Content = itemObj.Content;
            item.ImageUrl = await FileHelper.UploadImage(itemObj.Image);
            await db.SaveChangesAsync();
            return Ok("Banner Slider Item updated successfully!");
        }
        [HttpDelete("[action]/{id}")]
        public async Task<IActionResult> BannerSlider(int id)
        {
            var item = await db.BannerSliderItems.FindAsync(id);
            if (item == null)
            {
                return NotFound("No item found with this id!");
            }
            db.BannerSliderItems.Remove(item);
            await db.SaveChangesAsync();
            return Ok("Banner removed successfully!");
        }

        [HttpGet("[action]")]
        public async Task<IActionResult> BottomBanner()
        {
            var items = await (from item in db.BottomBanners
                               select new
                               {
                                   Id = item.Id,
                                   Content = item.Content,
                                   Image = item.ImageUrl,
                               }).ToListAsync();
            return Ok(items);
        }
        [HttpPost("[action]")]
        public async Task<IActionResult> BottomBanner([FromForm] BottomBanner item)
        {
            var imageUrl = await FileHelper.UploadImage(item.Image);
            item.ImageUrl = imageUrl;
            await db.BottomBanners.AddAsync(item);
            await db.SaveChangesAsync();
            return StatusCode(StatusCodes.Status201Created);
        }
        [HttpPut("[action]/{id}")]
        public async Task<IActionResult> BottomBanner(int id, [FromForm] BottomBanner itemObj)
        {
            var item = await db.BottomBanners.FindAsync(id);
            if (item == null)
            {
                return NotFound("No item found with this id!");
            }
            item.Content = itemObj.Content;
            item.ImageUrl = await FileHelper.UploadImage(itemObj.Image);
            await db.SaveChangesAsync();
            return Ok("Item updated successfully!");
        }
        [HttpDelete("[action]/{id}")]
        public async Task<IActionResult> BottomBanner(int id)
        {
            var item = await db.BottomBanners.FindAsync(id);
            if (item == null)
            {
                return NotFound("No item found with this id!");
            }
            db.BottomBanners.Remove(item);
            await db.SaveChangesAsync();
            return Ok("Banner removed successfully!");
        }
    }
}
