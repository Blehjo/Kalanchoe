using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Xml.Linq;

namespace KalanchoeAI.Models
{
	public class Channel
	{
        public int ChannelId { get; set; }

		public int? CommunityId { get; set; }

		public string? Description { get; set; }

		public DateTime DateCreated { get; set; }

		public virtual Community? Community { get; set; }

		public virtual ICollection<ChannelComment>? ChannelComments { get; set; }
	}
}

