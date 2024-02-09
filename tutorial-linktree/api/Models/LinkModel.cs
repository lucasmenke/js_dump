namespace api.Models;

public class LinkModel
{
    public int Id { get; set; }
    public int ProfileModelId { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Url { get; set; } = string.Empty;
}