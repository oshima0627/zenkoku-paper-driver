"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-3rem)] flex items-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-gray-800">
      {/* Subtle gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-15%] right-[-5%] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-cyan-500/15 rounded-full blur-[100px]" />
        <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] bg-blue-400/10 rounded-full blur-[80px]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0, 1] }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-sm font-medium tracking-[0.2em] text-gray-400 uppercase mb-6"
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
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-8 text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl mx-auto"
          >
            テクノロジーと安全で、社会に貢献する。
          </motion.p>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
