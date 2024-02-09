using Microsoft.EntityFrameworkCore;

namespace api.Data;

public class DataContext : DbContext
{
    public DataContext(DbContextOptions<DataContext> options) : base(options) { }

    public DbSet<ProfileModel> Profiles => Set<ProfileModel>();
    public DbSet<LinkModel> Links => Set<LinkModel>();
    public DbSet<SocialModel> Socials => Set<SocialModel>();
}