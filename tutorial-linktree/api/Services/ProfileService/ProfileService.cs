using Microsoft.EntityFrameworkCore;

public class ProfileService : IProfileService
{
    private readonly DataContext _context;

    public ProfileService(DataContext context)
    {
        _context = context;
    }

    public async Task<ServiceResponse<ProfileModel>> GetProfileById(int id)
    {
        try
        {
            var profile = await _context.Profiles.FindAsync(id);
            if (profile == null)
            {
                return new ServiceResponse<ProfileModel>
                {
                    Data = null,
                    Success = false,
                    Message = "No data found with this ID."
                };
            }

            var links = await GetLinksByProfileId(profile.Id);
            var socials = await GetSocialsByProfileId(profile.Id);   
            profile.Links = links;
            profile.Socials = socials;    

            return new ServiceResponse<ProfileModel>
            {
                Data = profile
            };
        }
        catch (System.Exception)
        {
            return new ServiceResponse<ProfileModel>
            {
                Data = null,
                Success = false,
                Message = "No data found with this ID."
            };
        }
    }

    public async Task<List<LinkModel>> GetLinksByProfileId(int id)
    {
        var result = await _context.Links.Where(l => l.ProfileModelId == id).ToListAsync();
        if (result == null)
        {
            throw new Exception();
        }

        return result;
    }

    public async Task<List<SocialModel>> GetSocialsByProfileId(int id)
    {
        var result = await _context.Socials.Where(s => s.ProfileModelId == id).ToListAsync();
        if (result == null)
        {
            throw new Exception();
        }

        return result;
    }
}