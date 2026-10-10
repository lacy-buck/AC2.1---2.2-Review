import React, { useState } from 'react';
import { Plus, Minus, CheckCircle2, AlertCircle, HelpCircle, RotateCcw, Scale } from 'lucide-react';
import { FormulaBuilderData } from '../types/chemistry';

interface FormulaBuilderProps {
  formulaData: FormulaBuilderData;
  hint: string;
  explanation: string;
  onAnswerComplete: (isCorrect: boolean, attempts: number) => void;
  savedState?: {
    cationCount?: number;
    anionCount?: number;
    isCompleted?: boolean;
    isCorrect?: boolean;
  };
}

export const FormulaBuilder: React.FC<FormulaBuilderProps> = ({
  formulaData,
  hint,
  explanation,
  onAnswerComplete,
  savedState
}) => {
  const [cationCount, setCationCount] = useState<number>(savedState?.cationCount || 1);
  const [anionCount, setAnionCount] = useState<number>(savedState?.anionCount || 1);
  const [attempts, setAttempts] = useState<number>(0);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(savedState?.isCompleted || false);
  const [isCorrect, setIsCorrect] = useState<boolean>(savedState?.isCorrect || false);
  const [showMisconception, setShowMisconception] = useState<boolean>(false);
  const [feedbackText, setFeedbackText] = useState<string>('');

  const totalPositive = cationCount * formulaData.cationCharge;
  const totalNegative = anionCount * formulaData.anionCharge;
  const netCharge = totalPositive + totalNegative;

  // Has the user submitted at least once? If so, show the charge balance breakdown.
  const hasSubmittedOnce = isSubmitted || attempts > 0 || showMisconception;

  // Construct dynamically formatted chemical formula
  const getRenderedFormula = (catCount: number, anCount: number) => {
    let catPart = formulaData.cationSymbol;
    if (catCount > 1) {
      if (formulaData.isPolyatomicCation) {
        catPart = `(${formulaData.cationSymbol})${catCount}`;
      } else {
        catPart = `${formulaData.cationSymbol}${catCount}`;
      }
    }

    let anPart = formulaData.anionSymbol;
    if (anCount > 1) {
      if (formulaData.isPolyatomicAnion) {
        anPart = `(${formulaData.anionSymbol})${anCount}`;
      } else {
        anPart = `${formulaData.anionSymbol}${anCount}`;
      }
    }

    return `${catPart}${anPart}`;
  };

  const handleVerify = () => {
    const currentAttempts = attempts + 1;
    setAttempts(currentAttempts);

    const matchesCorrect = 
      cationCount === formulaData.correctCationCount && 
      anionCount === formulaData.correctAnionCount;

    if (matchesCorrect) {
      setIsCorrect(true);
      setIsSubmitted(true);
      setShowMisconception(false);
      onAnswerComplete(true, currentAttempts);
    } else {
      let message = '';
      if (netCharge !== 0) {
        message = `Your current combination yields a net charge of ${netCharge > 0 ? `+${netCharge}` : netCharge}. A neutral ionic crystal cannot have an excess net charge; all positive cation charges must exactly cancel negative anion charges to equal 0.`;
      } else if (cationCount !== formulaData.correctCationCount || anionCount !== formulaData.correctAnionCount) {
        // Charge balances to 0, but not lowest whole-number ratio (e.g., Ca₂O₂ instead of CaO)
        message = `Your formula produces net charge 0, but chemical formulas for ionic compounds must always be expressed in the lowest whole-number ratio (empirical formula).`;
      }

      setFeedbackText(message);

      if (currentAttempts === 1) {
        setShowMisconception(true);
        setIsCorrect(false);
      } else {
        setIsCorrect(false);
        setIsSubmitted(true);
        setShowMisconception(true);
        onAnswerComplete(false, currentAttempts);
      }
    }
  };

  const handleRetry = () => {
    setShowMisconception(false);
  };

  return (
    <div className="space-y-6">
      {/* Interactive Ion Counters */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Cation Control */}
        <div className="p-5 bg-slate-900/60 border border-slate-800 rounded-2xl space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                Positive Cation
              </span>
              <div className="text-base text-slate-100 font-bold mt-0.5">
                {formulaData.cationName}
              </div>
            </div>
            <div className="font-mono text-xl font-extrabold text-amber-300 bg-amber-950/60 px-3 py-1 rounded-xl border border-amber-800/60">
              {formulaData.cationSymbol}
              <sup>{formulaData.cationCharge > 1 ? `${formulaData.cationCharge}+` : '+'}</sup>
            </div>
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-slate-800/80">
            <span className="text-xs text-slate-400 font-medium">Ion Quantity:</span>
            <div className="flex items-center gap-3">
              <button
                type="button"
                disabled={isSubmitted || cationCount <= 1}
                onClick={() => setCationCount(Math.max(1, cationCount - 1))}
                className="w-8 h-8 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 disabled:opacity-20 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Decrease cation count"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="font-mono text-base font-bold text-slate-100 w-6 text-center">
                {cationCount}
              </span>
              <button
                type="button"
                disabled={isSubmitted || cationCount >= 6}
                onClick={() => setCationCount(cationCount + 1)}
                className="w-8 h-8 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 disabled:opacity-20 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Increase cation count"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Charge math hidden until submission */}
          {hasSubmittedOnce && (
            <div className="font-mono text-xs text-amber-300 bg-amber-950/40 px-3 py-2 rounded-xl border border-amber-900/40">
              Total Positive: {cationCount} × (+{formulaData.cationCharge}) = +{totalPositive}
            </div>
          )}
        </div>

        {/* Anion Control */}
        <div className="p-5 bg-slate-900/60 border border-slate-800 rounded-2xl space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                Negative Anion
              </span>
              <div className="text-base text-slate-100 font-bold mt-0.5">
                {formulaData.anionName}
              </div>
            </div>
            <div className="font-mono text-xl font-extrabold text-emerald-300 bg-emerald-950/60 px-3 py-1 rounded-xl border border-emerald-800/60">
              {formulaData.anionSymbol}
              <sup>{Math.abs(formulaData.anionCharge) > 1 ? `${Math.abs(formulaData.anionCharge)}-` : '-'}</sup>
            </div>
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-slate-800/80">
            <span className="text-xs text-slate-400 font-medium">Ion Quantity:</span>
            <div className="flex items-center gap-3">
              <button
                type="button"
                disabled={isSubmitted || anionCount <= 1}
                onClick={() => setAnionCount(Math.max(1, anionCount - 1))}
                className="w-8 h-8 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 disabled:opacity-20 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Decrease anion count"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="font-mono text-base font-bold text-slate-100 w-6 text-center">
                {anionCount}
              </span>
              <button
                type="button"
                disabled={isSubmitted || anionCount >= 6}
                onClick={() => setAnionCount(anionCount + 1)}
                className="w-8 h-8 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 disabled:opacity-20 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Increase anion count"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Charge math hidden until submission */}
          {hasSubmittedOnce && (
            <div className="font-mono text-xs text-emerald-300 bg-emerald-950/40 px-3 py-2 rounded-xl border border-emerald-900/40">
              Total Negative: {anionCount} × ({formulaData.anionCharge}) = {totalNegative}
            </div>
          )}
        </div>
      </div>

      {/* Formula Preview & Neutrality Check Block */}
      <div className="p-5 bg-slate-900/60 border border-slate-800 rounded-2xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="text-[11px] font-bold uppercase tracking-wider text-sky-400 flex items-center gap-2">
              <Scale className="w-4 h-4 text-sky-400" />
              Compound Charge Neutrality Check
            </div>
            
            {hasSubmittedOnce ? (
              <div className="font-mono text-xs text-slate-300">
                (+{totalPositive}) + ({totalNegative}) ={' '}
                <span className={`font-bold ${netCharge === 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {netCharge === 0 ? '0 (Balanced!)' : netCharge > 0 ? `+${netCharge} (Excess Positive)` : `${netCharge} (Excess Negative)`}
                </span>
              </div>
            ) : (
              <div className="text-xs text-slate-400 italic">
                Adjust quantities so total positive and negative charges cancel to 0. Charge balance will be verified upon submission.
              </div>
            )}
          </div>

          {/* Current Formula Preview */}
          <div className="bg-slate-950 px-5 py-3 rounded-xl border border-slate-800 text-center shrink-0">
            <div className="text-[10px] uppercase font-bold tracking-wider text-slate-500">Current Formula</div>
            <div className="font-mono text-2xl font-black text-sky-400 tracking-wide">
              {getRenderedFormula(cationCount, anionCount)}
            </div>
          </div>
        </div>

        {/* Submit Verification Button */}
        {!isSubmitted && (
          <div className="pt-3 border-t border-slate-800/80 flex justify-end">
            <button
              type="button"
              onClick={handleVerify}
              className="px-6 py-2.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-sky-500/20 transition-all flex items-center gap-2 cursor-pointer"
            >
              <CheckCircle2 className="w-4 h-4" />
              Verify Formula Neutrality
            </button>
          </div>
        )}
      </div>

      {/* Misconception / Hint Box (Attempt 1 failure) */}
      {showMisconception && !isCorrect && attempts === 1 && (
        <div className="p-5 bg-amber-950/40 border border-amber-800/60 rounded-2xl space-y-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-amber-200">
                Charge Balance Adjustment Needed
              </h4>
              <p className="text-xs md:text-sm text-amber-300 leading-relaxed">
                {feedbackText}
              </p>
            </div>
          </div>

          <div className="p-4 bg-slate-950/60 border border-amber-800/40 rounded-xl text-xs text-amber-200 flex items-start gap-2.5">
            <HelpCircle className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-sky-400">Chemistry Hint:</strong> {hint}
            </div>
          </div>

          <div className="flex justify-end pt-1">
            <button
              type="button"
              onClick={handleRetry}
              className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-amber-500/20"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Adjust Counter Quantities & Try Again
            </button>
          </div>
        </div>
      )}

      {/* Complete Scientific Explanation (On Correct or Attempt 2) */}
      {isSubmitted && (
        <div className={`p-5 rounded-2xl border space-y-4 ${
          isCorrect 
            ? 'bg-emerald-950/40 border-emerald-800/60 text-emerald-200' 
            : 'bg-slate-900/80 border-slate-800 text-slate-200'
        }`}>
          <div className="flex items-center gap-2.5">
            {isCorrect ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            ) : (
              <AlertCircle className="w-5 h-5 text-amber-400" />
            )}
            <h4 className="text-base font-bold text-slate-100">
              {isCorrect ? 'Correct Chemical Formula' : 'Formula & Charge Neutrality Solution'}
            </h4>
          </div>

          <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2 text-xs">
            <div className="flex items-center justify-between">
              <span className="text-slate-400 uppercase font-semibold">Target Formula:</span>
              <span className="font-mono text-xl font-extrabold text-sky-400">
                {formulaData.correctFormula}
              </span>
            </div>
            <div className="flex items-center justify-between font-mono text-xs border-t border-slate-800/80 pt-2 text-slate-300">
              <span>Charge Calculation:</span>
              <span>{formulaData.chargeExplanation}</span>
            </div>
          </div>

          <div className="text-xs md:text-sm text-slate-300 leading-relaxed">
            <strong className="text-slate-100 block mb-1">
              Chemical Explanation:
            </strong>
            {explanation}
          </div>
        </div>
      )}
    </div>
  );
};
