"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100svh-3rem)] flex items-center overflow-hidden bg-black">

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Radial mask — fades grid at edges */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 70% 70% at 50% 50%, transparent 40%, black 100%)",
        }}
      />

      {/* Glow orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-blue-700/30 rounded-full blur-[160px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-700/25 rounded-full blur-[130px]" />
        <div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px]" />
      </div>

      {/* Horizontal light beam — PCのみ */}
      <div
        className="hidden sm:block absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[1px] opacity-25"
        style={{
          background: "linear-gradient(to right, transparent 0%, #3b82f6 25%, #06b6d4 50%, #3b82f6 75%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div className="relative w-full max-w-5xl mx-auto px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="inline-flex items-center gap-2 mb-10"
          >
            <span className="w-6 h-px bg-blue-500/60" />
            {/* PC: 1行, スマホ: 3行 */}
            <span className="text-[11px] font-semibold tracking-[0.35em] text-blue-400/80 uppercase hidden sm:inline">
              School Support AI &times; Safety Driving
            </span>
            <span className="text-[11px] font-semibold tracking-[0.35em] text-blue-400/80 uppercase flex flex-col items-center leading-relaxed sm:hidden">
              <span>School Support AI</span>
              <span>&times;</span>
              <span>Safety Driving</span>
            </span>
            <span className="w-6 h-px bg-blue-500/60" />
          </motion.div>

          {/* Heading */}
          <h1 className="text-[clamp(2rem,8vw,5rem)] font-bold leading-[1.1] tracking-tight">
            <span className="block text-white">テクノロジーと安全で、</span>
            <span
              className="block mt-1"
              style={{
                background: "linear-gradient(135deg, #60a5fa 0%, #22d3ee 40%, #a78bfa 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              社会に貢献する。
            </span>
          </h1>

          {/* スマホ専用: 見出し直下の横線 */}
          <div
            className="sm:hidden w-full h-[1px] mt-6 opacity-30"
            style={{
              background: "linear-gradient(to right, transparent 0%, #3b82f6 25%, #06b6d4 50%, #3b82f6 75%, transparent 100%)",
            }}
          />

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="mt-10 text-base sm:text-lg text-white/40 leading-relaxed tracking-wide"
          >
            運転も、業務も、隣で支える。
          </motion.p>
        </motion.div>
      </div>

    </section>
  );
}
