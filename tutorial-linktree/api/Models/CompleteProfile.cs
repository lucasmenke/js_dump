namespace api.Models;

public class CompleteProfile
{
    public ProfileModel Profile { get; set; } = new();
    public List<LinkModel> Links { get; set; } = new();
    public List<SocialModel> Socials { get; set; } = new();
}