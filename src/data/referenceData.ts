import { ElementRef, PolyatomicIonRef, TopicInfo } from '../types/chemistry';

export const TOPICS: TopicInfo[] = [
  {
    id: 'bonding',
    title: 'Chemical Bonding & Electronegativity Models',
    shortTitle: 'Bonding Models',
    description: 'Predict ionic vs covalent bonding using electronegativity (threshold: 2.0), valence electron transfer vs sharing, and metalloid rules.',
    questionCount: 6,
  },
  {
    id: 'ionic-formulas',
    title: 'Ionic Compound Formulas & Charge Balance',
    shortTitle: 'Ionic Formulas',
    description: 'Determine chemical formulas without transition metals. Balance positive and negative ion charges to equal zero net charge.',
    questionCount: 6,
  },
  {
    id: 'substance-properties',
    title: 'Substance Properties & Experimental Evidence',
    shortTitle: 'Properties & Evidence',
    description: 'Analyze experimental lab data (melting point, solubility, hardness, conductivity) to classify unknown substances.',
    questionCount: 6,
  },
  {
    id: 'halogen-reactivity',
    title: 'Halogen & Nonmetal Reactivity Series',
    shortTitle: 'Halogen Reactivity',
    description: 'Analyze experimental single-replacement reaction data to establish relative nonmetal reactivity and predict outcomes.',
    questionCount: 6,
  },
  {
    id: 'integrative-challenges',
    title: 'Integrative Chemistry Challenges',
    shortTitle: 'Integrative Challenges',
    description: 'Synthesize bonding theory, formula determination, experimental physical properties, and reactivity predictions.',
    questionCount: 4,
  }
];

export const ELECTRONEGATIVITY_RULE_SUMMARY = {
  ruleName: "Course Electronegativity & Bonding Rules",
  ionicRule: "Ionic Bond: Metal (electronegativity < 2.0) bonded to Nonmetal (electronegativity > 2.0). Valence electrons transfer from metal to nonmetal.",
  covalentRule: "Covalent Bond: Nonmetal bonded to Nonmetal (both electronegativities > 2.0). Valence electron pairs are shared between atoms.",
  metalloidRule: "Metalloid Rule: A metalloid bonded with a nonmetal is COVALENT. Do NOT use the numerical electronegativity threshold rule for metalloids (because metalloid EN values near 1.8-2.0 would incorrectly predict ionic character).",
  threshold: 2.0,
  note: "Polar vs. nonpolar distinctions are not tested in this course."
};

