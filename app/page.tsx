const APK_URL =
  "https://expo.dev/artifacts/eas/ttsWrg9o4uRyzNxu3MDE18.apk";

function DownloadButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={APK_URL}
      className={`inline-flex items-center gap-2.5 rounded-full bg-primary px-7 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-primary/25 transition hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30 active:scale-[0.97] ${className}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
      Download APK
    </a>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <p className="text-3xl font-bold text-foreground">{value}</p>
      <p className="mt-1 text-sm text-text-secondary">{label}</p>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-2xl border border-border bg-white p-6 transition hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-muted text-primary transition group-hover:bg-primary group-hover:text-white">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-text-secondary">
        {description}
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* ───── Navbar ───── */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-white/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white font-bold text-lg">
              Z
            </div>
            <span className="text-xl font-bold tracking-tight text-foreground">
              Zero-Dha
            </span>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-text-secondary md:flex">
            <a href="#features" className="transition hover:text-primary">
              Features
            </a>
            <a href="#how-it-works" className="transition hover:text-primary">
              How it works
            </a>
            <a href="#download" className="transition hover:text-primary">
              Download
            </a>
          </nav>
          <DownloadButton className="hidden sm:inline-flex !py-2.5 !px-5 !text-sm" />
        </div>
      </header>

      {/* ───── Hero ───── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-muted via-white to-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(0,208,156,0.15),transparent)]" />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center px-5 pt-20 pb-24 text-center lg:pt-28 lg:pb-32">
          <span className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary-muted px-4 py-1.5 text-xs font-semibold text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Now available for Android
          </span>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.15] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Trade smarter with{" "}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Zero-Dha
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-secondary">
            Real-time indices, equities &amp; commodities — all in one
            beautifully simple app. Track markets, manage your portfolio, and
            execute trades on the go.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <DownloadButton />
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-[15px] font-semibold text-foreground transition hover:border-primary/40 hover:bg-primary-muted"
            >
              Learn more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid w-full max-w-md grid-cols-3 gap-6">
            <Stat value="50+" label="Instruments" />
            <Stat value="Real‑time" label="Market data" />
            <Stat value="Free" label="To use" />
          </div>
        </div>
      </section>

      {/* ───── Features ───── */}
      <section id="features" className="bg-card/50 py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Everything you need to trade
            </h2>
            <p className="mt-4 text-text-secondary max-w-lg mx-auto">
              Packed with powerful features, wrapped in a clean interface.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
              }
              title="Live Market Data"
              description="Real-time prices for indices, equities, and commodities with instant updates."
            />
            <FeatureCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              }
              title="Interactive Charts"
              description="Professional candlestick and area charts with multiple timeframes to spot trends."
            />
            <FeatureCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              }
              title="Fund Management"
              description="Deposit and withdraw seamlessly with UPI integration and real-time balance tracking."
            />
            <FeatureCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
              }
              title="Orders & Ledger"
              description="Complete order history, position tracking, and downloadable CSV ledger reports."
            />
            <FeatureCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              }
              title="Secure & Private"
              description="Encrypted authentication, secure document uploads, and admin-approved accounts."
            />
            <FeatureCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
              }
              title="Watchlist & Alerts"
              description="Create custom watchlists and stay on top of the instruments that matter to you."
            />
          </div>
        </div>
      </section>

      {/* ───── How It Works ───── */}
      <section id="how-it-works" className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Get started in minutes
            </h2>
            <p className="mt-4 text-text-secondary max-w-lg mx-auto">
              Three simple steps to start trading.
            </p>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {[
              {
                step: "1",
                title: "Download the APK",
                desc: "Tap the download button to get the latest version on your Android device.",
              },
              {
                step: "2",
                title: "Register & get approved",
                desc: "Submit your details and documents. Admin reviews and emails your credentials.",
              },
              {
                step: "3",
                title: "Start trading",
                desc: "Sign in, fund your account via UPI, and trade live markets instantly.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-2xl font-bold text-white">
                  {item.step}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Download CTA ───── */}
      <section id="download" className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-dark px-8 py-16 text-center text-white sm:px-16 lg:py-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12),transparent_60%)]" />
            <div className="relative">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Ready to trade?
              </h2>
              <p className="mx-auto mt-4 max-w-md text-white/80">
                Download Zero-Dha now and experience the markets like never
                before. Free to use, no hidden fees.
              </p>
              <div className="mt-10">
                <a
                  href={APK_URL}
                  className="inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-4 text-[15px] font-bold text-primary shadow-lg transition hover:bg-white/90 active:scale-[0.97]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download APK for Android
                </a>
              </div>
              <p className="mt-4 text-xs text-white/50">
                Android 8.0+ required &middot; ~15 MB
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Footer ───── */}
      <footer className="border-t border-border bg-card/50">
        <div className="mx-auto max-w-6xl px-5 py-10">
          <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-xs font-bold text-white">
                  Z
                </div>
                <span className="text-sm font-semibold text-foreground">
                  Zero-Dha
                </span>
              </div>
              <p className="text-xs text-text-secondary">
                &copy; {new Date().getFullYear()} Zero-Dha. All rights reserved.
              </p>
            </div>
            <div className="flex flex-col gap-2 text-sm">
              <p className="font-semibold text-foreground">Contact &amp; Support</p>
              <a
                href="mailto:zerodhha@gmail.com"
                className="text-text-secondary transition hover:text-primary"
              >
                zerodhha@gmail.com
              </a>
              <a
                href="tel:+919329298523"
                className="text-text-secondary transition hover:text-primary"
              >
                +91 93292 98523
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
