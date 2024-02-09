namespace api.Models;

public class ProfileModel
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string UserName { get; set; } = string.Empty;
    public string ProfilePictureUrl { get; set; } = string.Empty;
    public List<LinkModel> Links { get; set; } = new();
    public List<SocialModel> Socials { get; set; } = new();
}