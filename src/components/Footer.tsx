import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-safety-orange font-black text-2xl tracking-tighter">
                CSI
              </span>
              <span className="text-white/40 text-[10px] uppercase tracking-[0.2em] leading-tight border-l border-white/10 pl-3">
                Concrete<br />Systems
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm mb-6">
              Vertically integrated precast concrete manufacturer. We design the
              molds, build the batch plants, and manufacture the final structures
              &mdash; all in-house.
            </p>
            <address className="not-italic text-white/30 text-xs uppercase tracking-[0.15em] space-y-1">
              <p>9 Commercial Street</p>
              <p>Hudson, New Hampshire 03051</p>
              <p className="mt-3">
                <a href="tel:1-800-342-3374" className="text-safety-orange hover:text-safety-orange-light transition-colors">
                  1-800-342-3374
                </a>
              </p>
            </address>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white/30 text-[10px] uppercase tracking-[0.3em] mb-6">
              Navigation
            </h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="text-white/50 hover:text-safety-orange transition-colors">Home</Link></li>
              <li><Link href="/divisions" className="text-white/50 hover:text-safety-orange transition-colors">Divisions</Link></li>
              <li><Link href="/solutions" className="text-white/50 hover:text-safety-orange transition-colors">Solutions</Link></li>
              <li><Link href="/case-studies/la-metro-purple-line" className="text-white/50 hover:text-safety-orange transition-colors">Case Studies</Link></li>
            </ul>
          </div>

          {/* Divisions */}
          <div>
            <h3 className="text-white/30 text-[10px] uppercase tracking-[0.3em] mb-6">
              Divisions
            </h3>
            <ul className="space-y-3 text-sm">
              <li><a href="http://www.csigroup.biz/tunnelsystems/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-safety-orange transition-colors">CSI Tunnel Systems</a></li>
              <li><a href="http://www.clecoforms.com/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-safety-orange transition-colors">CLECO Manufacturing</a></li>
              <li><a href="https://uwallsystems.com/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-safety-orange transition-colors">Universal Uwall&trade;</a></li>
              <li><a href="http://www.clampcrete.com/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-safety-orange transition-colors">Clampcrete Construction</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-white/25 uppercase tracking-[0.15em]">
          <p>&copy; {new Date().getFullYear()} CSI Concrete Systems, Inc.</p>
          <p>104,000 sq. ft. production facility &bull; 25-acre complex &bull; Hudson, NH</p>
        </div>
      </div>
    </footer>
  );
}
