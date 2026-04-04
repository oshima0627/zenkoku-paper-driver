import Link from "next/link";

const footerLinks = [
  {
    title: "サービス",
    links: [
      { label: "企業向け安全運転講習", href: "/services" },
      { label: "個人向けペーパードライバー講習", href: "/services" },
      { label: "料金プラン", href: "/price" },
    ],
  },
  {
    title: "協会について",
    links: [
      { label: "協会概要", href: "/about" },
      { label: "ブログ", href: "/blog" },
      { label: "よくある質問", href: "/faq" },
    ],
  },
  {
    title: "お問い合わせ",
    links: [
      { label: "お問い合わせフォーム", href: "/contact" },
      { label: "プライバシーポリシー", href: "/privacy" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary-dark)] text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & description */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-3">全国ペーパードライバー協会</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              交通社会の専門家であり、道路における法律の専門家。企業向け安全運転講習を全国で実施しています。
            </p>
            <div className="mt-4">
              <a
                href="tel:0120-000-000"
                className="text-[var(--color-accent)] font-bold text-lg"
              >
                0120-000-000
              </a>
              <p className="text-xs text-gray-400 mt-1">受付時間: 9:00〜18:00（土日祝除く）</p>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="font-bold mb-3 text-sm">{group.title}</h4>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-gray-600 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} 全国ペーパードライバー協会 All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
