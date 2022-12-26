using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Xml.Linq;

namespace KalanchoeAI.Models
{
	public class ChannelComment
	{
        public int ChannelCommentId { get; set; }

		public int? ChannelId { get; set; }

		public int? UserId { get; set; }

		public string? ChannelCommentValue { get; set; }

		public virtual Channel? Channel { get; set; }
	}
}

