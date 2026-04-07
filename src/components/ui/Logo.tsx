import Image from "next/image";
import { memo } from "react";

const LOGO_SRC = "/IMG_3727.png";
const LOGO_NATIVE_SIZE = 488;

type Theme = "light" | "dark";

interface LogoMarkProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const MARK_SIZE: Record<NonNullable<LogoMarkProps["size"]>, string> = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-12 w-12",
};

/**
 * Co-Drive Lab シンボルマーク（画像単体）
 */
export const LogoMark = memo(function LogoMark({ className, size = "md" }: LogoMarkProps) {
  return (
    <Image
      src={LOGO_SRC}
      alt="Co-Drive Lab"
      width={LOGO_NATIVE_SIZE}
      height={LOGO_NATIVE_SIZE}
      priority
      className={`${MARK_SIZE[size]} object-contain ${className ?? ""}`}
    />
  );
});

interface LogoProps {
  className?: string;
  theme?: Theme;
  size?: "sm" | "md" | "lg";
}

const TEXT_SIZE: Record<NonNullable<LogoProps["size"]>, string> = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-xl",
};

/**
 * Co-Drive Lab フルロゴ（シンボル + ワードマーク）
 */
export const Logo = memo(function Logo({ className, theme = "light", size = "md" }: LogoProps) {
  const coDriveColor = theme === "dark" ? "text-white" : "text-[var(--color-primary)]";
  const labGradient =
    theme === "dark" ? "from-blue-400 to-cyan-300" : "from-blue-500 to-cyan-400";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <LogoMark size={size} />
      <span className={`${TEXT_SIZE[size]} font-bold tracking-tight leading-none`}>
        <span className={coDriveColor}>Co-Drive</span>
        <span className={`ml-0.5 bg-gradient-to-r ${labGradient} bg-clip-text text-transparent`}>
          Lab
        </span>
      </span>
    </span>
  );
});
