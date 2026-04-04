import Link from "next/link";

const footerLinks = [
  {
    title: "メニュー",
    links: [
      { label: "協会理念", href: "/about" },
      { label: "料金案内", href: "/price" },
      { label: "よくある質問", href: "/faq" },
      { label: "会社概要", href: "/company" },
      { label: "採用情報", href: "/recruit" },
    ],
  },
  {
    title: "お問い合わせ",
    links: [
      { label: "お問い合わせ・お申し込み", href: "/contact" },
      { label: "プライバシーポリシー", href: "/privacy" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary-dark)] text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & description */}
          <div>
            <h3 className="text-lg font-bold mb-2">全国ペーパードライバー協会</h3>
            <p className="text-xs text-gray-300 tracking-wider mb-4">National Paper Drivers Association</p>
            <p className="text-sm text-gray-300 leading-relaxed">
              交通社会の専門家であり、道路における法律の専門家。企業向け安全運転講習を全国で実施しています。
            </p>
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
