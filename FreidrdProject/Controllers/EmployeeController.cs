using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FreidrdProject.Models;
using Microsoft.AspNetCore.Mvc;

namespace FreidrdProject.Controllers
{
	public class EmployeeController : Controller
	{
		private readonly RFreidConstDbContext _db;

		public EmployeeController(RFreidConstDbContext db)
		{
			_db = db;
		}
		public IActionResult Index()
		{
			return View();
		}
	}
}
