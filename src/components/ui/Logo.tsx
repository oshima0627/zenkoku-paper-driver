import { memo } from "react";

type Theme = "light" | "dark";

interface LogoMarkProps {
  className?: string;
  title?: string;
}

/**
 * Co-Drive Lab のシンボルマーク
 * モダンな3スポーク・ステアリングホイールを忠実に再現:
 * - 外周リム（円形ハンドル）
 * - T字型3スポーク（左右水平 + 下方向 / BMW・Tesla 等の主流配置）
 * - 中央ハブ（エアバッグ/ホーン部）
 * - 12時マーカー（直進位置インジケーター: Ferrari/Porsche 等のレーシング仕様）
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

      {/* Outer rim */}
      <circle
        cx="32"
        cy="32"
        r="26"
        fill="none"
        stroke="url(#cdl-logo-grad)"
        strokeWidth="3.5"
      />

      {/* 12 o'clock straight-ahead marker (racing wheel detail) */}
      <line
        x1="28"
        y1="9.5"
        x2="36"
        y2="9.5"
        stroke="#3b82f6"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* T-shape 3 spokes: left horizontal, right horizontal, bottom */}
      <line
        x1="32"
        y1="32"
        x2="10"
        y2="32"
        stroke="url(#cdl-logo-grad)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <line
        x1="32"
        y1="32"
        x2="54"
        y2="32"
        stroke="url(#cdl-logo-grad)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <line
        x1="32"
        y1="32"
        x2="32"
        y2="54"
        stroke="url(#cdl-logo-grad)"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Center hub (airbag / horn) */}
      <circle cx="32" cy="32" r="7.5" fill="url(#cdl-logo-grad)" />
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
