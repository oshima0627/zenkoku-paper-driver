"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function GreetingSection() {
  return (
    <section className="py-28 md:py-36 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-medium tracking-[0.25em] text-[var(--color-accent)] uppercase mb-3">Message</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-primary)] tracking-tight">代表挨拶</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0, 1] }}
          className="md:flex gap-12 items-start"
        >
          <div className="shrink-0 mb-8 md:mb-0">
            <div className="w-52 rounded-3xl overflow-hidden mx-auto md:mx-0 shadow-lg">
              <Image src="/IMG_3682.jpeg" alt="代表 東山 勇人" width={208} height={280} className="w-full h-auto" />
            </div>
          </div>

          <div className="space-y-5 text-[15px] text-[var(--color-text-light)] leading-[1.9]">
            <p>全国ペーパードライバー協会のホームページをご覧いただき、誠にありがとうございます。</p>
            <p>当協会は、ペーパードライバースクールを展開するメンバーと元白バイ隊員と共に設立した法人向け安全運転講習専門の団体です。さらに、AIの力で企業の業務効率化やDX推進を支援する<span className="text-[var(--color-primary)] font-semibold">スクールサポートAI事業</span>を新たな柱として展開しています。</p>
            <p>AI業務自動化やHP制作といったテクノロジー分野と、国家資格保持者・元白バイ隊員によるプロフェッショナルな安全運転講習。この2つの事業を通じて、社会に貢献していくことが私たちの使命です。</p>
            <p>唯一無二のプロフェッショナル集団として、お客様それぞれの最適解を提案し、これからも歩み続けていきます。</p>
            <div className="text-right pt-6 border-t border-[var(--color-border)]/30 mt-8">
              <p className="text-xs text-[var(--color-text-light)] tracking-wider">代表</p>
              <p className="text-xl font-bold text-[var(--color-primary)] mt-1">東山 勇人</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
