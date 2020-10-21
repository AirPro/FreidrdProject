using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FreidrdProject.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FreidrdProject.Controllers
{
	public class EmployeeController : Controller
	{
		private readonly RFreidConstDbContext _db;

		public EmployeeController(RFreidConstDbContext db)
		{
			_db = db;
		}
		[HttpGet("employee")]
		public IActionResult Index()
		{
			return View("~/Views/Employee/Index.cshtml");
		}

		
		[HttpGet("employee/table-data-view")]
		public async Task<IActionResult> GetAllEmployees()
		{
			try
			{
				var data = await _db.Employees.ToListAsync();
				ViewData["EmployeeList"] = data;
				return PartialView("~/Views/Employee/_TableData.cshtml");
			}
			catch (Exception ex)
			{
				Console.WriteLine(ex.Message);
				return null;
			}
		}

		[HttpGet("employee/add")]
		public IActionResult AddEmployeeForm()
		{ try 
			{ ViewData["Title"] = "Add New Employee"; 
				ViewData["Employee"] = new Employee(); 
				return PartialView("~/Views/Employee/_AddForm.cshtml"); 
			} catch (Exception ex) { 
				Console.WriteLine(ex.Message); 
				return null; 
			} 
		}

		[HttpPost("employee/save")] 
		public IActionResult SaveEmployee(Employee employee) 
		{ try 
			{ _db.Employees.Add(employee); 
				_db.SaveChanges(); 
				return Json(new { success = true, message = "Saved Successfully" }); 
			} catch (Exception ex) { 
				Console.WriteLine(ex.Message); 
				return Json(new { success = false, message = "Error while saving" }); 
			} 
		}
	}
}
