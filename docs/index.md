---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  # 预计简短，例如产品名称
  name: "查漏补缺, 方得始终"
  # 被定义为 `h1` 标签
  text: "fix & enhance"
  tagline: The unexamined life is not worth living.
  image: 
    src: /public/logo.png
    alt: logo
  actions:
    - theme: brand
      text: 快速开始
      link: /front/index.md
    - theme: alt
      text: Markdown 语法
      link: https://markdown.com.cn/basic-syntax/
    - theme: alt
      text: VitePress 文档
      link: https://vitepress.dev/zh/reference/site-config

features:
  - icon: 📖
    title: 阅读清单
    details: Knowledge is power
    link: /books/index.md
    # linkText: 快速开始
  - title: TODO
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: TODO
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit

# 禁用页脚
footer: false

---

## Getting Started

You can get started using VitePress right away using `npx`!

```sh
npm init
npx vitepress init
```
