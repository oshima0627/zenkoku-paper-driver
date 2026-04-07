"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100dvh-3rem)] flex items-center overflow-hidden bg-[var(--color-primary)]">
      {/* Gradient mesh background */}
      <div className="absolute inset-0">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-500/15 rounded-full blur-[120px]" />
        <div className="absolute top-[30%] left-[40%] w-[400px] h-[400px] bg-cyan-400/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0, 0, 0.2, 1] }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="text-sm font-medium tracking-[0.2em] text-white/50 uppercase mb-6"
          >
            <span className="sm:hidden">School Support AI<br />&times;<br />Safety Driving</span>
            <span className="hidden sm:inline">School Support AI &times; Safety Driving</span>
          </motion.p>
          <h1 className="text-[clamp(1.75rem,7vw,4.5rem)] font-bold text-white leading-[1.15] tracking-tight">
            運転も、業務も、
            <br />
            <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              隣で支える。
            </span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            className="mt-8 text-base sm:text-lg text-white/60 leading-relaxed max-w-xl mx-auto"
          >
            テクノロジーと安全で、社会に貢献する。
          </motion.p>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#f5f5f7] to-transparent" />
    </section>
  );
}
