import type { Metadata } from "next";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export const metadata: Metadata = {
  title: "LA Metro Purple Line (Segment 2) | CSI Concrete Systems",
  description:
    "Case Study: CSI manufactured thousands of Precision Precast Concrete Tunnel Liner segments for the LA Metro Purple Line Segment 2 — critical infrastructure for Los Angeles mass transit.",
};

export default function LAMetroCaseStudy() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-dark text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-safety-orange font-semibold text-sm uppercase tracking-widest mb-3">
            Case Study
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            LA Metro Purple Line
          </h1>
          <p className="text-2xl text-gray-300 mb-6">Segment 2</p>
          <p className="text-gray-400 text-lg max-w-3xl">
            Critical infrastructure for Los Angeles&apos;s primary mass transit
            expansion — powered by CSI&apos;s precision precast manufacturing.
          </p>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ImagePlaceholder label="LA Metro Purple Line Project" />
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Stat Cards */}
            {[
              { label: "Scope", value: "Thousands of PCTL Segments" },
              { label: "Technology", value: "Automated Carousel Plant" },
              { label: "Precision", value: "Sub-Millimeter Tolerances" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center"
              >
                <p className="text-safety-orange font-semibold text-sm uppercase tracking-widest mb-2">
                  {stat.label}
                </p>
                <p className="text-xl font-bold text-slate-dark">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Project Scope */}
            <div>
              <h2 className="text-2xl font-bold text-slate-dark mb-4">
                Project Scope
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                CSI was contracted to manufacture thousands of Precision Precast
                Concrete Tunnel Liner (PCTL) segments for the LA Metro Purple Line
                Segment 2. This project represents one of the most significant mass
                transit infrastructure investments in Los Angeles history.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Each tunnel liner segment had to meet exacting specifications to
                ensure the structural integrity and alignment of the tunnel bore. The
                scale and precision requirements of this project demanded a
                manufacturing partner with full vertical integration capabilities.
              </p>
            </div>

            {/* Image */}
            <div>
              <ImagePlaceholder label="PCTL Segment Manufacturing" />
            </div>
          </div>
        </div>
      </section>

      {/* Technology Highlight */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <ImagePlaceholder label="CLECO Automated Carousel Plant" />
            </div>
            <div>
              <p className="text-safety-orange font-semibold text-sm uppercase tracking-widest mb-2">
                Technology Highlight
              </p>
              <h2 className="text-2xl font-bold text-slate-dark mb-4">
                State-of-the-Art Automated Carousel Plant
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The PCTL segments for the Purple Line were manufactured using a
                state-of-the-art automated carousel plant designed and built by CLECO
                Manufacturing — CSI&apos;s own engineering division.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                This carousel system enables sub-millimeter precision in every
                segment, ensuring each piece fits seamlessly into the tunnel ring
                assembly. The automated process delivers consistent quality at the
                production volumes required by a project of this magnitude.
              </p>
              <p className="text-gray-600 leading-relaxed">
                This is the power of CSI&apos;s vertical integration in action: CLECO
                engineers the production system, and CSI Tunnel Systems manufactures
                the product — all under one roof.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <p className="text-safety-orange font-semibold text-sm uppercase tracking-widest mb-2">
            Impact
          </p>
          <h2 className="text-2xl font-bold text-slate-dark mb-4">
            Building LA&apos;s Transit Future
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            The LA Metro Purple Line is critical infrastructure for Los Angeles&apos;s
            primary mass transit expansion. CSI&apos;s PCTL segments form the
            structural backbone of the tunnel system, ensuring safe, reliable
            transit service for decades to come. This project demonstrates
            CSI&apos;s ability to deliver at the intersection of scale, precision,
            and reliability.
          </p>
          <a
            href="tel:1-800-342-3374"
            className="inline-block bg-safety-orange text-white px-8 py-3 rounded font-semibold hover:bg-safety-orange-light transition-colors"
          >
            Discuss Your Project — 1-800-342-3374
          </a>
        </div>
      </section>
    </>
  );
}
