using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Xml.Linq;

namespace KalanchoeAI.Models
{
	public class ChatComment
	{
		public int Id { get; set; }

		public int? ChatId { get; set; }

		public string? ChatValue { get; set; }

		public DateTime TimePosted { get; set; }

		public virtual Chat? Chat { get; set; }
	}
}

