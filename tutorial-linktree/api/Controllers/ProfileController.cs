using Microsoft.AspNetCore.Mvc;

namespace api.Controllers;

[Route("api/[controller]")]
[ApiController]
public class ProfileController : ControllerBase
{
    private readonly IProfileService _profileService;

    public ProfileController(IProfileService profileService)
    {
        _profileService = profileService;
    }
    
    [HttpGet]
    public async Task<ActionResult<ServiceResponse<ProfileModel>>> GetProfileById(int id)
    {
        return await _profileService.GetProfileById(id);       
    }
}