export const COMMON_ELEMENTS_DATA: ElementRef[] = [
  { symbol: 'H', name: 'Hydrogen', atomicNumber: 1, group: 1, period: 1, type: 'nonmetal', electronegativity: 2.1, valenceElectrons: 1, commonIon: 'H⁺ / H⁻' },
  { symbol: 'Li', name: 'Lithium', atomicNumber: 3, group: 1, period: 2, type: 'metal', electronegativity: 1.0, valenceElectrons: 1, commonIon: 'Li⁺' },
  { symbol: 'Be', name: 'Beryllium', atomicNumber: 4, group: 2, period: 2, type: 'metal', electronegativity: 1.5, valenceElectrons: 2, commonIon: 'Be²⁺' },
  { symbol: 'B', name: 'Boron', atomicNumber: 5, group: 13, period: 2, type: 'metalloid', electronegativity: 2.0, valenceElectrons: 3 },
  { symbol: 'C', name: 'Carbon', atomicNumber: 6, group: 14, period: 2, type: 'nonmetal', electronegativity: 2.5, valenceElectrons: 4 },
  { symbol: 'N', name: 'Nitrogen', atomicNumber: 7, group: 15, period: 2, type: 'nonmetal', electronegativity: 3.0, valenceElectrons: 5, commonIon: 'N³⁻ (nitride)' },
  { symbol: 'O', name: 'Oxygen', atomicNumber: 8, group: 16, period: 2, type: 'nonmetal', electronegativity: 3.5, valenceElectrons: 6, commonIon: 'O²⁻ (oxide)' },
  { symbol: 'F', name: 'Fluorine', atomicNumber: 9, group: 17, period: 2, type: 'nonmetal', electronegativity: 4.0, valenceElectrons: 7, commonIon: 'F⁻ (fluoride)' },
  { symbol: 'Na', name: 'Sodium', atomicNumber: 11, group: 1, period: 3, type: 'metal', electronegativity: 0.9, valenceElectrons: 1, commonIon: 'Na⁺' },
  { symbol: 'Mg', name: 'Magnesium', atomicNumber: 12, group: 2, period: 3, type: 'metal', electronegativity: 1.2, valenceElectrons: 2, commonIon: 'Mg²⁺' },
  { symbol: 'Al', name: 'Aluminum', atomicNumber: 13, group: 13, period: 3, type: 'metal', electronegativity: 1.5, valenceElectrons: 3, commonIon: 'Al³⁺' },
  { symbol: 'Si', name: 'Silicon', atomicNumber: 14, group: 14, period: 3, type: 'metalloid', electronegativity: 1.8, valenceElectrons: 4 },
  { symbol: 'P', name: 'Phosphorus', atomicNumber: 15, group: 15, period: 3, type: 'nonmetal', electronegativity: 2.1, valenceElectrons: 5, commonIon: 'P³⁻ (phosphide)' },
  { symbol: 'S', name: 'Sulfur', atomicNumber: 16, group: 16, period: 3, type: 'nonmetal', electronegativity: 2.5, valenceElectrons: 6, commonIon: 'S²⁻ (sulfide)' },
  { symbol: 'Cl', name: 'Chlorine', atomicNumber: 17, group: 17, period: 3, type: 'nonmetal', electronegativity: 3.0, valenceElectrons: 7, commonIon: 'Cl⁻ (chloride)' },
  { symbol: 'K', name: 'Potassium', atomicNumber: 19, group: 1, period: 4, type: 'metal', electronegativity: 0.8, valenceElectrons: 1, commonIon: 'K⁺' },
  { symbol: 'Ca', name: 'Calcium', atomicNumber: 20, group: 2, period: 4, type: 'metal', electronegativity: 1.0, valenceElectrons: 2, commonIon: 'Ca²⁺' },
  { symbol: 'Ga', name: 'Gallium', atomicNumber: 31, group: 13, period: 4, type: 'metal', electronegativity: 1.6, valenceElectrons: 3, commonIon: 'Ga³⁺' },
  { symbol: 'Ge', name: 'Germanium', atomicNumber: 32, group: 14, period: 4, type: 'metalloid', electronegativity: 1.8, valenceElectrons: 4 },
  { symbol: 'As', name: 'Arsenic', atomicNumber: 33, group: 15, period: 4, type: 'metalloid', electronegativity: 2.0, valenceElectrons: 5 },
  { symbol: 'Se', name: 'Selenium', atomicNumber: 34, group: 16, period: 4, type: 'nonmetal', electronegativity: 2.4, valenceElectrons: 6, commonIon: 'Se²⁻' },
  { symbol: 'Br', name: 'Bromine', atomicNumber: 35, group: 17, period: 4, type: 'nonmetal', electronegativity: 2.8, valenceElectrons: 7, commonIon: 'Br⁻ (bromide)' },
  { symbol: 'Rb', name: 'Rubidium', atomicNumber: 37, group: 1, period: 5, type: 'metal', electronegativity: 0.8, valenceElectrons: 1, commonIon: 'Rb⁺' },
  { symbol: 'Sr', name: 'Strontium', atomicNumber: 38, group: 2, period: 5, type: 'metal', electronegativity: 1.0, valenceElectrons: 2, commonIon: 'Sr²⁺' },
  { symbol: 'I', name: 'Iodine', atomicNumber: 53, group: 17, period: 5, type: 'nonmetal', electronegativity: 2.5, valenceElectrons: 7, commonIon: 'I⁻ (iodide)' },
  { symbol: 'Cs', name: 'Cesium', atomicNumber: 55, group: 1, period: 6, type: 'metal', electronegativity: 0.7, valenceElectrons: 1, commonIon: 'Cs⁺' },
  { symbol: 'Ba', name: 'Barium', atomicNumber: 56, group: 2, period: 6, type: 'metal', electronegativity: 0.9, valenceElectrons: 2, commonIon: 'Ba²⁺' },
];

