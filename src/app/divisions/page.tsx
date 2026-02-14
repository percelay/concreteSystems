import type { Metadata } from "next";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export const metadata: Metadata = {
  title: "Our Divisions | CSI Concrete Systems",
  description:
    "CSI's four strategic divisions: Tunnel Systems, CLECO Manufacturing, Universal Uwall, and CSI Marine — delivering vertically integrated precast concrete solutions.",
};

const divisions = [
  {
    id: "tunnel",
    name: "CSI Tunnel Systems",
    tagline: "Precision Precast Concrete Tunnel Liners (PCTL)",
    description:
      "CSI Tunnel Systems specializes in Precision Precast Concrete Tunnel Liners (PCTL) for mass transit, water conveyance, and utility tunnels. Our tunnel segments are manufactured to sub-millimeter tolerances using state-of-the-art automated carousel plants designed by our own CLECO Manufacturing division.",
    highlights: [
      "Mass transit tunnel liners",
      "Water conveyance systems",
      "Utility tunnel infrastructure",
      "Sub-millimeter manufacturing precision",
    ],
  },
  {
    id: "cleco",
    name: "CLECO Manufacturing",
    tagline: "The Engineering Arm of CSI",
    description:
      "CLECO Manufacturing is the engineering arm of CSI. CLECO designs and manufactures steel forms, automated carousel plants, and custom material handling systems. This in-house engineering capability is the backbone of CSI's vertical integration — ensuring every mold and production system is purpose-built for precision.",
    highlights: [
      "Steel form design & manufacturing",
      "Automated carousel plants",
      "Custom material handling systems",
      "Purpose-built production tooling",
    ],
  },
  {
    id: "uwall",
    name: "Universal Uwall\u2122",
    tagline: "Advanced Modular Retaining Wall Systems",
    description:
      "Universal Uwall\u2122 delivers advanced modular retaining wall systems for commercial and infrastructure projects. The Uwall system provides engineers and contractors with a versatile, cost-effective solution for earth retention challenges across a wide range of project scales.",
    highlights: [
      "Commercial retaining wall solutions",
      "Infrastructure-grade wall systems",
      "Modular design for versatile applications",
      "Engineered for long-term performance",
    ],
  },
  {
    id: "marine",
    name: "CSI Marine, LLC",
    tagline: "Specialized Marine Precast",
    description:
      "CSI Marine, LLC provides specialized marine precast for piers, breakwaters, and coastal defense. Our marine-grade precast products are designed to withstand the harshest saltwater environments while providing reliable, long-lasting structural performance.",
    highlights: [
      "Pier construction",
      "Breakwater systems",
      "Coastal defense structures",
      "Marine-grade concrete engineering",
    ],
  },
];

export default function DivisionsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-slate-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-safety-orange font-semibold text-sm uppercase tracking-widest mb-3">
            Our Group
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Strategic Divisions</h1>
          <p className="text-gray-300 text-lg max-w-3xl">
            Four specialized divisions under one roof. CSI&apos;s vertically integrated
            structure means every division contributes to a seamless chain — from
            engineering the forms to pouring the final product.
          </p>
        </div>
      </section>

      {/* Division Sections */}
      {divisions.map((division, index) => (
        <section
          key={division.id}
          id={division.id}
          className={`py-16 ${index % 2 === 1 ? "bg-gray-50" : "bg-white"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <ImagePlaceholder label={division.name} />
              </div>
              <div className={index % 2 === 1 ? "md:order-1" : ""}>
                <p className="text-safety-orange font-semibold text-sm uppercase tracking-widest mb-2">
                  {division.tagline}
                </p>
                <h2 className="text-3xl font-bold text-slate-dark mb-4">
                  {division.name}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {division.description}
                </p>
                <ul className="space-y-2">
                  {division.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-safety-orange font-bold mt-0.5">&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
