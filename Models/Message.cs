using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Xml.Linq;

namespace KalanchoeAI.Models
{
	public class Message
	{
        public int MessageId { get; set; }

		public int? UserId { get; set; }

		public string? MessageValue { get; set; }

		public DateTime DatePosted { get; set; }

		public virtual User? User { get; set; }
	}
}

