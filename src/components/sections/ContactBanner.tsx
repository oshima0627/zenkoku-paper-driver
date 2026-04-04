import Link from "next/link";

export default function ContactBanner() {
  return (
    <section className="bg-gradient-to-r from-[var(--color-site-light)]/30 via-[var(--color-site)]/20 to-[var(--color-site-light)]/30 py-10">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm font-bold text-gray-700 mb-1">お電話でお申し込み・ご相談</p>
            <a href="tel:070-2002-0948" className="flex items-center gap-2 text-2xl font-bold text-gray-900">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.01l-2.2 2.2z" />
              </svg>
              070-2002-0948
            </a>
          </div>
          <Link
            href="#"
            className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-bold rounded-full hover:bg-green-600 transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.14 2 11.2c0 2.89 1.56 5.45 4 7.09V22l3.58-1.96c.78.22 1.6.36 2.42.36 5.52 0 10-4.14 10-9.2S17.52 2 12 2z" />
            </svg>
            LINEでのご相談
          </Link>
        </div>
        <p className="text-center text-xs text-gray-600 mt-4">
          お問い合わせフォーム・LINEの場合、1営業日以内にご連絡させて頂きます。
        </p>
      </div>
    </section>
  );
}
