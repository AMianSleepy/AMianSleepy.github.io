# AMianSleepy.github.io

个人主页（静态优先），使用纯 HTML/CSS/TypeScript（无前端框架）。目前可直接作为 GitHub Pages 展示页；需要动态能力时，可接入 `backend/` 下的 ASP.NET Core Minimal API。

## 前端开发

本仓库已经包含可直接运行的 `assets/js/main.js`（用于 GitHub Pages）。

如果你希望使用 TypeScript 严格类型进行开发：

1. 安装依赖
	- `npm i`
2. 编译
	- `npm run build`
3. 本地预览
	- 用任意静态服务器打开（例如 VS Code Live Server），或直接打开 `index.html`（部分 fetch 行为会受浏览器限制）

TypeScript 源码在：`assets/ts/main.ts`

## 后端（可选）

见 [backend/README.md](backend/README.md)