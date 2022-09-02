using Microsoft.AspNetCore.Http;
using System.ComponentModel.DataAnnotations.Schema;

namespace PlantifyAPI.Models.Entities
{
    public class BottomBanner
    {
            public int Id { get; set; }
            public string Content { get; set; }
            [NotMapped]
            public IFormFile Image { get; set; }
            public string ImageUrl { get; set; }
    }
}
