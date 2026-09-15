import React from 'react';

interface DisclaimerSectionProps {
  isSubPage?: boolean;
}

export default function DisclaimerSection({ isSubPage = false }: DisclaimerSectionProps) {
  const HeadingTag = isSubPage ? 'h1' : 'h2';

  return (
    <section id="about" className="py-20 border-t border-white/10 max-w-6xl mx-auto px-5 sm:px-8 select-none">
      <div className="bg-[rgba(17,16,15,0.45)] backdrop-blur-[20px] border border-white/10 rounded-[24px] p-6 sm:p-10 space-y-6 text-cream/80 font-suisse text-xs sm:text-sm leading-relaxed shadow-2xl">
        {/* Section Header */}
        <div className="flex items-center gap-3 border-b border-white/10 pb-4">
          <span className="text-2xl">⚖️</span>
          <div>
            <div className="text-[10px] text-tan uppercase tracking-widest font-medium">ABOUT US & DISCLAIMER</div>
            <HeadingTag className="font-stix text-cream text-2xl sm:text-3xl font-normal">
              关于本站与免责声明
            </HeadingTag>
          </div>
        </div>

        {/* Self-Introduction Section */}
        <div className="p-5 sm:p-6 rounded-2xl bg-cream/5 border border-cream/15 space-y-3 font-suisse">
          <h3 className="text-cream text-base font-bold flex items-center gap-2">
            👋 关于本站
          </h3>
          <p className="text-cream/90 leading-relaxed">
            这是一个专注于技术分享与全栈开发记录的独立个人博客。
          </p>
          <p className="text-cream/90 leading-relaxed">
            本站点采用现代化 Jamstack 架构与边缘 CDN 网络发布，保留了全套暗黑冰雪极简视觉设计体系，致力于分享优质的技术文章与深度探索。
          </p>
        </div>

        {/* Legal Disclaimer Points */}
        <div className="space-y-4 pt-2">
          <p>
            1. <strong>独立原创声明：</strong> 本站所有发布内容与原创文章版权均归站长所有，未经授权切勿商业转载。
          </p>
          <p>
            2. <strong>合规使用提示：</strong> 任何使用者在浏览网站时，须严格遵守使用者所在国家和地区的相关法律法规。
          </p>
          <p>
            3. <strong>免责条款：</strong> 本站提供的技术教程与代码示例仅供学术探讨与学习交流使用。
          </p>
        </div>
      </div>
    </section>
  );
}
