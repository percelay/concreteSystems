import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";

const divisions = [
  {
    name: "CSI Tunnel Systems",
    description:
      "Specialized in Precision Precast Concrete Tunnel Liners (PCTL). Key focus: Mass transit, water conveyance, and utility tunnels.",
    href: "/divisions#tunnel",
  },
  {
    name: "CLECO Manufacturing",
    description:
      "The engineering arm. Designs and manufactures steel forms, automated carousel plants, and custom material handling systems.",
    href: "/divisions#cleco",
  },
  {
    name: "Universal Uwall\u2122",
    description:
      "Advanced modular retaining wall systems for commercial and infrastructure projects.",
    href: "/divisions#uwall",
  },
  {
    name: "CSI Marine, LLC",
    description:
      "Specialized marine precast for piers, breakwaters, and coastal defense.",
    href: "/divisions#marine",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-slate-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-safety-orange font-semibold text-sm uppercase tracking-widest mb-4">
                CSI Concrete Systems, Inc.
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                The Power of{" "}
                <span className="text-safety-orange">Precision Precast</span>
              </h1>
              <p className="text-gray-300 text-lg mb-4 leading-relaxed">
                Vertical integration is our strength. CSI designs the molds, builds the
                batch plants, and manufactures the final concrete structures — all in-house
                at our 104,000 sq. ft. production facility on a 25-acre complex in Hudson,
                New Hampshire.
              </p>
              <p className="text-gray-400 text-sm mb-8">
                9 Commercial Street, Hudson, NH 03051
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/solutions"
                  className="bg-safety-orange text-white px-6 py-3 rounded font-semibold hover:bg-safety-orange-light transition-colors"
                >
                  Explore Solutions
                </Link>
                <Link
                  href="/divisions"
                  className="border border-gray-500 text-gray-300 px-6 py-3 rounded font-semibold hover:border-safety-orange hover:text-safety-orange transition-colors"
                >
                  Our Divisions
                </Link>
              </div>
            </div>
            <div>
              <ImagePlaceholder label="CSI Facility Aerial View" />
            </div>
          </div>
        </div>
      </section>

      {/* Division Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-dark mb-4">
              Strategic Divisions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Four specialized divisions working together to deliver comprehensive
              precast concrete solutions for infrastructure, marine, and commercial
              projects.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {divisions.map((div) => (
              <Link
                key={div.name}
                href={div.href}
                className="group border border-gray-200 rounded-lg p-6 hover:border-safety-orange hover:shadow-lg transition-all"
              >
                <ImagePlaceholder label={div.name} />
                <h3 className="text-lg font-bold mt-4 mb-2 group-hover:text-safety-orange transition-colors">
                  {div.name}
                </h3>
                <p className="text-gray-600 text-sm">{div.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-safety-orange text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Build with Precision?
          </h2>
          <p className="mb-6 text-white/90 max-w-xl mx-auto">
            From tunnel liners to marine structures, CSI delivers engineered precast
            solutions built to last.
          </p>
          <a
            href="tel:1-800-342-3374"
            className="inline-block bg-slate-dark text-white px-8 py-3 rounded font-semibold hover:bg-gray-800 transition-colors"
          >
            Call 1-800-342-3374
          </a>
        </div>
      </section>
    </>
  );
}
