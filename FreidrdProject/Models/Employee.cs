using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace FreidrdProject.Models
{
	public enum Department
	{
		Tradesmen, Management, Admin, Marketing, HR
	}
	public class Employee
	{
		[Key]
		public int EmployeeID { get; set; }

		[Required]
		public string FirstName { get; set; }

		[Required]
		public string LastName { get; set; }

		[Required]
		public string Position { get; set; }

		[Required]
		public Department Department { get; set; }

		public double Salary { get; set; }

		public DateTime DateJoined { get; set; }
		public DateTime LastUpdated { get; set; }
	}
}
