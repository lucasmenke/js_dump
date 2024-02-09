namespace api.Models;

public class SocialModel
{
    public int Id { get; set; }
    public int ProfileModelId { get; set; }
    public string Platform { get; set; } = string.Empty;
    public string Url { get; set; } = string.Empty;
}