import { Question } from '../types/chemistry';

// =========================================================================
// TOPIC MODULE QUESTIONS (28 Substantive Questions for Module Practice)
// =========================================================================
export const TOPIC_QUESTIONS: Question[] = [
  // -----------------------------------------------------------------------
  // MODULE 1: CHEMICAL BONDING & ELECTRONEGATIVITY MODELS (6 Questions)
  // -----------------------------------------------------------------------
  {
    id: 'bond-1',
    topicId: 'bonding',
    title: 'Bonding in Magnesium Oxide (MgO)',
    type: 'multiple-choice',
    difficulty: 'Foundation',
    prompt: 'Magnesium (Mg, metal, EN = 1.2) reacts with Oxygen (O, nonmetal, EN = 3.5). Based on your course rules and electronegativity values, predict the bond type and explain the underlying mechanism.',
    options: [
      {
        id: 'opt-a',
        text: 'Covalent, because magnesium and oxygen both have incomplete valence shells and achieve stable octets by sharing two pairs of valence electrons.',
        misconceptionExplanation: 'Magnesium has an electronegativity below 2.0 (1.2) and easily gives up electrons rather than sharing them with high-electronegativity oxygen (3.5).'
      },
      {
        id: 'opt-b',
        text: 'Ionic, because one element has an electronegativity below 2.0 (Mg = 1.2) and the other is above 2.0 (O = 3.5), resulting in electron transfer.',
      },
      {
        id: 'opt-c',
        text: 'Ionic, because oxygen transfers two valence electrons to magnesium until both atoms reach empty outer shells and form mutual attractions.',
        misconceptionExplanation: 'Oxygen has a much higher electronegativity (3.5 vs. 1.2); oxygen attracts and gains electrons, while magnesium loses its two valence electrons.'
      },
      {
        id: 'opt-d',
        text: 'Covalent, because magnesium and oxygen atoms combine in an exact 1:1 numerical ratio, which only occurs when electron sharing is equal.',
        misconceptionExplanation: 'A 1:1 ratio represents formula stoichiometry, not bonding character. NaCl is also a 1:1 ratio and is purely ionic.'
      }
    ],
    correctOptionId: 'opt-b',
    hint: 'Check the electronegativity values against your course rule: is one value below 2.0 and the other above 2.0? What happens to the valence electrons when a low-electronegativity metal meets a high-electronegativity nonmetal?',
    explanation: 'According to the course rule, a bond is ionic when one element has an electronegativity below 2.0 and the other is above 2.0. Magnesium (EN = 1.2, Group 2) loses its 2 valence electrons to form Mg²⁺. Oxygen (EN = 3.5, Group 16) has a strong attraction for electrons and gains those 2 electrons to form O²⁻. The electrostatic attraction between Mg²⁺ and O²⁻ forms an ionic lattice.',
    keyConcept: 'Ionic bonds form via valence electron transfer when an element with EN < 2.0 pairs with an element with EN > 2.0.'
  },
  {
    id: 'bond-2',
    topicId: 'bonding',
    title: 'Bonding in Silicon Tetrachloride (SiCl₄) & Metalloid Rule',
    type: 'multiple-choice',
    difficulty: 'Proficient',
    prompt: 'A student looks up silicon (Si, metalloid, EN = 1.8) and chlorine (Cl, nonmetal, EN = 3.0) and claims: "Because silicon is below 2.0 and chlorine is above 2.0, SiCl₄ must have ionic bonds." Evaluate this student\'s conclusion using your course rules.',
    options: [
      {
        id: 'opt-a',
        text: 'The student is correct because any compound containing an element with EN below 2.0 and an element above 2.0 forms an ionic lattice.',
        misconceptionExplanation: 'Remember your course metalloid rule: do NOT apply the electronegativity threshold rule to metalloids, as doing so leads to an incorrect prediction.'
      },
      {
        id: 'opt-b',
        text: 'The student is incorrect because silicon is a metal with a very high ionization energy that forces chlorine to donate valence electrons.',
        misconceptionExplanation: 'Silicon is classified as a metalloid, not a metal, and chlorine has a much higher electronegativity (3.0) so it does not donate electrons.'
      },
      {
        id: 'opt-c',
        text: 'The student is incorrect because silicon is a metalloid, and a metalloid bonded with a nonmetal forms covalent bonds through shared electron pairs.',
      },
      {
        id: 'opt-d',
        text: 'The student is correct because four chlorine atoms carry enough combined electronegativity to strip all four valence electrons away from silicon.',
        misconceptionExplanation: 'Electronegativity is an intensive atomic property, not an additive sum. Silicon and chlorine share electron pairs to form covalent molecules.'
      }
    ],
    correctOptionId: 'opt-c',
    hint: 'Review the course rule on metalloids: Can you apply the < 2.0 / > 2.0 electronegativity rule to metalloids? What type of bond forms when a metalloid bonds with a nonmetal?',
    explanation: 'For your course, metalloids paired with nonmetals form covalent bonds through electron sharing. You must NOT apply the electronegativity threshold rule to metalloids because their EN values (often around 1.8–2.0) would falsely predict ionic character. Silicon shares each of its 4 valence electrons with a chlorine atom to form covalent Si–Cl bonds.',
    keyConcept: 'Metalloid + nonmetal bonds are covalent. Do not use the electronegativity threshold rule for metalloids.'
  },
  {
    id: 'bond-3',
    topicId: 'bonding',
    title: 'Phosphorus Trichloride (PCl₃) Bonding & Electron Mechanism',
    type: 'multiple-choice',
    difficulty: 'Foundation',
    prompt: 'Phosphorus (P, nonmetal, EN = 2.1) combines with Chlorine (Cl, nonmetal, EN = 3.0). Predict the bonding type and explain the atomic mechanism involving valence electrons.',
    options: [
      {
        id: 'opt-a',
        text: 'Covalent, because both P (2.1) and Cl (3.0) have electronegativities above 2.0, so neither atom can strip electrons; they share pairs.',
      },
      {
        id: 'opt-b',
        text: 'Ionic, because phosphorus has 5 valence electrons and transfers three of them to three separate chlorine atoms to establish octets.',
        misconceptionExplanation: 'Phosphorus has an electronegativity of 2.1 (> 2.0). It holds its valence electrons too tightly to lose them completely to chlorine.'
      },
      {
        id: 'opt-c',
        text: 'Ionic, because both elements belong to Period 3 of the periodic table, requiring them to form an alternating salt crystal lattice.',
        misconceptionExplanation: 'Period placement does not dictate bond type. Period 3 contains metals (Na, Mg, Al) and nonmetals (P, S, Cl); two nonmetals form covalent bonds.'
      },
      {
        id: 'opt-d',
        text: 'Covalent, because chlorine has a lower ionization energy than phosphorus, permitting chlorine to surround phosphorus without exchanging any charge.',
        misconceptionExplanation: 'Chlorine is to the right of phosphorus and has a higher ionization energy and higher electronegativity; stability is achieved by sharing pairs.'
      }
    ],
    correctOptionId: 'opt-a',
    hint: 'Compare both phosphorus (2.1) and chlorine (3.0) to the 2.0 course threshold. When both nonmetals have EN > 2.0, does electron transfer or electron sharing take place?',
    explanation: 'Both phosphorus (EN = 2.1) and chlorine (EN = 3.0) have electronegativities above 2.0. Because both atoms exert strong attractions for valence electrons, neither element can completely pull electrons away from the other. Phosphorus shares one valence electron pair with each of three chlorine atoms, establishing covalent bonds.',
    keyConcept: 'When both bonded nonmetals have EN > 2.0, neither atom can force electron transfer; they share valence electrons covalently.'
  },
  {
    id: 'bond-4',
    topicId: 'bonding',
    title: 'Bonding in Polyatomic Compounds: Ammonium Chloride (NH₄Cl)',
    type: 'multiple-choice',
    difficulty: 'Advanced',
    prompt: 'Ammonium chloride (NH₄Cl) is an important laboratory compound. Which statement accurately describes the types of bonding present throughout this substance and justifies why?',
    options: [
      {
        id: 'opt-a',
        text: 'It contains only covalent bonds because nitrogen, hydrogen, and chlorine are all nonmetals with electronegativities above 2.0.',
        misconceptionExplanation: 'While the atoms within NH₄⁺ are held covalently, the ammonium cation (NH₄⁺) and chloride anion (Cl⁻) attract each other electrostatically.'
      },
      {
        id: 'opt-b',
        text: 'It contains only ionic bonds because nitrogen gives up electrons to both hydrogen and chlorine to create a crystalline network.',
        misconceptionExplanation: 'Within the polyatomic ammonium ion itself, the N–H bonds are formed by shared valence electron pairs, not electron transfer.'
      },
      {
        id: 'opt-c',
        text: 'It contains only metallic bonds because hydrogen behaves like an alkali metal and generates a sea of delocalized outer electrons.',
        misconceptionExplanation: 'Hydrogen does not form metallic bonds in chemical salts; it shares its electron with nitrogen inside the ammonium polyatomic ion.'
      },
      {
        id: 'opt-d',
        text: 'It contains both covalent bonds (within the polyatomic NH₄⁺ cation) and ionic bonds (between the NH₄⁺ cation and the Cl⁻ anion).',
      }
    ],
    correctOptionId: 'opt-d',
    hint: 'Examine both the internal structure of the polyatomic ammonium ion (NH₄⁺) and the interaction between NH₄⁺ and the chloride ion (Cl⁻). Can a single compound exhibit more than one bond type?',
    explanation: 'Ammonium chloride contains both bonding types! Within the polyatomic ammonium ion (NH₄⁺), nitrogen and hydrogen share valence electrons covalently. However, the entire NH₄⁺ group functions as a stable positive cation (+1) that forms an ionic bond through electrostatic attraction with the chloride anion (Cl⁻).',
    keyConcept: 'Compounds containing polyatomic ions frequently feature internal covalent bonds held together by external ionic bonds.'
  },
  {
    id: 'bond-5',
    topicId: 'bonding',
    title: 'Hypothetical Elements: A and D Bond Prediction',
    type: 'multiple-choice',
    difficulty: 'Proficient',
    prompt: 'Consider two hypothetical elements: Element A (metal, EN = 0.9, 1 valence electron) and Element D (nonmetal, EN = 3.2, 6 valence electrons). Predict the bonding type and compound formula.',
    options: [
      {
        id: 'opt-a',
        text: 'Covalent with formula AD₂, because element A needs one electron and element D needs two electrons, allowing equal sharing of pairs.',
        misconceptionExplanation: 'Element A has EN = 0.9 (< 2.0) and is a metal; it loses its electron completely rather than sharing with high-EN element D (3.2).'
      },
      {
        id: 'opt-b',
        text: 'Ionic with formula A₂D, because two atoms of A each transfer 1 valence electron to one atom of D, balancing ion charges to zero.',
      },
      {
        id: 'opt-c',
        text: 'Ionic with formula AD, because the 1 valence electron of A directly pairs with the 6 valence electrons of D to form an odd-electron salt.',
        misconceptionExplanation: 'Element D has 6 valence electrons and needs 2 electrons to complete its octet (forming D²⁻). One atom of A only provides 1 electron (+1).'
      },
      {
        id: 'opt-d',
        text: 'Covalent with formula A₂D, because both elements have unshared electrons that overlap to generate a molecular electron cloud.',
        misconceptionExplanation: 'One element has EN = 0.9 (< 2.0) and the other has EN = 3.2 (> 2.0). Under course rules, this extreme difference produces an ionic bond.'
      }
    ],
    correctOptionId: 'opt-b',
    hint: 'Apply the electronegativity threshold: EN < 2.0 vs EN > 2.0. Then look at valence electrons: Element A loses 1 electron (forming A⁺); Element D needs 2 electrons (forming D²⁻). How many of each are needed to balance?',
    explanation: 'Element A has an electronegativity of 0.9 (< 2.0) and easily loses its 1 valence electron to form A⁺. Element D has an electronegativity of 3.2 (> 2.0) and needs 2 valence electrons to reach an octet, forming D²⁻. Under the course rule, this forms an ionic compound. To balance (+1) and (-2), two A⁺ cations combine with one D²⁻ anion, giving the formula A₂D.',
    keyConcept: 'Ionic bond formation involves electron transfer to achieve stable octets, with subscripts determined by zero net charge.'
  },
  {
    id: 'bond-6',
    topicId: 'bonding',
    title: 'CER: Analyzing Bonding in Germanium Dioxide (GeO₂)',
    type: 'cer',
    difficulty: 'Advanced',
    prompt: 'Construct a scientific Claim-Evidence-Reasoning (CER) argument to evaluate the bond classification in germanium dioxide (GeO₂), where Germanium (Ge) is a metalloid (EN = 1.8) and Oxygen (O) is a nonmetal (EN = 3.5).',
    cerData: {
      claims: [
        {
          id: 'c-1',
          text: 'The bonding between germanium and oxygen in GeO₂ is classified as covalent.',
        },
        {
          id: 'c-2',
          text: 'The bonding between germanium and oxygen in GeO₂ is classified as ionic.',
          misconceptionExplanation: 'Although germanium has EN = 1.8 (< 2.0), it is a metalloid. In your course, do not apply the electronegativity threshold rule to metalloids.'
        },
        {
          id: 'c-3',
          text: 'The bonding in GeO₂ is classified as metallic because germanium is in Group 14.',
          misconceptionExplanation: 'Group 14 includes nonmetals, metalloids, and metals. Germanium is a metalloid and oxygen is a nonmetal; they do not form metallic bonds.'
        }
      ],
      correctClaimId: 'c-1',
      evidence: [
        {
          id: 'e-1',
          text: 'Silicon and carbon are in the same periodic column, meaning all oxides must form network salts.',
          misconceptionExplanation: 'Column placement alone without identifying element classification does not provide valid empirical evidence.'
        },
        {
          id: 'e-2',
          text: 'Germanium is classified as a metalloid on the periodic table and oxygen is classified as a nonmetal.',
        },
        {
          id: 'e-3',
          text: 'The difference in electronegativity between germanium (1.8) and oxygen (3.5) equals 1.7.',
          misconceptionExplanation: 'Your course explicitly does not use electronegativity values or difference thresholds for metalloids.'
        }
      ],
      correctEvidenceId: 'e-2',
      reasoning: [
        {
          id: 'r-1',
          text: 'Because oxygen transfers its outer valence electrons to fill germanium empty p-orbitals.',
          misconceptionExplanation: 'Oxygen is far more electronegative than germanium; electron transfer from oxygen to germanium is chemically impossible.'
        },
        {
          id: 'r-2',
          text: 'Whenever an element has EN < 2.0, the bonding must be ionic regardless of element classification.',
          misconceptionExplanation: 'This directly violates your course rule regarding metalloids. Do not use the electronegativity threshold rule for metalloids.'
        },
        {
          id: 'r-3',
          text: 'By course rule, metalloids bonded with nonmetals form covalent bonds through shared electron pairs rather than transferring electrons.',
        }
      ],
      correctReasoningId: 'r-3'
    },
    hint: 'Recall the specific exception in your course guidelines: How are bonds between metalloids and nonmetals classified, and why do we disregard the electronegativity threshold for metalloids?',
    explanation: 'Claim: The bonding in GeO₂ is covalent. Evidence: Germanium is a metalloid and oxygen is a nonmetal. Reasoning: According to course rules, metalloids bonded to nonmetals form covalent bonds through shared electron pairs. The electronegativity threshold rule must not be applied to metalloids because it would yield an incorrect classification.',
    keyConcept: 'Metalloid + nonmetal pairs are governed by the metalloid covalent rule rather than the electronegativity threshold.'
  },

  // -----------------------------------------------------------------------
  // MODULE 2: IONIC COMPOUND FORMULAS & CHARGE BALANCE (6 Questions)
  // -----------------------------------------------------------------------
  {
    id: 'form-1',
    topicId: 'ionic-formulas',
    title: 'Formula for Aluminum Oxide',
    type: 'formula-builder',
    difficulty: 'Foundation',
    prompt: 'Determine the correct chemical formula for aluminum oxide by adjusting the ion quantities to balance positive and negative charges to zero net charge.',
    formulaData: {
      cationName: 'Aluminum ion',
      cationSymbol: 'Al',
      cationCharge: 3,
      anionName: 'Oxide ion',
      anionSymbol: 'O',
      anionCharge: -2,
      isPolyatomicAnion: false,
      isPolyatomicCation: false,
      correctCationCount: 2,
      correctAnionCount: 3,
      correctFormula: 'Al₂O₃',
      chargeExplanation: '2 × (+3) + 3 × (-2) = (+6) + (-6) = 0 net charge',
      explanation: 'Aluminum is in Group 13 and forms Al³⁺. Oxygen is in Group 16 and forms O²⁻. The lowest common multiple of 3 and 2 is 6. Balancing requires two Al³⁺ cations (+6 total) and three O²⁻ anions (-6 total), yielding Al₂O₃.'
    },
    hint: 'What is the lowest common multiple of 3 and 2? How many +3 ions and how many -2 ions are needed to reach that total?',
    explanation: 'Aluminum loses 3 electrons to form Al³⁺, and oxygen gains 2 electrons to form O²⁻. For the ionic compound to be electrically neutral, the positive charge must cancel the negative charge. The lowest common multiple of 3 and 2 is 6: 2(Al³⁺) = +6 and 3(O²⁻) = -6. The formula is Al₂O₃.',
    keyConcept: 'Ionic formulas balance total positive and negative ion charges to zero using the lowest common multiple.'
  },
  {
    id: 'form-2',
    topicId: 'ionic-formulas',
    title: 'Formula for Calcium Phosphate',
    type: 'formula-builder',
    difficulty: 'Proficient',
    prompt: 'Determine the correct chemical formula for calcium phosphate. Note: Phosphate (PO₄³⁻) is a polyatomic ion.',
    formulaData: {
      cationName: 'Calcium ion',
      cationSymbol: 'Ca',
      cationCharge: 2,
      anionName: 'Phosphate ion',
      anionSymbol: 'PO₄',
      anionCharge: -3,
      isPolyatomicAnion: true,
      isPolyatomicCation: false,
      correctCationCount: 3,
      correctAnionCount: 2,
      correctFormula: 'Ca₃(PO₄)₂',
      chargeExplanation: '3 × (+2) + 2 × (-3) = (+6) + (-6) = 0 net charge',
      explanation: 'Calcium is in Group 2 (Ca²⁺) and phosphate has a 3- charge (PO₄³⁻). The lowest common multiple of 2 and 3 is 6. Three Ca²⁺ ions (+6) balance two PO₄³⁻ ions (-6). Polyatomic ions require parentheses when more than one is needed: Ca₃(PO₄)₂.'
    },
    hint: 'Find the lowest common multiple of 2 and 3. When more than one polyatomic ion is present, parentheses must surround the polyatomic formula.',
    explanation: 'Calcium forms Ca²⁺ and phosphate is PO₄³⁻. The lowest common multiple of 2 and 3 is 6. Three Ca²⁺ ions supply +6 total charge, and two PO₄³⁻ polyatomic ions supply -6 total charge. Because multiple phosphate groups are needed, parentheses are required: Ca₃(PO₄)₂.',
    keyConcept: 'Parentheses must enclose polyatomic ions whenever a subscript of 2 or greater is required for charge balance.'
  },
  {
    id: 'form-3',
    topicId: 'ionic-formulas',
    title: 'Formula for Ammonium Sulfate',
    type: 'formula-builder',
    difficulty: 'Proficient',
    prompt: 'Determine the correct chemical formula for ammonium sulfate. Both ammonium (NH₄⁺) and sulfate (SO₄²⁻) are polyatomic ions.',
    formulaData: {
      cationName: 'Ammonium ion',
      cationSymbol: 'NH₄',
      cationCharge: 1,
      anionName: 'Sulfate ion',
      anionSymbol: 'SO₄',
      anionCharge: -2,
      isPolyatomicAnion: true,
      isPolyatomicCation: true,
      correctCationCount: 2,
      correctAnionCount: 1,
      correctFormula: '(NH₄)₂SO₄',
      chargeExplanation: '2 × (+1) + 1 × (-2) = (+2) + (-2) = 0 net charge',
      explanation: 'Ammonium is NH₄⁺ (+1) and sulfate is SO₄²⁻ (-2). Two ammonium cations (+2 total) are required to balance one sulfate anion (-2 total). Because two polyatomic ammonium ions are needed, parentheses are required: (NH₄)₂SO₄.'
    },
    hint: 'How many +1 ammonium ions are required to balance a single -2 sulfate ion? Remember parentheses around the polyatomic cation.',
    explanation: 'Each ammonium ion carries a +1 charge (NH₄⁺) and each sulfate carries a -2 charge (SO₄²⁻). To achieve net neutrality (0), two NH₄⁺ cations must pair with one SO₄²⁻ anion: 2(+1) + 1(-2) = 0. The correct formula is (NH₄)₂SO₄.',
    keyConcept: 'Charge neutrality requires matching total positive and negative charges; polyatomic cations take parentheses when subscripted.'
  },
  {
    id: 'form-4',
    topicId: 'ionic-formulas',
    title: 'Analyzing Incorrect Formula Reasoning: Magnesium Oxide',
    type: 'multiple-choice',
    difficulty: 'Foundation',
    prompt: 'A student writes the formula for magnesium oxide as Mg₂O₂ because "magnesium loses 2 electrons and oxygen gains 2 electrons, so 2 of each are written in the formula." Identify the chemical error in this reasoning.',
    options: [
      {
        id: 'opt-a',
        text: 'The student calculated the charges incorrectly because magnesium forms a +1 cation while oxygen forms a -1 anion.',
        misconceptionExplanation: 'Magnesium is in Group 2 (forms Mg²⁺) and oxygen is in Group 16 (forms O²⁻); their charges are indeed +2 and -2.'
      },
      {
        id: 'opt-b',
        text: 'The student forgot that ionic compound formulas must represent the simplest whole-number ratio, which is 1:1 (MgO), not 2:2.',
      },
      {
        id: 'opt-c',
        text: 'The student reversed the elements; the more electronegative nonmetal must always be written before the metal cation.',
        misconceptionExplanation: 'In ionic naming and formulas, the positive metallic cation is always written first, followed by the negative nonmetal anion.'
      },
      {
        id: 'opt-d',
        text: 'The student did not account for diatomic oxygen gas, meaning the formula must always be written with four oxygens as Mg₂O₄.',
        misconceptionExplanation: 'Diatomic elemental states (O₂) describe the pure gas, not the stoichiometry of ions in an ionic crystal lattice.'
      }
    ],
    correctOptionId: 'opt-b',
    hint: 'What is the definition of an empirical formula? Do subscripts in an ionic crystal represent isolated molecules or the simplest ratio of ions?',
    explanation: 'Ionic compounds do not exist as isolated individual molecules; they exist as extensive 3D crystal lattices. Therefore, chemical formulas for ionic compounds are empirical formulas, representing the lowest whole-number ratio of ions that yields zero net charge. A 1:1 ratio of Mg²⁺ to O²⁻ balances the charges completely: (+2) + (-2) = 0. The correct formula is MgO, not Mg₂O₂.',
    keyConcept: 'Ionic formulas are empirical formulas and must always be simplified to the lowest whole-number ratio.'
  },
  {
    id: 'form-5',
    topicId: 'ionic-formulas',
    title: 'Charge Balancing with Main-Group Nitride: Barium Nitride',
    type: 'multiple-choice',
    difficulty: 'Proficient',
    prompt: 'Barium (Group 2) reacts with Nitrogen (Group 15) to form barium nitride. What is the correct formula and mathematical justification for this ionic compound?',
    options: [
      {
        id: 'opt-a',
        text: 'Ba₂N₃, because two barium ions (+4) combine with three nitrogen ions (-3) to produce a net stable charge of +1.',
        misconceptionExplanation: 'Two Ba²⁺ produce +4 and three N³⁻ produce -9; the charges do not balance, and stable ionic compounds must have net charge 0.'
      },
      {
        id: 'opt-b',
        text: 'BaN₂, because one barium atom shares two electrons with a diatomic nitrogen molecule to establish closed electron shells.',
        misconceptionExplanation: 'Barium is an alkaline earth metal (Ba²⁺) and nitrogen forms nitride (N³⁻); they transfer electrons rather than forming molecular bonds.'
      },
      {
        id: 'opt-c',
        text: 'Ba₃N₂, because three Ba²⁺ cations (+6) exactly balance two N³⁻ anions (-6), producing a net charge of zero.',
      },
      {
        id: 'opt-d',
        text: 'BaN, because main-group binary compounds always bond in a direct one-to-one ratio regardless of periodic group numbers.',
        misconceptionExplanation: 'Subscripts depend strictly on ion charges. Ba is +2 and N is -3; a 1:1 ratio would leave an excess charge of -1.'
      }
    ],
    correctOptionId: 'opt-c',
    hint: 'Determine the ion charges: What ion does Group 2 barium form? What ion does Group 15 nitrogen form? What is the LCM of 2 and 3?',
    explanation: 'Barium is an alkaline earth metal in Group 2 that loses 2 valence electrons to form Ba²⁺. Nitrogen is in Group 15 that gains 3 electrons to achieve an octet, forming N³⁻. The lowest common multiple of 2 and 3 is 6. Three Ba²⁺ ions supply +6 total charge, and two N³⁻ ions supply -6 total charge: 3(+2) + 2(-3) = 0. The correct formula is Ba₃N₂.',
    keyConcept: 'Binary ionic formulas balance the lowest common multiple of the cation and anion charges to reach zero net charge.'
  },
  {
    id: 'form-6',
    topicId: 'ionic-formulas',
    title: 'CER: Charge Neutrality in Aluminum Carbonate',
    type: 'cer',
    difficulty: 'Advanced',
    prompt: 'A laboratory technician needs to order aluminum carbonate for an experiment. Construct a Claim-Evidence-Reasoning argument justifying the correct chemical formula and charge balance.',
    cerData: {
      claims: [
        {
          id: 'c-1',
          text: 'The correct chemical formula for aluminum carbonate is Al(CO₃)₃.',
          misconceptionExplanation: 'Al(CO₃)₃ produces a net charge of (+3) + 3(-2) = -3, which is not electrically neutral.'
        },
        {
          id: 'c-2',
          text: 'The correct chemical formula for aluminum carbonate is Al₂(CO₃)₃.',
        },
        {
          id: 'c-3',
          text: 'The correct chemical formula for aluminum carbonate is Al₃(CO₃)₂.',
          misconceptionExplanation: 'Al₃(CO₃)₂ produces a net charge of 3(+3) + 2(-2) = +5, which carries a large excess positive charge.'
        }
      ],
      correctClaimId: 'c-2',
      evidence: [
        {
          id: 'e-1',
          text: 'Aluminum is a Group 13 metal forming Al³⁺, and carbonate is a polyatomic anion with formula CO₃²⁻.',
        },
        {
          id: 'e-2',
          text: 'Aluminum has 3 valence electrons while carbon and oxygen each contain 4 and 6 valence electrons.',
          misconceptionExplanation: 'While true of neutral atoms, the evidence must directly cite the ionic charges of the reacting ions.'
        },
        {
          id: 'e-3',
          text: 'Carbonate has a subscript 3 on oxygen, so the aluminum cation must also take a subscript 3.',
          misconceptionExplanation: 'Subscripts inside a polyatomic ion belong to its internal formula and do not dictate the cation subscript.'
        }
      ],
      correctEvidenceId: 'e-1',
      reasoning: [
        {
          id: 'r-1',
          text: 'Because ionic crystals can remain stable with net positive or negative charges if polyatomic ions are present.',
          misconceptionExplanation: 'All stable bulk ionic compounds must be completely electrically neutral (net charge = 0).'
        },
        {
          id: 'r-2',
          text: 'Two Al³⁺ ions provide +6 total charge and three CO₃²⁻ ions provide -6 total charge, achieving the necessary net charge of zero.',
        },
        {
          id: 'r-3',
          text: 'Because multiplying subscripts across the formula yields the highest number of covalent resonance bonds.',
          misconceptionExplanation: 'Ionic formula determination is governed by electrostatic charge neutrality, not resonance structures.'
        }
      ],
      correctReasoningId: 'r-2'
    },
    hint: 'Look up the charges: Aluminum is Al³⁺ and carbonate is CO₃²⁻. What combination of whole numbers balances (+3) and (-2) to 0?',
    explanation: 'Claim: The correct chemical formula for aluminum carbonate is Al₂(CO₃)₃. Evidence: Aluminum forms Al³⁺ and carbonate is CO₃²⁻. Reasoning: Two Al³⁺ ions supply a total positive charge of +6, and three CO₃²⁻ polyatomic ions supply a total negative charge of -6. Because (+6) + (-6) = 0, the compound achieves electrostatic neutrality with the lowest whole-number ratio.',
    keyConcept: 'Electrostatic neutrality requires that the total positive cation charge equals the total negative anion charge.'
  },

  // -----------------------------------------------------------------------
  // MODULE 3: SUBSTANCE PROPERTIES & EXPERIMENTAL EVIDENCE (6 Questions)
  // -----------------------------------------------------------------------
  {
    id: 'prop-1',
    topicId: 'substance-properties',
    title: 'Classifying Unknown Substance X from Lab Data',
    type: 'multiple-choice',
    difficulty: 'Foundation',
    prompt: 'A chemistry student analyzes an unknown white crystalline solid (Substance X) and records the following laboratory observations:\n• Melting point: 801 °C\n• Solubility in water: Dissolves readily\n• Solid electrical conductivity: None\n• Aqueous solution electrical conductivity: High\n• Physical behavior: Hard, brittle; shatters into flat facets when struck.\nClassify Substance X and justify your decision.',
    options: [
      {
        id: 'opt-a',
        text: 'Covalent molecular, because its high water solubility proves the molecules possess strong attractive forces that conduct electricity.',
        misconceptionExplanation: 'Covalent molecular substances do not conduct electricity in water because they dissolve into neutral molecules, not free ions.'
      },
      {
        id: 'opt-b',
        text: 'Metallic, because its high melting point and electrical conductivity demonstrate the presence of freely delocalized valence electrons.',
        misconceptionExplanation: 'Metals conduct electricity in the SOLID state and are malleable, whereas Substance X does not conduct as a solid and is brittle.'
      },
      {
        id: 'opt-c',
        text: 'Ionic, because its high melting point, brittleness, and aqueous conductivity indicate a rigid crystal lattice of mobile ions when dissolved.',
      },
      {
        id: 'opt-d',
        text: 'Covalent network, because only diamond and quartz can resist melting below 800 °C while remaining brittle under mechanical stress.',
        misconceptionExplanation: 'Covalent network solids like quartz are insoluble in water and do not conduct electricity in aqueous solution.'
      }
    ],
    correctOptionId: 'opt-c',
    hint: 'Look at the combination of evidence: Very high melting point (> 800 °C), brittle crystal lattice, non-conductive solid, but highly conductive in aqueous solution. Which bonding category fits all these traits?',
    explanation: 'Substance X exhibits the classic diagnostic properties of an ionic compound: (1) high melting point (801 °C) due to strong electrostatic attractions across a 3D lattice, (2) brittleness because shifting lattice layers forces like charges into repulsion, (3) non-conductivity as a solid because ions are locked in fixed positions, and (4) high aqueous conductivity because dissolved ions are free to move and carry current.',
    keyConcept: 'Ionic substances have high melting points, are brittle, insulate as solids, and conduct electricity when dissolved in water.'
  },
  {
    id: 'prop-2',
    topicId: 'substance-properties',
    title: 'Atomic Mechanism of Electrical Conductivity: Solid vs Solution',
    type: 'multiple-choice',
    difficulty: 'Proficient',
    prompt: 'Solid sodium chloride (NaCl) does not conduct electricity, but when dissolved in water or melted, the liquid conducts electricity exceptionally well. What atomic-level mechanism explains this dramatic difference in conductivity?',
    options: [
      {
        id: 'opt-a',
        text: 'In the solid state, valence electrons are tightly held in localized covalent bonds; melting frees electrons to flow across the liquid.',
        misconceptionExplanation: 'NaCl is ionic, not covalent. Electrical conductivity in molten or dissolved salts is carried by moving ions, not free electrons.'
      },
      {
        id: 'opt-b',
        text: 'In the solid state, ions are locked into fixed lattice positions; when dissolved or melted, hydrated ions are free to move and transport charge.',
      },
      {
        id: 'opt-c',
        text: 'Water molecules undergo a chemical decomposition that releases hydronium ions whenever any dry solid mineral is added to the beaker.',
        misconceptionExplanation: 'Water does not chemically decompose upon dissolving NaCl; water simply separates and hydrates the existing Na⁺ and Cl⁻ ions.'
      },
      {
        id: 'opt-d',
        text: 'Sodium metal separates from chlorine gas during dissolution, allowing the pure metallic sodium atoms to form a conducting liquid path.',
        misconceptionExplanation: 'Dissolving NaCl does not generate elemental sodium metal (which would explode in water); it merely dissociates into stable Na⁺ and Cl⁻ ions.'
      }
    ],
    correctOptionId: 'opt-b',
    hint: 'What is required for an electric current to flow? What particles are present in an ionic solid, and why can they move in water but not in the solid crystal?',
    explanation: 'Electrical conductivity requires mobile charged particles. In solid NaCl, Na⁺ and Cl⁻ ions are held tightly in fixed lattice positions by strong electrostatic attractions and cannot move. When NaCl dissolves in water or melts, the crystal lattice breaks apart, allowing mobile hydrated Na⁺ and Cl⁻ ions to migrate toward oppositely charged electrodes, carrying an electric current.',
    keyConcept: 'Ionic conduction requires mobile ions; solid crystals lock ions in place, while liquid or aqueous states free them.'
  },
  {
    id: 'prop-3',
    topicId: 'substance-properties',
    title: 'Explaining Brittleness in Ionic Crystals vs Metals',
    type: 'multiple-choice',
    difficulty: 'Proficient',
    prompt: 'When struck with a hammer, a piece of copper metal flattens into a thin sheet (malleable), while a crystal of potassium chloride (KCl) shatters into tiny pieces (brittle). What best explains this difference at the particulate level?',
    options: [
      {
        id: 'opt-a',
        text: 'Copper atoms possess higher electronegativity than potassium, allowing copper atoms to stretch their covalent bonds without snapping.',
        misconceptionExplanation: 'Copper is a metal with metallic bonding (delocalized electron sea), not covalent bonding, and its electronegativity is not the primary factor.'
      },
      {
        id: 'opt-b',
        text: 'Striking potassium chloride breaks individual nuclear protons, releasing repulsive electromagnetic waves that shatter surrounding atoms.',
        misconceptionExplanation: 'Mechanical stress never breaks nuclear protons; chemical and mechanical impacts only affect chemical bonding and lattice planes.'
      },
      {
        id: 'opt-c',
        text: 'Striking KCl shifts layers of ions so that like charges align; the resulting electrostatic repulsion causes the crystal lattice to fracture.',
      },
      {
        id: 'opt-d',
        text: 'Potassium chloride contains air pockets trapped between its covalent rings that burst open whenever external pressure is applied.',
        misconceptionExplanation: 'KCl is an ionic crystal with an alternating lattice of K⁺ and Cl⁻ ions, not an assembly of covalent rings with trapped air.'
      }
    ],
    correctOptionId: 'opt-c',
    hint: 'Think about what happens to alternating positive and negative ions when an external force shifts one layer of the crystal by just one atomic position.',
    explanation: 'In an ionic crystal like KCl, alternating positive (K⁺) and negative (Cl⁻) ions are held in a precise 3D lattice. When an external mechanical force strikes the crystal, layers of ions shift relative to one another. This shift places ions of the same charge directly adjacent to each other (+ next to +, - next to -). The resulting intense electrostatic repulsion fractures the crystal along cleavage planes.',
    keyConcept: 'Brittleness in ionic crystals results from the electrostatic repulsion that occurs when shifting layers align like-charged ions.'
  },
  {
    id: 'prop-4',
    topicId: 'substance-properties',
    title: 'Evaluating Laboratory Data for Four Unknowns (A, B, C, D)',
    type: 'multiple-choice',
    difficulty: 'Advanced',
    prompt: 'A laboratory group tests four unknown white solids (A, B, C, D) and records their findings in the table below. Which substance is definitively an ionic compound?',
    scenarioData: {
      type: 'table',
      title: 'Physical Properties of Unknown Substances',
      headers: ['Substance', 'Melting Point (°C)', 'Water Solubility', 'Solid Conductivity', 'Aqueous Conductivity'],
      rows: [
        ['Substance A', '65 °C', 'Insoluble', 'Non-conductive', 'Insoluble (N/A)'],
        ['Substance B', '186 °C', 'High', 'Non-conductive', 'Non-conductive'],
        ['Substance C', '770 °C', 'High', 'Non-conductive', 'High'],
        ['Substance D', '1450 °C', 'Insoluble', 'Conductive', 'Insoluble (N/A)']
      ]
    },
    options: [
      {
        id: 'opt-a',
        text: 'Substance A, because its low melting point allows it to melt rapidly without expending unnecessary lattice dissociation energy.',
        misconceptionExplanation: 'A melting point of 65 °C is characteristic of a covalent molecular compound held by weak intermolecular forces.'
      },
      {
        id: 'opt-b',
        text: 'Substance B, because its high water solubility confirms that its chemical bonds completely dissociate into neutral electrolyte molecules.',
        misconceptionExplanation: 'Substance B dissolves but does not conduct in solution (like table sugar, C₁₂H₂₂O₁₁), meaning it dissolves as neutral covalent molecules.'
      },
      {
        id: 'opt-c',
        text: 'Substance C, because its high melting point, water solubility, solid insulation, and high aqueous conductivity match ionic compounds.',
      },
      {
        id: 'opt-d',
        text: 'Substance D, because conducting electricity in the solid state is the defining physical property of all ionic crystalline minerals.',
        misconceptionExplanation: 'Solid electrical conductivity indicates a metal (or graphite), not an ionic compound. Ionic solids cannot conduct as solids.'
      }
    ],
    correctOptionId: 'opt-c',
    hint: 'Examine Substance C: melting point 770 °C, highly soluble in water, non-conductive solid, and highly conductive in aqueous solution. Compare with Substance B, which dissolves but does NOT conduct.',
    explanation: 'Substance C is unambiguously ionic: it has a high melting point (770 °C), dissolves in water, insulates as a solid, and conducts strongly when dissolved in water due to mobile ions. In contrast, Substance B is covalent molecular (like sugar) because it dissolves without conducting. Substance D is metallic because it conducts in the solid state.',
    keyConcept: 'Only ionic compounds exhibit the combination of high melting point, non-conductivity as a solid, and high conductivity in aqueous solution.'
  },
  {
    id: 'prop-5',
    topicId: 'substance-properties',
    title: 'Melting Point Comparison: Methane (CH₄) vs Magnesium Fluoride (MgF₂)',
    type: 'multiple-choice',
    difficulty: 'Proficient',
    prompt: 'Methane (CH₄) melts at -182 °C and is a gas at room temperature. Magnesium fluoride (MgF₂) melts at 1263 °C and is a rigid solid. Which statement best explains this immense difference in melting points?',
    options: [
      {
        id: 'opt-a',
        text: 'Methane contains covalent bonds between nonmetals (C and H, both EN > 2.0); melting only requires overcoming weak intermolecular forces between molecules.',
      },
      {
        id: 'opt-b',
        text: 'Magnesium fluoride contains four times as many total electrons as methane, creating stronger gravitational attraction between atoms.',
        misconceptionExplanation: 'Melting point differences are dictated by electrostatic and chemical intermolecular/interionic forces, not gravitational pull.'
      },
      {
        id: 'opt-c',
        text: 'Methane has a lower melting point because carbon atoms expand when heated, forcing the hydrogen atoms to separate and evaporate.',
        misconceptionExplanation: 'Heating does not expand carbon atoms; melting overcomes intermolecular attractions between separate CH₄ molecules.'
      },
      {
        id: 'opt-d',
        text: 'Magnesium fluoride requires higher temperatures because fluorine has an electronegativity of 4.0, which chemically prevents liquid formation.',
        misconceptionExplanation: 'Electronegativity creates the high ionic lattice energy; it does not prevent liquid formation (MgF₂ melts into a conducting liquid at 1263 °C).'
      }
    ],
    correctOptionId: 'opt-a',
    hint: 'What must be overcome to melt an ionic compound vs. a covalent molecular compound? Does melting methane break the C–H bonds or separate CH₄ molecules from each other?',
    explanation: 'MgF₂ is an ionic compound (Mg has EN = 1.2, F has EN = 4.0). Melting it requires breaking the immensely strong electrostatic attractions holding Mg²⁺ and F⁻ ions in a 3D crystal lattice (1263 °C). CH₄ is a covalent compound (C has EN = 2.5, H has EN = 2.1; both > 2.0). Melting CH₄ does not break the covalent C–H bonds; it only requires overcoming very weak intermolecular forces between individual CH₄ molecules (-182 °C).',
    keyConcept: 'Melting molecular covalent substances overcomes weak intermolecular forces; melting ionic substances requires overcoming strong lattice ionic bonds.'
  },
  {
    id: 'prop-6',
    topicId: 'substance-properties',
    title: 'CER: Classifying Unknown Sample Q',
    type: 'cer',
    difficulty: 'Advanced',
    prompt: 'A forensic laboratory tests an unidentified white powder recovered from a chemical storage room. The data indicates: Melting point = 115 °C; Solubility in water = Insoluble; Electrical conductivity in pure molten state = Non-conductive; Hardness = Soft, waxy solid easily scraped with a spatula. Construct a Claim-Evidence-Reasoning argument to identify its bonding type.',
    cerData: {
      claims: [
        {
          id: 'c-1',
          text: 'Unknown Sample Q is an ionic crystalline salt.',
          misconceptionExplanation: 'Ionic compounds have melting points typically well above 400 °C, are hard and brittle, and conduct electricity when molten.'
        },
        {
          id: 'c-2',
          text: 'Unknown Sample Q is a covalent molecular compound.',
        },
        {
          id: 'c-3',
          text: 'Unknown Sample Q is a pure elemental transition metal.',
          misconceptionExplanation: 'Pure metals are malleable and conduct electricity in both solid and molten states.'
        }
      ],
      correctClaimId: 'c-2',
      evidence: [
        {
          id: 'e-1',
          text: 'The powder is white in color and stored inside a glass reagent container.',
          misconceptionExplanation: 'Color and container type are non-diagnostic physical characteristics common to many substances.'
        },
        {
          id: 'e-2',
          text: 'The sample has a low melting point (115 °C), is a soft waxy solid, and fails to conduct electricity when melted.',
        },
        {
          id: 'e-3',
          text: 'The sample did not react with concentrated hydrochloric acid during a preliminary spot test.',
          misconceptionExplanation: 'Acid reactivity alone does not differentiate ionic salts from covalent molecular waxes.'
        }
      ],
      correctEvidenceId: 'e-2',
      reasoning: [
        {
          id: 'r-1',
          text: 'Ionic compounds form waxy structures when their positive and negative ions neutralize each other into non-conductive layers.',
          misconceptionExplanation: 'Ionic compounds form hard, brittle crystal lattices, never soft waxy solids.'
        },
        {
          id: 'r-2',
          text: 'Low melting point and lack of molten conductivity indicate weak intermolecular forces between neutral molecules rather than an ionic lattice.',
        },
        {
          id: 'r-3',
          text: 'Because substances with melting points below 200 °C always contain double or triple bonds between carbon atoms.',
          misconceptionExplanation: 'Bond order (single vs double vs triple) cannot be deduced purely from a low melting point.'
        }
      ],
      correctReasoningId: 'r-2'
    },
    hint: 'Compare the evidence (melting point 115 °C, soft/waxy, non-conducting melt) to the diagnostic properties of ionic vs covalent substances.',
    explanation: 'Claim: Unknown Sample Q is a covalent molecular compound. Evidence: It melts at a low temperature (115 °C), is soft and waxy, and does not conduct electricity even when melted. Reasoning: Covalent molecular compounds are composed of neutral molecules held together by weak intermolecular attractions, leading to low melting points and soft textures. The absence of mobile ions in the molten state confirms the absence of an ionic crystal lattice.',
    keyConcept: 'Covalent molecular substances are characterized by low melting points, soft/waxy texture, and lack of electrical conductivity in liquid/molten states.'
  },

  // -----------------------------------------------------------------------
  // MODULE 4: HALOGEN & NONMETAL REACTIVITY SERIES (6 Questions)
  // -----------------------------------------------------------------------
  {
    id: 'hal-1',
    topicId: 'halogen-reactivity',
    title: 'Deducing Reactivity from Single-Replacement Lab Data',
    type: 'multiple-choice',
    difficulty: 'Proficient',
    prompt: 'A student mixes aqueous solutions of halogens (Cl₂, Br₂, I₂) with potassium halide salts (KCl, KBr, KI) in cyclohexane test tubes. The experimental observations are recorded below:\n\n• Cl₂ + 2 KBr(aq) → Reaction occurs (orange Br₂ formed)\n• Cl₂ + 2 KI(aq) → Reaction occurs (purple I₂ formed)\n• Br₂ + 2 KCl(aq) → No reaction (NR)\n• Br₂ + 2 KI(aq) → Reaction occurs (purple I₂ formed)\n• I₂ + 2 KCl(aq) → No reaction (NR)\n• I₂ + 2 KBr(aq) → No reaction (NR)\n\nBased strictly on this experimental evidence, what is the correct relative reactivity order of the nonmetals from MOST reactive to LEAST reactive?',
    options: [
      {
        id: 'opt-a',
        text: 'Iodine > Bromine > Chlorine, because iodine displaced the fewest ions and therefore retained the highest chemical potential energy.',
        misconceptionExplanation: 'A nonmetal that displaces zero elements is the least reactive, not the most reactive.'
      },
      {
        id: 'opt-b',
        text: 'Bromine > Chlorine > Iodine, because bromine reacted with one salt and failed to react with another, showing balanced reactivity.',
        misconceptionExplanation: 'Chlorine displaced both bromide and iodide (2 reactions), making it more reactive than bromine (1 reaction).'
      },
      {
        id: 'opt-c',
        text: 'Chlorine > Bromine > Iodine, because Cl₂ displaced both Br⁻ and I⁻, Br₂ displaced only I⁻, and I₂ could not displace any halide.',
      },
      {
        id: 'opt-d',
        text: 'Chlorine = Bromine = Iodine, because halogens all belong to Group 17 and therefore have identical chemical reactivity in water.',
        misconceptionExplanation: 'Halogen reactivity varies systematically down the group; the experimental evidence clearly shows differing reaction capabilities.'
      }
    ],
    correctOptionId: 'opt-c',
    hint: 'Count the successful single-replacement reactions for each free halogen: How many halides did Cl₂ displace? How many did Br₂ displace? How many did I₂ displace?',
    explanation: 'Reactivity in single-replacement reactions is determined by the ability of an elemental nonmetal to take electrons from a dissolved halide anion. Chlorine displaced both Br⁻ and I⁻ (2 successful reactions). Bromine displaced only I⁻ (1 successful reaction). Iodine could displace neither Cl⁻ nor Br⁻ (0 reactions). Therefore, the reactivity order deduced from the data is Chlorine > Bromine > Iodine.',
    keyConcept: 'In nonmetal single-replacement reactions, a more reactive nonmetal displaces a less reactive nonmetal ion from solution.'
  },
  {
    id: 'hal-2',
    topicId: 'halogen-reactivity',
    title: 'Predicting a Single-Replacement Reaction Outcome',
    type: 'multiple-choice',
    difficulty: 'Foundation',
    prompt: 'Given that the reactivity order for halogens is Fluorine (F₂) > Chlorine (Cl₂) > Bromine (Br₂) > Iodine (I₂), predict what will occur when elemental Bromine liquid (Br₂) is added to an aqueous solution of Sodium Fluoride (NaF).',
    options: [
      {
        id: 'opt-a',
        text: 'Br₂ + 2 NaF(aq) → 2 NaBr(aq) + F₂(g), because liquid bromine has higher kinetic density than fluoride ions.',
        misconceptionExplanation: 'Reactivity, not physical state or density, governs single-replacement reactions. Bromine is less reactive than fluorine and cannot displace it.'
      },
      {
        id: 'opt-b',
        text: 'No reaction occurs, because bromine is less reactive than fluorine and cannot displace fluoride ions from the compound.',
      },
      {
        id: 'opt-c',
        text: 'Br₂ + NaF(aq) → NaBr₂F(aq), because halogens combine together into double-halogen complex salts whenever mixed.',
        misconceptionExplanation: 'Nonmetal single-replacement reactions do not synthesize polyhalide double salts; an elemental nonmetal either displaces the anion or no reaction occurs.'
      },
      {
        id: 'opt-d',
        text: 'Sodium metal will precipitate as a solid while a mixed bromine-fluorine gas bubbles out of the solution.',
        misconceptionExplanation: 'Halogens do not reduce active metal cations like Na⁺ into elemental sodium metal.'
      }
    ],
    correctOptionId: 'opt-b',
    hint: 'Compare the reactivity of the free incoming halogen (Br₂) with the nonmetal already in the compound (F⁻). Can a weaker nonmetal displace a stronger nonmetal?',
    explanation: 'In a nonmetal single-replacement reaction, a free halogen can only displace a halide ion if the free halogen is MORE reactive than the halide in solution. Because bromine is below fluorine in Group 17 and is significantly less reactive than fluorine, Br₂ does not have enough electron-attracting power to displace F⁻. Therefore, No Reaction (NR) occurs.',
    keyConcept: 'A less reactive free halogen cannot displace a more reactive halide ion from an aqueous solution.'
  },
  {
    id: 'hal-3',
    topicId: 'halogen-reactivity',
    title: 'Reactivity of Unfamiliar Nonmetals: Analyzing Mystery Data',
    type: 'multiple-choice',
    difficulty: 'Advanced',
    prompt: 'A research chemist discovers four reactive nonmetals labeled X, Y, Z, and W. Laboratory single-replacement experiments produced the following results:\n\n1. X₂ + 2 NaY(aq) → 2 NaX(aq) + Y₂ (Reaction occurs)\n2. Z₂ + 2 NaW(aq) → 2 NaZ(aq) + W₂ (Reaction occurs)\n3. Y₂ + 2 NaZ(aq) → 2 NaY(aq) + Z₂ (Reaction occurs)\n4. W₂ + 2 NaX(aq) → No Reaction (NR)\n\nDetermine the complete reactivity sequence from MOST reactive to LEAST reactive.',
    options: [
      {
        id: 'opt-a',
        text: 'X > Y > Z > W, because X displaces Y, Y displaces Z, and Z displaces W, establishing a direct chain of relative reactivity.',
      },
      {
        id: 'opt-b',
        text: 'W > Z > Y > X, because W is tested last and therefore represents the final stable oxidation state of the system.',
        misconceptionExplanation: 'W₂ failed to react with NaX, and W was displaced by Z, proving that W is the least reactive nonmetal in the group.'
      },
      {
        id: 'opt-c',
        text: 'Z > X > W > Y, because Z successfully displaced W in reaction 2 while Y was unable to displace X in reaction 1.',
        misconceptionExplanation: 'From reaction 1, X > Y. From reaction 3, Y > Z. Therefore X must be more reactive than Z (X > Y > Z).'
      },
      {
        id: 'opt-d',
        text: 'Y > X > Z > W, because Y is involved in two separate reactions while X is only involved in one displacement.',
        misconceptionExplanation: 'In reaction 1, X displaced Y, which proves X is more reactive than Y (X > Y), not the other way around.'
      }
    ],
    correctOptionId: 'opt-a',
    hint: 'Chain together the displacement statements: Reaction 1 shows X > Y. Reaction 3 shows Y > Z. Reaction 2 shows Z > W. Combine these pairwise comparisons.',
    explanation: 'From Reaction 1: X₂ displaces Y⁻, meaning X > Y. From Reaction 3: Y₂ displaces Z⁻, meaning Y > Z. From Reaction 2: Z₂ displaces W⁻, meaning Z > W. Combining these results gives the transitive order: X > Y > Z > W. Reaction 4 confirms this order because W₂ (the least reactive) cannot displace X⁻.',
    keyConcept: 'Pairwise single-replacement reactions can be chained together to establish an empirical nonmetal activity series.'
  },
  {
    id: 'hal-4',
    topicId: 'halogen-reactivity',
    title: 'Atomic Structure Explanation: Why Fluorine Outreacts Iodine',
    type: 'multiple-choice',
    difficulty: 'Proficient',
    prompt: 'Fluorine (F) is significantly more reactive as a nonmetal than iodine (I). Which statement provides the best atomic-level explanation for why nonmetal reactivity decreases down Group 17?',
    options: [
      {
        id: 'opt-a',
        text: 'Fluorine atoms have more electron shells than iodine, creating stronger gravitational attraction that captures passing electrons.',
        misconceptionExplanation: 'Fluorine has fewer electron shells (2 shells) than iodine (5 shells), and gravity plays no role in chemical bonding.'
      },
      {
        id: 'opt-b',
        text: 'Fluorine has fewer electron shells, so its valence shell is closer to the nucleus with less electron shielding, attracting incoming electrons more strongly.',
      },
      {
        id: 'opt-c',
        text: 'Iodine has a larger nucleus that repels incoming electrons because of its 53 positively charged protons.',
        misconceptionExplanation: 'A larger positive nuclear charge attracts electrons, but iodine\'s inner electron shells shield this charge, and its valence shell is much farther away.'
      },
      {
        id: 'opt-d',
        text: 'Fluorine has 7 valence electrons while iodine only has 1 valence electron, making fluorine seven times more reactive.',
        misconceptionExplanation: 'All halogens in Group 17 have exactly 7 valence electrons; their differing reactivity is due to atomic radius and shielding.'
      }
    ],
    correctOptionId: 'opt-b',
    hint: 'Think about atomic size and shielding: Nonmetals react by GAINING electrons. Is it easier for a small atom (few shells) or a large atom (many shells) to pull in an outside electron?',
    explanation: 'Nonmetals react chemically by gaining electrons to achieve an octet. Fluorine has only 2 electron energy levels (small atomic radius) and minimal electron shielding. Its positively charged nucleus exerts a powerful electrostatic pull on outside electrons. In contrast, iodine has 5 electron levels; its outer shell is far from the nucleus and heavily shielded by inner electrons, making it much harder to attract an electron.',
    keyConcept: 'Nonmetal reactivity decreases down a group because increasing atomic radius and electron shielding weaken the pull on incoming electrons.'
  },
  {
    id: 'hal-5',
    topicId: 'halogen-reactivity',
    title: 'Single Replacement: Chlorine Gas Bubbled into Potassium Bromide',
    type: 'multiple-choice',
    difficulty: 'Foundation',
    prompt: 'Chlorine gas (Cl₂) is bubbled through a colorless aqueous solution of potassium bromide (KBr). What chemical changes occur, and what are the correct products?',
    options: [
      {
        id: 'opt-a',
        text: 'No reaction occurs because potassium bromide forms an insoluble precipitate that prevents chlorine gas from interacting.',
        misconceptionExplanation: 'Potassium bromide is highly soluble in water, and chlorine is more reactive than bromine, so a displacement reaction readily occurs.'
      },
      {
        id: 'opt-b',
        text: 'Chlorine displaces potassium to form elemental potassium metal solid and bromine monochloride gas: Cl₂ + 2 KBr → 2 K + 2 BrCl.',
        misconceptionExplanation: 'In nonmetal single-replacement reactions, a nonmetal replaces the nonmetal anion (Br⁻), not the metallic cation (K⁺).'
      },
      {
        id: 'opt-c',
        text: 'Chlorine displaces bromide ions, producing aqueous potassium chloride and elemental liquid/dissolved bromine: Cl₂ + 2 KBr(aq) → 2 KCl(aq) + Br₂(aq).',
      },
      {
        id: 'opt-d',
        text: 'Potassium bromide decomposes spontaneously into potassium ions and bromine gas without consuming any of the chlorine gas.',
        misconceptionExplanation: 'KBr does not decompose on its own in water; chlorine actively oxidizes bromide ions into elemental bromine.'
      }
    ],
    correctOptionId: 'opt-c',
    hint: 'Chlorine is higher in Group 17 than bromine, making it more reactive. Which species is replaced in KBr: the metal cation (K⁺) or the nonmetal anion (Br⁻)?',
    explanation: 'Chlorine (Cl₂) is more reactive than bromine (Br₂). When Cl₂ is bubbled into KBr(aq), chlorine strips electrons from the bromide ions (2 Br⁻ → Br₂ + 2e⁻) and is reduced to chloride ions (Cl₂ + 2e⁻ → 2 Cl⁻). The resulting equation is Cl₂(g) + 2 KBr(aq) → 2 KCl(aq) + Br₂(aq). The clear solution turns yellow/orange due to liberated bromine.',
    keyConcept: 'A more reactive nonmetal oxidizes the less reactive halide ion in aqueous solution, liberating the elemental halogen.'
  },
  {
    id: 'hal-6',
    topicId: 'halogen-reactivity',
    title: 'CER: Determining Reactivity from a 3×3 Reaction Matrix',
    type: 'cer',
    difficulty: 'Advanced',
    prompt: 'Examine the experimental reaction data table below for halogens A₂, B₂, and C₂ mixed with aqueous sodium salts NaA, NaB, and NaC. Construct a Claim-Evidence-Reasoning argument identifying the relative reactivity series.',
    scenarioData: {
      type: 'reaction-matrix',
      title: 'Displacement Reaction Observations',
      headers: ['Reactants', 'NaA(aq)', 'NaB(aq)', 'NaC(aq)'],
      rows: [
        ['Halogen A₂', '—', 'Reaction Occurred', 'Reaction Occurred'],
        ['Halogen B₂', 'No Reaction (NR)', '—', 'No Reaction (NR)'],
        ['Halogen C₂', 'No Reaction (NR)', 'Reaction Occurred', '—']
      ]
    },
    cerData: {
      claims: [
        {
          id: 'c-1',
          text: 'The relative reactivity order of the nonmetals is A > C > B.',
        },
        {
          id: 'c-2',
          text: 'The relative reactivity order of the nonmetals is B > C > A.',
          misconceptionExplanation: 'Halogen B₂ failed to react with any salt (0 reactions), meaning B is the least reactive nonmetal, not the most reactive.'
        },
        {
          id: 'c-3',
          text: 'The relative reactivity order of the nonmetals is C > A > B.',
          misconceptionExplanation: 'Halogen A₂ displaced both B⁻ and C⁻ (2 reactions), whereas C₂ only displaced B⁻ (1 reaction), so A is more reactive than C.'
        }
      ],
      correctClaimId: 'c-1',
      evidence: [
        {
          id: 'e-1',
          text: 'All three halogens formed colored solutions when placed under an ultraviolet lamp.',
          misconceptionExplanation: 'Color under UV light does not measure single-replacement reaction occurrence.'
        },
        {
          id: 'e-2',
          text: 'A₂ produced 2 reactions (displaced B and C); C₂ produced 1 reaction (displaced B); B₂ produced 0 reactions.',
        },
        {
          id: 'e-3',
          text: 'Sodium is an alkali metal that loses 1 valence electron during each chemical interaction.',
          misconceptionExplanation: 'Sodium\'s oxidation state is constant (+1) and does not provide evidence for nonmetal reactivity rankings.'
        }
      ],
      correctEvidenceId: 'e-2',
      reasoning: [
        {
          id: 'r-1',
          text: 'Because halogens that do not react possess the highest electronegativities and repel all salt solutions.',
          misconceptionExplanation: 'Unreactive halogens have the lowest electronegativities and electron attractions, failing to displace halides.'
        },
        {
          id: 'r-2',
          text: 'A nonmetal that displaces another from its salt is more reactive; ranking by number of successful displacements gives A > C > B.',
        },
        {
          id: 'r-3',
          text: 'Because alphabetical ordering of elements reflects their chronological synthesis during stellar nucleosynthesis.',
          misconceptionExplanation: 'Alphabetical ordering is an arbitrary linguistic convention, not a physical chemistry principle.'
        }
      ],
      correctReasoningId: 'r-2'
    },
    hint: 'Tally the reactions in the table: How many checkmarks/reactions did Halogen A₂ get? Halogen B₂? Halogen C₂? Rank them by displacement power.',
    explanation: 'Claim: The relative reactivity series is A > C > B. Evidence: In the matrix, A₂ caused 2 reactions (displacing both B⁻ and C⁻), C₂ caused 1 reaction (displacing B⁻ only), and B₂ caused 0 reactions (displacing neither). Reasoning: In nonmetal single-replacement reactions, the ability of a halogen to displace a halide ion directly reflects its electron-attracting power (reactivity). Therefore, the element with the most displacements is most reactive, yielding A > C > B.',
    keyConcept: 'Nonmetal reactivity hierarchy can be directly established by counting displacement events in an experimental matrix.'
  },

  // -----------------------------------------------------------------------
  // MODULE 5: INTEGRATIVE CHEMISTRY CHALLENGES (4 Questions)
  // -----------------------------------------------------------------------
  {
    id: 'integ-1',
    topicId: 'integrative-challenges',
    title: 'Connecting Bonding, Formulas, and Electrical Properties',
    type: 'multiple-choice',
    difficulty: 'Advanced',
    prompt: 'Consider two substances: Calcium fluoride and Sulfur dichloride. Using your course rules for bonding (EN values: Ca = 1.0, F = 4.0, S = 2.5, Cl = 3.0), which statement correctly identifies both chemical formulas, bonding classifications, and molten electrical conductivities?',
    options: [
      {
        id: 'opt-a',
        text: 'CaF (covalent, non-conductive when molten) and SCl₂ (ionic, highly conductive when molten).',
        misconceptionExplanation: 'CaF is incorrectly balanced (Ca forms Ca²⁺, so the formula is CaF₂), and Ca-F is ionic because Ca is 1.0 (< 2.0) and F is 4.0 (> 2.0).'
      },
      {
        id: 'opt-b',
        text: 'CaF₂ (ionic, highly conductive when molten) and SCl₂ (covalent, non-conductive when molten).',
      },
      {
        id: 'opt-c',
        text: 'Ca₂F (ionic, non-conductive when molten) and S₂Cl (covalent, highly conductive when molten).',
        misconceptionExplanation: 'Ca₂F would have net charge (+4 - 1 = +3) which violates charge balance, and covalent liquids do not conduct electricity.'
      },
      {
        id: 'opt-d',
        text: 'CaF₂ (covalent, highly conductive when molten) and SCl₂ (ionic, non-conductive when molten).',
        misconceptionExplanation: 'CaF₂ is ionic, not covalent, and ionic compounds conduct when molten while covalent compounds do not.'
      }
    ],
    correctOptionId: 'opt-b',
    hint: 'Analyze each compound: For Ca + F, check EN values (1.0 vs 4.0) and charges (Ca²⁺ and F⁻). For S + Cl, check EN values (2.5 vs 3.0). Which conducts electricity when melted?',
    explanation: 'Calcium (EN = 1.0, < 2.0) and Fluorine (EN = 4.0, > 2.0) form an ionic bond under course rules. Because Ca forms Ca²⁺ and F forms F⁻, the neutral formula is CaF₂. When molten, its mobile Ca²⁺ and F⁻ ions conduct electricity. Sulfur (EN = 2.5, > 2.0) and Chlorine (EN = 3.0, > 2.0) are both nonmetals with EN > 2.0, forming covalent SCl₂. Being composed of neutral molecules, liquid SCl₂ does not conduct electricity.',
    keyConcept: 'Integrates electronegativity bonding prediction, ionic charge neutrality, and physical state electrical conductivity.'
  },
  {
    id: 'integ-2',
    topicId: 'integrative-challenges',
    title: 'Displacement Reaction and Product Property Prediction',
    type: 'multiple-choice',
    difficulty: 'Advanced',
    prompt: 'Chlorine gas is bubbled into an aqueous solution of sodium iodide (NaI). A single-replacement reaction occurs, forming a soluble ionic salt and a nonmetal element. Predict the formula of the salt formed and its physical properties when isolated as a dry solid.',
    options: [
      {
        id: 'opt-a',
        text: 'The salt is NaCl; as a dry solid it has a low melting point, is soft and waxy, and conducts electricity as a solid crystal.',
        misconceptionExplanation: 'NaCl is an ionic compound; it has a high melting point, is hard and brittle, and cannot conduct electricity in the solid state.'
      },
      {
        id: 'opt-b',
        text: 'The salt is NaI₂; as a dry solid it forms a covalent network lattice that decomposes into hazardous sodium metal at room temperature.',
        misconceptionExplanation: 'Iodine is displaced, not added to the salt, and sodium iodide does not form NaI₂.'
      },
      {
        id: 'opt-c',
        text: 'The salt is NaCl; as a dry solid it has a high melting point, is brittle, insulates as a solid, and conducts electricity when dissolved in water.',
      },
      {
        id: 'opt-d',
        text: 'The salt is ClI; as a dry solid it dissolves in water to form non-conducting gas bubbles that condense into liquid halogen.',
        misconceptionExplanation: 'In single-replacement, the incoming nonmetal pairs with the metal cation (Na⁺) to form NaCl, not an interhalogen compound.'
      }
    ],
    correctOptionId: 'opt-c',
    hint: 'Determine the single-replacement reaction products: Cl₂ + 2 NaI → ? What salt is produced? What are the standard physical properties of that ionic salt?',
    explanation: 'Chlorine is more reactive than iodine and displaces iodide: Cl₂(g) + 2 NaI(aq) → 2 NaCl(aq) + I₂(s). The isolated salt is sodium chloride (NaCl). As an ionic compound composed of Na⁺ and Cl⁻ held in a 3D crystal lattice, dry NaCl has a high melting point (~801 °C), is hard and brittle, does not conduct electricity in the solid state, and conducts strongly when dissolved in water.',
    keyConcept: 'Combines halogen single-replacement reaction prediction with the characteristic physical properties of ionic salts.'
  },
  {
    id: 'integ-3',
    topicId: 'integrative-challenges',
    title: 'CER: Analyzing Comprehensive Unknown Substance Z',
    type: 'cer',
    difficulty: 'Advanced',
    prompt: 'An unknown substance Z was investigated through several tests: (1) Elemental analysis reveals it consists of Potassium (K, metal, EN = 0.8) and Bromine (Br, nonmetal, EN = 2.8). (2) It forms white crystals that do not conduct electricity. (3) When dissolved in distilled water, the light bulb in a conductivity apparatus glows brightly. (4) Bubbling fluorine gas (F₂) through the solution causes a brown liquid (Br₂) to form. Construct a complete Claim-Evidence-Reasoning argument identifying the compound and its chemical behavior.',
    cerData: {
      claims: [
        {
          id: 'c-1',
          text: 'Substance Z is KBr, an ionic compound whose bromide ions are displaced by more reactive fluorine gas.',
        },
        {
          id: 'c-2',
          text: 'Substance Z is K₂Br, a covalent compound that decomposes when exposed to any diatomic halogen gas.',
          misconceptionExplanation: 'K₂Br carries an unneutralized net charge of +1, and K (0.8) with Br (2.8) forms an ionic bond, not covalent.'
        },
        {
          id: 'c-3',
          text: 'Substance Z is KBr₂, an ionic compound where potassium acts as an oxidizing agent against dissolved fluorine.',
          misconceptionExplanation: 'Potassium forms K⁺, not K²⁺, so the formula is KBr; fluorine acts as the oxidizing agent because it is more reactive.'
        }
      ],
      correctClaimId: 'c-1',
      evidence: [
        {
          id: 'e-1',
          text: 'Substance Z is composed of white crystals that were stored in a dark laboratory shelf.',
          misconceptionExplanation: 'Storage shelf location is circumstantial and does not provide valid chemical evidence.'
        },
        {
          id: 'e-2',
          text: 'K (0.8) has EN < 2.0 while Br (2.8) has EN > 2.0; the solution conducts electricity, and F₂ displaces Br₂.',
        },
        {
          id: 'e-3',
          text: 'Potassium is located in Period 4 and bromine is located in Period 4 of the periodic table.',
          misconceptionExplanation: 'Period placement does not account for conductivity observations or displacement reactions.'
        }
      ],
      correctEvidenceId: 'e-2',
      reasoning: [
        {
          id: 'r-1',
          text: 'Because elements with EN < 2.0 and > 2.0 form ionic K⁺ and Br⁻ (formula KBr, net charge 0) whose dissolved ions conduct, and more reactive F₂ displaces less reactive Br⁻.',
        },
        {
          id: 'r-2',
          text: 'Because whenever a metal and nonmetal bond, they form covalent networks that absorb halide gases into their crystal cavities.',
          misconceptionExplanation: 'Metals and nonmetals form ionic lattices under course rules, not covalent cavities.'
        },
        {
          id: 'r-3',
          text: 'Because fluorine is lower in group 17 than bromine, giving it weaker nuclear pull to replace bromide.',
          misconceptionExplanation: 'Fluorine is higher in Group 17 than bromine (Period 2 vs Period 4), giving it a stronger nuclear pull.'
        }
      ],
      correctReasoningId: 'r-1'
    },
    hint: 'Synthesize all four clues: Formula from K⁺ and Br⁻; bond type from EN values (0.8 vs 2.8); conductivity test; and single-replacement with F₂.',
    explanation: 'Claim: Substance Z is KBr, an ionic compound whose bromide ions are displaced by more reactive fluorine gas. Evidence: K has EN = 0.8 (< 2.0) and Br has EN = 2.8 (> 2.0); K⁺ (+1) and Br⁻ (-1) balance 1:1; aqueous solution conducts electricity; F₂ displaces Br₂. Reasoning: The electronegativity values confirm ionic bonding. Electrostatic neutrality gives KBr (net charge 0). Dissociated K⁺ and Br⁻ ions allow aqueous electrical conduction. Fluorine is higher in Group 17 and more reactive than bromine, displacing Br⁻ to produce Br₂ and KF.',
    keyConcept: 'Mastery synthesis linking electronegativity bonding rules, ionic formula charge balance, electrolyte conductivity, and halogen displacement.'
  },
  {
    id: 'integ-4',
    topicId: 'integrative-challenges',
    title: 'Evaluating Student Misconceptions Across Multiple Concepts',
    type: 'multiple-choice',
    difficulty: 'Advanced',
    prompt: 'A student made three statements in their chemistry lab notebook:\n1. "Silicon tetrachloride (SiCl₄) is ionic because silicon has an electronegativity of 1.8 (< 2.0)."\n2. "The formula for aluminum sulfide is Al₃S₂ because aluminum forms a +3 ion and sulfur forms a -2 ion."\n3. "Iodine gas will displace chloride ions from sodium chloride solution because iodine has a higher atomic mass."\nHow many of the student\'s statements are scientifically INCORRECT according to course principles?',
    options: [
      {
        id: 'opt-a',
        text: 'Only 1 statement is incorrect, because aluminum sulfide formula and halogen reactivity rules are both accurately described.',
        misconceptionExplanation: 'Statement 2 is wrong (Al³⁺ and S²⁻ balance as Al₂S₃, not Al₃S₂) and Statement 3 is also wrong (I₂ cannot displace Cl⁻).'
      },
      {
        id: 'opt-b',
        text: 'Only 2 statements are incorrect, because silicon tetrachloride is correctly classified as an ionic compound under all course rules.',
        misconceptionExplanation: 'Silicon is a metalloid; by course rule, metalloids with nonmetals are covalent (do not use EN for metalloids).'
      },
      {
        id: 'opt-c',
        text: 'All 3 statements are incorrect, as each violates a fundamental course rule for bonding, formula balance, or halogen reactivity.',
      },
      {
        id: 'opt-d',
        text: 'Zero statements are incorrect, because high school chemistry principles permit flexible interpretations of these experimental trends.',
        misconceptionExplanation: 'All three statements contain clear, objective chemistry errors that directly contradict the course standards.'
      }
    ],
    correctOptionId: 'opt-c',
    hint: 'Examine each statement individually: (1) Is Si a metalloid? Does the EN rule apply to metalloids? (2) Does Al₃S₂ give net charge 0? (3) Can iodine displace chlorine?',
    explanation: 'All 3 statements are scientifically INCORRECT! Statement 1 is wrong: Silicon is a metalloid, and metalloids bonded to nonmetals are covalent (the electronegativity rule must not be applied to metalloids). Statement 2 is wrong: Al³⁺ and S²⁻ balance with LCM = 6, yielding Al₂S₃ (2(+3) + 3(-2) = 0), not Al₃S₂. Statement 3 is wrong: Reactivity decreases down Group 17 (Cl₂ > Br₂ > I₂); iodine is less reactive than chlorine and cannot displace chloride ions regardless of atomic mass.',
    keyConcept: 'Integrative synthesis identifying core misconceptions across metalloid bonding, ionic formula balancing, and halogen reactivity.'
  }
];

