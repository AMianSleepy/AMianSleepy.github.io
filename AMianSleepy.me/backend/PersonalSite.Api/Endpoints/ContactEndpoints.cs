using Microsoft.AspNetCore.Http.HttpResults;
using PersonalSite.Api.Models;

namespace PersonalSite.Api.Endpoints;

public static class ContactEndpoints
{
    public static IEndpointRouteBuilder MapContactEndpoints(this IEndpointRouteBuilder app)
    {
        app.MapPost("/api/contact", Handle)
           .WithName("Contact")
           .WithTags("Contact")
           .Accepts<ContactRequest>("application/json")
           .Produces(StatusCodes.Status202Accepted)
           .ProducesValidationProblem();

        return app;
    }

    private static Results<Accepted, ValidationProblem> Handle(ContactRequest request)
    {
        if (string.IsNullOrWhiteSpace(request.Name) ||
            string.IsNullOrWhiteSpace(request.Email) ||
            string.IsNullOrWhiteSpace(request.Message))
        {
            return TypedResults.ValidationProblem(new Dictionary<string, string[]>
            {
                ["name"] = string.IsNullOrWhiteSpace(request.Name) ? ["Required"] : [],
                ["email"] = string.IsNullOrWhiteSpace(request.Email) ? ["Required"] : [],
                ["message"] = string.IsNullOrWhiteSpace(request.Message) ? ["Required"] : []
            });
        }

        // 这里先返回 202 作为“已接收”。未来可以：
        // - 写入数据库（投递队列）
        // - 调用邮件服务（SendGrid/SMTP）
        // - 增加速率限制、防滥用、验证码
        return TypedResults.Accepted();
    }
}
