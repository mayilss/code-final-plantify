using Microsoft.AspNetCore.Http;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace AutoWebApi.Models
{
    public class Car
    {
        public int Id { get; set; }
        public DateTime CreatedDate { get; set; }
        public int ManufacturerId { get; set; }
        public virtual Manufacturer Manufacturer { get; set; }
        public int ModelId { get; set; }
        public virtual Model Model { get; set; }
        public int BodyStyleId { get; set; }
        public virtual BodyStyle BodyStyle { get; set; }
        public int ColorId { get; set; }
        public virtual Color Color { get; set; }
        public int FuelTypeId { get; set; }
        public virtual FuelType FuelType { get; set; }
        public int DrivetrainId { get; set; }
        public virtual Drivetrain Drivetrain { get; set; }
        public int GearBoxId { get; set; }
        public virtual GearBox GearBox { get; set; }
        public string ImageUrl { get; set; }
        [NotMapped]
        public IFormFile Image { get; set; }
        public int Price { get; set; }
        public double Engine { get; set; }
        public int Mileage { get; set; }
    }
}
