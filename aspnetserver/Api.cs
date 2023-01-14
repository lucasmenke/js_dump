using aspnetserver.Data;

namespace aspnetserver;

internal static class Api
{
    public static void ConfigureApi(this WebApplication app)
    {
        app.MapGet("/get-all-posts", async () => await PostsRepository.GetPostsAsync()).WithTags("Posts Endpoints");

        app.MapGet("/get-post-by-id/{postId}", async (int postId) =>
        {
            Post post = await PostsRepository.GetPostByIdAsync(postId);

            if (post != null)
            {
                return Results.Ok(post);
            }

            return Results.BadRequest();
        }).WithTags("Posts Endpoints");

        app.MapPost("/create-post/", async (Post post) =>
        {
            bool success = await PostsRepository.CreatePostAsync(post);

            if (success)
            {
                return Results.Ok("Create successful.");
            }

            return Results.BadRequest();
        }).WithTags("Posts Endpoints");

        app.MapPut("/update-post/", async (Post post) =>
        {
            bool success = await PostsRepository.UpdatePostAsync(post);

            if (success)
            {
                return Results.Ok("Update successful.");
            }

            return Results.BadRequest();
        }).WithTags("Posts Endpoints");

        app.MapDelete("/delete-post-by-id/{postId}", async (int postId) =>
        {
            bool success = await PostsRepository.DeletePostAsync(postId);

            if (success)
            {
                return Results.Ok("Delete successful.");
            }

            return Results.BadRequest();
        }).WithTags("Posts Endpoints");
    }
}