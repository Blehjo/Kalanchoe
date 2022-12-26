using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Xml.Linq;

namespace KalanchoeAI.Models
{
	public class User
	{
        public int UserId { get; set; }

        public string? Username { get; set; }

        public string? FirstName { get; set; }

        private string? LastName { get; set; }

        private DateTime DateOfBirth { get; set; }

        public EmailAddressAttribute? EmailAddress { get; set; }

        public string? Password { get; set; }

        public string? About { get; set; }

        public string? ProfileImage { get; set; }

        public DateTime Joined { get; set; }

        public virtual ICollection<Chat>? Chats { get; set; }

        public virtual ICollection<Post>? Posts { get; set; }

        public virtual ICollection<Comment>? Comments { get; set; }

        public virtual ICollection<Community>? Communities { get; set; }

        public virtual ICollection<Member>? Members { get; set; }

        public virtual ICollection<Message>? Messages { get; set; }

        public virtual ICollection<Panel>? Panels { get; set; }

        public virtual ICollection<Follower>? Followers { get; set; }
    }
}