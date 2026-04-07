import { memo } from "react";

type Theme = "light" | "dark";

interface LogoMarkProps {
  className?: string;
  title?: string;
}

/**
 * Co-Drive Lab のシンボルマーク
 * - 外周リング: ステアリングホイール / Lab の円環
 * - 3本のスポーク: 運転の動きと方向
 * - 各スポーク先端のノード: AI / 回路 / テクノロジー
 * - 中央ハブ: 2事業を束ねる中心
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

      {/* Outer ring (steering wheel / Lab circle) */}
      <circle
        cx="32"
        cy="32"
        r="24"
        fill="none"
        stroke="url(#cdl-logo-grad)"
        strokeWidth="3.5"
      />

      {/* Y-shaped spokes (steering wheel + motion lines) */}
      <line x1="32" y1="32" x2="32" y2="11" stroke="url(#cdl-logo-grad)" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="32" y1="32" x2="14" y2="43" stroke="url(#cdl-logo-grad)" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="32" y1="32" x2="50" y2="43" stroke="url(#cdl-logo-grad)" strokeWidth="3.5" strokeLinecap="round" />

      {/* Center hub */}
      <circle cx="32" cy="32" r="4.5" fill="url(#cdl-logo-grad)" />

      {/* Circuit nodes at spoke tips (AI / tech) */}
      <circle cx="32" cy="11" r="2.8" fill="#3b82f6" />
      <circle cx="14" cy="43" r="2.8" fill="#06b6d4" />
      <circle cx="50" cy="43" r="2.8" fill="#06b6d4" />
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
