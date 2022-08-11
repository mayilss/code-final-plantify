using Microsoft.AspNetCore.Http;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace PlantifyAPI.Models.Entities
{
    public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; }
        [NotMapped]
        public IFormFile Image { get; set; }
        public string ImageUrl { get; set; }
        public ICollection<Product> Products { get; set; }
    }
}
