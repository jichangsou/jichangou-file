---
title: "Clash / Sing-box 客户端基础订阅导入与配置指南"
description: "新手零基础教程：详细讲解 Clash Verge Rev、Stash、Sing-box 等通用客户端订阅链接导入、规则分流设置与 TUN 模式开启。"
pubDate: 2026-08-19
author: "极速测评编辑部"
tags: ["客户端教程", "Clash", "Sing-box", "新手指南"]
heroImage: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80"
---

## 前言与工具准备

在挑选好优质的网络节点服务后，选择一款稳定、高效的代理客户端是确保极致体验的关键。目前主流的协议客户端涵盖 **Clash Verge Rev**（Windows/macOS）、**Sing-box**（全平台跨时代核心）、**Stash**（iOS/macOS）以及 **Shadowrocket**（小火箭）。

无论你使用的是哪种客户端，基础操作的核心逻辑都是：**获取服务商订阅 URL ➔ 导入客户端 ➔ 选择分流规则 ➔ 开启系统代理/TUN 模式**。

---

## 常用主流客户端对比

| 客户端名称 | 支持平台 | 核心特色 | 推荐人群 |
| :--- | :--- | :--- | :--- |
| **Clash Verge Rev** | Windows / macOS / Linux | 开源免费、现代化 UI、支持 Mihomo 核心 | 桌面端首选 ⭐⭐⭐⭐⭐ |
| **Sing-box** | 全平台 (iOS/Android/Mac/Win) | 极轻量、原生支持 Hysteria 2 / VLESS / TUIC | 跨平台技术爱好者 ⭐⭐⭐⭐⭐ |
| **Stash** | iOS / macOS | 界面精美、规则重写强大、支持策略组 | iPhone / iPad 最佳付费体验 |
| **Shadowrocket** | iOS | 经典老牌小火箭、扫码即用 | iOS 入门首选 |

---

## 步骤一：获取订阅链接

1. 登录你所使用的节点服务商后台；
2. 在用户中心仪表盘找到 **“一键订阅”** 或 **“复制订阅地址”** 按钮；
3. 推荐优先复制 `Clash 格式` 或 `Sing-box 统一格式` 订阅链接。

> ⚠️ **安全特别提醒**：订阅链接相当于你的账号密钥，请妥善保管，切勿在公开论坛或代码仓库中泄露！

---

## 步骤二：Clash Verge Rev 导入配置 (Windows / macOS)

### 1. 粘贴订阅链接
打开 Clash Verge Rev 客户端，点击左侧菜单栏的 **`配置 (Profiles)`** 页面：
- 在上方输入框中粘贴你的订阅链接；
- 点击右侧的 **`导入 (Import)`** 按钮；
- 成功下载配置文件后，单击选中该配置卡片（使其出现蓝色激活边框）。

```yaml
# Clash 典型分流规则配置示意
mode: rule
ipv6: false
log-level: info
external-controller: 127.0.0.1:9090
```

### 2. 开启系统代理与 TUN 模式
切换到左侧 **`代理 (Proxies)`** 页面：
- **节点选择**：建议选择 `规则模式 (Rule)`，根据需求选择 `香港 IPLC`（低延迟）或 `美国`（适合 AI 工具）；
- **切换开关**：打开 **`系统代理 (System Proxy)`** 开关；
- **TUN 虚拟网卡**（可选）：如需给全局游戏、命令行或终端软件加速，可一键开启 `TUN 模式`。

---

## 步骤三：Sing-box 跨平台订阅配置指南

**Sing-box** 作为新一代全栈网络协议核心，天然支持最新版的 Hysteria 2 与 VLESS 协议。

1. 打开 Sing-box 客户端，进入 **`Profiles`** 标签页；
2. 点击 **`Add New`** ➔ 选择 **`Type: Remote`**；
3. 填入 profile 名称与 `Sing-box 订阅链接`；
4. 点击右上角 **`Create`** 完成同步；
5. 返回 Dashboard，开启 **`Enable Service`** 即可开启极速网络体验！

---

## 常见问题诊断与排查 (FAQ)

### Q1: 导入订阅时提示 `Download Profile Failed`？
- **排查方法**：检查当前网络是否直连受限。可先尝试关闭防火墙或更换为手机热点后再尝试重新点击导入。

### Q2: 访问 ChatGPT 提示 `Access Denied` 或 1020 报错？
- **排查方法**：ChatGPT 对 IP 住宅属性与环境要求极高。请在客户端节点列表中切换为标有 `原生住宅 IP` 或 `AI 独享` 的香港/新加坡/美国专线节点。

---

## 总结

配置好的客户端配合高质量的 IPLC 专线节点，可以实现全天候无感的访问体验。更多关于节点延迟压测与流媒体解锁细节，欢迎阅读本站其他深度测评文章！
