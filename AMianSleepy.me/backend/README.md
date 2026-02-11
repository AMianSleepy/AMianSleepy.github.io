# Backend（可选）

这是一个用于承接前端联系表单的 ASP.NET Core Minimal API 骨架。前端会尝试向 `/api/contact` POST；如果后端不可用，则自动退化为 `mailto:`。

## 运行

在仓库根目录执行：

- `dotnet run --project backend/PersonalSite.Api`

然后访问：

- `http://localhost:5000/health`
- `http://localhost:5000/swagger`

## 下一步扩展建议

- 增加 `IEmailSender`（SMTP/SendGrid），将联系信息发送到邮箱
- 增加速率限制、防滥用、验证码
- 加入持久化（SQLite/Postgres）与队列（如 Azure Service Bus）
- 将站点内容（项目/文章）改为 API 驱动返回 JSON
