using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Xml.Linq;

namespace KalanchoeAI.Models
{
	public class Note
	{
        public int NoteId { get; set; }

		public int? PanelId { get; set; }

		public string? NoteValue { get; set; }

		public DateTime DateAdded { get; set; }

		public virtual Panel? Panel { get; set; }
	}
}

