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
        public int ModelId { get; set; }
        public int BodyStyleId { get; set; }
        public int ColorId { get; set; }
        public int FuelTypeId { get; set; }
        public int DrivetrainId { get; set; }
        public int GearBoxId { get; set; }
        public ICollection<Specification> Specifications { get; set; }
        public string ImageUrl { get; set; }
        [NotMapped]
        public IFormFile Image { get; set; }
        public int Price { get; set; }
    }
}
