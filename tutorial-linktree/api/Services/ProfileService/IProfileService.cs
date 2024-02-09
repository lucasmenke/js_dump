namespace api.Services.ProfileService;

public interface IProfileService
{
    Task<ServiceResponse<ProfileModel>> GetProfileById(int id);
    Task<List<LinkModel>> GetLinksByProfileId(int id);
    Task<List<SocialModel>> GetSocialsByProfileId(int id);
}