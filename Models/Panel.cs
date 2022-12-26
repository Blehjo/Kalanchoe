using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Xml.Linq;

namespace KalanchoeAI.Models
{
	public class Panel
	{
        public int PanelId { get; set; }

		public int? UserId { get; set; }

		public string? Title { get; set; }

		public DateTime DateCreated { get; set; }

		public virtual User? User { get; set; }

		public virtual ICollection<Note>? Notes { get; set; }
	}
}

