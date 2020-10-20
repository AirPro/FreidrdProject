using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace FreidrdProject.Models
{
	public class RFreidConstDbContext : DbContext
	{
		public RFreidConstDbContext(DbContextOptions<RFreidConstDbContext> options) : base(options)
		{

		}

		public DbSet<Employee> Employees { get; set; }
	}
}
