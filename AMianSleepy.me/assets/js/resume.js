
// =========================================================================
// 简历数据配置 (Resume Configuration)
// 修改此处内容即可实时更新简历
// =========================================================================

export const resumeData = {
  profile: {
    name: "AMianSleepy",
    role: "全栈开发 · .NET & Front-end",
    avatarText: "AS", // 如果有图片URL，可修改渲染逻辑
    location: "China",
    status: "Seeking Internship",
    contact: [
      { type: "Email", value: "Available upon request", icon: "📧" },
      { type: "GitHub", value: "github.com/AMianSleepy", icon: "🐙", link: "https://github.com/AMianSleepy" },
      { type: "Site", value: "amiansleepy.me", icon: "🌐", link: "https://amiansleepy.me" }
    ]
  },
  
  // 核心板块：调整数组顺序即可调整页面显示顺序
  sections: [
    {
      id: "advantage",
      type: "grid",
      title: "个人优势",
      items: [
        { icon: "🚀", title: "快速学习", desc: "掌握新框架只需一周，具备极强的文档阅读与复现能力。" },
        { icon: "💎", title: "追求细节", desc: "不仅仅是功能实现，更在乎代码整洁度与用户交互体验。" },
        { icon: "🔧", title: "全栈思维", desc: "理解前后端边界，能独立完成从数据库到 UI 的完整交付。" },
        { icon: "🤝", title: "团队协作", desc: "熟悉 Git Flow，具备良好的沟通习惯与代码审查经验。" }
      ]
    },
    {
      id: "experience",
      type: "timeline",
      title: "实习经历",
      items: [
        {
          role: "前端开发实习生",
          company: "某知名互联网公司",
          date: "2025.07 - 至今",
          desc: "负责公司内部管理系统的 UI 重构，使用 React + TypeScript 提升了 30% 的页面加载速度。参与制定前端代码规范，推动组件库建设。"
        },
        {
          role: ".NET 后端助理",
          company: "某科技初创企业",
          date: "2024.06 - 2024.09",
          desc: "协助开发基于 ASP.NET Core 的 API 服务，实现了 JWT 认证模块与 Swagger 文档自动化。优化 SQL 查询，降低了特定接口 50% 的响应延迟。"
        }
      ]
    },
    {
      id: "skills",
      type: "skills",
      title: "专业技能",
      items: [
        { name: "TypeScript / JavaScript (ES6+)", level: "90%" },
        { name: "React / Vue.js", level: "85%" },
        { name: "C# / ASP.NET Core", level: "80%" },
        { name: "HTML5 / CSS3 / Tailwind", level: "95%" },
        { name: "SQL / Entity Framework", level: "75%" },
        { name: "Git / CI/CD Actions", level: "70%" }
      ]
    },
    {
      id: "projects",
      type: "projects", // 也可以复用 timeline 或 grid，这里定义一个紧凑列表样式
      title: "项目经历",
      items: [
        {
          title: "个人技术博客系统",
          tech: "Next.js, .NET 8, PostgreSQL",
          desc: "实现了完全的动静分离架构。前端采用 SSR 渲染保证 SEO，后端提供 RESTful API。集成了 Markdown 渲染与评论系统。"
        },
        {
          title: "在线协同文档 (Demo)",
          tech: "Vue 3, WebSocket, Redis",
          desc: "探索 CRDT 算法解决冲突，支持多用户实时编辑同一文档。界面参考 Notion 风格设计。"
        },
        {
          title: "炫酷仪表盘 UI 库",
          tech: "HTML, CSS (Glassmorphism)",
          desc: "一套纯 CSS 实现的玻璃拟态组件库，专注于高性能动画与极致的视觉效果。无 JS 依赖。"
        }
      ]
    }
  ]
};

// =========================================================================
// 渲染逻辑 (Render Logic)
// =========================================================================

function renderProfile(data) {
  const container = document.getElementById("profile-container");
  if (!container) return;

  const contactHtml = data.contact.map(c => `
    <div class="info-item">
      <span>${c.icon}</span>
      ${c.link ? `<a href="${c.link}" target="_blank">${c.value}</a>` : `<span>${c.value}</span>`}
    </div>
  `).join('');

  container.innerHTML = `
    <div class="profile-avatar-wrapper">
      <div class="profile-avatar">${data.avatarText}</div>
    </div>
    <h2 class="profile-name">${data.name}</h2>
    <div class="profile-role">${data.role}</div>
    <div class="info-list">
      <div class="info-item"><span>📍</span><span>${data.location}</span></div>
      <div class="info-item"><span>🟢</span><span>${data.status}</span></div>
      ${contactHtml}
    </div>
    <a href="index.html#contact" class="btn primary" style="width:100%">Get in Touch</a>
  `;
}

function renderSections(sections) {
  const container = document.getElementById("resume-content");
  if (!container) return;

  container.innerHTML = sections.map(section => {
    let contentHtml = '';

    switch (section.type) {
      case 'grid': // 优势网格
        contentHtml = `<div class="advantage-grid">
          ${section.items.map(item => `
            <div class="advantage-card reveal">
              <div class="advantage-icon">${item.icon}</div>
              <h4 style="margin:0 0 8px">${item.title}</h4>
              <p style="font-size:13px;color:var(--muted)">${item.desc}</p>
            </div>
          `).join('')}
        </div>`;
        break;

      case 'timeline': // 实习经历
        contentHtml = `<div class="timeline">
          ${section.items.map(item => `
            <div class="timeline-item reveal">
              <div class="timeline-header">
                <div>
                  <span class="timeline-company">${item.company}</span>
                  <span class="timeline-role">${item.role}</span>
                </div>
                <span class="timeline-date">${item.date}</span>
              </div>
              <p class="timeline-desc">${item.desc}</p>
            </div>
          `).join('')}
        </div>`;
        break;

      case 'skills': // 技能条
        contentHtml = `<div class="skills-list">
          ${section.items.map(item => `
            <div class="skill-group reveal">
              <div class="skill-name">
                <span>${item.name}</span>
                <span>${item.level}</span>
              </div>
              <div class="skill-bar-bg">
                <div class="skill-bar-fill" style="width: ${item.level}"></div> // Style added by observer effectively
              </div>
            </div>
          `).join('')}
        </div>`;
        break;
      
      case 'projects': // 项目列表
        contentHtml = `<div class="project-compact">
          ${section.items.map(item => `
            <div class="project-row reveal">
              <div class="project-row-content">
                <h4>${item.title}</h4>
                <div class="tag-row" style="margin-bottom:8px">
                  ${item.tech.split(',').map(t => `<span class="tag">${t.trim()}</span>`).join('')}
                </div>
                <p style="font-size:14px;color:var(--muted)">${item.desc}</p>
              </div>
            </div>
          `).join('')}
        </div>`;
        break;
    }

    return `
      <section class="resume-section" id="${section.id}">
        <h3 class="resume-section-title">${section.title}</h3>
        ${contentHtml}
      </section>
    `;
  }).join('');
}

// Init
import { initScrollReveal } from './main.js';

document.addEventListener('DOMContentLoaded', () => {
  renderProfile(resumeData.profile);
  renderSections(resumeData.sections);
  
  // Delay scroll reveal slightly to allow DOM injection
  setTimeout(() => {
    initScrollReveal();
  }, 100);
});
