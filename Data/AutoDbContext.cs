using AutoWebApi.Models;
using Microsoft.EntityFrameworkCore;

namespace AutoWebApi.Data
{
    public class AutoDbContext : DbContext
    {
            public AutoDbContext(DbContextOptions<AutoDbContext> options)
                : base(options)
            {

            }
            public DbSet<BodyStyle> BodyStyles { get; set; }
            public DbSet<Car> Cars { get; set; }
            public DbSet<Color> Colors { get; set; }
            public DbSet<Drivetrain> Drivetrains { get; set; }
            public DbSet<FuelType> FuelTypes { get; set; }
            public DbSet<GearBox> GearBoxes { get; set; }
            public DbSet<Manufacturer> Manufacturers { get; set; }
            public DbSet<Model> Models{ get; set; }
        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    base.OnModelCreating(modelBuilder);
        //    modelBuilder.Entity<Car>(e =>
        //    {
        //        e.HasKey(k => new { k.ManufacturerId, k.ModelId });
        //    });
        //}
    }
}
