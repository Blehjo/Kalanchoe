using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Xml.Linq;

namespace KalanchoeAI.Models
{
	public class Community
	{
		public int Id { get; set; }

		public int? UserId { get; set; }

		public string? GroupName { get; set; }

		public string? Description { get; set; }
	}
}

