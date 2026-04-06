import Link from "next/link";

const footerLinks = [
  {
    title: "事業内容",
    items: [
      { label: "AIサポート事業", href: "/ai-support" },
      { label: "安全運転講習事業", href: "/driving" },
      { label: "料金案内", href: "/price" },
    ],
  },
  {
    title: "協会について",
    items: [
      { label: "私たちについて", href: "/about" },
      { label: "会社概要", href: "/company" },
      { label: "採用情報", href: "/recruit" },
    ],
  },
  {
    title: "サポート",
    items: [
      { label: "お問い合わせ", href: "/contact" },
      { label: "よくある質問", href: "/faq" },
      { label: "ブログ", href: "/blog" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-bg-gray)] border-t border-[var(--color-border)]/50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-xs font-semibold text-[var(--color-primary)] mb-3">{group.title}</h3>
              <ul className="space-y-2">
                {group.items.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-xs text-[var(--color-text-light)] hover:text-[var(--color-primary)] transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-[var(--color-border)]/50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <p className="text-center text-xs text-[var(--color-text-light)]">
            &copy; {new Date().getFullYear()} 全国ペーパードライバー協会 All rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
