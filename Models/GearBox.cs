using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace AutoWebApi.Models
{
    public class GearBox
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public ICollection<Car> Cars { get; set; }
    }
}
