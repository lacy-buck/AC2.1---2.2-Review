# ChemFocus: High School Chemistry Interactive Assessment Prep

An interactive chemistry mastery and assessment review application designed around genuine scientific reasoning, data interpretation, and problem-solving. Built strictly around the specified curriculum requirements: bonding models, ionic compound charge neutralization, physical properties of matter, and halogen/nonmetal single replacement reactivity.

---

## 1. Core Learning Architecture & Question Engine

### 28+ Substantive Problems across 4 Learning Modules + Mock Assessment
Every question is designed around student misconceptions, requiring active interpretation of experimental data, electronegativity thresholds, valence models, or halogen reactivity series.

1. **Module 1: Chemical Bonding & Valence Electron Models (7 Questions)**
   - *Electronegativity Threshold Rule:* Explicitly applying the course rule: **Ionic** when one element is $< 2.0$ and the other is $> 2.0$; **Covalent** when both are $> 2.0$.
   - *Valence Electron Transfer vs. Sharing:* Lewis/valence reasoning (octet stability, metal cation formation vs. nonmetal covalent sharing).
   - *Metalloids & Polyatomics:* Classifying bonding in compounds with metalloids (e.g., Silicon dioxide $\text{SiO}_2$) and polyatomic species (identifying internal covalent bonds inside polyatomic ions vs. ionic attraction to counterions).
   - *Explaining "WHY":* Distinguishing between simple classification and electronegativity/valence rationale.

2. **Module 2: Ionic Compound Formulas & Charge Neutrality (7 Questions)**
   - *Neutral Net Charge Balance:* Building formulas requiring $\Sigma (\text{charges}) = 0$.
   - *Zero Transition Metals Constraint:* Focus on Groups 1, 2, 13 (Al, Ga), 15, 16, 17, and common polyatomic ions ($\text{SO}_4^{2-}$, $\text{NO}_3^-$, $\text{CO}_3^{2-}$, $\text{PO}_4^{3-}$, $\text{OH}^-$, $\text{NH}_4^+$).
   - *Formula Construction & Subscript Logic:* Why parentheses are needed for polyatomic multipliers (e.g., $\text{Mg(OH)}_2$ vs $\text{MgOH}_2$).
   - *Error Analysis Questions:* Identifying flawed student formulas and explaining the mathematical charge imbalance error.

3. **Module 3: Properties of Ionic vs. Covalent Substances (7 Questions)**
   - *Experimental Data Analysis:* Lab data tables featuring unknown samples ($W, X, Y, Z$) with melting points, solubility in polar water, hardness/brittleness, and electrical conductivity in solid vs. liquid/aqueous states.
   - *Conductivity Logic:* Emphasizing that mobile charged particles (free ions) are required for conductivity—explaining why solid ionic salts do not conduct while aqueous/molten salts do, whereas covalent molecular substances remain non-conductive.
   - *Substance Classification Challenge:* Evaluating experimental mystery substances and providing evidentiary proof.

4. **Module 4: Halogen & Nonmetal Single-Replacement Reactivity (7 Questions)**
   - *Empirical Reactivity Deducing:* Given reaction observations between halogens ($X_2, Y_2, Z_2, W_2$) and halide salts ($NaX, NaY, NaZ, NaW$), deduce the exact reactivity ranking based on color change / precipitation evidence rather than rote memorization.
   - *Unfamiliar & Synthetic Halogens:* Using unfamiliar or invented elements (e.g., "Element Asterium, Ast" vs "Verdium, Vd") to force pure evidence-based deduction.
   - *Predictive Synthesis:* Taking the derived order and predicting whether a newly presented single-replacement reaction will proceed or produce "No Reaction" ($\text{NR}$).

5. **Comprehensive Mock Exam Mode**
   - 20 randomized questions sampled across all modules with real assessment timing, flagging, and comprehensive diagnostic score report highlighting strong vs. weak mastery areas.

---

## 2. Interactive Feature Design

### A. Two-Tier Feedback & Misconception-Driven Retry
- **First Incorrect Attempt:**
  - The answer is *not* revealed.
  - The student receives targeted diagnostic feedback addressing their specific misconception (e.g., *"You noticed the high melting point, but look closely at the conductivity in solid state vs. aqueous state."*).
  - A conceptual hint illuminates the underlying chemical principle.
  - A *"Try Again"* prompt allows a second deliberate attempt.
- **Second Attempt / Final Review:**
  - Full chemical justification and step-by-step breakdown shown, detailing why the correct answer holds and why distractors are invalid.

### B. Structured 3-Step Claim-Evidence-Reasoning (CER) Builder
- High-yield scientific writing interface breaking complex questions into:
  1. **Claim:** State the direct chemical conclusion (e.g., *"Substance B is an ionic compound."*).
  2. **Evidence:** Select the specific quantitative or observed laboratory evidence from the scenario (e.g., *"Conducts electricity when dissolved in water, but does not conduct in solid state; melting point is 782°C."*).
  3. **Reasoning:** Select or construct the linking scientific rule (e.g., *"Ionic compounds consist of a crystal lattice of ions that become mobile and carry electrical charge only when melted or dissolved in water."*).
- Real-time feedback validates whether the chosen evidence and reasoning truly substantiate the claim.

### C. Collapsible Reference Drawer
Accessible at any second via a floating tab:
- **Course Electronegativity Table:** Clean values for H (2.1), Li (1.0), Be (1.5), B (2.0), C (2.5), N (3.0), O (3.5), F (4.0), Na (0.9), Mg (1.2), Al (1.5), Si (1.9), P (2.1), S (2.5), Cl (3.0), K (0.8), Ca (1.0), Br (2.8), I (2.5), etc.
- **Common Polyatomic Ion Bank:** Formulas, names, and formal charges ($\text{NH}_4^+$, $\text{OH}^-$, $\text{NO}_3^-$, $\text{SO}_4^{2-}$, $\text{CO}_3^{2-}$, $\text{PO}_4^{3-}$, $\text{HCO}_3^-$).
- **Periodic Trend & Reactivity Rule Sheet:** Quick refresher on halogen displacement rules and lattice properties.

### D. Interactive Formula Builder & Subscript Balancer
- Dedicated mini-interactive problem type where students drag or tap cation and anion cards, adjusting subscript counters until the net charge indicator visually balances to zero ($\Sigma q = 0$).

---

## 3. UI/UX & Technical Implementation

- **Framework & Libraries:** React 19, TypeScript, Tailwind CSS, Lucide icons, Motion for smooth card transitions and drawer slide-overs.
- **Typography & Visual Discipline:** Clean slate/indigo chemistry laboratory theme, crisp typography with proper chemical sub/superscripts ($\text{SO}_4^{2-}, \text{CaCl}_2$), scientific data tables, clear badges for question types (CER, Data Analysis, Prediction, Formula Balance).
- **Local Progress Persistence:** Track student score, module completion rates, and retry counts in `localStorage` so students can resume studying anytime.
- **Accessible & Responsive:** Fully responsive layout with mobile-friendly drawers and desktop dual-column layout.

---

## 4. Verification & Testing Plan
1. **Compilation & Type Check:** Ensure zero TypeScript errors and clean compilation with Vite.
2. **Pedagogical Accuracy Check:** Validate that all 28+ questions strictly adhere to high school chemistry rules, the custom electronegativity boundary (2.0), no transition metals in formulas, and zero polar/nonpolar questions.
3. **Interactive Testing:** Test CER 3-step builder validation, retry state transitions, hint reveal behavior, and reference drawer toggling.
