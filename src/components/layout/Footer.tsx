import Link from "next/link";

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
            <div className="w-8 h-8 rounded-full bg-[var(--color-primary)] flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
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
