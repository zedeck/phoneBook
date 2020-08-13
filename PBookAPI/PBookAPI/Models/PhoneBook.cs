using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PBookAPI.Models
{

    public class PhoneBook
    {
        [Key]
        public int Id { get; set; }
        
        public IEnumerable<Entry> Entries { get; set; }    
    }
}
