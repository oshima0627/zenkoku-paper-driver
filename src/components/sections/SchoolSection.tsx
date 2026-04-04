"use client";

import { motion } from "framer-motion";

const schools = [
  { name: "うめきた大阪\nペーパードライバースクール", area: "大阪市内エリア", motto: "〜超が付くくらいのペーパードライバーさんと接することが大好き！！〜", instructor: "東山 勇人", role: "うめきた大阪ペーパードライバースクール代表" },
  { name: "ペーパードライバースクール\nちょこっとドライブ", area: "大阪南部、奈良エリア", motto: "〜スキマ時間にサクッと練習！安心のペーパードライバースクール〜", instructor: "河野 裕介", role: "ペーパードライバースクールちょこっとドライブ代表" },
  { name: "まごころ\nペーパードライバースクール", area: "大阪北摂、兵庫エリア", motto: "〜指導力に自信あり！！最短時限&最少費用で運転の苦手を克服！！〜", instructor: "浜田 裕也", role: "まごころペーパードライバースクール代表" },
  { name: "かがやき\nペーパードライバースクール", area: "大阪北摂、兵庫エリア", motto: "〜元ペーパードライバー！気持ちが分かる女性指導員が優しく指導〜", instructor: "松下 陽奈真", role: "かがやきペーパードライバースクール代表" },
  { name: "アンカー\nドライビングスクール", area: "阪神、大阪市内エリア", motto: "〜選ばれるのは、\"安心\"と\"品格\"を大切にする講習です〜", instructor: "百野 将生", role: "アンカードライビングスクール代表" },
  { name: "バンビ\nドライビングスクール", area: "広島エリア", motto: "〜小鹿(バンビ)のように、少しずつ前へ〜", instructor: "百野 将生", role: "バンビドライビングスクール代表" },
  { name: "タイヨウライディングスクール", area: "大阪エリア 自転車教室", motto: "〜「乗りたい」を「乗れる」に〜", instructor: "志村 太陽", role: "タイヨウライディングスクール代表" },
  { name: "シーズンインストラクター", area: "公安委員会指定自動車教習所のシーズンインストラクター", motto: "〜あなたのチャレンジを応援します〜", instructor: "志村 太陽", role: "シーズンインストラクター" },
];

export default function SchoolSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <svg className="w-14 h-14 text-[var(--color-primary-light)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">提携スクール</h2>
          <p className="text-sm text-[var(--color-accent)] mt-1">-Affiliated school-</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {schools.map((school, i) => (
            <motion.div
              key={school.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="border rounded-lg overflow-hidden"
            >
              {/* Image placeholder */}
              <div className="h-48 bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
                <p className="text-white font-bold text-center whitespace-pre-line text-lg">{school.name}</p>
              </div>
              <div className="p-5">
                <p className="text-xs text-gray-500 font-bold mb-1">【{school.area}】</p>
                <p className="text-sm text-gray-700 mb-3">{school.motto}</p>
                <p className="text-xs text-gray-500">インストラクター　{school.instructor}</p>
                <p className="text-xs text-gray-400">{school.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
