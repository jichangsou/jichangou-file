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
            <div className="text-[10px] text-tan uppercase tracking-widest font-medium">LEGAL COMPLIANCE & ABOUT US</div>
            <HeadingTag className="font-stix text-cream text-2xl sm:text-3xl font-normal">
              免责声明与合规说明
            </HeadingTag>
          </div>
        </div>

        {/* Self-Introduction Section */}
        <div className="p-5 sm:p-6 rounded-2xl bg-cream/5 border border-cream/15 space-y-3 font-suisse">
          <h3 className="text-cream text-base font-bold flex items-center gap-2">
            👋 关于「机场搜」
          </h3>
          <p className="text-cream/90 leading-relaxed">
            「机场搜」是一个专注于网络加速技术研究与网络节点实时测评的独立技术博客。
          </p>
          <p className="text-cream/90 leading-relaxed">
            我们利用自动化探针与 24 小时监控体系，持续追踪各类网络加速服务商的丢包率、延迟及实际带宽表现，致力于通过真实、客观的数据，为网络工程探讨及个人选型提供科学的参考依据。我们不贩卖流量，只做客观数据的记录者与优质线路的推荐官。
          </p>
        </div>

        {/* Legal Disclaimer Points */}
        <div className="space-y-4 pt-2">
          <p>
            1. <strong>中立性原则：</strong> 本站为独立的网络加速技术研究与节点压测大盘。所有测评数据（包括但不限于丢包率、延迟、倍率与带宽）均由自动化探针 24 小时实时采集，仅供网络工程学术探讨与个人选型参考。
          </p>
          <p>
            2. <strong>合规使用提示：</strong> 任何使用者在浏览国际互联网时，须严格遵守使用者所在国家和地区的相关法律法规，切勿利用网络加速服务从事违法违规活动。
          </p>
          <p>
            3. <strong>服务商归属声明：</strong> 本站不提供任何网络节点代理服务，亦不参与服务商的具体运营。所有外部链接均为相关服务商官网或第三方公开接入通道，服务稳定性与数据安全由各自运营方承担。
          </p>
        </div>
      </div>
    </section>
  );
}
