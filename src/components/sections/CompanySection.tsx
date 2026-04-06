"use client";

import { motion } from "framer-motion";

const companyInfo = [
  { label: "協会名", value: "全国ペーパードライバー協会" },
  { label: "代表", value: "東山　勇人" },
  { label: "住所", value: "〒531-0071\n大阪市北区中津６丁目7-7-5F" },
  { label: "メールアドレス", value: "info@kyokai-npd.com" },
  { label: "従業員数", value: "5名" },
  { label: "事業内容", value: "AIサポート事業（AI業務自動化・HP制作）\n企業向け安全運転講習\nペーパードライバー講習\n運転インストラクター育成事業" },
];

export default function CompanySection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-[var(--color-text-light)] tracking-widest uppercase mb-2">Company</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-primary)]">会社概要</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl overflow-x-auto bg-[var(--color-bg-gray)]"
        >
          <table className="w-full min-w-[320px]">
            <tbody>
              {companyInfo.map((info, i) => (
                <tr key={info.label} className={i > 0 ? "border-t border-[var(--color-border)]/50" : ""}>
                  <th className="px-6 py-5 text-xs sm:text-sm font-semibold text-[var(--color-primary)] text-left w-1/3">
                    {info.label}
                  </th>
                  <td className="px-6 py-5 text-xs sm:text-sm text-[var(--color-text-light)] whitespace-pre-line">{info.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
