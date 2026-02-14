import Link from "next/link";
import Image from "next/image";

const divisions = [
  {
    name: "CSI Tunnel Systems",
    tagline: "Precision Precast Concrete Tunnel Liners",
    href: "http://www.csigroup.biz/tunnelsystems/",
    image: "/images/tunnel.jpg",
  },
  {
    name: "CLECO Manufacturing",
    tagline: "Steel Forms & Automated Carousel Plants",
    href: "http://www.clecoforms.com/",
    image: "/images/engineering.jpg",
  },
  {
    name: "Universal Uwall\u2122",
    tagline: "Advanced Modular Retaining Walls",
    href: "https://uwallsystems.com/",
    image: "/images/uwall.jpeg",
  },
  {
    name: "Clampcrete Construction",
    tagline: "The Future of Highway Safety",
    href: "http://www.clampcrete.com/",
    image: "/images/highway.jpg",
  },
];

export default function Home() {
  return (
    <>
      {/* Full-bleed Hero */}
      <section className="relative h-screen min-h-[600px] flex items-end bg-slate-dark overflow-hidden">
        <Image
          src="/images/new hero.jpg"
          alt="CSI Concrete Systems facility"
          fill
          className="object-cover object-top opacity-60"
          priority
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-dark via-slate-dark/40 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-20 md:pb-28 w-full">
          <p className="text-safety-orange text-[11px] uppercase tracking-[0.3em] font-semibold mb-6">
            Hudson, New Hampshire &mdash; Est. 1969
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] mb-8 max-w-4xl">
            The Power of
            <br />
            <span className="text-safety-orange">Precision</span>
            <br />
            Precast
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
            We design the molds. We build the batch plants. We manufacture the
            final structures. All under one roof &mdash; 104,000 sq. ft. of
            vertically integrated precast concrete production.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/solutions"
              className="bg-safety-orange text-white px-8 py-4 text-[13px] uppercase tracking-[0.15em] font-semibold hover:bg-safety-orange-light transition-colors"
            >
              Explore Solutions
            </Link>
            <a
              href="#divisions"
              className="border border-white/30 text-white/80 px-8 py-4 text-[13px] uppercase tracking-[0.15em] hover:border-safety-orange hover:text-safety-orange transition-all"
            >
              Our Divisions
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-white/40" />
        </div>
      </section>

      {/* Stat Bar */}
      <section className="bg-slate-mid border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "104K", label: "Sq. Ft. Facility" },
              { value: "25", label: "Acre Complex" },
              { value: "4", label: "Strategic Divisions" },
              { value: "50+", label: "Years of Expertise" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-safety-orange text-3xl md:text-4xl font-black">
                  {stat.value}
                </p>
                <p className="text-white/50 text-xs uppercase tracking-[0.2em] mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divisions — stacked editorial cards */}
      <section id="divisions" className="bg-slate-dark py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-safety-orange text-[11px] uppercase tracking-[0.3em] font-semibold mb-4">
              Our Group
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Strategic Divisions
            </h2>
          </div>

          <div className="space-y-6">
            {divisions.map((div, i) => (
              <a
                key={div.name}
                href={div.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="grid md:grid-cols-2 bg-slate-mid/50 border border-white/5 hover:border-safety-orange/30 transition-all overflow-hidden">
                  {/* Image — alternating sides */}
                  <div
                    className={`relative h-64 md:h-80 ${
                      i % 2 === 1 ? "md:order-2" : ""
                    }`}
                  >
                    <Image
                      src={div.image}
                      alt={div.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-dark/60 to-transparent" />
                  </div>

                  {/* Text */}
                  <div
                    className={`flex flex-col justify-center p-10 md:p-14 ${
                      i % 2 === 1 ? "md:order-1" : ""
                    }`}
                  >
                    <p className="text-safety-orange text-[11px] uppercase tracking-[0.3em] font-semibold mb-3">
                      Division 0{i + 1}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-safety-orange transition-colors">
                      {div.name}
                    </h3>
                    <p className="text-white/50 text-sm mb-6">{div.tagline}</p>
                    <span className="text-safety-orange text-[12px] uppercase tracking-[0.2em] flex items-center gap-2">
                      Visit Site
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Vertical Integration — full-width statement */}
      <section className="bg-warm-gray py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-safety-orange text-[11px] uppercase tracking-[0.3em] font-semibold mb-6">
            Why CSI
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-slate-dark leading-tight mb-8">
            One company. Every step of the process.
          </h2>
          <p className="text-slate-mid/70 text-lg md:text-xl leading-relaxed mb-12">
            From custom mold engineering at CLECO to precision manufacturing on
            the production floor, CSI controls the entire precast pipeline.
            That&apos;s not a supply chain &mdash; that&apos;s vertical integration.
          </p>
          <div className="grid grid-cols-3 gap-px bg-slate-dark/10 border border-slate-dark/10 overflow-hidden">
            {["Design the Molds", "Build the Plants", "Manufacture the Product"].map(
              (step, i) => (
                <div key={step} className="bg-warm-gray p-6 md:p-10">
                  <p className="text-safety-orange font-black text-2xl md:text-4xl mb-2">
                    0{i + 1}
                  </p>
                  <p className="text-slate-dark text-xs md:text-sm uppercase tracking-[0.15em] font-semibold">
                    {step}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-dark py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Ready to Build?
          </h2>
          <p className="text-white/50 mb-10 max-w-lg mx-auto">
            9 Commercial Street, Hudson, NH 03051
          </p>
          <a
            href="tel:1-800-342-3374"
            className="inline-block bg-safety-orange text-white px-10 py-5 text-[13px] uppercase tracking-[0.15em] font-semibold hover:bg-safety-orange-light transition-colors"
          >
            Call 1-800-342-3374
          </a>
        </div>
      </section>
    </>
  );
}
