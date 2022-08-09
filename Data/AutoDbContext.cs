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
            public DbSet<Specification> Specifications { get; set; }

    }
}
