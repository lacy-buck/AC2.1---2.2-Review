export type TopicId = 
  | 'bonding'
  | 'ionic-formulas'
  | 'substance-properties'
  | 'halogen-reactivity'
  | 'integrative-challenges';

export interface TopicInfo {
  id: TopicId;
  title: string;
  shortTitle: string;
  description: string;
  questionCount: number;
}

export type QuestionType = 'multiple-choice' | 'cer' | 'formula-builder';

export interface BaseOption {
  id: string;
  text: string;
  misconceptionExplanation?: string; // Explain why this wrong answer is tempting and what the real chemistry concept is
}

export interface CerOption {
  id: string;
  text: string;
  misconceptionExplanation?: string;
}

export interface CerQuestionData {
  claims: CerOption[];
  correctClaimId: string;
  evidence: CerOption[];
  correctEvidenceId: string;
  reasoning: CerOption[];
  correctReasoningId: string;
  evidenceContextTable?: {
    headers: string[];
    rows: (string | number)[][];
    caption?: string;
  };
}

export interface FormulaBuilderData {
  cationName: string;
  cationSymbol: string;
  cationCharge: number;
  anionName: string;
  anionSymbol: string;
  anionCharge: number; // e.g. -2 for SO4^2-
  isPolyatomicAnion: boolean;
  isPolyatomicCation: boolean;
  correctCationCount: number;
  correctAnionCount: number;
  correctFormula: string;
  explanation: string;
  chargeExplanation: string;
}

export interface Question {
  id: string;
  topicId: TopicId;
  title: string;
  type: QuestionType;
  prompt: string;
  subPrompt?: string;
  scenarioData?: {
    type: 'table' | 'reaction-matrix' | 'property-chart';
    title?: string;
    caption?: string;
    headers: string[];
    rows: (string | number)[][];
  };
  
  // For multiple-choice questions
  options?: BaseOption[];
  correctOptionId?: string;

  // For CER questions
  cerData?: CerQuestionData;

  // For formula builder questions
  formulaData?: FormulaBuilderData;

  // Pedagogical scaffolding
  hint: string;
  explanation: string; // Complete scientific breakdown revealed after correct answer or second incorrect try
  keyConcept: string; // The core high-school standard/principle being applied
  difficulty: 'Foundation' | 'Proficient' | 'Advanced';
}

export interface UserAnswerState {
  questionId: string;
  topicId: TopicId;
  attemptsCount: number;
  selectedOptionId?: string;
  cerAnswers?: {
    claimId?: string;
    evidenceId?: string;
    reasoningId?: string;
  };
  formulaAnswers?: {
    cationCount: number;
    anionCount: number;
  };
  isCompleted: boolean;
  isCorrect: boolean;
  showHint: boolean;
  showFullExplanation: boolean;
  feedbackMessage?: string;
  misconceptionMessage?: string;
}

export interface ElementRef {
  symbol: string;
  name: string;
  atomicNumber: number;
  group: number;
  period: number;
  type: 'metal' | 'nonmetal' | 'metalloid';
  electronegativity: number;
  valenceElectrons: number;
  commonIon?: string;
}

export interface PolyatomicIonRef {
  name: string;
  formula: string;
  charge: number;
  type: 'cation' | 'anion';
  notes: string;
}
