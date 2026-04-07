import Image from "next/image";
import { memo } from "react";

const LOGO_SRC = "/IMG_3727.png";
const LOGO_NATIVE_WIDTH = 1408;
const LOGO_NATIVE_HEIGHT = 768;

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const HEIGHT_CLASS: Record<NonNullable<LogoProps["size"]>, string> = {
  sm: "h-7",
  md: "h-9",
  lg: "h-11",
};

/**
 * Co-Drive Lab ロゴ画像
 * public/IMG_3727.png を使用
 */
export const Logo = memo(function Logo({ className, size = "md" }: LogoProps) {
  return (
    <Image
      src={LOGO_SRC}
      alt="Co-Drive Lab"
      width={LOGO_NATIVE_WIDTH}
      height={LOGO_NATIVE_HEIGHT}
      priority
      className={`${HEIGHT_CLASS[size]} w-auto object-contain ${className ?? ""}`}
    />
  );
});

/**
 * アイコン単独利用時も同じ画像を使用する
 * （現状ロゴ画像はワードマーク込みの1点のみ提供）
 */
export const LogoMark = Logo;
