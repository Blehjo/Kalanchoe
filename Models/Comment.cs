using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Xml.Linq;

namespace KalanchoeAI.Models
{
	public class Comment
	{
        public int CommentId { get; set; }

		public int? UserId { get; set; }

		public int? PostId { get; set; }

		public string? CommentValue { get; set; }

		public DateTime DatePosted { get; set; }

		public virtual User? User { get; set; }

		public virtual Post? Post { get; set; }
	}
}

