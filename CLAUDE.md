# 美团外卖 - 江苏大学版

## 项目概述
模仿美团外卖的单页面点餐应用，面向江苏大学学生，商家数据基于江大周边真实餐厅（东风步行街/后街）。

## 技术栈
- **纯静态**: HTML + Tailwind CSS CDN + 原生 JS（零依赖，无构建工具）
- **数据存储**: localStorage（购物车/订单/地址/优惠券/个人资料）
- **图标**: Font Awesome 6 CDN
- **图片**: Unsplash CDN（食物图片）
- **部署**: GitHub Pages → https://michael-zacharie.github.io/-meituan-app/

## 项目结构
```
meituan-app/
├── index.html      # 主文件（所有页面/弹窗/JS代码都在这里，约650行）
├── app.js          # 旧版（已废弃，保留作参考）
├── meituan.html    # 旧版（已废弃）
├── CLAUDE.md       # 本文件
└── .claude/
    └── settings.json
```

## 代码风格
- 单文件架构，所有HTML页面用 `.page` div 切换显示/隐藏
- JS代码使用 `var` 声明（兼容性优先）
- 函数命名: `render*` 渲染页面, `show*` 显示弹窗, `toggle*` 切换状态
- 状态管理: `state` 全局对象，含 `currentPage`, `cart`, `orders`, `filters` 等
- 数据层: `restaurants` 数组（8个商家），`allItems` 索引

## 页面结构
1. `page-home` — 首页（地址栏、搜索、筛选、分类、优惠券横幅、推荐、商家列表）
2. `page-restaurant` — 商家详情（头图、菜单分类tab、菜品列表、浮动购物车栏）
3. `page-checkout` — 结算页（地址确认、订单明细、优惠券选择、备注）
4. `page-tracking` — 订单追踪（骑手信息、状态时间线）
5. `page-orders` — 订单列表
6. `page-coupons` — 优惠券中心
7. `page-profile` — 个人中心

## 8个商家数据
爱辣啵啵鱼、超越火锅鸡、1点点(江大店)、重庆酸菜鱼、小春鹤(日料)、阿兴哥烧烤、徐州鸡蛋灌饼、湖南菜馆

## 关键规则
- 改代码前不要问"要不要备份"，直接改
- 不要加调试日志
- 保持代码简洁，不写多余注释
- 改完代码后提醒用户刷新浏览器查看效果
