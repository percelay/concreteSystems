import Link from "next/link";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="bg-slate-dark text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Logo className="h-10 w-10" />
              <div>
                <p className="font-bold text-white text-lg leading-tight">CSI Concrete Systems, Inc.</p>
                <p className="text-xs text-gray-400">The Power of Precision Precast</p>
              </div>
            </div>
            <address className="not-italic text-sm space-y-1">
              <p>9 Commercial Street</p>
              <p>Hudson, New Hampshire 03051</p>
              <p className="mt-3">
                <a href="tel:1-800-342-3374" className="text-safety-orange hover:text-safety-orange-light font-semibold">
                  1-800-342-3374
                </a>
              </p>
            </address>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-safety-orange transition-colors">Home</Link></li>
              <li><Link href="/divisions" className="hover:text-safety-orange transition-colors">Our Divisions</Link></li>
              <li><Link href="/solutions" className="hover:text-safety-orange transition-colors">Solutions</Link></li>
              <li><Link href="/case-studies/la-metro-purple-line" className="hover:text-safety-orange transition-colors">Case Studies</Link></li>
            </ul>
          </div>

          {/* Divisions */}
          <div>
            <h3 className="text-white font-semibold mb-4">Strategic Divisions</h3>
            <ul className="space-y-2 text-sm">
              <li>CSI Tunnel Systems</li>
              <li>CLECO Manufacturing</li>
              <li>Universal Uwall&trade;</li>
              <li>Clampcrete Construction</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>104,000 sq. ft. production facility on a 25-acre complex &bull; Hudson, NH</p>
          <p className="mt-2">&copy; {new Date().getFullYear()} CSI Concrete Systems, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
