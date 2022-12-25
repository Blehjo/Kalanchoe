using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Xml.Linq;

namespace KalanchoeAI.Models
{
	public class User
	{
        public int UserId { get; set; }

        //[Display(Name = "User Name")]
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
    }
}