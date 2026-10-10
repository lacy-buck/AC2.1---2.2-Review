import React, { useState } from 'react';
import { 
  X, 
  Search, 
  BookOpen, 
  Layers, 
  Zap, 
  Activity, 
  HelpCircle,
  ExternalLink 
} from 'lucide-react';
import { 
  COMMON_ELEMENTS_DATA, 
  POLYATOMIC_IONS_DATA, 
  PROPERTIES_COMPARISON_TABLE, 
  HALOGEN_REACTIVITY_RULES
} from '../data/referenceData';

interface ReferenceDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: 'en-table' | 'polyatomics' | 'properties' | 'halogens' | 'ion-charges';
}

export const ReferenceDrawer: React.FC<ReferenceDrawerProps> = ({
  isOpen,
  onClose,
  defaultTab = 'en-table'
}) => {
  const [activeTab, setActiveTab] = useState<'en-table' | 'polyatomics' | 'properties' | 'halogens' | 'ion-charges'>(defaultTab);
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const filteredElements = COMMON_ELEMENTS_DATA.filter(el => 
    el.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    el.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
    el.electronegativity.toString().includes(searchTerm)
  );

  const filteredPolyatomics = POLYATOMIC_IONS_DATA.filter(ion =>
    ion.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ion.formula.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/70 backdrop-blur-sm flex justify-end animate-in fade-in duration-200">
      <div 
        className="w-full max-w-2xl bg-slate-900 border-l border-slate-800 text-slate-100 h-full flex flex-col shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-label="Chemistry Reference Drawer"
      >
        {/* Header */}
        <div className="p-5 md:p-6 border-b border-slate-800 flex items-center justify-between bg-slate-950/50">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg md:text-xl font-black text-slate-100">
                Chemistry Reference Toolkit
              </h2>
              <p className="text-xs text-slate-400">
                Course reference data, rules, and periodic patterns
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-100 transition-colors cursor-pointer"
            aria-label="Close reference drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Controls */}
        <div className="flex border-b border-slate-800 bg-slate-950/30 px-4 gap-2 overflow-x-auto text-xs scrollbar-none">
          <button
            type="button"
            onClick={() => setActiveTab('en-table')}
            className={`py-3 px-3 rounded-t-xl font-bold whitespace-nowrap transition-colors flex items-center gap-1.5 cursor-pointer border-b-2 ${
              activeTab === 'en-table'
                ? 'border-sky-400 text-sky-400 bg-sky-950/40'
                : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            Electronegativity
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('polyatomics')}
            className={`py-3 px-3 rounded-t-xl font-bold whitespace-nowrap transition-colors flex items-center gap-1.5 cursor-pointer border-b-2 ${
              activeTab === 'polyatomics'
                ? 'border-sky-400 text-sky-400 bg-sky-950/40'
                : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            Polyatomic Ions
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('properties')}
            className={`py-3 px-3 rounded-t-xl font-bold whitespace-nowrap transition-colors flex items-center gap-1.5 cursor-pointer border-b-2 ${
              activeTab === 'properties'
                ? 'border-sky-400 text-sky-400 bg-sky-950/40'
                : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            Properties
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('halogens')}
            className={`py-3 px-3 rounded-t-xl font-bold whitespace-nowrap transition-colors flex items-center gap-1.5 cursor-pointer border-b-2 ${
              activeTab === 'halogens'
                ? 'border-sky-400 text-sky-400 bg-sky-950/40'
                : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
            }`}
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Halogens
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('ion-charges')}
            className={`py-3 px-3 rounded-t-xl font-bold whitespace-nowrap transition-colors flex items-center gap-1.5 cursor-pointer border-b-2 ${
              activeTab === 'ion-charges'
                ? 'border-sky-400 text-sky-400 bg-sky-950/40'
                : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            Ion Charges
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-5 md:p-6 space-y-6">
          
          {/* TAB 1: ELECTRONEGATIVITY TABLE */}
          {activeTab === 'en-table' && (
            <div className="space-y-5">
              <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 md:p-5 space-y-2 text-xs">
                <div className="text-[11px] font-bold uppercase tracking-wider text-sky-400">
                  Course Bonding Rules (Threshold: 2.0)
                </div>
                <div className="space-y-1 text-slate-300 leading-relaxed">
                  <p><strong className="text-sky-300">Ionic:</strong> One element has EN &lt; 2.0 (metal) and the other has EN &gt; 2.0 (nonmetal), resulting in complete valence electron transfer.</p>
                  <p><strong className="text-emerald-300">Covalent:</strong> Both elements have EN &gt; 2.0 (nonmetals), resulting in shared valence electron pairs.</p>
                  <p><strong className="text-amber-300">Metalloids:</strong> A metalloid bonded with a nonmetal is <strong>covalent</strong>. Do <em>not</em> apply the electronegativity threshold rule to metalloids (as it would give an incorrect answer).</p>
                  <p className="text-slate-400 text-[11px] italic">Note: Polar vs. nonpolar distinctions are not tested in this course.</p>
                </div>
              </div>

              {/* Search Bar */}
              <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                <input
                  type="text"
                  placeholder="Filter by element name, symbol, or value..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-sky-500"
                />
              </div>

              {/* Elements Table */}
              <div className="border border-slate-800 rounded-2xl overflow-hidden bg-slate-950/60">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-950 border-b border-slate-800 text-slate-400">
                    <tr>
                      <th className="p-3 font-semibold">Symbol</th>
                      <th className="p-3 font-semibold">Element</th>
                      <th className="p-3 font-semibold">Group</th>
                      <th className="p-3 font-semibold">Classification</th>
                      <th className="p-3 font-semibold text-right">Electronegativity</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80">
                    {filteredElements.map((el) => {
                      const isBelow = el.electronegativity < 2.0;
                      return (
                        <tr key={el.symbol} className="hover:bg-slate-800/40">
                          <td className="p-3 font-mono font-black text-slate-100">{el.symbol}</td>
                          <td className="p-3 font-medium text-slate-200">{el.name}</td>
                          <td className="p-3 text-slate-400 font-mono text-[11px]">{el.group}</td>
                          <td className="p-3">
                            <span className={`px-2 py-0.5 rounded-md text-[10px] uppercase font-bold border ${
                              el.type === 'metal' 
                                ? 'bg-amber-950/60 text-amber-300 border-amber-800/50' 
                                : el.type === 'nonmetal'
                                ? 'bg-emerald-950/60 text-emerald-300 border-emerald-800/50'
                                : 'bg-purple-950/60 text-purple-300 border-purple-800/50'
                            }`}>
                              {el.type}
                            </span>
                          </td>
                          <td className="p-3 text-right">
                            <span className={`font-mono font-bold text-xs ${isBelow ? 'text-amber-400' : 'text-sky-400'}`}>
                              {el.electronegativity.toFixed(1)}
                            </span>
                            <span className="text-[10px] text-slate-400 font-mono ml-1">
                              ({isBelow ? '< 2.0' : '> 2.0'})
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 2: POLYATOMIC IONS */}
          {activeTab === 'polyatomics' && (
            <div className="space-y-5">
              <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 md:p-5 text-xs text-slate-300 leading-relaxed">
                <strong className="text-sky-300 block mb-1">
                  Polyatomic Ions in Compound Formulas:
                </strong>
                Polyatomic ions are groups of covalently bonded atoms carrying an overall net electrical charge. When balancing ionic formulas, treat the entire polyatomic group as a single unit. If more than one polyatomic ion is required to balance charge, enclose the ion in parentheses before writing the subscript (e.g., <code className="font-mono text-sky-300 bg-slate-900 px-1.5 py-0.5 rounded">Ca(NO₃)₂</code> or <code className="font-mono text-sky-300 bg-slate-900 px-1.5 py-0.5 rounded">Al₂(SO₄)₃</code>).
              </div>

              {/* Search Bar */}
              <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                <input
                  type="text"
                  placeholder="Filter polyatomic ions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-sky-500"
                />
              </div>

              <div className="border border-slate-800 rounded-2xl overflow-hidden bg-slate-950/60 text-xs">
                <table className="w-full text-left">
                  <thead className="bg-slate-950 border-b border-slate-800 text-slate-400">
                    <tr>
                      <th className="p-3 font-semibold">Name</th>
                      <th className="p-3 font-semibold">Formula</th>
                      <th className="p-3 font-semibold">Charge</th>
                      <th className="p-3 font-semibold">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80">
                    {filteredPolyatomics.map((ion) => (
                      <tr key={ion.formula} className="hover:bg-slate-800/40">
                        <td className="p-3 font-medium text-slate-200">{ion.name}</td>
                        <td className="p-3 font-mono font-bold text-sky-400 text-sm">{ion.formula}</td>
                        <td className="p-3 font-mono font-bold text-xs text-slate-200">
                          {ion.charge > 0 ? `+${ion.charge}` : ion.charge}
                        </td>
                        <td className="p-3 text-slate-400 text-[11px]">{ion.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: SUBSTANCE PROPERTIES */}
          {activeTab === 'properties' && (
            <div className="space-y-5">
              <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 md:p-5 text-xs text-slate-300 leading-relaxed">
                <strong className="text-sky-300 block mb-1">
                  Experimental Property Diagnosis:
                </strong>
                Use macro-level physical properties as diagnostic evidence to deduce the microscopic bonding models of unknown substances.
              </div>

              <div className="space-y-3">
                {PROPERTIES_COMPARISON_TABLE.map((row, idx) => (
                  <div key={idx} className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 md:p-5 space-y-3">
                    <h3 className="text-sm font-bold text-slate-100">
                      {row.property}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                      <div className="p-3 rounded-xl bg-amber-950/30 border border-amber-800/40">
                        <div className="text-[10px] uppercase font-bold text-amber-400 mb-1">
                          Ionic Compounds
                        </div>
                        <div className="text-slate-200">{row.ionic}</div>
                      </div>
                      <div className="p-3 rounded-xl bg-sky-950/30 border border-sky-800/40">
                        <div className="text-[10px] uppercase font-bold text-sky-400 mb-1">
                          Covalent Compounds
                        </div>
                        <div className="text-slate-200">{row.covalent}</div>
                      </div>
                    </div>
                    <div className="text-xs text-slate-400 pt-2 border-t border-slate-800/80 leading-relaxed">
                      <strong className="text-slate-300 block mb-0.5">Scientific Rationale:</strong>
                      {row.reason}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: HALOGEN REACTIVITY */}
          {activeTab === 'halogens' && (
            <div className="space-y-5">
              <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 md:p-5 text-xs text-slate-300 leading-relaxed">
                <strong className="text-sky-300 block mb-1">
                  Nonmetal Single-Replacement Reactions:
                </strong>
                A free elemental halogen can only displace a halide ion from aqueous solution if the free halogen is <strong>more reactive</strong> than the bonded halogen in solution.
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Key Principles & Evidence:
                </h4>
                <div className="space-y-2.5">
                  {HALOGEN_REACTIVITY_RULES.map((rule, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-xs leading-relaxed space-y-1">
                      <div className="font-bold text-sky-300">{rule.principle}</div>
                      <div className="text-slate-200">{rule.detail}</div>
                      <div className="text-slate-400 text-[11px] italic">{rule.reason}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-slate-800 rounded-2xl overflow-hidden bg-slate-950/60 text-xs">
                <table className="w-full text-left">
                  <thead className="bg-slate-950 border-b border-slate-800 text-slate-400">
                    <tr>
                      <th className="p-3 font-semibold">Mixture</th>
                      <th className="p-3 font-semibold">Result</th>
                      <th className="p-3 font-semibold">Reaction Equation</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80">
                    <tr className="hover:bg-slate-800/40">
                      <td className="p-3 font-mono text-xs text-slate-200">Cl₂(g) + NaBr(aq)</td>
                      <td className="p-3 text-emerald-400 font-bold">Reaction Occurs</td>
                      <td className="p-3 font-mono text-xs text-slate-300">Cl₂ + 2NaBr → 2NaCl + Br₂</td>
                    </tr>
                    <tr className="hover:bg-slate-800/40">
                      <td className="p-3 font-mono text-xs text-slate-200">Br₂(l) + NaCl(aq)</td>
                      <td className="p-3 text-slate-400 font-semibold">No Reaction (NR)</td>
                      <td className="p-3 font-mono text-xs text-slate-400">—</td>
                    </tr>
                    <tr className="hover:bg-slate-800/40">
                      <td className="p-3 font-mono text-xs text-slate-200">Br₂(l) + NaI(aq)</td>
                      <td className="p-3 text-emerald-400 font-bold">Reaction Occurs</td>
                      <td className="p-3 font-mono text-xs text-slate-300">Br₂ + 2NaI → 2NaBr + I₂</td>
                    </tr>
                    <tr className="hover:bg-slate-800/40">
                      <td className="p-3 font-mono text-xs text-slate-200">I₂(s) + NaBr(aq)</td>
                      <td className="p-3 text-slate-400 font-semibold">No Reaction (NR)</td>
                      <td className="p-3 font-mono text-xs text-slate-400">—</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 5: MONATOMIC ION CHARGES */}
          {activeTab === 'ion-charges' && (
            <div className="space-y-5">
              <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 md:p-5 text-xs text-slate-300 leading-relaxed">
                <strong className="text-sky-300 block mb-1">
                  Main-Group Monatomic Ions:
                </strong>
                Main-group metals lose valence electrons to achieve the electron configuration of the preceding noble gas (forming positive cations). Nonmetals gain valence electrons to achieve the electron configuration of the next noble gas (forming negative anions).
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-slate-800 bg-slate-950/70 rounded-2xl p-4 md:p-5 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    Common Cations (Metals)
                  </h4>
                  <ul className="space-y-2 text-xs font-mono text-slate-300">
                    <li className="flex justify-between border-b border-slate-800/80 pb-1">
                      <span>Group 1 (Alkali Metals):</span>
                      <strong className="text-amber-300">Li⁺, Na⁺, K⁺, Rb⁺, Cs⁺</strong>
                    </li>
                    <li className="flex justify-between border-b border-slate-800/80 pb-1">
                      <span>Group 2 (Alkaline Earth):</span>
                      <strong className="text-amber-300">Mg²⁺, Ca²⁺, Sr²⁺, Ba²⁺</strong>
                    </li>
                    <li className="flex justify-between">
                      <span>Group 13 (Aluminum/Gallium):</span>
                      <strong className="text-amber-300">Al³⁺, Ga³⁺</strong>
                    </li>
                  </ul>
                </div>

                <div className="border border-slate-800 bg-slate-950/70 rounded-2xl p-4 md:p-5 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    Common Anions (Nonmetals)
                  </h4>
                  <ul className="space-y-2 text-xs font-mono text-slate-300">
                    <li className="flex justify-between border-b border-slate-800/80 pb-1">
                      <span>Group 17 (Halides):</span>
                      <strong className="text-emerald-300">F⁻, Cl⁻, Br⁻, I⁻</strong>
                    </li>
                    <li className="flex justify-between border-b border-slate-800/80 pb-1">
                      <span>Group 16 (Oxides / Sulfides):</span>
                      <strong className="text-emerald-300">O²⁻, S²⁻, Se²⁻</strong>
                    </li>
                    <li className="flex justify-between">
                      <span>Group 15 (Nitrides / Phosphides):</span>
                      <strong className="text-emerald-300">N³⁻, P³⁻</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
