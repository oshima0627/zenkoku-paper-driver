"use client";

import { motion } from "framer-motion";

const companyInfo = [
  { label: "社名", value: "Co-Drive Lab" },
  { label: "代表", value: "東山　勇人" },
  { label: "住所", value: "〒531-0071\n大阪市北区中津６丁目7-7-5F" },
  { label: "メールアドレス", value: "info@kyokai-npd.com" },
  { label: "従業員数", value: "5名" },
  { label: "事業内容", value: "スクールサポートAI事業（AI業務自動化・HP制作）\n企業向け安全運転講習\nペーパードライバー講習\n運転インストラクター育成事業" },
];

export default function CompanySection() {
  return (
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
          className="bg-white rounded-3xl overflow-hidden shadow-md"
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
  );
}
