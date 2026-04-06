"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function GreetingSection() {
  return (
    <section className="py-16 md:py-24 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">代表挨拶</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:flex gap-8 items-start"
        >
          {/* Representative photo */}
          <div className="shrink-0 mb-6 md:mb-0">
            <div className="w-48 rounded-lg overflow-hidden mx-auto md:mx-0">
              <Image
                src="/IMG_3682.jpeg"
                alt="代表 東山 勇人"
                width={192}
                height={256}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
            <p>
              全国ペーパードライバー協会のホームページをご覧いただき、誠にありがとうございます。この度、ペーパードライバースクールを展開している数名と元白バイ隊員と共に法人向け安全運転講習専門スクールとして全国ペーパードライバー協会を設立しました。
            </p>
            <p>
              社内講習や外部の安全運転講習講習とは全く異なる、国家資格である教習指導員資格保持者、元白バイ隊員によるプロフェッショナル集団としてお客様に合わせた最適な講習をお届け致します。
            </p>
            <p>
              唯一無二のプロフェッショナル集団として、お客様それぞれの最適解を提案して、これからも歩み続けていきます。
            </p>
            <div className="text-right pt-4">
              <p className="text-sm text-gray-500">代表</p>
              <p className="text-lg font-bold text-gray-900">東山 勇人</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
