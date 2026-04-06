"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function GreetingSection() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-bg-gray)]">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-[var(--color-text-light)] tracking-widest uppercase mb-2">Message</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-primary)]">代表挨拶</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:flex gap-10 items-start"
        >
          <div className="shrink-0 mb-8 md:mb-0">
            <div className="w-48 rounded-2xl overflow-hidden mx-auto md:mx-0">
              <Image src="/IMG_3682.jpeg" alt="代表 東山 勇人" width={192} height={256} className="w-full h-auto" />
            </div>
          </div>

          <div className="space-y-4 text-sm text-[var(--color-text-light)] leading-relaxed">
            <p>全国ペーパードライバー協会のホームページをご覧いただき、誠にありがとうございます。</p>
            <p>当協会は、ペーパードライバースクールを展開するメンバーと元白バイ隊員と共に設立した法人向け安全運転講習専門の団体です。さらに、AIの力で企業の業務効率化やDX推進を支援する<span className="text-[var(--color-primary)] font-medium">スクールサポートAI事業</span>を新たな柱として展開しています。</p>
            <p>AI業務自動化やHP制作といったテクノロジー分野と、国家資格保持者・元白バイ隊員によるプロフェッショナルな安全運転講習。この2つの事業を通じて、社会に貢献していくことが私たちの使命です。</p>
            <p>唯一無二のプロフェッショナル集団として、お客様それぞれの最適解を提案し、これからも歩み続けていきます。</p>
            <div className="text-right pt-4">
              <p className="text-xs text-[var(--color-text-light)]">代表</p>
              <p className="text-lg font-bold text-[var(--color-primary)]">東山 勇人</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
