using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Permissions;
using System.Threading.Tasks;

namespace PBookAPI.Models
{
    public class PhoneBookDetailContext : DbContext
    {
        //Constructor
        public PhoneBookDetailContext(DbContextOptions<PhoneBookDetailContext> options) : base(options)
        {

        }
        public DbSet<Entry> Entries { get; set; }

    }
}
