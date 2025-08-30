# Web游戏平台

这是一个简单的Web游戏平台，提供用户注册和登录功能。

## 项目结构

```
webgame_repo/
├── .gitignore              # Git忽略文件配置
├── README.md               # 项目说明文档
├── index.html              # 首页
├── register.html           # 注册页面
├── login.html              # 登录页面
├── style.css               # 全局样式文件
└── lightgame/              # 游戏相关文件夹
    ├── lightgame.css
    └── lightgame.html
```

## 功能特点

1. **用户注册**
   - 创建新用户账号
   - 表单验证（用户名、邮箱、密码）
   - 存储用户信息到浏览器的localStorage

2. **用户登录**
   - 通过用户名或邮箱登录
   - 验证用户凭据
   - 登录状态保持

3. **响应式设计**
   - 适配桌面和移动设备

## 如何运行

这个项目是纯前端项目，不需要后端服务器。您可以通过以下方式运行：

1. 直接打开`index.html`文件在浏览器中运行
2. 使用任何静态文件服务器托管项目

例如，使用Python的http.server：

```bash
cd webgame_repo
python -m http.server
```

然后在浏览器中访问 http://localhost:8000

## 技术栈

- HTML5
- CSS3
- JavaScript
- 使用localStorage进行数据存储

## 注意事项

- 这个项目是纯前端实现，所有用户数据存储在浏览器的localStorage中，不适合生产环境使用
- 在实际生产环境中，应该使用后端服务器存储用户数据，并对密码进行加密处理
- 目前的"忘记密码"功能只是一个占位符，尚未实现完整功能

## 后续开发计划

1. 添加更多游戏到平台
2. 实现用户个人资料管理
3. 添加游戏分数排行榜
4. 实现后端API和数据库存储

## 贡献

欢迎提出改进建议和功能请求。