// =========================================================================
// PRACTICE EXAM QUESTIONS (15 Substantive, Distinct Assessment Questions)
// =========================================================================
export const EXAM_QUESTIONS: Question[] = [
  // Question 1: Bonding - Metal + Nonmetal EN rule
  {
    id: 'exam-1',
    topicId: 'bonding',
    title: 'Bonding Prediction in Calcium Sulfide (CaS)',
    type: 'multiple-choice',
    difficulty: 'Foundation',
    prompt: 'Calcium (Ca, metal, EN = 1.0) combines with Sulfur (S, nonmetal, EN = 2.5). Predict the bond classification and describe the valence electron behavior.',
    options: [
      {
        id: 'opt-a',
        text: 'Covalent, because calcium and sulfur share two valence electron pairs to establish an overlapping octet cloud.',
        misconceptionExplanation: 'Calcium has EN = 1.0 (< 2.0) and is a metal with low ionization energy; it transfers electrons rather than sharing.'
      },
      {
        id: 'opt-b',
        text: 'Ionic, because one element has EN < 2.0 (Ca = 1.0) and the other has EN > 2.0 (S = 2.5), causing valence electron transfer.',
      },
      {
        id: 'opt-c',
        text: 'Covalent, because sulfur has a higher electronegativity and pulls calcium into a shared molecular tetrahedral ring.',
        misconceptionExplanation: 'When one element has EN < 2.0 and the other > 2.0, the bond is ionic, forming a crystalline lattice rather than molecular rings.'
      },
      {
        id: 'opt-d',
        text: 'Ionic, because sulfur loses its six valence electrons to calcium so both atoms achieve empty outermost valence levels.',
        misconceptionExplanation: 'Sulfur has the higher electronegativity (2.5 vs 1.0); sulfur gains 2 electrons to form S²⁻ while calcium loses 2 to form Ca²⁺.'
      }
    ],
    correctOptionId: 'opt-b',
    hint: 'Compare the electronegativity values to 2.0: Is one below 2.0 and the other above 2.0? What does that mean for electron transfer?',
    explanation: 'Calcium has an electronegativity of 1.0 (< 2.0) and sulfur has an electronegativity of 2.5 (> 2.0). Under course rules, pairing an element with EN < 2.0 with an element with EN > 2.0 results in an ionic bond. Calcium transfers its 2 valence electrons to sulfur, producing Ca²⁺ and S²⁻ ions that form an ionic lattice.',
    keyConcept: 'Metal (EN < 2.0) + Nonmetal (EN > 2.0) results in complete valence electron transfer and ionic bonding.'
  },

  // Question 2: Bonding - Metalloid + Nonmetal rule
  {
    id: 'exam-2',
    topicId: 'bonding',
    title: 'Bonding in Boron Trifluoride (BF₃) & Metalloids',
    type: 'multiple-choice',
    difficulty: 'Proficient',
    prompt: 'Boron (B, metalloid, EN = 2.0) reacts with Fluorine (F, nonmetal, EN = 4.0) to form boron trifluoride (BF₃). According to your course rules, how should the bonding in BF₃ be classified and explained?',
    options: [
      {
        id: 'opt-a',
        text: 'Ionic, because fluorine has the highest electronegativity of all elements and automatically converts all bonded partners into ions.',
        misconceptionExplanation: 'Fluorine forms covalent bonds with nonmetals (like HF, OF₂, CF₄) and with metalloids; high electronegativity alone does not guarantee ionic bonding.'
      },
      {
        id: 'opt-b',
        text: 'Ionic, because boron transfers its three valence electrons completely to three separate fluorine atoms to form a salt.',
        misconceptionExplanation: 'Boron is a metalloid; by course rule, metalloids bonded to nonmetals form covalent bonds through electron sharing.'
      },
      {
        id: 'opt-c',
        text: 'Covalent, because boron is a metalloid, and a metalloid bonded with a nonmetal forms covalent bonds through shared electrons.',
      },
      {
        id: 'opt-d',
        text: 'Metallic, because boron is located adjacent to metals on the periodic table and readily donates sea electrons to fluorine.',
        misconceptionExplanation: 'Boron is a metalloid, not a metal, and BF₃ is a covalent molecular gas, not a metallic conductor.'
      }
    ],
    correctOptionId: 'opt-c',
    hint: 'Review your course rule on metalloids: When a metalloid bonds with a nonmetal, what type of bond is formed? Remember not to apply the numerical EN rule to metalloids.',
    explanation: 'By your course rules, a metalloid bonded with a nonmetal is covalent. Boron is classified as a metalloid on the periodic table. Even though its electronegativity is 2.0, the numerical threshold rule must not be used for metalloids because doing so risks mischaracterizing the bonding. Boron shares electron pairs with fluorine atoms, forming covalent bonds.',
    keyConcept: 'A metalloid bonded with a nonmetal forms covalent bonds. Do not apply the electronegativity threshold rule to metalloids.'
  },

  // Question 3: Bonding - Nonmetal + Nonmetal Sharing
  {
    id: 'exam-3',
    topicId: 'bonding',
    title: 'Bonding in Nitrogen Trichloride (NCl₃)',
    type: 'multiple-choice',
    difficulty: 'Foundation',
    prompt: 'Nitrogen (N, nonmetal, EN = 3.0) combines with Chlorine (Cl, nonmetal, EN = 3.0). Predict the bonding type and justify your answer based on course criteria.',
    options: [
      {
        id: 'opt-a',
        text: 'Ionic, because nitrogen has 5 valence electrons and chlorine has 7, creating an imbalance that forces electron transfer.',
        misconceptionExplanation: 'Both nitrogen and chlorine have electronegativities of 3.0 (> 2.0); neither element can pull electrons away from the other.'
      },
      {
        id: 'opt-b',
        text: 'Ionic, because nitrogen and chlorine are located in different periodic rows, requiring them to form an alternating salt.',
        misconceptionExplanation: 'Different periodic rows have no bearing on ionic vs covalent classification; both atoms are nonmetals with EN > 2.0.'
      },
      {
        id: 'opt-c',
        text: 'Covalent, because both elements have electronegativities above 2.0, meaning both attract electrons strongly and share pairs.',
      },
      {
        id: 'opt-d',
        text: 'Covalent, because nitrogen loses its valence electrons into chlorine vacant d-orbitals through coordinate donor bonds.',
        misconceptionExplanation: 'Nitrogen does not lose electrons; each N–Cl bond consists of a shared electron pair between equal-electronegativity nonmetals.'
      }
    ],
    correctOptionId: 'opt-c',
    hint: 'Compare both electronegativity values (3.0 and 3.0) to the 2.0 course threshold. What happens when both elements have EN > 2.0?',
    explanation: 'Both nitrogen (EN = 3.0) and chlorine (EN = 3.0) have electronegativities above 2.0. Because both atoms exert strong attractions for valence electrons, neither atom can transfer electrons completely to the other. Nitrogen shares one electron pair with each of three chlorine atoms, resulting in covalent bonding.',
    keyConcept: 'When both bonded elements have EN > 2.0, valence electron pairs are shared covalently.'
  },

  // Question 4: Ionic Formulas - Main group charge balance
  {
    id: 'exam-4',
    topicId: 'ionic-formulas',
    title: 'Formula Determination for Magnesium Nitride',
    type: 'multiple-choice',
    difficulty: 'Proficient',
    prompt: 'Magnesium (Group 2) reacts with Nitrogen (Group 15) to form magnesium nitride. What is the correct formula and mathematical justification based on ion charges?',
    options: [
      {
        id: 'opt-a',
        text: 'Mg₃N₂, because three Mg²⁺ ions (+6 total) balance two N³⁻ ions (-6 total) to achieve a net charge of zero.',
      },
      {
        id: 'opt-b',
        text: 'Mg₂N₃, because two magnesium ions (+4 total) balance three nitrogen ions (-3 total) into an empirical formula.',
        misconceptionExplanation: 'Two Mg²⁺ give +4, and three N³⁻ give -9; (+4) + (-9) = -5, which is not electrically neutral.'
      },
      {
        id: 'opt-c',
        text: 'MgN, because binary ionic compounds must always combine in a 1:1 ratio to prevent lattice distortion.',
        misconceptionExplanation: 'Subscripts must balance the specific ion charges (+2 and -3); a 1:1 ratio would leave an unneutralized net charge of -1.'
      },
      {
        id: 'opt-d',
        text: 'Mg₂N₂, because magnesium transfers 2 electrons and nitrogen needs 3, so both subscripts must equal 2.',
        misconceptionExplanation: 'Mg₂N₂ is neither charge-balanced (2(+2) + 2(-3) = -2) nor simplified to the lowest whole-number ratio.'
      }
    ],
    correctOptionId: 'opt-a',
    hint: 'Magnesium is in Group 2 (forms Mg²⁺) and nitrogen is in Group 15 (forms N³⁻). Find the lowest common multiple of 2 and 3.',
    explanation: 'Magnesium forms Mg²⁺ (+2 charge) and nitrogen forms N³⁻ (-3 charge). The lowest common multiple of 2 and 3 is 6. Three Mg²⁺ cations supply +6 total positive charge, and two N³⁻ anions supply -6 total negative charge. Because 3(+2) + 2(-3) = 0, the compound achieves electrostatic neutrality as Mg₃N₂.',
    keyConcept: 'Ionic formulas use the lowest common multiple of cation and anion charges to establish net charge = 0.'
  },

  // Question 5: Ionic Formulas - Polyatomic anion balance
  {
    id: 'exam-5',
    topicId: 'ionic-formulas',
    title: 'Formula for Aluminum Sulfate',
    type: 'multiple-choice',
    difficulty: 'Proficient',
    prompt: 'Aluminum is a Group 13 metal (Al³⁺) and sulfate is a polyatomic ion (SO₄²⁻). What is the correct chemical formula and charge balance equation?',
    options: [
      {
        id: 'opt-a',
        text: 'AlSO₄, because one aluminum ion pairs with one sulfate ion: (+3) + (-2) = +1, which is rounded to zero.',
        misconceptionExplanation: 'Charges in stable ionic compounds cannot be rounded; they must cancel exactly to zero.'
      },
      {
        id: 'opt-b',
        text: 'Al₃(SO₄)₂, because three aluminum ions balance two sulfate ions: 3(+3) + 2(-2) = +5 net charge.',
        misconceptionExplanation: 'The subscripts are reversed; 3(+3) + 2(-2) = +5, which leaves a large excess positive charge.'
      },
      {
        id: 'opt-c',
        text: 'Al₂(SO₄)₃, because two Al³⁺ ions (+6 total) balance three SO₄²⁻ ions (-6 total) to equal zero net charge.',
      },
      {
        id: 'opt-d',
        text: 'Al₂S₃O₁₂, because parentheses are strictly forbidden in standard high school chemical nomenclature.',
        misconceptionExplanation: 'Polyatomic ions must be written in parentheses with an outside subscript to preserve their chemical identity.'
      }
    ],
    correctOptionId: 'opt-c',
    hint: 'What is the lowest common multiple of 3 (aluminum charge) and 2 (sulfate charge)? Which ion gets the subscript 2 and which gets the subscript 3?',
    explanation: 'Aluminum forms Al³⁺ and sulfate is SO₄²⁻. The lowest common multiple of 3 and 2 is 6. Two Al³⁺ ions supply 2 × (+3) = +6 positive charge, and three SO₄²⁻ polyatomic ions supply 3 × (-2) = -6 negative charge. The charges balance to zero: (+6) + (-6) = 0. Because more than one polyatomic ion is required, parentheses are mandatory: Al₂(SO₄)₃.',
    keyConcept: 'Polyatomic ions require parentheses when more than one is needed to achieve zero net charge.'
  },

  // Question 6: Ionic Formulas - Identifying student error
  {
    id: 'exam-6',
    topicId: 'ionic-formulas',
    title: 'Evaluating Student Formula Reasoning: Calcium Hydroxide',
    type: 'multiple-choice',
    difficulty: 'Foundation',
    prompt: 'A student writes the formula for calcium hydroxide as CaOH₂. Why is this formula chemically incorrect?',
    options: [
      {
        id: 'opt-a',
        text: 'Calcium forms a +1 cation, so only one hydroxide ion is needed to balance the formula as CaOH.',
        misconceptionExplanation: 'Calcium is an alkaline earth metal in Group 2 and forms Ca²⁺, not Ca⁺.'
      },
      {
        id: 'opt-b',
        text: 'Without parentheses around OH, the subscript 2 applies only to hydrogen, leaving the compound unbalanced with net charge +1.',
      },
      {
        id: 'opt-c',
        text: 'Hydroxide is a diatomic gas molecule that cannot bond with calcium unless heated to its boiling point.',
        misconceptionExplanation: 'Hydroxide (OH⁻) is a stable polyatomic anion in aqueous solution and readily forms ionic compounds like Ca(OH)₂.'
      },
      {
        id: 'opt-d',
        text: 'The oxygen atom must always be written before the calcium atom in polyatomic ionic nomenclature.',
        misconceptionExplanation: 'The positive metallic cation (Ca²⁺) is always written first in chemical formulas, followed by the anion.'
      }
    ],
    correctOptionId: 'opt-b',
    hint: 'How many atoms does the subscript 2 apply to in CaOH₂? Does it apply to both oxygen and hydrogen, or only hydrogen?',
    explanation: 'Calcium forms Ca²⁺ and hydroxide is the polyatomic ion OH⁻ (-1 charge). Balancing charges requires two hydroxide ions: (+2) + 2(-1) = 0. Writing CaOH₂ without parentheses means there is 1 calcium, 1 oxygen, and 2 hydrogens, which leaves an unneutralized net charge of +1. The correct formula is Ca(OH)₂, where parentheses ensure the subscript 2 applies to the entire hydroxide unit.',
    keyConcept: 'Parentheses around polyatomic ions ensure the subscript applies to all atoms within the polyatomic unit.'
  },

  // Question 7: Substance Properties - Experimental Unknown Analysis
  {
    id: 'exam-7',
    topicId: 'substance-properties',
    title: 'Classifying Unknown Solid M from Laboratory Data',
    type: 'multiple-choice',
    difficulty: 'Proficient',
    prompt: 'A white crystalline substance (Solid M) was tested in the laboratory:\n• Melting Point: 747 °C\n• Solubility in water: Readily soluble\n• Solid Electrical Conductivity: None (0 μS/cm)\n• Aqueous Solution Conductivity: High (> 2000 μS/cm)\n• Mechanical behavior: Hard and brittle; shatters along smooth planes.\nWhich classification is supported by this evidence?',
    options: [
      {
        id: 'opt-a',
        text: 'Covalent molecular, because its high water solubility proves the molecules interact through strong intermolecular hydrogen bonds.',
        misconceptionExplanation: 'Covalent molecular substances have low melting points (usually < 300 °C) and do not conduct electricity in water.'
      },
      {
        id: 'opt-b',
        text: 'Metallic, because its high melting point and electrical conductivity demonstrate freely moving delocalized outer electrons.',
        misconceptionExplanation: 'Metals conduct in the SOLID state and are malleable, whereas Solid M insulates as a solid and is brittle.'
      },
      {
        id: 'opt-c',
        text: 'Ionic, because the high melting point, brittleness, and aqueous conductivity confirm a crystal lattice of ions freed upon dissolution.',
      },
      {
        id: 'opt-d',
        text: 'Covalent network, because only infinite covalent networks can withstand melting temperatures approaching 750 °C.',
        misconceptionExplanation: 'Covalent network solids (like diamond or quartz) are completely insoluble in water and do not conduct when dissolved.'
      }
    ],
    correctOptionId: 'opt-c',
    hint: 'Review the diagnostic matrix: High melting point (747 °C), brittle crystal, non-conductive solid, but high aqueous conductivity. What type of substance fits all of these?',
    explanation: 'Solid M matches all diagnostic properties of an ionic compound: (1) high melting point (747 °C) from strong electrostatic lattice attractions, (2) brittleness due to repulsive alignment of like charges under shear stress, (3) solid-state insulation because ions are fixed in place, and (4) high aqueous conductivity because dissolved ions are free to move and carry electric charge.',
    keyConcept: 'Ionic compounds are characterized by high melting points, brittleness, solid insulation, and high aqueous conductivity.'
  },

  // Question 8: Substance Properties - Atomic Explanation for Conductivity
  {
    id: 'exam-8',
    topicId: 'substance-properties',
    title: 'Conductivity Mechanism: Sugar Solution vs Salt Solution',
    type: 'multiple-choice',
    difficulty: 'Foundation',
    prompt: 'A student dissolves table salt (NaCl) in Beaker 1 and table sugar (C₁₂H₂₂O₁₁) in Beaker 2. Both dissolve completely in water. When tested with a conductivity meter, Beaker 1 conducts electricity strongly, while Beaker 2 does not conduct. What explains this difference?',
    options: [
      {
        id: 'opt-a',
        text: 'Sugar molecules decompose into neutral gases upon contact with water, leaving no liquid volume to transmit electric potential.',
        misconceptionExplanation: 'Sugar dissolves as intact, neutral C₁₂H₂₂O₁₁ molecules in liquid water; it does not decompose into gases.'
      },
      {
        id: 'opt-b',
        text: 'NaCl is ionic and dissociates into mobile Na⁺ and Cl⁻ ions that carry current; sugar is covalent and dissolves into neutral molecules.',
      },
      {
        id: 'opt-c',
        text: 'NaCl contains metallic sodium atoms that release a sea of free delocalized electrons into the aqueous solution.',
        misconceptionExplanation: 'Dissolving NaCl produces hydrated Na⁺ cations, not elemental metallic sodium or free electrons.'
      },
      {
        id: 'opt-d',
        text: 'Sugar has a much higher molecular weight than salt, which physically blocks the flow of electric current through the beaker.',
        misconceptionExplanation: 'Molecular mass does not prevent conductivity; the absence of mobile charged particles (ions) is why sugar does not conduct.'
      }
    ],
    correctOptionId: 'opt-b',
    hint: 'What type of bonding exists in NaCl vs C₁₂H₂₂O₁₁? What charged particles are required for an electric current to flow through a liquid?',
    explanation: 'Electrical conduction in aqueous solutions requires mobile charged particles. NaCl is an ionic compound that dissociates into mobile hydrated cations (Na⁺) and anions (Cl⁻) when dissolved in water; these moving ions carry the electric current. Sugar is a covalent molecular compound held together by shared electrons; when it dissolves, it separates into individual neutral molecules (C₁₂H₂₂O₁₁) that carry no net charge.',
    keyConcept: 'Aqueous conductivity requires mobile ions; dissolved covalent molecular substances remain neutral and cannot conduct.'
  },

  // Question 9: Substance Properties - CER on Unknown Sample
  {
    id: 'exam-9',
    topicId: 'substance-properties',
    title: 'CER: Classifying Unknown Liquid R',
    type: 'cer',
    difficulty: 'Advanced',
    prompt: 'An unknown pure clear liquid (Substance R) was analyzed in the lab:\n• Boiling point: 78 °C\n• Freezing point: -114 °C\n• Electrical conductivity: 0 μS/cm (pure liquid state)\n• Electrical conductivity when mixed with water: 0 μS/cm\nConstruct a Claim-Evidence-Reasoning argument to classify the bonding in Substance R.',
    cerData: {
      claims: [
        {
          id: 'c-1',
          text: 'Substance R is a covalent molecular substance.',
        },
        {
          id: 'c-2',
          text: 'Substance R is an ionic compound.',
          misconceptionExplanation: 'Ionic compounds have melting points typically > 400 °C and are solids at room temperature; they cannot be liquids boiling at 78 °C.'
        },
        {
          id: 'c-3',
          text: 'Substance R is a liquid alkali metal.',
          misconceptionExplanation: 'Metals are excellent electrical conductors; Substance R has zero electrical conductivity.'
        }
      ],
      correctClaimId: 'c-1',
      evidence: [
        {
          id: 'e-1',
          text: 'Substance R is a clear colorless liquid that smells like rubbing alcohol.',
          misconceptionExplanation: 'Odor and appearance are qualitative traits that do not provide quantitative thermodynamic or electrical evidence.'
        },
        {
          id: 'e-2',
          text: 'Substance R has a low boiling point (78 °C), freezes at -114 °C, and exhibits zero electrical conductivity in both pure and aqueous states.',
        },
        {
          id: 'e-3',
          text: 'The liquid was stored in a plastic polyethylene container in the chemical stockroom.',
          misconceptionExplanation: 'Storage packaging is not scientific evidence of chemical bonding character.'
        }
      ],
      correctEvidenceId: 'e-2',
      reasoning: [
        {
          id: 'r-1',
          text: 'Because ionic crystals become volatile liquids when their electrostatic charges balance to zero.',
          misconceptionExplanation: 'Ionic compounds maintain rigid crystal lattices with very high melting and boiling points; they are never volatile liquids at 78 °C.'
        },
        {
          id: 'r-2',
          text: 'Low phase transition temperatures indicate weak intermolecular attractions between discrete neutral molecules that cannot conduct electricity.',
        },
        {
          id: 'r-3',
          text: 'Because liquids containing oxygen always boil between 50 °C and 100 °C regardless of bond type.',
          misconceptionExplanation: 'Boiling points depend on intermolecular forces and molecular structure, not merely the presence of oxygen.'
        }
      ],
      correctReasoningId: 'r-2'
    },
    hint: 'Consider the state of matter at room temperature (liquid), the low boiling point (78 °C), and the total lack of electrical conductivity.',
    explanation: 'Claim: Substance R is a covalent molecular substance. Evidence: It is a liquid at room temperature with a low boiling point (78 °C), freezing point of -114 °C, and zero electrical conductivity in both pure liquid and aqueous states. Reasoning: Covalent molecular substances consist of neutral molecules held together by weak intermolecular attractions, requiring relatively little thermal energy to boil. Because they do not dissociate into ions, they cannot conduct electricity.',
    keyConcept: 'Covalent molecular compounds are characterized by low boiling points and lack of electrical conductivity.'
  },

  // Question 10: Halogens - Deducing Reactivity from Data Table
  {
    id: 'exam-10',
    topicId: 'halogen-reactivity',
    title: 'Deducing Nonmetal Reactivity from Laboratory Trials',
    type: 'multiple-choice',
    difficulty: 'Proficient',
    prompt: 'Four mystery nonmetals (labeled J, K, L, M) were tested in single-replacement reactions involving their potassium salts. The laboratory results are summarized below:\n\n• J₂ + 2 KM(aq) → 2 KJ(aq) + M₂ (Reaction occurs)\n• L₂ + 2 KJ(aq) → 2 KL(aq) + J₂ (Reaction occurs)\n• M₂ + 2 KL(aq) → No Reaction (NR)\n• K₂ + 2 KL(aq) → 2 KK(aq) + L₂ (Reaction occurs)\n\nBased strictly on these experimental observations, what is the correct reactivity order from MOST reactive to LEAST reactive?',
    options: [
      {
        id: 'opt-a',
        text: 'M > J > L > K, because M was involved in the first displacement reaction and therefore established the initial activity benchmark.',
        misconceptionExplanation: 'M was displaced by J in the first reaction and failed to displace L, meaning M is the least reactive nonmetal.'
      },
      {
        id: 'opt-b',
        text: 'K > L > J > M, because K displaced L, L displaced J, and J displaced M in the single-replacement trials.',
      },
      {
        id: 'opt-c',
        text: 'L > K > M > J, because L reacted twice while K only reacted once in the recorded experimental trials.',
        misconceptionExplanation: 'In trial 4, K₂ displaced L⁻, proving that K is more reactive than L (K > L).'
      },
      {
        id: 'opt-d',
        text: 'J = K = L = M, because all four elements form diatomic molecules that exert identical electron affinities in aqueous solution.',
        misconceptionExplanation: 'The experimental data clearly demonstrates differing displacement capabilities, refuting equal reactivity.'
      }
    ],
    correctOptionId: 'opt-b',
    hint: 'Chain together the pairwise results: Trial 4 shows K > L. Trial 2 shows L > J. Trial 1 shows J > M. Combine these into a single sequence.',
    explanation: 'From Trial 4: K₂ displaces L⁻, establishing K > L. From Trial 2: L₂ displaces J⁻, establishing L > J. From Trial 1: J₂ displaces M⁻, establishing J > M. Combining these pairwise observations yields the complete reactivity series: K > L > J > M. Trial 3 confirms this sequence because M₂ cannot displace L⁻.',
    keyConcept: 'Single-replacement reaction matrices allow straightforward deduction of nonmetal reactivity through pairwise displacement tracking.'
  },

  // Question 11: Halogens - Predicting Single Replacement
  {
    id: 'exam-11',
    topicId: 'halogen-reactivity',
    title: 'Predicting Reaction Outcome: Iodine + Calcium Bromide',
    type: 'multiple-choice',
    difficulty: 'Foundation',
    prompt: 'Solid iodine crystals (I₂) are added to an aqueous solution of calcium bromide [CaBr₂(aq)]. Based on periodic halogen reactivity trends (Cl₂ > Br₂ > I₂), predict the outcome of this mixture.',
    options: [
      {
        id: 'opt-a',
        text: 'I₂ + CaBr₂(aq) → CaI₂(aq) + Br₂(l), because solid iodine has greater mass and forces bromine out of the solution.',
        misconceptionExplanation: 'Atomic mass does not determine displacement power; iodine is less reactive than bromine and cannot displace it.'
      },
      {
        id: 'opt-b',
        text: 'I₂ + CaBr₂(aq) → CaBr₂I₂(aq), because halogens combine with alkaline earth salts to form complex coordination crystals.',
        misconceptionExplanation: 'Halogens undergo single-replacement or no reaction; they do not synthesize quaternary halogen complex salts.'
      },
      {
        id: 'opt-c',
        text: 'No reaction occurs, because iodine is less reactive than bromine and cannot displace bromide ions from the compound.',
      },
      {
        id: 'opt-d',
        text: 'Calcium metal will precipitate as a gray solid while bromine gas and iodine vapor bubble violently out of the beaker.',
        misconceptionExplanation: 'Halogens do not reduce active metal cations like Ca²⁺ into elemental calcium metal.'
      }
    ],
    correctOptionId: 'opt-c',
    hint: 'Compare the reactivity of the free incoming halogen (I₂) with the halogen in the compound (Br⁻). Is iodine more reactive or less reactive than bromine?',
    explanation: 'Nonmetal reactivity decreases down Group 17: F₂ > Cl₂ > Br₂ > I₂. For a single-replacement reaction to occur, the elemental halogen must be more reactive than the halide ion in solution. Because iodine is below bromine in Group 17, it is less reactive and lacks the electron-attracting power needed to displace bromide ions. Therefore, No Reaction (NR) occurs.',
    keyConcept: 'A less reactive free halogen cannot displace a more reactive halide ion from solution.'
  },

  // Question 12: Halogens - Atomic Mechanism for Reactivity Trend
  {
    id: 'exam-12',
    topicId: 'halogen-reactivity',
    title: 'Atomic Structure Explanation: Halogen Reactivity Trend',
    type: 'multiple-choice',
    difficulty: 'Proficient',
    prompt: 'Why does the chemical reactivity of halogens DECREASE as you move down Group 17 from Fluorine to Iodine?',
    options: [
      {
        id: 'opt-a',
        text: 'As atomic size increases, more electron shells shield the nucleus, reducing the electrostatic attraction for an incoming valence electron.',
      },
      {
        id: 'opt-b',
        text: 'As atomic size increases, the number of valence electrons drops from 7 down to 3, leaving fewer bonding opportunities.',
        misconceptionExplanation: 'All halogens have exactly 7 valence electrons; valence electron count remains constant down the group.'
      },
      {
        id: 'opt-c',
        text: 'Lower halogens develop strong positive charges on their nuclei that push away other nonmetal anions through electrostatic repulsion.',
        misconceptionExplanation: 'A positive nucleus attracts electrons; the issue is that inner electron shells shield this charge and the radius is much larger.'
      },
      {
        id: 'opt-d',
        text: 'Fluorine contains active subatomic neutrons that accelerate chemical collisions compared to the heavy passive neutrons of iodine.',
        misconceptionExplanation: 'Neutrons have no electrical charge and do not determine chemical reactivity or electron affinity.'
      }
    ],
    correctOptionId: 'opt-a',
    hint: 'Halogens react by GAINING an electron to complete an octet. How does increasing atomic radius and electron shielding affect an atom\'s ability to pull in an outside electron?',
    explanation: 'Halogens react chemically by gaining 1 valence electron to achieve a stable octet (forming a 1- halide ion). As you move down Group 17, additional electron energy levels increase the atomic radius and inner-electron shielding. The positively charged nucleus is farther from the incoming electron and its attraction is shielded, making it progressively harder for heavier halogens to capture an electron.',
    keyConcept: 'Nonmetal reactivity decreases down Group 17 due to increased atomic radius and electron shielding weakening electron capture.'
  },

  // Question 13: Integrative - Connecting Bonding, Formulas, and Properties
  {
    id: 'exam-13',
    topicId: 'integrative-challenges',
    title: 'Multi-Concept Analysis: Barium Chloride vs Carbon Dioxide',
    type: 'multiple-choice',
    difficulty: 'Advanced',
    prompt: 'Consider two substances: Barium chloride and Carbon dioxide (EN values: Ba = 0.9, Cl = 3.0, C = 2.5, O = 3.5). Which statement correctly identifies their bonding classifications, chemical formulas, and physical states at room temperature?',
    options: [
      {
        id: 'opt-a',
        text: 'BaCl (covalent gas) and CO₂ (ionic solid with high melting point).',
        misconceptionExplanation: 'Ba (0.9) and Cl (3.0) form an ionic solid (BaCl₂), while CO₂ is a covalent gas with weak intermolecular forces.'
      },
      {
        id: 'opt-b',
        text: 'BaCl₂ (ionic solid with high melting point) and CO₂ (covalent gas with low boiling point).',
      },
      {
        id: 'opt-c',
        text: 'Ba₂Cl (ionic liquid) and C₂O (covalent solid held by continuous triple covalent lattices).',
        misconceptionExplanation: 'Ba₂Cl would carry net charge +3, and carbon dioxide formula is CO₂, which is a gas at room temperature.'
      },
      {
        id: 'opt-d',
        text: 'BaCl₂ (covalent gas) and CO₂ (covalent liquid that dissociates into conductive hydrated carbonate ions).',
        misconceptionExplanation: 'BaCl₂ is ionic due to EN 0.9 (< 2.0) and 3.0 (> 2.0), making it a crystalline solid, not a covalent gas.'
      }
    ],
    correctOptionId: 'opt-b',
    hint: 'Check the course EN rule for Ba + Cl (0.9 vs 3.0) and C + O (2.5 vs 3.5). What are the balanced formulas and typical room-temperature physical states for ionic vs covalent substances?',
    explanation: 'For barium chloride: Ba (EN = 0.9, < 2.0) and Cl (EN = 3.0, > 2.0) form an ionic compound. Ba forms Ba²⁺ and Cl forms Cl⁻, giving BaCl₂ (net charge 0). As an ionic compound with a strong crystal lattice, BaCl₂ is a solid with a high melting point (962 °C). For carbon dioxide: C (EN = 2.5) and O (EN = 3.5) are both nonmetals with EN > 2.0, forming covalent CO₂ molecules. Held only by weak intermolecular forces, CO₂ is a gas at room temperature with a very low boiling point (-78.5 °C sublimation).',
    keyConcept: 'Integrates electronegativity bonding prediction, ionic formula charge balance, and physical properties at room temperature.'
  },

  // Question 14: Integrative - CER on Unknown White Powder Lab Tests
  {
    id: 'exam-14',
    topicId: 'integrative-challenges',
    title: 'CER: Identifying Unknown White Powder W from Lab Tests',
    type: 'cer',
    difficulty: 'Advanced',
    prompt: 'A forensic chemist tests an unknown white powder W:\n• Test 1: Melting point determination shows it does not melt below 600 °C.\n• Test 2: Solid state electrical conductivity is 0 μS/cm.\n• Test 3: Dissolving 5.0 g in 100 mL of water produces an aqueous solution that conducts electricity strongly.\n• Test 4: Elemental analysis shows it contains Lithium (Li, EN = 1.0) and Chlorine (Cl, EN = 3.0).\nConstruct a Claim-Evidence-Reasoning argument identifying the substance and justifying its bonding classification.',
    cerData: {
      claims: [
        {
          id: 'c-1',
          text: 'Unknown powder W is lithium chloride (LiCl), an ionic compound.',
        },
        {
          id: 'c-2',
          text: 'Unknown powder W is lithium chloride (LiCl₂), a covalent molecular substance.',
          misconceptionExplanation: 'Li forms Li⁺ (+1), not Li²⁺ (+2); LiCl₂ would be unbalanced, and the substance is ionic.'
        },
        {
          id: 'c-3',
          text: 'Unknown powder W is elemental lithium metal coated in chlorine gas.',
          misconceptionExplanation: 'Elemental lithium metal conducts in the solid state and reacts violently with water, which was not observed.'
        }
      ],
      correctClaimId: 'c-1',
      evidence: [
        {
          id: 'e-1',
          text: 'The powder was stored in a plastic bottle labeled with standard hazardous materials diamond pictograms.',
          misconceptionExplanation: 'Labeling pictograms indicate safety hazards, not scientific data on bonding or physical properties.'
        },
        {
          id: 'e-2',
          text: 'Li has EN = 1.0 (< 2.0) and Cl has EN = 3.0 (> 2.0); it has a melting point > 600 °C, insulates as a solid, and conducts in water.',
        },
        {
          id: 'e-3',
          text: 'Lithium is the lightest alkali metal on the periodic table with atomic number 3.',
          misconceptionExplanation: 'Atomic number alone does not provide empirical evidence for the substance\'s bonding or laboratory behavior.'
        }
      ],
      correctEvidenceId: 'e-2',
      reasoning: [
        {
          id: 'r-1',
          text: 'Because covalent bonds between alkali metals and halogens require immense thermal energy to vibrate.',
          misconceptionExplanation: 'Alkali metals and halogens form ionic bonds, not covalent bonds.'
        },
        {
          id: 'r-2',
          text: 'By course rules, EN < 2.0 paired with EN > 2.0 predicts ionic bonding; the high melting point and aqueous conductivity confirm an ionic lattice with mobile dissolved ions.',
        },
        {
          id: 'r-3',
          text: 'Because substances that dissolve in water are always classified as ionic regardless of their melting point or conductivity.',
          misconceptionExplanation: 'Many covalent substances (such as sugar and alcohol) dissolve in water without being ionic.'
        }
      ],
      correctReasoningId: 'r-2'
    },
    hint: 'Synthesize all four tests: What formula balances Li⁺ and Cl⁻? What does EN 1.0 vs 3.0 predict? How do melting point and conductivity confirm this?',
    explanation: 'Claim: Unknown powder W is lithium chloride (LiCl), an ionic compound. Evidence: Li (EN = 1.0, < 2.0) and Cl (EN = 3.0, > 2.0) combine in a 1:1 ratio to balance charges (Li⁺ and Cl⁻); it has a melting point > 600 °C, does not conduct as a solid, and conducts strongly when dissolved in water. Reasoning: Under course rules, an element with EN < 2.0 paired with an element with EN > 2.0 forms an ionic bond through electron transfer. The high melting point reflects strong electrostatic attractions in the 3D crystal lattice, and the aqueous conductivity confirms mobile ions released upon dissolution.',
    keyConcept: 'Integrates electronegativity bonding criteria, ionic formula charge balance, and experimental evidence into a cohesive scientific argument.'
  },

  // Question 15: Integrative - Single Replacement and Property Synthesis
  {
    id: 'exam-15',
    topicId: 'integrative-challenges',
    title: 'Displacement Reaction and Product Property Synthesis',
    type: 'multiple-choice',
    difficulty: 'Advanced',
    prompt: 'Fluorine gas (F₂) is bubbled into an aqueous solution of potassium chloride (KCl). A single-replacement reaction takes place. What are the reaction products, and what physical property characterizes the resulting potassium salt?',
    options: [
      {
        id: 'opt-a',
        text: 'No reaction occurs because chlorine is a heavier halogen that locks potassium into an impenetrable aqueous shield.',
        misconceptionExplanation: 'Fluorine is above chlorine in Group 17 and is the most reactive halogen; it easily displaces chloride.'
      },
      {
        id: 'opt-b',
        text: 'Products are KF(aq) and Cl₂(g); the salt KF is an ionic solid with a high melting point that conducts electricity when dissolved.',
      },
      {
        id: 'opt-c',
        text: 'Products are KClF(aq) and hydrogen gas; the resulting compound is a covalent liquid that boils at room temperature.',
        misconceptionExplanation: 'Halogen displacement does not produce hydrogen gas or tertiary interhalogen salts.'
      },
      {
        id: 'opt-d',
        text: 'Products are metallic potassium solid and chlorine monofluoride gas; the potassium conducts electricity in the solid state.',
        misconceptionExplanation: 'Nonmetal single-replacement displaces the nonmetal halide ion, not the alkali metal cation.'
      }
    ],
    correctOptionId: 'opt-b',
    hint: 'Fluorine is more reactive than chlorine. What single-replacement reaction occurs: F₂ + 2 KCl → ? What type of substance is KF, and what are its physical properties?',
    explanation: 'Fluorine is at the top of Group 17 and is the most reactive halogen (F₂ > Cl₂ > Br₂ > I₂). When F₂ is bubbled into KCl(aq), fluorine displaces chloride ions: F₂(g) + 2 KCl(aq) → 2 KF(aq) + Cl₂(g). The resulting salt is potassium fluoride (KF). Potassium (EN = 0.8, < 2.0) and Fluorine (EN = 4.0, > 2.0) form an ionic compound (K⁺ and F⁻). As an ionic salt, KF forms a crystal lattice with a high melting point (858 °C) and conducts electricity when dissolved in water due to mobile ions.',
    keyConcept: 'Synthesizes halogen single-replacement reaction outcome with the formula and physical properties of the resulting ionic salt.'
  }
];

// Combined list for general lookup or backward compatibility
export const CHEMISTRY_QUESTIONS: Question[] = [...TOPIC_QUESTIONS, ...EXAM_QUESTIONS];
