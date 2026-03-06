"use client";

import { useEffect, useRef, useState } from "react";

const photos = [
  {
    src: "/IMG_0655.jpeg",
    alt: "Israel and Bella together outdoors",
    caption: "The kind of photo that never gets old.",
    size: "md:col-span-2",
  },
  {
    src: "/IMG_1474.jpeg",
    alt: "Bella with her dog",
    caption: "My two favorite girls.",
    size: "",
  },
  {
    src: "/IMG_4303.jpeg",
    alt: "A fun party moment",
    caption: "You look so amazing.",
    size: "",
  },
  {
    src: "/IMG_6155.jpeg",
    alt: "Dog portrait",
    caption: "A necessary appearance from the star of the house.",
    size: "md:col-span-2",
  },
];

function FadeIn({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.18 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transform transition-all duration-1000 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

function GlowOrb({ className }: { className: string }) {
  return <div className={`absolute rounded-full blur-3xl ${className}`} />;
}

export default function BellaBirthdayPage() {
  const [letterOpen, setLetterOpen] = useState(false);
  return (
    <>
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(18px) scale(0.985);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
      <main className="min-h-screen overflow-x-hidden bg-gradient-to-b from-sky-50 via-white to-blue-100 text-slate-900 selection:bg-cyan-300 selection:text-slate-950 scroll-smooth">
      <div className="fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(6,182,212,0.12),transparent_30%),linear-gradient(180deg,#ffffff_0%,#f0f7ff_50%,#e6f0ff_100%)]" />
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <GlowOrb className="left-[-6rem] top-20 h-72 w-72 bg-blue-500/20" />
        <GlowOrb className="right-[-4rem] top-40 h-80 w-80 bg-cyan-400/15" />
        <GlowOrb className="bottom-10 left-1/3 h-72 w-72 bg-sky-300/10" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:44px_44px] opacity-[0.18]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/45 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a
            href="#home"
            className="text-[11px] font-semibold uppercase tracking-[0.35em] text-blue-700 sm:text-xs"
          >
            israellovesbella21.com
          </a>

          <div className="flex items-center gap-2 sm:gap-3">
            {[
              ["Letter", "#letter"],
              ["Gallery", "#gallery"],
              ["Address", "#first-kiss"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[11px] font-medium text-slate-700 transition hover:border-cyan-300/40 hover:bg-white/10 hover:text-slate-900 sm:px-4 sm:text-xs"
              >
                {label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <section
        id="home"
        className="relative mx-auto flex min-h-[100svh] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <FadeIn>
            <div className="max-w-3xl">
              <div className="inline-flex items-center rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-blue-700 sm:text-xs">
                Happy 21st Birthday Bella
              </div>

              <h1 className="mt-6 text-5xl font-black tracking-[-0.04em] text-slate-900 sm:text-7xl lg:text-8xl">
                <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">
                  <span className="bg-gradient-to-r from-slate-900 via-blue-600 to-blue-400 bg-clip-text text-transparent">Happy birthday my love</span>
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                I love you.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#letter"
                  className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_0_40px_rgba(34,211,238,0.25)] transition hover:-translate-y-0.5"
                >
                  Open the letter
                </a>
                <a
                  href="#gallery"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/5 px-6 py-3.5 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-white/10"
                >
                  Go to the photos
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={150}>
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-cyan-300/20 to-blue-600/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-md">
                <img
                  src="/IMG_0655.jpeg"
                  alt="Israel and Bella together"
                  className="h-[520px] w-full rounded-[1.5rem] object-cover object-center"
                />
                <div className="pointer-events-none absolute inset-x-3 bottom-3 rounded-b-[1.5rem] bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-6 pt-24">
                  <p className="text-sm uppercase tracking-[0.32em] text-blue-700/90"><span className="text-slate-500">Bella at 21</span></p>
                  <p className="mt-2 text-lg font-semibold text-slate-900"><span className="text-slate-500">Still the best person in every room.</span></p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <FadeIn>
          <div
            id="letter"
            className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-xl sm:p-10 lg:p-14"
          >
            <div className="mb-8 flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-blue-700">Letter</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  For Bella.
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-slate-400">
                The part that matters most.
              </p>
            </div>

            {!letterOpen ? (
              <button
                type="button"
                onClick={() => setLetterOpen(true)}
                className="group mx-auto flex w-full max-w-2xl flex-col items-center justify-center rounded-[2rem] border border-cyan-300/20 bg-gradient-to-br from-white/10 to-cyan-300/10 px-6 py-14 text-center transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/10"
              >
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-white/15 bg-white/10 text-2xl shadow-[0_0_30px_rgba(34,211,238,0.18)] transition group-hover:scale-105">
                  ✉
                </div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-blue-700">
                  Tap to open
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
                  Open your birthday letter
                </h3>
                <p className="mt-4 max-w-lg text-sm leading-7 text-slate-600 sm:text-base">
                  I wrote you something.
                </p>
              </button>
            ) : (
              <div className="animate-[fadeIn_0.7s_ease-out] mx-auto max-w-4xl text-pretty text-base leading-8 text-slate-700 sm:text-lg sm:leading-9">
              <p className="font-semibold text-slate-900">To Bella,</p>
              <p className="mt-5">Happy 21st Birthday. I love you very much, and I’m really trying to make sure this website works just as well on mobile as it does on a computer.</p>
              <p className="mt-5">I’m happy to have been part of more than 10% of your life. If love could be measured, I’d already be over 100%. Every day, every week, every month, and every birthday, that number keeps going up.</p>
              <p className="mt-5">Even though 110% is impossible, I already feel like I’m at 111%, and I’m predicting that tomorrow will be 112%.</p>
              <p className="mt-5">I would write a book for you, but my hand is broken, so this is the next best thing.</p>
              <p className="mt-5">This website is written predominantly in HTML because Here’s To My Love.</p>
              <p className="mt-5">No matter how many birthdays pass, I’ll always be grateful that I get to celebrate them with you.</p>
              <p className="mt-8 font-semibold text-slate-900">From,</p>
              <p className="font-semibold text-blue-700">Israel</p>
              </div>
            )}
          </div>
        </FadeIn>
      </section>

      <section id="gallery" className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-blue-700">Gallery</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                A few photos of us.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-slate-400">
              A few photos worth keeping in one place.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {photos.map((photo, index) => (
            <FadeIn key={photo.src} delay={index * 120}>
              <div
                className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-3 shadow-xl backdrop-blur-md ${photo.size}`}
              >
                <div className="relative overflow-hidden rounded-[1.4rem]">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-[1.03] sm:h-[430px]"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-transparent px-5 pb-5 pt-20">
                    <p className="text-sm font-medium text-slate-100">{photo.caption}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section id="first-kiss" className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="relative overflow-hidden rounded-[2rem] border border-cyan-300/15 bg-gradient-to-br from-[#0b1d38] via-[#0d2747] to-[#102f59] p-8 shadow-[0_0_60px_rgba(34,211,238,0.12)] sm:p-12">
            <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-cyan-300/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative max-w-3xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-blue-700">First Kiss Address</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                <span className="text-slate-400">One map pin. A lot behind it.</span>
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">
                <span className="text-slate-400">Some places stay ordinary forever. This one never will.</span>
              </p>
              <a
                href="https://maps.app.goo.gl/mYvEmV8ib7f8BBLi8"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-100"
              >
                Open the address
              </a>
            </div>
          </div>
        </FadeIn>
      </section>

      <footer className="border-t border-white/10 bg-slate-950/30 px-4 py-8 text-center text-sm text-slate-400 backdrop-blur-md">
        <span className="text-slate-800">Made by oceanaveconsulting.com</span>
      </footer>
    </main>
    </>
  );
}
