import Link from "next/link";

export default function ContactBanner() {
  return (
    <section className="bg-[var(--color-bg-gray)] py-10">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm font-medium text-[var(--color-text-light)] mb-1">お電話でのご相談</p>
            <a href="tel:070-2002-0948" className="flex items-center gap-2 text-xl md:text-2xl font-bold text-[var(--color-primary)]">
              070-2002-0948
            </a>
          </div>
          <Link
            href="#"
            className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white text-sm font-medium rounded-full hover:bg-green-600 transition-colors"
          >
            LINEでのご相談
          </Link>
        </div>
        <p className="text-center text-xs text-[var(--color-text-light)] mt-4">
          1営業日以内にご連絡させて頂きます。
        </p>
      </div>
    </section>
  );
}
