import { memo } from "react";

type Theme = "light" | "dark";

interface LogoMarkProps {
  className?: string;
  title?: string;
}

/**
 * Co-Drive Lab のシンボルマーク
 * - 270°アーク: スピードメーター（Drive）/ 計測器の文字盤（Lab）
 * - 斜めの針: 前進・成長ベクトル（11時方向 = 上昇トレンド）
 * - 中央ピボット: 2事業を束ねる軸
 * - ティップノード: 目的地 / イノベーション
 */
export const LogoMark = memo(function LogoMark({ className, title = "Co-Drive Lab" }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label={title}
    >
      <defs>
        <linearGradient id="cdl-logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>

      {/* Speedometer arc — 270°, opening at bottom (Drive + Lab dial) */}
      <path
        d="M 16.4 47.6 A 22 22 0 1 1 47.6 47.6"
        fill="none"
        stroke="url(#cdl-logo-grad)"
        strokeWidth="5"
        strokeLinecap="round"
      />

      {/* Needle — forward/growth vector pointing to ~11 o'clock */}
      <line
        x1="32"
        y1="32"
        x2="44"
        y2="18"
        stroke="url(#cdl-logo-grad)"
        strokeWidth="4.5"
        strokeLinecap="round"
      />

      {/* Center pivot */}
      <circle cx="32" cy="32" r="3.8" fill="#3b82f6" />

      {/* Tip node — destination / innovation */}
      <circle cx="44" cy="18" r="3" fill="#06b6d4" />
    </svg>
  );
});

interface LogoProps {
  className?: string;
  theme?: Theme;
  size?: "sm" | "md" | "lg";
}

/**
 * Co-Drive Lab フルロゴ（シンボル + ワードマーク）
 */
export const Logo = memo(function Logo({ className, theme = "light", size = "md" }: LogoProps) {
  const markSize = size === "sm" ? "h-7 w-7" : size === "lg" ? "h-11 w-11" : "h-9 w-9";
  const textSize = size === "sm" ? "text-sm" : size === "lg" ? "text-xl" : "text-base";
  const coDriveColor = theme === "dark" ? "text-white" : "text-[var(--color-primary)]";
  const labGradient =
    theme === "dark"
      ? "from-blue-400 to-cyan-300"
      : "from-blue-500 to-cyan-400";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <LogoMark className={markSize} />
      <span className={`${textSize} font-bold tracking-tight leading-none`}>
        <span className={coDriveColor}>Co-Drive</span>
        <span className={`ml-0.5 bg-gradient-to-r ${labGradient} bg-clip-text text-transparent`}>
          Lab
        </span>
      </span>
    </span>
  );
});
