"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const values = [
  {
    title: "社会貢献",
    description: "テクノロジーと安全運転講習を通じて、より良い社会の実現に貢献します。",
  },
  {
    title: "プロフェッショナル",
    description: "各分野の専門家が集結し、お客様に最適なソリューションを提供します。",
  },
  {
    title: "イノベーション",
    description: "最新のAI技術を活用し、企業の業務効率化とDX推進を支援します。",
  },
];

const companyInfo = [
  { label: "協会名", value: "全国ペーパードライバー協会" },
  { label: "代表", value: "東山　勇人" },
  { label: "住所", value: "〒531-0071\n大阪市北区中津６丁目7-7-5F" },
  { label: "メールアドレス", value: "info@kyokai-npd.com" },
  { label: "従業員数", value: "5名" },
  { label: "事業内容", value: "スクールサポートAI事業（AI業務自動化・HP制作）\n企業向け安全運転講習\nペーパードライバー講習\n運転インストラクター育成事業" },
];

export default function AboutSection() {
  return (
    <>
      {/* Mission */}
      <section className="py-28 md:py-36 bg-[var(--color-bg-gray)]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-xs font-medium tracking-[0.25em] text-[var(--color-accent)] uppercase mb-3">Mission</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-primary)] tracking-tight mb-6">私たちの使命</h2>
            <p className="text-[15px] text-[var(--color-text-light)] leading-[1.9] max-w-2xl mx-auto">
              全国ペーパードライバー協会は、<span className="text-[var(--color-primary)] font-semibold">スクールサポートAI事業</span>と<span className="text-[var(--color-primary)] font-semibold">安全運転講習事業(協会)</span>の2つの柱を通じて、企業の課題解決と社会貢献に取り組んでいます。テクノロジーの力で業務を効率化し、プロフェッショナルな講習で交通安全を実現する。この2つのアプローチで、より良い社会づくりを目指します。
            </p>
          </motion.div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.25, 0.1, 0, 1] }}
                className="bg-white rounded-3xl p-8 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-500"
              >
                <h3 className="text-lg font-bold text-[var(--color-primary)] mb-3">{value.title}</h3>
                <p className="text-sm text-[var(--color-text-light)] leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Greeting */}
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

      {/* Company Info */}
      <section className="py-28 md:py-36 bg-[var(--color-bg-gray)]">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-xs font-medium tracking-[0.25em] text-[var(--color-accent)] uppercase mb-3">Company</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-primary)] tracking-tight">会社概要</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-3xl overflow-hidden shadow-sm"
          >
            <div className="divide-y divide-[var(--color-border)]/30">
              {companyInfo.map((info) => (
                <div key={info.label} className="flex flex-col sm:flex-row px-5 sm:px-8 py-5">
                  <div className="sm:w-1/3 shrink-0 mb-1 sm:mb-0">
                    <p className="text-sm font-semibold text-[var(--color-primary)]">{info.label}</p>
                  </div>
                  <p className="text-sm text-[var(--color-text-light)] whitespace-pre-line leading-relaxed">{info.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
