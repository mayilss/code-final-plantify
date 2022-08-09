using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace AutoWebApi.Models
{
    public class Model
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public int ManufacturerId { get; set; }
        public ICollection<Car> Cars { get; set; }
    }
}
