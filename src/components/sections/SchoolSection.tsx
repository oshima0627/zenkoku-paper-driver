"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const schools = [
  { name: "うめきた大阪\nペーパードライバースクール", area: "大阪市内エリア", motto: "〜超が付くくらいのペーパードライバーさんと接することが大好き！！〜", instructor: "東山 勇人", role: "うめきた大阪ペーパードライバースクール代表", image: "/IMG_3682.jpeg" },
  { name: "ペーパードライバースクール\nちょこっとドライブ", area: "大阪南部、奈良エリア", motto: "〜スキマ時間にサクッと練習！安心のペーパードライバースクール〜", instructor: "河野 裕介", role: "ペーパードライバースクールちょこっとドライブ代表", image: "/IMG_3680.jpeg" },
  { name: "まごころ\nペーパードライバースクール", area: "大阪北摂、兵庫エリア", motto: "〜指導力に自信あり！！最短時限&最少費用で運転の苦手を克服！！〜", instructor: "浜田 裕也", role: "まごころペーパードライバースクール代表", image: "/IMG_3701.jpeg" },
  { name: "かがやき\nペーパードライバースクール", area: "大阪北摂、兵庫エリア", motto: "〜元ペーパードライバー！気持ちが分かる女性指導員が優しく指導〜", instructor: "松下 陽奈真", role: "かがやきペーパードライバースクール代表", image: "/IMG_3681.jpeg" },
  { name: "アンカー\nドライビングスクール", area: "阪神、大阪市内エリア", motto: "〜選ばれるのは、\"安心\"と\"品格\"を大切にする講習です〜", instructor: "百野 将生", role: "アンカードライビングスクール代表", image: "/IMG_3692.jpeg" },
  { name: "バンビ\nドライビングスクール", area: "広島エリア", motto: "〜小鹿(バンビ)のように、少しずつ前へ〜", instructor: "百野 将生", role: "バンビドライビングスクール代表", image: "/IMG_3691.jpeg" },
  { name: "タイヨウライディングスクール", area: "大阪エリア 自転車教室", motto: "〜「乗りたい」を「乗れる」に〜", instructor: "志村 太陽", role: "タイヨウライディングスクール代表", image: "/IMG_3697.jpeg" },
  { name: "シーズンインストラクター", area: "公安委員会指定自動車教習所のシーズンインストラクター", motto: "〜あなたのチャレンジを応援します〜", instructor: "志村 太陽", role: "シーズンインストラクター", image: "/IMG_3683.jpeg" },
];

export default function SchoolSection() {
  return (
    <section className="py-28 md:py-36 bg-[var(--color-bg-gray)]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-medium tracking-[0.25em] text-[var(--color-accent)] uppercase mb-3">Affiliated School</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-primary)] tracking-tight">提携スクール</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {schools.map((school, i) => (
            <motion.div
              key={school.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.25, 0.1, 0, 1] }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500"
            >
              <div className="relative h-48">
                <Image src={school.image} alt={school.name.replace("\n", " ")} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end">
                  <p className="text-white font-bold whitespace-pre-line text-base sm:text-lg p-6 drop-shadow-lg">{school.name}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs text-[var(--color-accent)] font-medium mb-2">【{school.area}】</p>
                <p className="text-sm text-[var(--color-primary)] mb-4 leading-relaxed">{school.motto}</p>
                <div className="pt-4 border-t border-[var(--color-border)]/30">
                  <p className="text-xs text-[var(--color-text-light)]">インストラクター　{school.instructor}</p>
                  <p className="text-xs text-[var(--color-text-light)]">{school.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
