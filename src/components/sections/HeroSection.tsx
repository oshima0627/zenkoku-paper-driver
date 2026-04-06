"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/IMG_3677.jpeg"
        alt="海辺の車"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-4 py-16 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-xl sm:text-3xl md:text-5xl font-bold text-white leading-relaxed mb-4">
            交通社会の専門家であり、
            <br />
            道路における法律の専門家
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-gray-300 tracking-widest font-mono">
            An expert on traffic society and road law
          </p>
        </motion.div>

        {/* Three circles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-end gap-2 sm:gap-4 md:gap-6 mt-8"
        >
          {[
            { text: "安全運転講習\n専門スクール" },
            { text: "プロフェッショナル\n集団" },
            { text: "元白バイ隊員\n監修\nマニュアル作成" },
          ].map((item, i) => (
            <div
              key={i}
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-cyan-300/80 to-blue-400/80 backdrop-blur-sm flex items-center justify-center text-center"
            >
              <p className="text-[10px] sm:text-xs md:text-sm font-bold text-white whitespace-pre-line leading-snug sm:leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
