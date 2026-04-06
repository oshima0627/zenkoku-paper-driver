import Link from "next/link";

const footerLinks = [
  {
    title: "事業内容",
    items: [
      { label: "スクールサポートAI事業", href: "/ai-support" },
      { label: "安全運転講習事業(協会)", href: "/driving" },
      { label: "料金案内", href: "/price" },
    ],
  },
  {
    title: "協会について",
    items: [
      { label: "私たちについて", href: "/about" },
      { label: "採用情報", href: "/recruit" },
      { label: "ブログ", href: "/blog" },
    ],
  },
  {
    title: "サポート",
    items: [
      { label: "お問い合わせ", href: "/contact" },
      { label: "よくある質問", href: "/faq" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-bg-gray)] border-t border-[var(--color-border)]/30">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-xs font-semibold text-[var(--color-primary)] tracking-wider mb-4">{group.title}</h3>
              <ul className="space-y-3">
                {group.items.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-xs text-[var(--color-text-light)] hover:text-[var(--color-primary)] transition-colors duration-200">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-[var(--color-border)]/30">
        <div className="max-w-6xl mx-auto px-6 py-5">
          <p className="text-center text-[11px] text-[var(--color-text-light)] tracking-wider">
            &copy; {new Date().getFullYear()} 全国ペーパードライバー協会 All rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
