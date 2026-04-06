import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  {
    title: "事業内容",
    items: [
      { label: "スクールサポートAI事業", href: "/#ai-support" },
      { label: "安全運転講習事業(協会)", href: "/#driving" },
      { label: "料金案内", href: "/#price" },
    ],
  },
  {
    title: "協会について",
    items: [
      { label: "私たちについて", href: "/#about" },
      { label: "採用情報", href: "/#recruit" },
      { label: "ブログ", href: "/blog" },
    ],
  },
  {
    title: "サポート",
    items: [
      { label: "お問い合わせ", href: "/contact" },
      { label: "よくある質問", href: "/#faq" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#1d1d1f] text-white">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-12">
        {/* Logo & tagline */}
        <div className="mb-12">
          <Link href="/" className="flex items-center gap-3 mb-4">
            <Image src="/association-logo.png" alt="ロゴ" width={48} height={28} className="h-7 w-auto object-contain" />
            <span className="text-base font-semibold text-white">
              全国ペーパードライバー協会
            </span>
          </Link>
          <p className="text-sm text-white/50 leading-relaxed">
            テクノロジーと安全で、社会に貢献する。
          </p>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold text-white mb-4">{group.title}</h3>
              <ul className="space-y-3">
                {group.items.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-white/50 hover:text-white transition-colors duration-200">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider + copyright */}
        <div className="border-t border-white/10 pt-6">
          <p className="text-xs text-white/30 tracking-wider text-center">
            &copy; {new Date().getFullYear()} 全国ペーパードライバー協会 All rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
