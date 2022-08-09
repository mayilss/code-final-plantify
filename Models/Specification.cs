using System.ComponentModel.DataAnnotations;

namespace AutoWebApi.Models
{
    public class Specification
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
    }
}
