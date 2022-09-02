using Microsoft.EntityFrameworkCore;
using PlantifyAPI.Models.Entities;

namespace PlantifyAPI.Data
{
    public class PlantifyDbContext : DbContext
    {
        public PlantifyDbContext(DbContextOptions<PlantifyDbContext> options)
            : base(options)
        {

        }
        public DbSet<Product> Products { get; set; }
        public DbSet<Brand> Brands { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<BannerSliderItem> BannerSliderItems { get; set; }
        public DbSet<BottomBanner> BottomBanners { get; set; }

    }
}
