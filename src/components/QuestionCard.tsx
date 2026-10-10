import React, { useState } from 'react';
import { 
  CheckCircle2, 
  AlertCircle, 
  HelpCircle, 
  RotateCcw, 
  ArrowRight, 
  ArrowLeft,
  BookOpen,
  Sparkles,
  Table as TableIcon
} from 'lucide-react';
import { Question, UserAnswerState } from '../types/chemistry';
import { CerBuilder } from './CerBuilder';
import { FormulaBuilder } from './FormulaBuilder';

interface QuestionCardProps {
  question: Question;
  questionIndex: number;
  totalQuestions: number;
  userState?: UserAnswerState;
  onUpdateAnswer: (state: UserAnswerState) => void;
  onNextQuestion: () => void;
  onPrevQuestion: () => void;
  onOpenReference: () => void;
  isFirst: boolean;
  isLast: boolean;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  questionIndex,
  totalQuestions,
  userState,
  onUpdateAnswer,
  onNextQuestion,
  onPrevQuestion,
  onOpenReference,
  isFirst,
  isLast
}) => {
  const [selectedOptionId, setSelectedOptionId] = useState<string | undefined>(
    userState?.selectedOptionId
  );
  const [attempts, setAttempts] = useState<number>(userState?.attemptsCount || 0);
  const [isCompleted, setIsCompleted] = useState<boolean>(userState?.isCompleted || false);
  const [isCorrect, setIsCorrect] = useState<boolean>(userState?.isCorrect || false);
  const [showMisconception, setShowMisconception] = useState<boolean>(false);
  const [eliminatedOptionIds, setEliminatedOptionIds] = useState<string[]>([]);

  // When question changes, reset local state if userState is not completed
  React.useEffect(() => {
    setSelectedOptionId(userState?.selectedOptionId);
    setAttempts(userState?.attemptsCount || 0);
    setIsCompleted(userState?.isCompleted || false);
    setIsCorrect(userState?.isCorrect || false);
    setShowMisconception(false);
    setEliminatedOptionIds([]);
  }, [question.id, userState]);

  const handleMultipleChoiceSubmit = () => {
    if (!selectedOptionId || isCompleted) return;

    const currentAttempts = attempts + 1;
    setAttempts(currentAttempts);

    const isMatch = selectedOptionId === question.correctOptionId;

    if (isMatch) {
      setIsCorrect(true);
      setIsCompleted(true);
      setShowMisconception(false);
      onUpdateAnswer({
        questionId: question.id,
        topicId: question.topicId,
        attemptsCount: currentAttempts,
        selectedOptionId,
        isCompleted: true,
        isCorrect: true,
        showHint: false,
        showFullExplanation: true
      });
    } else {
      setEliminatedOptionIds((prev) => [...prev, selectedOptionId]);

      if (currentAttempts === 1) {
        // Attempt 1: Withhold answer, display misconception and hint, allow retry
        setShowMisconception(true);
        setIsCorrect(false);
        setIsCompleted(false);
        onUpdateAnswer({
          questionId: question.id,
          topicId: question.topicId,
          attemptsCount: currentAttempts,
          selectedOptionId,
          isCompleted: false,
          isCorrect: false,
          showHint: true,
          showFullExplanation: false
        });
      } else {
        // Attempt 2: Show full scientific explanation
        setIsCorrect(false);
        setIsCompleted(true);
        setShowMisconception(true);
        onUpdateAnswer({
          questionId: question.id,
          topicId: question.topicId,
          attemptsCount: currentAttempts,
          selectedOptionId,
          isCompleted: true,
          isCorrect: false,
          showHint: true,
          showFullExplanation: true
        });
      }
    }
  };

  const handleRetryMultipleChoice = () => {
    setSelectedOptionId(undefined);
    setShowMisconception(false);
  };

  const currentOption = question.options?.find((opt) => opt.id === selectedOptionId);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 md:p-7 shadow-xl space-y-6">
      {/* Top Meta Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-4">
        <div className="flex items-center gap-2 text-xs">
          <span className="font-mono font-bold text-sky-400 bg-sky-950/60 px-2.5 py-1 rounded-lg border border-sky-800/40">
            Problem {questionIndex + 1} of {totalQuestions}
          </span>
          <span className="text-slate-400">·</span>
          <span className="text-slate-300 font-medium">{question.title}</span>
          <span className="text-slate-400">·</span>
          <span className={`text-[11px] font-semibold ${
            question.difficulty === 'Foundation' 
              ? 'text-emerald-400' 
              : question.difficulty === 'Proficient' 
              ? 'text-sky-400' 
              : 'text-purple-400'
          }`}>
            {question.difficulty}
          </span>
        </div>

        <button
          type="button"
          onClick={onOpenReference}
          className="text-xs text-sky-400 hover:text-sky-300 flex items-center gap-1.5 cursor-pointer bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800 transition-colors"
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Reference Table</span>
        </button>
      </div>

      {/* Main Question Prompt */}
      <div className="space-y-3">
        <h3 className="text-base md:text-lg font-semibold text-slate-100 leading-relaxed">
          {question.prompt}
        </h3>

        {question.subPrompt && (
          <p className="text-xs md:text-sm text-slate-400 bg-slate-950/50 p-3 rounded-xl border border-slate-800/80 leading-relaxed">
            {question.subPrompt}
          </p>
        )}
      </div>

      {/* Experimental Data Table / Reaction Matrix if present */}
      {question.scenarioData && (
        <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-4 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
              <TableIcon className="w-3.5 h-3.5 text-sky-400" />
              {question.scenarioData.title || 'Experimental Evidence Data'}
            </span>
            {question.scenarioData.caption && (
              <span className="text-[11px] text-slate-400 italic">
                {question.scenarioData.caption}
              </span>
            )}
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-900/80 border-b border-slate-800">
                <tr>
                  {question.scenarioData.headers.map((h, i) => (
                    <th key={i} className="py-2.5 px-3 font-semibold text-slate-300">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-mono text-[11px]">
                {question.scenarioData.rows.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-slate-900/40">
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className="py-2.5 px-3 text-slate-300">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Render Format: Multiple Choice */}
      {question.type === 'multiple-choice' && question.options && (
        <div className="space-y-3">
          <div className="grid grid-cols-1 gap-2.5">
            {question.options.map((option, idx) => {
              const letter = String.fromCharCode(65 + idx);
              const isSelected = selectedOptionId === option.id;
              const isEliminated = eliminatedOptionIds.includes(option.id);
              const isAnswerKey = isCompleted && option.id === question.correctOptionId;
              const isIncorrectChoice = isCompleted && isSelected && !isCorrect;

              let style = 'bg-slate-800/80 hover:bg-slate-800 border-slate-700/80 text-slate-200';
              if (isSelected && !isCompleted) {
                style = 'bg-sky-950/60 border-sky-500 text-sky-200 ring-2 ring-sky-500/20';
              } else if (isAnswerKey) {
                style = 'bg-emerald-950/60 border-emerald-500 text-emerald-200 font-medium ring-2 ring-emerald-500/20';
              } else if (isIncorrectChoice) {
                style = 'bg-rose-950/60 border-rose-600 text-rose-200 line-through opacity-80';
              } else if (isEliminated) {
                style = 'bg-slate-950/50 border-slate-800 text-slate-600 line-through cursor-not-allowed';
              }

              return (
                <button
                  key={option.id}
                  type="button"
                  disabled={isCompleted || isEliminated}
                  onClick={() => setSelectedOptionId(option.id)}
                  className={`w-full p-3.5 rounded-2xl border transition-all text-left flex items-start gap-3 cursor-pointer ${style}`}
                >
                  <span className={`w-6 h-6 rounded-lg text-xs font-mono font-bold shrink-0 flex items-center justify-center ${
                    isSelected ? 'bg-sky-500 text-slate-950' : 'bg-slate-900 text-slate-400'
                  }`}>
                    {letter}
                  </span>
                  <span className="text-xs md:text-sm leading-relaxed pt-0.5">
                    {option.text}
                  </span>
                </button>
              );
            })}
          </div>

          {!isCompleted && (
            <div className="pt-2 flex justify-end">
              <button
                type="button"
                disabled={!selectedOptionId}
                onClick={handleMultipleChoiceSubmit}
                className="px-5 py-2.5 bg-sky-500 hover:bg-sky-400 disabled:opacity-40 text-slate-950 font-bold text-xs rounded-xl shadow-lg shadow-sky-500/20 transition-all cursor-pointer flex items-center gap-1.5"
              >
                Submit Response
              </button>
            </div>
          )}
        </div>
      )}

      {/* Render Format: Formula Builder */}
      {question.type === 'formula-builder' && question.formulaData && (
        <FormulaBuilder
          formulaData={question.formulaData}
          hint={question.hint}
          explanation={question.explanation}
          onAnswerComplete={(correct, count) => {
            setIsCorrect(correct);
            setIsCompleted(true);
            onUpdateAnswer({
              questionId: question.id,
              topicId: question.topicId,
              attemptsCount: count,
              isCompleted: true,
              isCorrect: correct,
              showHint: !correct,
              showFullExplanation: true
            });
          }}
          savedState={{
            isCompleted: userState?.isCompleted,
            isCorrect: userState?.isCorrect
          }}
        />
      )}

      {/* Render Format: CER Builder */}
      {question.type === 'cer' && question.cerData && (
        <CerBuilder
          cerData={question.cerData}
          hint={question.hint}
          explanation={question.explanation}
          onAnswerComplete={(correct, count) => {
            setIsCorrect(correct);
            setIsCompleted(true);
            onUpdateAnswer({
              questionId: question.id,
              topicId: question.topicId,
              attemptsCount: count,
              isCompleted: true,
              isCorrect: correct,
              showHint: !correct,
              showFullExplanation: true
            });
          }}
          savedState={{
            isCompleted: userState?.isCompleted,
            isCorrect: userState?.isCorrect
          }}
        />
      )}

      {/* Tier 1: Misconception diagnosis on attempt 1 failure */}
      {showMisconception && !isCorrect && attempts === 1 && currentOption && (
        <div className="p-4 bg-amber-950/40 border border-amber-800/60 rounded-2xl space-y-3 animate-in fade-in">
          <div className="flex items-start gap-2.5">
            <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="text-xs font-bold text-amber-300 block">
                Chemistry Misconception Diagnosis:
              </span>
              <p className="text-xs text-amber-200/90 leading-relaxed">
                {currentOption.misconceptionExplanation || 
                  "This selection does not correctly reflect the underlying chemical mechanism."}
              </p>
            </div>
          </div>

          <div className="p-3 bg-slate-900/80 border border-amber-900/40 rounded-xl text-xs text-slate-300 flex items-start gap-2">
            <HelpCircle className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-sky-300">Chemistry Hint:</strong> {question.hint}
            </div>
          </div>

          <div className="flex justify-end pt-1">
            <button
              type="button"
              onClick={handleRetryMultipleChoice}
              className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Adjust Choice & Try Again
            </button>
          </div>
        </div>
      )}

      {/* Tier 2: Full Scientific Breakdown on completion */}
      {isCompleted && (
        <div className={`p-5 rounded-2xl border space-y-3 animate-in fade-in ${
          isCorrect 
            ? 'bg-emerald-950/30 border-emerald-800/60 text-emerald-200' 
            : 'bg-slate-850 border-rose-900/50 text-slate-200'
        }`}>
          <div className="flex items-center gap-2">
            {isCorrect ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            ) : (
              <AlertCircle className="w-5 h-5 text-rose-400" />
            )}
            <h4 className="text-sm font-bold">
              {isCorrect ? 'Correct Scientific Reasoning!' : 'Scientific Solution & Model Rationale'}
            </h4>
          </div>

          <div className="text-xs leading-relaxed space-y-2">
            <div>
              <strong className="text-slate-100 block mb-0.5">Core Concept:</strong>
              <span className="text-slate-300">{question.keyConcept || question.explanation}</span>
            </div>
            <div className="pt-2 border-t border-slate-800/80">
              <strong className="text-slate-100 block mb-0.5">Detailed Chemical Explanation:</strong>
              <span className="text-slate-300">{question.explanation}</span>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Navigation Controls */}
      <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
        <button
          type="button"
          disabled={isFirst}
          onClick={onPrevQuestion}
          className="px-3.5 py-1.5 bg-slate-800 hover:bg-slate-700 disabled:opacity-30 text-slate-300 text-xs rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Previous
        </button>

        <button
          type="button"
          disabled={isLast}
          onClick={onNextQuestion}
          className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 disabled:opacity-30 text-slate-300 text-xs rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
        >
          Next Problem
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
