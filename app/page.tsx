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
            <div className="photo-paper aspect-[3/4]">
              <img
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=700&q=80"
                alt="Mature landscaped property"
              />
              <div className="absolute bottom-0 left-0 right-0 px-3 py-3 flex items-center justify-between text-xs">
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
              <div data-reveal className="eyebrow">I · Our Work</div>
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
              { n: 'I',   t: 'Lawn Maintenance',          d: 'Weekly or biweekly mowing and edging.' },
              { n: 'II',  t: 'Landscape Design',          d: 'Full installations, planting plans.' },
              { n: 'III', t: 'Garden Beds & Curbing',     d: 'Bed shaping, mulch, ornamental rock.' },
              { n: 'IV',  t: 'Sod & Plantings',           d: 'Lawn replacement and new plantings.' },
              { n: 'V',   t: 'Tree & Palm Service',       d: 'Trimming and removal.' },
              { n: 'VI',  t: 'HOA & Community Contracts', d: 'Multi-property maintenance.' },
            ].map((s, i) => (
              <div key={s.t} data-reveal style={{ ['--reveal-delay' as any]: `${i * 80}ms` }}
                className="svc-line py-6 grid grid-cols-12 gap-4 items-baseline hairline">
                <div className="col-span-1 numeral text-terra-700 text-xl italic">{s.n}</div>
                <div className="col-span-5 font-display font-semibold text-xl text-forest-900">{s.t}</div>
                <div className="col-span-6 serif-body italic text-umber-500">{s.d}</div>
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
            <div data-reveal className="eyebrow !text-terra-300">II · The Family</div>
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
          <div data-reveal className="eyebrow text-center">III · Communities</div>
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
          <div data-reveal className="eyebrow text-center">IV · From Customers</div>
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
        <div className="max-w-6xl mx-auto px-6 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { n: '27+', l: 'YEARS IN SPRING HILL' },
            { n: 'A+',  l: 'BBB · SINCE 2009' },
            { n: 'The', l: 'RADO BROTHERS' },
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
            <div data-reveal className="eyebrow !text-terra-300">V · Quote Request</div>
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
