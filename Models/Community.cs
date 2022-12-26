using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Xml.Linq;

namespace KalanchoeAI.Models
{
	public class Community
	{
        public int CommunityId { get; set; }

		public int? UserId { get; set; }

		public string? GroupName { get; set; }

		public string? Description { get; set; }

		public DateTime DateCreated { get; set; }

		public virtual User? User { get; set; }

		public virtual ICollection<Member>? Members { get; set; }

		public virtual ICollection<Channel>? Channels { get; set; }
	}
}

