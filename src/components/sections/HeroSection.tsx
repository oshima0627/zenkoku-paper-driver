"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100svh-3rem)] flex items-center overflow-hidden bg-[#030712]">

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: "radial-gradient(circle, #6b7280 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Radial vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 40%, transparent 30%, #030712 100%)",
        }}
      />

      {/* Gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Blue — top right */}
        <div className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] bg-blue-600/25 rounded-full blur-[140px]" />
        {/* Indigo — bottom left */}
        <div className="absolute bottom-[-15%] left-[-10%] w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[140px]" />
        {/* Cyan — center */}
        <div className="absolute top-[35%] left-[35%] w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px]" />
        {/* Accent streak */}
        <div
          className="absolute top-[45%] left-0 right-0 h-px opacity-20"
          style={{
            background: "linear-gradient(to right, transparent, #3b82f6 30%, #06b6d4 70%, transparent)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0, 1] }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-xs font-semibold tracking-[0.3em] text-blue-400/70 uppercase mb-8"
          >
            <span className="sm:hidden">School Support AI<br />&times;<br />Safety Driving</span>
            <span className="hidden sm:inline">School Support AI &times; Safety Driving</span>
          </motion.p>

          <h1 className="text-[clamp(1.75rem,7vw,4.5rem)] font-bold text-white leading-[1.15] tracking-tight">
            運転も、業務も、
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              隣で支える。
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="mt-8 text-base sm:text-lg text-white/50 leading-relaxed max-w-xl mx-auto"
          >
            テクノロジーと安全で、社会に貢献する。
          </motion.p>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#f5f5f7] via-[#f5f5f7]/60 to-transparent" />
    </section>
  );
}
