"use client";

export default function Page() {
  return (
    <main className="min-h-screen">
      {/* ── Top bar ── */}
      <header className="border-b border-umber-700/15 bg-cream/85 backdrop-blur sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <LeafIcon className="w-7 h-7 text-forest-800 anim-drift" />
            <div>
              <div className="font-display font-semibold text-forest-900 text-lg leading-none">Rado</div>
              <div className="text-[0.65rem] text-umber-500 uppercase tracking-widest leading-none mt-1">Lawn Service · 1997</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-7 text-sm serif-body text-umber-700">
            <a href="#services" className="hover:text-forest-800 transition">Services</a>
            <a href="#heritage" className="hover:text-forest-800 transition">The Family</a>
            <a href="#hoa" className="hover:text-forest-800 transition">HOA</a>
            <a href="#contact" className="hover:text-forest-800 transition">Quote</a>
          </nav>
          <a
            href="tel:+17273790308"
            className="btn-terra bg-forest-900 text-cream px-4 py-2 text-sm font-display tracking-wide"
          >
            (727) 379-0308
          </a>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 anim-drift" aria-hidden="true">
          <LeafIcon className="w-full h-full text-forest-800/5" />
        </div>
        <div className="absolute bottom-10 left-10 w-40 h-40 anim-drift" style={{ animationDelay: '1.5s' }} aria-hidden="true">
          <LeafIcon className="w-full h-full text-terra-500/8" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 pt-20 md:pt-28 pb-24 md:pb-32 grid md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-7">
            <div className="anim-settle eyebrow" style={{ ['--anim-delay' as any]: '0ms' }}>
              The Rado Family · Spring Hill, FL · Since 1997
            </div>
            <h1 className="anim-settle mt-6 font-display font-semibold text-forest-900 text-5xl md:text-7xl leading-[0.98] tracking-tight"
                style={{ ['--anim-delay' as any]: '120ms' }}>
              Landscape design,<br />
              <span className="italic text-terra-700">lawn care,</span><br />
              and twenty-seven years.
            </h1>
            <div className="anim-hairline mx-0 mt-8 h-px bg-terra-500/60 w-48"
                 style={{ ['--anim-delay' as any]: '800ms' }} />
            <p className="anim-settle mt-7 max-w-xl serif-body text-umber-500 text-lg leading-relaxed"
               style={{ ['--anim-delay' as any]: '280ms' }}>
              The Rado brothers — Michele and Domenico — have been working
              the same Spring Hill neighborhoods since 1997. Lawn maintenance,
              full landscape design, tree work, and HOA contracts that have
              stayed with us year after year.
            </p>
            <div className="anim-settle mt-9 flex flex-wrap gap-3"
                 style={{ ['--anim-delay' as any]: '440ms' }}>
              <a href="tel:+17273790308" className="btn-forest bg-forest-900 text-cream px-7 py-3.5 font-display tracking-wide">
                Call (727) 379-0308
              </a>
              <a href="#contact" className="btn-terra border border-forest-900/25 text-forest-900 px-7 py-3.5 font-display tracking-wide bg-cream-100/40">
                Request a Quote
              </a>
            </div>
          </div>

          <div className="md:col-span-5 anim-settle" style={{ ['--anim-delay' as any]: '560ms' }}>
            <div className="photo-paper aspect-[3/4] overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=15422+County+Line+Rd,+Spring+Hill,+FL+34610&t=k&z=18&output=embed"
                className="block w-full h-full"
                style={{ border: 0, filter: 'saturate(0.9) contrast(0.95)' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Aerial view of Rado Lawn Service in Spring Hill, FL"
              />
              <div className="absolute bottom-0 left-0 right-0 px-3 py-3 flex items-center justify-between text-xs bg-cream/95">
                <span className="font-display italic text-umber-500">Spring Hill</span>
                <span className="font-display tracking-widest uppercase text-terra-700 text-[0.65rem]">Est. 1997</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Ornament divider ── */}
      <div className="max-w-3xl mx-auto px-6 py-6">
        <div className="ornament-divider">
          <LeafSpray className="w-12 h-12 text-terra-500/80" />
        </div>
      </div>

      {/* ── Services ── */}
      <section id="services" className="bg-cream">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
          <div className="grid md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-7">
              <div data-reveal className="eyebrow">Our Work</div>
              <h2 data-reveal className="mt-3 font-display font-semibold text-4xl md:text-6xl text-forest-900 leading-tight">
                What the brothers do.
              </h2>
            </div>
            <p data-reveal className="md:col-span-5 serif-body italic text-umber-500 leading-relaxed">
              From a single yard to a full community contract. Estimate is
              free; the work is what we&apos;re known for.
            </p>
          </div>
          <div data-reveal className="hairline-strong mt-8 max-w-md anim-hairline" />

          <div className="mt-12 grid md:grid-cols-2 gap-x-12 gap-y-2">
            {[
              { t: 'Lawn Maintenance',          d: 'Weekly or biweekly mowing and edging.' },
              { t: 'Landscape Design',          d: 'Full installations, planting plans.' },
              { t: 'Garden Beds & Curbing',     d: 'Bed shaping, mulch, ornamental rock.' },
              { t: 'Sod & Plantings',           d: 'Lawn replacement and new plantings.' },
              { t: 'Tree & Palm Service',       d: 'Trimming and removal.' },
              { t: 'HOA & Community Contracts', d: 'Multi-property maintenance.' },
            ].map((s, i) => (
              <div key={s.t} data-reveal style={{ ['--reveal-delay' as any]: `${i * 80}ms` }}
                className="svc-line py-6 grid grid-cols-12 gap-4 items-baseline hairline">
                <div className="col-span-5 font-display font-semibold text-xl text-forest-900">{s.t}</div>
                <div className="col-span-7 serif-body italic text-umber-500">{s.d}</div>
              </div>
            ))}
            <div className="hairline col-span-full" />
          </div>
        </div>
      </section>

      {/* ── The Rado Family Heritage ── */}
      <section id="heritage" className="bg-forest-900 text-cream relative overflow-hidden">
        <div className="absolute top-10 right-10 w-96 h-96 opacity-10 anim-drift" aria-hidden="true">
          <LeafIcon className="w-full h-full text-terra-300" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-28 grid md:grid-cols-12 gap-14 items-start">
          <div className="md:col-span-5">
            <div data-reveal className="eyebrow !text-terra-300">The Family</div>
            <h2 data-reveal className="mt-5 font-display font-semibold text-5xl md:text-6xl text-cream leading-[1.02]">
              <span className="italic">Michele</span> &amp;<br /><span className="italic">Domenico.</span>
            </h2>
            <div data-reveal className="anim-leaf mt-7" style={{ ['--anim-delay' as any]: '300ms' }}>
              <span className="heritage-stamp !text-terra-300 !border-terra-300">SINCE MCMXCVII · 1997</span>
            </div>
          </div>
          <div className="md:col-span-7">
            <p data-reveal className="serif-body text-cream/85 text-lg leading-relaxed">
              Rado Lawn Service was founded in 1997 by Michele and Domenico
              Rado — two brothers who came to Spring Hill and built the
              business one yard at a time. Twenty-seven years on, we&apos;re
              still working the same neighborhoods, with a full crew and
              multiple community contracts that have stayed with us year
              after year.
            </p>
            <p data-reveal style={{ ['--reveal-delay' as any]: '120ms' }} className="mt-5 serif-body italic text-cream/70 text-lg leading-relaxed">
              The customers who recommend us, recommend &quot;Mike and the
              crew.&quot; That&apos;s how a family business stays put.
            </p>

            <div data-reveal style={{ ['--reveal-delay' as any]: '240ms' }} className="mt-10 grid grid-cols-3 gap-6">
              <Stat n="27+" l="YEARS" />
              <Stat n="A+"  l="BBB RATED" />
              <Stat n="20+" l="ON CREW" />
            </div>
          </div>
        </div>
      </section>

      {/* ── HOA & Community Contracts ── */}
      <section id="hoa" className="bg-cream">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-24">
          <div className="ornament-divider mb-8">
            <LeafSpray className="w-10 h-10 text-terra-500" />
          </div>
          <div data-reveal className="eyebrow text-center">Communities</div>
          <h2 data-reveal className="mt-4 text-center font-display font-semibold text-4xl md:text-5xl text-forest-900 leading-tight">
            HOA &amp; community contracts.
          </h2>
          <p data-reveal className="mt-7 text-center max-w-2xl mx-auto serif-body text-umber-500 text-lg leading-relaxed">
            Community-scale maintenance is its own discipline. HOAs vet vendors
            carefully — most of the contracts we hold, we&apos;ve held for years.
            We can do a single yard, or we can keep an entire neighborhood
            looking the way it&apos;s supposed to.
          </p>
        </div>
      </section>

      {/* ── Reviews ── */}
      <section className="bg-cream-200/50">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div data-reveal className="eyebrow text-center">From Customers</div>
          <div className="mt-10 grid md:grid-cols-2 gap-8">
            {[
              { q: "Mike and his crew are always reliable — they ALWAYS take care of anything we ask within a week.", a: 'Google review' },
              { q: "We constantly receive compliments on our landscape — that's all thanks to Mike and the crew.",     a: 'Google review' },
            ].map((r, i) => (
              <blockquote key={r.q} data-reveal style={{ ['--reveal-delay' as any]: `${i * 140}ms` }}
                className="bg-cream border border-umber-700/12 p-8 relative">
                <div className="absolute -top-3 left-6 px-3 bg-cream-200 font-display italic text-terra-700 text-2xl">&ldquo;</div>
                <div className="serif-body italic text-forest-900 text-xl leading-snug">{r.q}</div>
                <div className="mt-5 eyebrow !text-umber-500 !text-[0.65rem]">— {r.a}</div>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust signals ── */}
      <section className="bg-cream">
        <div className="max-w-6xl mx-auto px-6 py-14 grid sm:grid-cols-3 gap-6">
          {[
            { n: '27+', l: 'YEARS IN SPRING HILL' },
            { n: 'A+',  l: 'BBB · SINCE 2009' },
            { n: 'HOA', l: '& COMMUNITY' },
          ].map((s, i) => (
            <div key={s.l} data-reveal style={{ ['--reveal-delay' as any]: `${i * 90}ms` }}
              className="border-l-2 border-terra-500/60 pl-5 py-2">
              <div className="numeral text-4xl text-forest-900 italic">{s.n}</div>
              <div className="mt-2 eyebrow !text-[0.65rem]">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Service Area & Contact ── */}
      <section id="contact" className="bg-forest-900 text-cream">
        <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div data-reveal className="eyebrow !text-terra-300">Quote Request</div>
            <h2 data-reveal className="mt-3 font-display font-semibold text-4xl md:text-5xl text-cream leading-tight">
              Tell us about your property.
            </h2>
            <p data-reveal className="mt-5 serif-body text-cream/80 leading-relaxed max-w-md">
              Family-owned and operated. Call for the fastest response —
              <a href="tel:+17273790308" className="underline decoration-terra-300 underline-offset-4 ml-1">(727) 379-0308</a>.
            </p>
            <dl data-reveal className="mt-8 space-y-3 text-sm">
              <Row label="ADDRESS" value="15422 County Line Rd, Ste 101 · Spring Hill, FL 34610" />
              <Row label="HOURS"   value="Mon–Fri · 8:30am–4:30pm" />
              <Row label="EMAIL"   value="radolawn@gmail.com" href="mailto:radolawn@gmail.com" />
            </dl>
          </div>

          <form onSubmit={(e) => e.preventDefault()} data-reveal className="md:col-span-7 grid sm:grid-cols-2 gap-4 border border-terra-300/20 p-6 md:p-8 bg-forest-800/30">
            <input className="field !bg-cream/10 !text-cream placeholder:!text-cream/50 !border-cream/30" placeholder="Name" />
            <input className="field !bg-cream/10 !text-cream placeholder:!text-cream/50 !border-cream/30" placeholder="Phone" />
            <input className="field sm:col-span-2 !bg-cream/10 !text-cream placeholder:!text-cream/50 !border-cream/30" placeholder="Property address" />
            <select className="field sm:col-span-2 !bg-cream/10 !text-cream !border-cream/30">
              <option>Type of service</option>
              <option>Lawn maintenance</option>
              <option>Landscape design</option>
              <option>Tree / palm service</option>
              <option>HOA / community</option>
              <option>Other</option>
            </select>
            <textarea rows={4} className="field sm:col-span-2 !bg-cream/10 !text-cream placeholder:!text-cream/50 !border-cream/30" placeholder="What do you need?" />
            <button type="submit" className="btn-terra sm:col-span-2 bg-terra-500 text-cream px-6 py-4 font-display tracking-wide text-sm uppercase">
              Request Quote
            </button>
          </form>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-cream-200/60 border-t border-umber-700/15">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row gap-3 md:gap-6 md:items-center justify-between">
          <div className="font-display font-semibold text-forest-900 text-lg italic">
            Rado Lawn Service
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm serif-body text-umber-500">
            <span>Spring Hill · FL</span>
            <a href="tel:+17273790308" className="hover:text-forest-900">(727) 379-0308</a>
            <span>The Rado Family</span>
            <span>Since 1997</span>
          </div>
          <div className="text-xs text-umber-300 uppercase tracking-widest">
            © {new Date().getFullYear()} · WebSuite Digital
          </div>
        </div>
      </footer>
    </main>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div className="border-l border-terra-300/60 pl-4">
      <div className="numeral text-4xl text-terra-300 italic">{n}</div>
      <div className="mt-1 eyebrow !text-cream/60 !text-[0.65rem]">{l}</div>
    </div>
  );
}

function Row({ label, value, href }: { label: string; value: string; href?: string }) {
  return (
    <div className="grid grid-cols-4 items-baseline gap-3 border-b border-cream/15 pb-3">
      <dt className="eyebrow !text-terra-300 !text-[0.65rem]">{label}</dt>
      <dd className="col-span-3 serif-body text-cream/85">
        {href ? <a href={href} className="hover:text-terra-300 transition">{value}</a> : value}
      </dd>
    </div>
  );
}

/**
 * Hero illustration: an established Italian-family Florida property.
 * Mediterranean villa silhouette, mature palms, lush striped lawn, terracotta accents.
 * Rado brand palette: forest green / cream / terracotta / umber.
 */
function RadoHero() {
  return (
    <svg
      viewBox="0 0 400 533"
      preserveAspectRatio="xMidYMid slice"
      className="block w-full h-full"
      role="img"
      aria-label="An established Florida property cared for by the Rado family since 1997"
    >
      <defs>
        <linearGradient id="rd-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"  stopColor="#F5EFD9" />
          <stop offset="55%" stopColor="#EFE5C5" />
          <stop offset="100%" stopColor="#E2D2A6" />
        </linearGradient>
        <linearGradient id="rd-lawn" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"  stopColor="#3D6240" />
          <stop offset="100%" stopColor="#1F3D2B" />
        </linearGradient>
        <radialGradient id="rd-sun" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%"  stopColor="#E6BC93" />
          <stop offset="60%" stopColor="#C68A6F" />
          <stop offset="100%" stopColor="#C68A6F" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* sky */}
      <rect width="400" height="280" fill="url(#rd-sky)" />

      {/* soft sun */}
      <circle cx="80" cy="100" r="55" fill="url(#rd-sun)" opacity="0.85" />
      <circle cx="80" cy="100" r="18" fill="#C68A6F" opacity="0.5" />

      {/* distant cypress / oak treeline */}
      <path
        d="M0 235 Q 30 200 70 225 Q 110 195 160 225 Q 210 210 260 230 Q 310 215 360 230 L 400 232 L 400 280 L 0 280 Z"
        fill="#3D6240" opacity="0.45"
      />

      {/* MEDITERRANEAN VILLA — set back, terracotta roof */}
      <g transform="translate(165, 200)">
        {/* tile roof */}
        <polygon points="0,28 40,8 80,28" fill="#A65A3F" />
        <polygon points="0,28 80,28 80,32 0,32" fill="#7E4128" />
        {/* roof tiles texture */}
        <line x1="6"  y1="24" x2="6"  y2="18" stroke="#7E4128" strokeWidth="1" />
        <line x1="14" y1="20" x2="14" y2="14" stroke="#7E4128" strokeWidth="1" />
        <line x1="22" y1="16" x2="22" y2="10" stroke="#7E4128" strokeWidth="1" />
        <line x1="58" y1="16" x2="58" y2="10" stroke="#7E4128" strokeWidth="1" />
        <line x1="66" y1="20" x2="66" y2="14" stroke="#7E4128" strokeWidth="1" />
        <line x1="74" y1="24" x2="74" y2="18" stroke="#7E4128" strokeWidth="1" />
        {/* villa body — cream stucco */}
        <rect x="4" y="32" width="72" height="38" fill="#EAE0C6" />
        <rect x="4" y="32" width="72" height="38" fill="rgba(58,42,31,0.04)" />
        {/* arched door */}
        <path d="M34 70 L 34 56 A 6 6 0 0 1 46 56 L 46 70 Z" fill="#3A2A1F" />
        {/* windows with shutters */}
        <rect x="12" y="44" width="10" height="12" fill="#3A2A1F" opacity="0.85" />
        <rect x="58" y="44" width="10" height="12" fill="#3A2A1F" opacity="0.85" />
        {/* shutters */}
        <rect x="8"  y="44" width="3" height="12" fill="#A65A3F" />
        <rect x="23" y="44" width="3" height="12" fill="#A65A3F" />
        <rect x="54" y="44" width="3" height="12" fill="#A65A3F" />
        <rect x="69" y="44" width="3" height="12" fill="#A65A3F" />
      </g>

      {/* TALL PALM left foreground */}
      <g transform="translate(60, 200)">
        <path d="M0 90 Q 2 50 -1 0" stroke="#3A2A1F" strokeWidth="4" fill="none" />
        <path d="M-1 2 Q -28 -10 -42 -2"   stroke="#1F3D2B" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M-1 2 Q  26 -10  44 -2"   stroke="#1F3D2B" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M-1 0 Q -22 -28 -16 -38"  stroke="#1F3D2B" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M-1 0 Q  20 -28  14 -38"  stroke="#1F3D2B" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M-1 -2 Q  -4 -30  2 -42"  stroke="#1F3D2B" strokeWidth="4" fill="none" strokeLinecap="round" />
      </g>

      {/* TALL PALM right foreground */}
      <g transform="translate(346, 218)">
        <path d="M0 80 Q -2 40 1 0" stroke="#3A2A1F" strokeWidth="4" fill="none" />
        <path d="M1 2 Q -24 -8 -38 0"    stroke="#1F3D2B" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M1 2 Q  22 -10  38 -4"  stroke="#1F3D2B" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M1 0 Q -18 -26 -14 -36" stroke="#1F3D2B" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M1 0 Q  18 -28  10 -38" stroke="#1F3D2B" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M1 -2 Q  0 -30  6 -42"  stroke="#1F3D2B" strokeWidth="4" fill="none" strokeLinecap="round" />
      </g>

      {/* hedge row in front of villa */}
      <g>
        <ellipse cx="170" cy="278" rx="14" ry="9" fill="#2A4A30" />
        <ellipse cx="195" cy="280" rx="16" ry="10" fill="#2A4A30" />
        <ellipse cx="222" cy="278" rx="14" ry="9" fill="#2A4A30" />
        <ellipse cx="248" cy="280" rx="14" ry="9" fill="#2A4A30" />
      </g>

      {/* LAWN — foreground, fills lower section */}
      <rect x="0" y="280" width="400" height="253" fill="url(#rd-lawn)" />

      {/* mowed stripes */}
      <g>
        <polygon points="0,280 400,280 400,300 0,300" fill="rgba(255,255,255,0.045)" />
        <polygon points="0,320 400,320 400,344 0,344" fill="rgba(255,255,255,0.045)" />
        <polygon points="0,366 400,366 400,394 0,394" fill="rgba(255,255,255,0.045)" />
        <polygon points="0,418 400,418 400,448 0,448" fill="rgba(255,255,255,0.045)" />
        <polygon points="0,476 400,476 400,510 0,510" fill="rgba(255,255,255,0.045)" />
      </g>

      {/* curved garden bed border */}
      <path d="M 0 320 Q 100 295 200 318 T 400 320 L 400 330 Q 200 308 0 332 Z" fill="#A65A3F" opacity="0.6" />

      {/* small flowering plants on bed border */}
      {[40, 120, 200, 280, 360].map((cx, i) => (
        <g key={i}>
          <circle cx={cx} cy={i === 2 ? 313 : 318} r="3.5" fill="#C68A6F" />
          <circle cx={cx + 4} cy={i === 2 ? 316 : 321} r="2.5" fill="#A65A3F" />
        </g>
      ))}

      {/* tiny grass blade silhouettes at the bottom edge */}
      <g fill="#142819">
        {Array.from({ length: 80 }).map((_, i) => (
          <rect key={i} x={i * 5 + (i % 2 ? 1 : 0)} y={528 - (i % 4)} width="1.3" height={(i % 3) + 4} />
        ))}
      </g>
    </svg>
  );
}

function LeafIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="currentColor" className={className} aria-hidden="true">
      <path d="M52 12C36 14 18 22 14 36c-2 8 2 14 8 16 0-12 8-22 22-30 0 14-8 22-18 26 12 0 22-8 26-22 2-8 0-14 0-14z" />
    </svg>
  );
}

function LeafSpray({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className={className} aria-hidden="true">
      <path d="M32 56V20" />
      <path d="M32 36C24 32 18 26 16 18c8 2 14 6 18 14" fill="currentColor" fillOpacity="0.15" />
      <path d="M32 36c8-4 14-10 16-18-8 2-14 6-18 14" fill="currentColor" fillOpacity="0.15" />
      <path d="M32 24c-5-3-9-7-11-12 5 2 9 5 12 10" fill="currentColor" fillOpacity="0.15" />
      <path d="M32 24c5-3 9-7 11-12-5 2-9 5-12 10" fill="currentColor" fillOpacity="0.15" />
    </svg>
  );
}
