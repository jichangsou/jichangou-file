import fs from 'fs';

const articleContent = `# Clash 终极指南：从原理剖析到多平台安装配置全景深度解析

## 导言与文章目录

网络加速与科学上网技术日新月异，在众多的代理工具中，Clash 凭借其强大的规则分流引擎、极高的自定义程度以及丰富的图形界面生态，成为了无数技术爱好者与普通用户的首选。

本指南将从 Clash 的底层逻辑、核心原理讲起，逐步深入到 Windows、macOS、Android、iOS 以及 Linux 等全平台的安装与配置细节，并提供高阶规则编写与疑难排解方案。

### 目录

- **第一章**：Clash 是什么？深度技术原理拆解
- **第二章**：Clash 的核心架构与配置文件详解
- **第三章**：Windows 平台安装与配置（Clash Verge / Clash for Windows）
- **第四章**：macOS 平台安装与配置（Clash Verge / ClashX）
- **第五章**：Android 平台安装与配置（Clash Meta for Android）
- **第六章**：iOS 平台替代方案（Shadowrocket / Stash）
- **第七章**：Linux 与路由器部署（Docker & OpenWrt 旁路由）
- **第八章**：高阶玩法：自定义分流规则与 DNS 防污染
- **第九章**：常见故障排查与 FAQ

---

## 第一章：Clash 是什么？深度技术原理拆解

### 1.1 什么是 Clash？
Clash 是一个基于 Go 语言开发的基于规则的跨平台代理核心（Proxy Core）。需要特别明确的是，Clash 本身并不是一个可以直接提供翻墙服务的软件，也不是一个集成了节点的“加速器”，而是一个规则引擎与协议转发工具。

### 1.2 代理工具的发展演变
- **第一代：全局代理（如传统 VPN）**  
  所有网络流量均经过远端服务器。缺点是访问国内网站变慢、消耗代理流量、容易引发安全告警。

- **第二代：PAC 静态分流（如 early Shadowsocks）**  
  通过预设的域名列表（PAC 文件）区分内外网。缺点是规则难以动态更新，且无法处理复杂的多线路分流需求。

- **第三代：基于规则的动态分流引擎（如 Clash, Surge）**  
  支持根据 IP、域名、进程、GeoIP 数据等维度进行精准流量导向，支持多节点负载均衡、自动延迟测试与故障转移。

### 1.3 Clash 的工作原理与流量生命周期
当你在浏览器输入一个网址（如 www.google.com）时，Clash 的流量处理流程如下：

1. **流量拦截**：通过系统代理（System Proxy）或 TUN/TAP 虚拟网卡接管本机的网络请求。
2. **DNS 解析（Clash 内置 DNS）**：Clash 拦截 DNS 请求，防止 DNS 污染（DNS Poisoning），并通过 Fake-IP 或 Redir-Host 模式解析域名。
3. **规则匹配（Rules Engine）**：Clash 拿着目标域名/IP 去匹配配置文件中的 rules 列表（由上至下匹配）。
4. **出站选择（Proxy Groups）**：匹配到规则后，将请求导向指定的代理组（如“节点选择”、“自动切换”或“直连”）。
5. **协议封装与传输**：Clash 将流量使用指定协议（Vmess, Trojan, Shadowsocks, Hysteria2 等）加密打包，发送至远端服务器。

---

## 第二章：Clash 的核心架构与配置文件详解

Clash 的强悍之处在于其极为灵活的 \`config.yaml\` 配置文件。

### 2.1 核心配置模块解析
一份标准的 Clash 配置文件由以下五大核心板块组成：

\`\`\`yaml
# 1. 基础运行参数
port: 7890
socks-port: 7891
allow-lan: true
mode: rule
log-level: info

# 2. DNS 配置（防止 DNS 污染的核心）
dns:
  enable: true
  enhanced-mode: fake-ip
  nameserver:
    - 119.29.29.29
    - 223.5.5.5

# 3. 节点定义 (Proxies)
proxies:
  - name: "香港 01 节点"
    type: ss
    server: hk.example.com
    port: 443
    cipher: aes-128-gcm
    password: "your_password"

# 4. 代理组 (Proxy Groups)
proxy-groups:
  - name: "节点选择"
    type: select
    proxies:
      - "香港 01 节点"
      - "自动选择"
  - name: "自动选择"
    type: url-test
    url: http://www.gstatic.com/generate_204
    interval: 300
    proxies:
      - "香港 01 节点"

# 5. 分流规则 (Rules)
rules:
  - DOMAIN-SUFFIX,google.com,节点选择
  - DOMAIN-KEYWORD,youtube,节点选择
  - GEOIP,CN,DIRECT
  - MATCH,FINAL
\`\`\`

### 2.2 核心模式介绍
- **Rule（规则模式）**：依据 rules 列表进行精准分流（推荐）。
- **Global（全局模式）**：强制所有流量通过指定的同一个代理节点。
- **Direct（直连模式）**：绕过 Clash，所有流量直接由本地网络发出。

---

## 第三章：Windows 平台安装与配置

由于原版 Clash for Windows 已停止维护，目前推荐使用开源且持续更新的内核衍生客户端，如 Clash Verge Rev。

### 3.1 下载与安装
1. 访问 Clash Verge Rev 的 GitHub Release 官方发布页。
2. 下载 Windows 版本的安装包（如 \`Clash.Verge_x64-setup.exe\`）。
3. 运行安装程序，按提示完成安装。

### 3.2 导入订阅与启动
1. **获取订阅链接**：登录你的加速服务商后台，复制 Clash 订阅链接（YAML 或 URL 格式）。
2. **导入配置**：打开 Clash Verge -> 点击侧边栏 Profile（配置） -> 将链接粘贴至顶部 URL 框 -> 点击 Import（导入）。
3. **激活配置**：选中刚导入的配置文件，使其变为选中激活状态。
4. **开启系统代理**：切换到 Settings（设置） -> 勾选 System Proxy（系统代理）。

### 3.3 开启 TUN 模式（处理游戏及不走系统代理的软件）
1. 在设置中开启 TUN Mode（TUN 模式）。
2. 首次开启会提示安装虚拟网卡驱动，点击允许并授权。
3. TUN 模式可将接管层级提升至网卡级，完美解决 UWP 应用、Telegram 或部分游戏不走代理的问题。

---

## 第四章：macOS 平台安装与配置

在 macOS 系统上，推荐使用 Clash Verge Rev (macOS 版) 或 ClashX Meta。

### 4.1 安装步骤
1. 下载适合你芯片型号的安装包（Apple Silicon 芯片选 aarch64.dmg，Intel 芯片选 x64.dmg）。
2. 打开 .dmg 文件，将应用拖入 Applications 文件夹。
3. 若提示“无法打开未认证开发者应用”，请前往 系统设置 -> 隐私与安全性 -> 仍要打开。

### 4.2 配置与权限授予
1. 打开应用，同理导入订阅链接。
2. 开启 Set as System Proxy（设置为系统代理）。
3. 若需要开启 Enhanced Mode（增强模式/TUN），需要在弹出的系统提示框中输入 macOS 开机密码，以授权修改系统网络路由表。

---

## 第五章：Android 平台安装与配置

Android 端首选开源客户端 Clash Meta for Android (CMFA) 或 Flclash。

### 5.1 安装与设置步骤
1. 下载并安装 .apk 文件。
2. 打开 App，点击 配置 (Profiles) -> 新配置 -> URL 导入。
3. 粘贴订阅链接，设置自动更新间隔（如 1440 分钟），点击右上角保存。
4. 返回主界面，选中刚刚导入的配置。
5. 点击主页的 已停止 -> 启动，系统会弹出 VPN 权限申请，点击 允许。

### 5.2 智能分流与应用绕过
- **分流应用设置**：在设置中可开启“应用分流”功能，指定哪些 App 走 Clash，哪些 App 强制直连（如微信、银行类 App 建议直连）。

---

## 第六章：iOS 平台替代方案

iOS 由于系统限制，无法直接运行原始的 Clash 核心，但可以使用兼容 Clash 订阅协议的顶级客户端：
- **Shadowrocket（小火箭）**：简单易用，支持导入 Clash 订阅。
- **Stash**：号称 iOS 上的 Clash 最佳移植版，完整继承了 Clash 的 YAML 规则引擎与策略组逻辑。

---

## 第七章：高阶玩法与进阶优化

### 7.1 DNS 防污染与 Fake-IP 原理解析
传统 DNS 查询极易受到 ISP 的劫持与污染。Clash 引入了 Fake-IP 机制：
1. 当本地向 Clash 请求 google.com 时，Clash 立即返回一个假的本地保留 IP（如 198.18.0.2）。
2. 本地应用直接向该假 IP 发起连接，Clash 接管流量后，将域名打包直接发往远程代理节点由远端解析。
3. 这完美避开了本地 DNS 污染，同时大幅降低了 DNS 查询的时间开销。

### 7.2 自定义分流规则配置（Rule Providers）
通过引入外部规则集，可以实现规则的自动维护更新：

\`\`\`yaml
rule-providers:
  apple:
    type: http
    behavior: domain
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/apple.txt"
    path: ./ruleset/apple.yaml
    interval: 86400

rules:
  - RULE-SET,apple,DIRECT
\`\`\`

---

## 第八章：常见故障排查（FAQ）

- **Q1：开启 Clash 后，网页打不开，但 Telegram 可以连通？**  
  *原因*：通常是 DNS 解析死锁或系统代理残留。  
  *解决*：在 Clash 设置中重启 DNS 模块，或关闭 Clash 后在 Windows 系统网络设置中重置代理。

- **Q2：为什么节点延迟测试显示 -1ms 或 Timeout？**  
  *原因*：节点配置信息失效、本地网络阻止了测试 URL，或者节点本身已离线。  
  *解决*：更新订阅，并在配置中更改 url-test 的测试网址为 http://www.gstatic.com/generate_204。

- **Q3：开启 TUN 模式后局域网设备无法互联？**  
  *原因*：TUN 接管了局域网流量。  
  *解决*：在配置文件中的 dns.fake-ip-filter 下添加局域网 IP 段，或在 rules 中将 GEOIP,PRIVATE,DIRECT 至于顶部。

---

## 结语

Clash 不仅仅是一个网络加速工具，更是个人流量管理与网络安全防护的利器。通过合理地配置分流规则与 DNS 模式，你可以无缝兼顾国内网络的极致速度与海外优质资源的顺畅访问。
`;

// Update articles.ts
let arts = fs.readFileSync('X:\\src\\data\\articles.ts', 'utf8');

const newTutorialItem = `  {
    id: "tutorial-clash-ultimate-guide-2026",
    title: "Clash 终极指南：从原理剖析到多平台安装配置全景深度解析",
    description: "从 Clash 底层逻辑与分流原理拆解，到 Windows (Clash Verge)、macOS、Android (Clash Meta) 及 iOS (Stash) 全平台安装配置与高阶 DNS 防污染终极教程。",
    category: "tutorial",
    author: "资深测评师",
    pubDate: "2026-08-22",
    heroImage: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1000",
    tags: ["Clash教程", "ClashVerge", "规则分流", "TUN模式"],
    content: \`${articleContent.replace(/`/g, '\\`').replace(/\${/g, '\\${')}\`
  },`;

arts = arts.replace('export const articles: Article[] = [', 'export const articles: Article[] = [\n' + newTutorialItem);
fs.writeFileSync('X:\\src\\data\\articles.ts', arts, 'utf8');
console.log('Added Clash Ultimate Guide tutorial to articles.ts');
