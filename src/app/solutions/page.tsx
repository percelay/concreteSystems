import type { Metadata } from "next";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export const metadata: Metadata = {
  title: "Products & Solutions | CSI Concrete Systems",
  description:
    "CSI's complete precast concrete product catalog — utility infrastructure, transportation systems, specialized storage, and retaining walls.",
};

const categories = [
  {
    name: "Utility Infrastructure",
    description:
      "Essential precast components for underground utility networks and municipal infrastructure.",
    products: [
      {
        name: "Manholes",
        description: "Precast concrete manholes for sewer, storm, and utility access.",
      },
      {
        name: "Catch Basins",
        description: "Storm water catch basins engineered for durability and flow efficiency.",
      },
      {
        name: "Utility Vaults",
        description: "Underground vaults for electrical, telecom, and utility housing.",
      },
      {
        name: "Custom Containment",
        description: "Custom-engineered containment structures for specialized applications.",
      },
    ],
  },
  {
    name: "Transportation",
    description:
      "Precast solutions for bridges, highways, and transportation corridor infrastructure.",
    products: [
      {
        name: "CON/SPAN Bridge Systems",
        description:
          "Precast concrete bridge systems for rapid deployment and long-term structural performance.",
      },
      {
        name: "Box Culverts",
        description: "Precast box culverts for water crossings and grade separations.",
      },
      {
        name: "Permanent Barriers",
        description: "Precast highway and median barriers for permanent traffic management.",
      },
      {
        name: "Temporary Barriers",
        description: "Relocatable precast barriers for construction zones and traffic control.",
      },
    ],
  },
  {
    name: "Specialized Storage",
    description:
      "Engineered storage systems for fuel, water, and hazardous material containment.",
    products: [
      {
        name: "ARMOR CAST (Aboveground)",
        description:
          "Aboveground precast storage tank systems for fuel, water, and chemical storage.",
      },
      {
        name: "ARMOR VAULT (Below-grade)",
        description:
          "Below-grade precast vault systems for secure, underground storage applications.",
      },
    ],
  },
  {
    name: "Retaining Walls",
    description:
      "Engineered wall systems for earth retention in commercial and infrastructure projects.",
    products: [
      {
        name: "T-Wall Retaining Wall Systems",
        description:
          "Gravity-based T-shaped retaining wall systems for heavy-duty earth retention.",
      },
      {
        name: "EcoWall",
        description:
          "Environmentally integrated retaining wall systems with vegetation-friendly design.",
      },
    ],
  },
];

export default function SolutionsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-slate-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-safety-orange font-semibold text-sm uppercase tracking-widest mb-3">
            Products &amp; Solutions
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Built to Perform. Engineered to Last.
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl">
            From underground utility vaults to above-grade bridge systems, CSI&apos;s
            product catalog covers the full spectrum of precast concrete solutions.
          </p>
        </div>
      </section>

      {/* Product Categories */}
      {categories.map((category, catIndex) => (
        <section
          key={category.name}
          className={`py-16 ${catIndex % 2 === 1 ? "bg-gray-50" : "bg-white"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-slate-dark mb-3">
                {category.name}
              </h2>
              <p className="text-gray-600 max-w-2xl">{category.description}</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.products.map((product) => (
                <div
                  key={product.name}
                  className="border border-gray-200 rounded-lg overflow-hidden hover:border-safety-orange hover:shadow-lg transition-all"
                >
                  <ImagePlaceholder label={product.name} />
                  <div className="p-5">
                    <h3 className="font-bold text-slate-dark mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{product.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Contact CTA */}
      <section className="bg-safety-orange text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Need a Custom Solution?
          </h2>
          <p className="mb-6 text-white/90 max-w-xl mx-auto">
            CSI&apos;s vertical integration means we can engineer custom precast
            products tailored to your project specifications.
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
