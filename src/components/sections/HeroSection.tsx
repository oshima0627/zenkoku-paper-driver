"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[var(--color-primary)]">
      {/* Gradient mesh background */}
      <div className="absolute inset-0">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-500/15 rounded-full blur-[120px]" />
        <div className="absolute top-[30%] left-[40%] w-[400px] h-[400px] bg-cyan-400/10 rounded-full blur-[100px]" />
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
            className="text-sm font-medium tracking-[0.2em] text-white/50 uppercase mb-6"
          >
            <span className="sm:hidden">School Support AI<br />&times;<br />Safety Driving</span>
            <span className="hidden sm:inline">School Support AI &times; Safety Driving</span>
          </motion.p>
          <h1 className="text-[clamp(1.75rem,7vw,4.5rem)] font-bold text-white leading-[1.15] tracking-tight">
            テクノロジーと安全で、
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
              社会に貢献する。
            </span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-8 text-base sm:text-lg text-white/60 leading-relaxed max-w-xl mx-auto"
          >
            AI業務自動化・HP制作と安全運転講習の2つの事業を柱に、<br />
            企業の課題解決に取り組みます。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-12 flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link
              href="/ai-support"
              className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-medium text-white bg-[var(--color-accent)] rounded-full hover:bg-[var(--color-accent-light)] transition-all duration-300 shadow-[0_0_20px_rgba(0,113,227,0.3)]"
            >
              スクールサポートAI事業
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/driving"
              className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-medium text-white/80 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/15 transition-all duration-300"
            >
              安全運転講習事業(協会)
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
