using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using KalanchoeAI.Models;

namespace KalanchoeAI.Data
{
    [Keyless]
	public class KalanchoeAIDatabaseContext : DbContext
	{
		public KalanchoeAIDatabaseContext(DbContextOptions<KalanchoeAIDatabaseContext> options)
                : base(options)
		{
        }

		public DbSet<KalanchoeAI.Models.User> User { get; set; } = default;
		//public DbSet<KalanchoeAI.Models.Follower> Follower { get; set; } = default;
        public DbSet<KalanchoeAI.Models.Chat> Chat { get; set; } = default;
        public DbSet<KalanchoeAI.Models.ChatComment> ChatComment { get; set; } = default;
        public DbSet<KalanchoeAI.Models.Post> Post { get; set; } = default;
        public DbSet<KalanchoeAI.Models.Comment> Comment { get; set; } = default;
        public DbSet<KalanchoeAI.Models.Community> Community { get; set; } = default;
        public DbSet<KalanchoeAI.Models.Member> Member { get; set; } = default;
        public DbSet<KalanchoeAI.Models.Channel> Channel { get; set; } = default;
        public DbSet<KalanchoeAI.Models.ChannelComment> ChannelComment { get; set; } = default;
        public DbSet<KalanchoeAI.Models.Message> Message { get; set; } = default;
        public DbSet<KalanchoeAI.Models.Panel> Panel { get; set; } = default;
        public DbSet<KalanchoeAI.Models.Note> Note { get; set; } = default;
    }
}