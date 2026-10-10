import React, { useState } from 'react';
import { 
  CheckCircle2, 
  AlertCircle, 
  HelpCircle, 
  RotateCcw
} from 'lucide-react';
import { CerQuestionData } from '../types/chemistry';

interface CerBuilderProps {
  cerData: CerQuestionData;
  hint: string;
  explanation: string;
  onAnswerComplete: (isCorrect: boolean, attempts: number) => void;
  savedState?: {
    claimId?: string;
    evidenceId?: string;
    reasoningId?: string;
    isCompleted?: boolean;
    isCorrect?: boolean;
  };
}

export const CerBuilder: React.FC<CerBuilderProps> = ({
  cerData,
  hint,
  explanation,
  onAnswerComplete,
  savedState
}) => {
  const [selectedClaimId, setSelectedClaimId] = useState<string | undefined>(savedState?.claimId);
  const [selectedEvidenceId, setSelectedEvidenceId] = useState<string | undefined>(savedState?.evidenceId);
  const [selectedReasoningId, setSelectedReasoningId] = useState<string | undefined>(savedState?.reasoningId);

  const [activeStep, setActiveStep] = useState<'claim' | 'evidence' | 'reasoning'>('claim');
  const [attempts, setAttempts] = useState<number>(0);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(savedState?.isCompleted || false);
  const [isCorrect, setIsCorrect] = useState<boolean>(savedState?.isCorrect || false);
  const [showMisconception, setShowMisconception] = useState<boolean>(false);
  const [misconceptionDetails, setMisconceptionDetails] = useState<{
    stage: 'claim' | 'evidence' | 'reasoning';
    message: string;
  } | null>(null);

  const isAllSelected = selectedClaimId && selectedEvidenceId && selectedReasoningId;

  const handleEvaluate = () => {
    if (!isAllSelected) return;

    const currentAttempts = attempts + 1;
    setAttempts(currentAttempts);

    const claimCorrect = selectedClaimId === cerData.correctClaimId;
    const evidenceCorrect = selectedEvidenceId === cerData.correctEvidenceId;
    const reasoningCorrect = selectedReasoningId === cerData.correctReasoningId;

    if (claimCorrect && evidenceCorrect && reasoningCorrect) {
      setIsCorrect(true);
      setIsSubmitted(true);
      setShowMisconception(false);
      onAnswerComplete(true, currentAttempts);
    } else {
      let wrongStage: 'claim' | 'evidence' | 'reasoning' = 'claim';
      let wrongExplanation = '';

      if (!claimCorrect) {
        wrongStage = 'claim';
        const opt = cerData.claims.find(c => c.id === selectedClaimId);
        wrongExplanation = opt?.misconceptionExplanation || 'The chosen claim does not align with the chemical principles of this reaction or compound.';
      } else if (!evidenceCorrect) {
        wrongStage = 'evidence';
        const opt = cerData.evidence.find(e => e.id === selectedEvidenceId);
        wrongExplanation = opt?.misconceptionExplanation || 'The chosen evidence is either non-relevant or does not provide the quantitative/chemical facts required.';
      } else {
        wrongStage = 'reasoning';
        const opt = cerData.reasoning.find(r => r.id === selectedReasoningId);
        wrongExplanation = opt?.misconceptionExplanation || 'The chosen reasoning contains a scientific flaw or fails to connect the evidence to the claim.';
      }

      setMisconceptionDetails({ stage: wrongStage, message: wrongExplanation });

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
    if (misconceptionDetails?.stage) {
      setActiveStep(misconceptionDetails.stage);
    }
  };

  return (
    <div className="space-y-6">
      {/* 3-Step Navigation Tabs */}
      <div className="grid grid-cols-3 gap-2 bg-slate-950/60 p-1.5 rounded-2xl border border-slate-800 text-xs">
        <button
          type="button"
          onClick={() => setActiveStep('claim')}
          className={`py-2.5 px-3 rounded-xl text-center transition-all cursor-pointer font-mono text-[11px] tracking-wider uppercase flex flex-col items-center gap-1 ${
            activeStep === 'claim'
              ? 'bg-sky-500/20 text-sky-300 font-bold border border-sky-500/40 shadow-sm'
              : selectedClaimId
              ? 'bg-emerald-950/30 text-emerald-400 border border-emerald-700/40'
              : 'text-slate-400 hover:text-slate-200 border border-transparent'
          }`}
        >
          <span>Step 1: Claim</span>
          <span className="text-[10px] font-sans font-normal opacity-80">
            {selectedClaimId ? 'Selected ✓' : 'Required'}
          </span>
        </button>

        <button
          type="button"
          onClick={() => setActiveStep('evidence')}
          className={`py-2.5 px-3 rounded-xl text-center transition-all cursor-pointer font-mono text-[11px] tracking-wider uppercase flex flex-col items-center gap-1 ${
            activeStep === 'evidence'
              ? 'bg-sky-500/20 text-sky-300 font-bold border border-sky-500/40 shadow-sm'
              : selectedEvidenceId
              ? 'bg-emerald-950/30 text-emerald-400 border border-emerald-700/40'
              : 'text-slate-400 hover:text-slate-200 border border-transparent'
          }`}
        >
          <span>Step 2: Evidence</span>
          <span className="text-[10px] font-sans font-normal opacity-80">
            {selectedEvidenceId ? 'Selected ✓' : 'Required'}
          </span>
        </button>

        <button
          type="button"
          onClick={() => setActiveStep('reasoning')}
          className={`py-2.5 px-3 rounded-xl text-center transition-all cursor-pointer font-mono text-[11px] tracking-wider uppercase flex flex-col items-center gap-1 ${
            activeStep === 'reasoning'
              ? 'bg-sky-500/20 text-sky-300 font-bold border border-sky-500/40 shadow-sm'
              : selectedReasoningId
              ? 'bg-emerald-950/30 text-emerald-400 border border-emerald-700/40'
              : 'text-slate-400 hover:text-slate-200 border border-transparent'
          }`}
        >
          <span>Step 3: Reasoning</span>
          <span className="text-[10px] font-sans font-normal opacity-80">
            {selectedReasoningId ? 'Selected ✓' : 'Required'}
          </span>
        </button>
      </div>

      {/* Active Step Content */}
      <div className="space-y-3">
        {activeStep === 'claim' && (
          <div className="space-y-2.5">
            <div className="text-[11px] font-bold uppercase tracking-wider text-sky-400">
              Select the most scientifically accurate Claim:
            </div>
            {cerData.claims.map((claim, idx) => {
              const letter = String.fromCharCode(65 + idx);
              const isSelected = selectedClaimId === claim.id;
              return (
                <div
                  key={claim.id}
                  onClick={() => !isSubmitted && setSelectedClaimId(claim.id)}
                  className={`flex items-start gap-4 p-4 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-sky-950/50 border-sky-500 text-slate-100 shadow-md shadow-sky-500/10'
                      : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-800/60'
                  }`}
                >
                  <div className={`w-7 h-7 rounded-xl border shrink-0 flex items-center justify-center font-mono text-xs font-bold mt-0.5 ${
                    isSelected
                      ? 'border-sky-400 bg-sky-500 text-slate-950'
                      : 'border-slate-700 bg-slate-800 text-slate-400'
                  }`}>
                    {letter}
                  </div>
                  <div className="text-xs md:text-sm leading-relaxed pt-0.5">
                    {claim.text}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {activeStep === 'evidence' && (
          <div className="space-y-2.5">
            <div className="text-[11px] font-bold uppercase tracking-wider text-sky-400">
              Select the empirical Evidence that directly supports the claim:
            </div>
            {cerData.evidence.map((ev, idx) => {
              const letter = String.fromCharCode(65 + idx);
              const isSelected = selectedEvidenceId === ev.id;
              return (
                <div
                  key={ev.id}
                  onClick={() => !isSubmitted && setSelectedEvidenceId(ev.id)}
                  className={`flex items-start gap-4 p-4 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-sky-950/50 border-sky-500 text-slate-100 shadow-md shadow-sky-500/10'
                      : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-800/60'
                  }`}
                >
                  <div className={`w-7 h-7 rounded-xl border shrink-0 flex items-center justify-center font-mono text-xs font-bold mt-0.5 ${
                    isSelected
                      ? 'border-sky-400 bg-sky-500 text-slate-950'
                      : 'border-slate-700 bg-slate-800 text-slate-400'
                  }`}>
                    {letter}
                  </div>
                  <div className="text-xs md:text-sm leading-relaxed pt-0.5">
                    {ev.text}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {activeStep === 'reasoning' && (
          <div className="space-y-2.5">
            <div className="text-[11px] font-bold uppercase tracking-wider text-sky-400">
              Select the scientific Reasoning connecting evidence to the claim:
            </div>
            {cerData.reasoning.map((re, idx) => {
              const letter = String.fromCharCode(65 + idx);
              const isSelected = selectedReasoningId === re.id;
              return (
                <div
                  key={re.id}
                  onClick={() => !isSubmitted && setSelectedReasoningId(re.id)}
                  className={`flex items-start gap-4 p-4 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-sky-950/50 border-sky-500 text-slate-100 shadow-md shadow-sky-500/10'
                      : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-800/60'
                  }`}
                >
                  <div className={`w-7 h-7 rounded-xl border shrink-0 flex items-center justify-center font-mono text-xs font-bold mt-0.5 ${
                    isSelected
                      ? 'border-sky-400 bg-sky-500 text-slate-950'
                      : 'border-slate-700 bg-slate-800 text-slate-400'
                  }`}>
                    {letter}
                  </div>
                  <div className="text-xs md:text-sm leading-relaxed pt-0.5">
                    {re.text}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Structured CER Argument Synthesis Box */}
      <div className="p-5 bg-slate-900/60 border border-slate-800 rounded-2xl space-y-3">
        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
          Your Complete Scientific Argument:
        </div>
        <div className="space-y-2 text-xs">
          <div className="flex items-start gap-2.5">
            <span className="font-mono text-[11px] text-sky-400 uppercase font-bold shrink-0 w-20">Claim:</span>
            <span className="text-slate-200">
              {cerData.claims.find(c => c.id === selectedClaimId)?.text || <span className="italic text-slate-500">(Select in Step 1)</span>}
            </span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="font-mono text-[11px] text-sky-400 uppercase font-bold shrink-0 w-20">Evidence:</span>
            <span className="text-slate-200">
              {cerData.evidence.find(e => e.id === selectedEvidenceId)?.text || <span className="italic text-slate-500">(Select in Step 2)</span>}
            </span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="font-mono text-[11px] text-sky-400 uppercase font-bold shrink-0 w-20">Reasoning:</span>
            <span className="text-slate-200">
              {cerData.reasoning.find(r => r.id === selectedReasoningId)?.text || <span className="italic text-slate-500">(Select in Step 3)</span>}
            </span>
          </div>
        </div>

        {/* Submit Button */}
        {!isSubmitted && (
          <div className="pt-3 border-t border-slate-800/80 flex justify-end">
            <button
              type="button"
              disabled={!isAllSelected}
              onClick={handleEvaluate}
              className="px-6 py-2.5 bg-sky-500 hover:bg-sky-400 disabled:opacity-20 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-sky-500/20"
            >
              <CheckCircle2 className="w-4 h-4" />
              Submit Scientific Argument
            </button>
          </div>
        )}
      </div>

      {/* Misconception Feedback (Attempt 1) */}
      {showMisconception && !isCorrect && attempts === 1 && misconceptionDetails && (
        <div className="p-5 bg-amber-950/40 border border-amber-800/60 rounded-2xl space-y-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="text-[11px] font-mono uppercase tracking-wider text-amber-300 font-bold block">
                Adjustment Needed in: {misconceptionDetails.stage.toUpperCase()}
              </span>
              <p className="text-xs md:text-sm text-amber-200 leading-relaxed">
                {misconceptionDetails.message}
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
              Adjust {misconceptionDetails.stage.toUpperCase()} & Try Again
            </button>
          </div>
        </div>
      )}

      {/* Final Scientific Argument Breakdown */}
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
              {isCorrect ? 'Complete Scientific Argument Verified' : 'Complete Scientific Solution'}
            </h4>
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
