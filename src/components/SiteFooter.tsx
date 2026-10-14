import Image from "next/image";

export default function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background-alt px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:justify-between sm:text-left">
        <div className="flex items-center gap-3">
          <Image src="/fst-logo.png" alt="FST Global" width={32} height={32} className="h-8 w-8" />
          <span className="font-display text-sm font-semibold uppercase tracking-wide text-white">
            FST Global
          </span>
        </div>

        <div className="flex flex-col gap-1 text-xs text-foreground-dim">
          <a href="tel:07593200998" className="transition hover:text-accent-light">
            07593 200998
          </a>
          <a href="mailto:fstglobal@gmail.com" className="transition hover:text-accent-light">
            fstglobal@gmail.com
          </a>
          <span>United Kingdom</span>
        </div>

        <div className="flex flex-col gap-1 text-xs text-foreground-dim">
          <span>Weekdays, 10:00 AM – 4:00 PM</span>
          <span>Messages answered 10:00 AM – 4:00 PM, 7 days a week</span>
          <span className="mt-2">© FST Global. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
