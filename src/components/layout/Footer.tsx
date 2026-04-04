import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { label: "協会理念", href: "/about" },
  { label: "料金案内", href: "/price" },
  { label: "よくある質問", href: "/faq" },
  { label: "会社概要", href: "/company" },
  { label: "採用情報", href: "/recruit" },
];

export default function Footer() {
  return (
    <footer>
      {/* Logo area */}
      <div className="bg-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <Image src="/logo.png" alt="全国ペーパードライバー協会ロゴ" width={32} height={32} className="w-full h-full object-cover" />
            </div>
            <div>
              <span className="text-lg font-bold text-[var(--color-primary)]">全国ペーパードライバー協会</span>
              <p className="text-[9px] text-[var(--color-primary)] tracking-wider">National Paper Drivers Association</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation bar */}
      <div className="bg-[var(--color-primary)]">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-center items-center gap-1 flex-wrap">
            {footerLinks.map((link, i) => (
              <div key={link.label} className="flex items-center">
                {i > 0 && <span className="text-white/40 mx-2">|</span>}
                <Link href={link.href} className="text-sm text-white hover:text-gray-200 transition-colors">
                  {link.label}
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-white/60 mt-3">
            &copy; {new Date().getFullYear()} 全国ペーパードライバー協会 All rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