export const POLYATOMIC_IONS_DATA: PolyatomicIonRef[] = [
  { name: 'Ammonium', formula: 'NH₄⁺', charge: 1, type: 'cation', notes: 'Common positively charged polyatomic ion containing nitrogen and hydrogen.' },
  { name: 'Hydroxide', formula: 'OH⁻', charge: -1, type: 'anion', notes: 'Consists of oxygen and hydrogen with a 1- overall charge.' },
  { name: 'Nitrate', formula: 'NO₃⁻', charge: -1, type: 'anion', notes: 'Consists of 1 nitrogen and 3 oxygens with a 1- overall charge.' },
  { name: 'Nitrite', formula: 'NO₂⁻', charge: -1, type: 'anion', notes: 'Consists of 1 nitrogen and 2 oxygens with a 1- overall charge.' },
  { name: 'Bicarbonate (Hydrogen Carbonate)', formula: 'HCO₃⁻', charge: -1, type: 'anion', notes: 'Formed when carbonate ion pairs with one hydrogen ion.' },
  { name: 'Acetate', formula: 'C₂H₃O₂⁻', charge: -1, type: 'anion', notes: 'Polyatomic organic anion with a 1- overall charge.' },
  { name: 'Sulfate', formula: 'SO₄²⁻', charge: -2, type: 'anion', notes: 'Consists of 1 sulfur and 4 oxygens with a 2- overall charge.' },
  { name: 'Sulfite', formula: 'SO₃²⁻', charge: -2, type: 'anion', notes: 'Consists of 1 sulfur and 3 oxygens with a 2- overall charge.' },
  { name: 'Carbonate', formula: 'CO₃²⁻', charge: -2, type: 'anion', notes: 'Consists of 1 carbon and 3 oxygens with a 2- overall charge.' },
  { name: 'Phosphate', formula: 'PO₄³⁻', charge: -3, type: 'anion', notes: 'Consists of 1 phosphorus and 4 oxygens with a 3- overall charge.' },
];

export const PROPERTIES_COMPARISON_TABLE = [
  {
    property: 'Melting Point',
    ionic: 'High to Very High (typically > 400°C - 800°C+)',
    covalent: 'Low to Moderate (frequently < 300°C; liquids/gases at room temp)',
    reason: 'Ionic compounds form an extensive 3D crystal lattice held by strong electrostatic attractions requiring immense energy to break. Covalent molecules are held by weak intermolecular forces.'
  },
  {
    property: 'Solubility in Water',
    ionic: 'Often High (readily disassociates into hydrated ions)',
    covalent: 'Variable, frequently low to moderate unless containing specific polar groups',
    reason: 'Water molecules surround and stabilize separated cations and anions.'
  },
  {
    property: 'Hardness & Texture',
    ionic: 'Hard, Brittle, Rigid crystalline solids',
    covalent: 'Soft, Waxy, flexible, or volatile solids/liquids/gases',
    reason: 'When struck, like-charged ions shift next to each other and violently repel, causing the ionic crystal to shatter along plane edges.'
  },
  {
    property: 'Solid State Electrical Conductivity',
    ionic: 'Non-conductive (insulator)',
    covalent: 'Non-conductive (insulator)',
    reason: 'In solid state, ionic charges are locked into fixed lattice positions. Neither electrons nor ions can freely move to carry an electrical current.'
  },
  {
    property: 'Aqueous / Molten Electrical Conductivity',
    ionic: 'High Electrical Conductivity (Strong Electrolyte)',
    covalent: 'Non-conductive (Non-electrolyte)',
    reason: 'When dissolved in water or melted, the rigid crystal lattice breaks down, freeing mobile hydrated ions that migrate toward oppositely charged electrodes.'
  }
];

export const HALOGEN_REACTIVITY_RULES = [
  {
    principle: 'Periodic Reactivity Trend for Halogens (Group 17)',
    detail: 'Reactivity DECREASES down the group: F₂ > Cl₂ > Br₂ > I₂. Fluorine is the most reactive; iodine is the least reactive of the common halogens.',
    reason: 'Higher halogens have fewer electron shells. Their valence shell is closer to the nucleus with less electron shielding, exerting a stronger electrostatic pull to gain an electron.'
  },
  {
    principle: 'Single-Replacement Reaction Feasibility Rule',
    detail: 'A free elemental halogen (X₂) can replace a less reactive halide ion (Y⁻) from an aqueous solution: X₂ + 2 KY → 2 KX + Y₂ occurs ONLY if X is more reactive than Y.',
    reason: 'If the incoming elemental halogen has a weaker electron attraction than the dissolved halide, no reaction occurs (NR).'
  },
  {
    principle: 'Deducing Reactivity from Reaction Matrices',
    detail: 'Count successful displacement reactions: the nonmetal that causes the highest number of reactions is the most reactive. The nonmetal that reacts least or never is the least reactive.',
    reason: 'Empirical reaction tables show actual chemical behavior rather than rote memory.'
  }
];
