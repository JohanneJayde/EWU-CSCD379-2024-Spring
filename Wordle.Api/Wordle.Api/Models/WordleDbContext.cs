﻿using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Wordle.Api.Models
{
  
    public class WordleDbContext : IdentityDbContext<AppUser>
    {
        public DbSet<WordOfTheDay> WordsOfTheDays { get; set; }
        public DbSet<Game> Games { get; set; }
        public DbSet<Word> Words { get; set; }
        
        public WordleDbContext(DbContextOptions<WordleDbContext> options)
            : base(options)
        {
        }

        // Make sure the identity db ocntext on model creating is called
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }
    }
}
