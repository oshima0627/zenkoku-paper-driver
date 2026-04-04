"use client";

import { motion } from "framer-motion";

const companyInfo = [
  { label: "協会名", value: "全国ペーパードライバー協会" },
  { label: "代表", value: "東山　勇人" },
  { label: "住所", value: "〒531-0071\n大阪市北区中津６丁目7-7-5F" },
  { label: "メールアドレス", value: "info@kyokai-npd.com" },
  { label: "従業員数", value: "5名" },
  { label: "事業内容", value: "企業向け交通安全運転講習\nペーパードライバー講習\n運転インストラクター育成事業" },
];

export default function CompanySection() {
  return (
    <section className="py-16 md:py-24 bg-[var(--color-bg-gray)]">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">会社概要</h2>
          <p className="text-sm text-[var(--color-accent)] mt-1">-about-</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border rounded-lg overflow-hidden bg-white"
        >
          <table className="w-full">
            <tbody>
              {companyInfo.map((info, i) => (
                <tr key={info.label} className={i > 0 ? "border-t" : ""}>
                  <th className="px-6 py-4 text-sm font-bold text-[var(--color-primary)] text-center w-1/3 bg-gray-50">
                    {info.label}
                  </th>
                  <td className="px-6 py-4 text-sm text-gray-700 whitespace-pre-line">{info.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
