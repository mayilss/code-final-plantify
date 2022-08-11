using Microsoft.AspNetCore.Http;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PlantifyAPI.Models.Entities
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime CreatedDate { get; set; }
        public string StockKeepingUnit { get; set; }
        public string Price { get; set; }
        [NotMapped]
        public IFormFile Image { get; set; }
        public string ImageUrl { get; set; }
        public int BrandId { get; set; }
        public virtual Brand Brand { get; set; } 
        public int CategoryId { get; set; }
        public virtual Category Category { get; set; }

    }
}
