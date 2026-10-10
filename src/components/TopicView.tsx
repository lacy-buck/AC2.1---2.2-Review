import React, { useState } from 'react';
import { TopicInfo, Question, UserAnswerState } from '../types/chemistry';
import { QuestionCard } from './QuestionCard';
import { CheckCircle2, Clock, HelpCircle, Sparkles } from 'lucide-react';

interface TopicViewProps {
  topic: TopicInfo;
  questions: Question[];
  userAnswers: Record<string, UserAnswerState>;
  onUpdateAnswer: (state: UserAnswerState) => void;
  onOpenReference: () => void;
}

export const TopicView: React.FC<TopicViewProps> = ({
  topic,
  questions,
  userAnswers,
  onUpdateAnswer,
  onOpenReference
}) => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number>(0);

  const currentQuestion = questions[activeQuestionIndex];

  const masteredCount = questions.filter(
    (q) => userAnswers[q.id]?.isCompleted && userAnswers[q.id]?.isCorrect
  ).length;

  return (
    <div className="space-y-6">
      {/* Topic Header & Progress Summary */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-5 md:p-6 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-sky-400">
              Active Topic Module
            </span>
            <h2 className="text-xl md:text-2xl font-black text-slate-100">{topic.title}</h2>
            <p className="text-xs md:text-sm text-slate-400 max-w-2xl leading-relaxed">
              {topic.description}
            </p>
          </div>

          {/* Quick Stats Pill */}
          <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-3 flex items-center gap-4 shrink-0">
            <div>
              <div className="text-[10px] uppercase font-bold text-slate-500">Module Mastery</div>
              <div className="text-base font-extrabold text-sky-400 font-mono">
                {masteredCount} / {questions.length}
              </div>
            </div>
            <div className="h-8 w-[1px] bg-slate-800" />
            <div>
              <div className="text-[10px] uppercase font-bold text-slate-500">Progress</div>
              <div className="text-base font-extrabold text-emerald-400 font-mono">
                {Math.round((masteredCount / questions.length) * 100)}%
              </div>
            </div>
          </div>
        </div>

        {/* Question Selector Strip */}
        <div className="flex items-center gap-2 overflow-x-auto pt-2 pb-1 border-t border-slate-800/80">
          <span className="text-[11px] text-slate-500 font-semibold mr-1 shrink-0">Questions:</span>
          {questions.map((q, idx) => {
            const state = userAnswers[q.id];
            const isActive = idx === activeQuestionIndex;
            const isCompleted = state?.isCompleted;
            const isCorrect = state?.isCorrect;
            const isRetry = state && !state.isCompleted && state.attemptsCount > 0;

            let badgeColor = 'bg-slate-800 text-slate-400 border-slate-700/60 hover:bg-slate-700/60';
            if (isActive) {
              badgeColor = 'bg-sky-500 text-slate-950 font-bold border-sky-400 shadow-md shadow-sky-500/20';
            } else if (isCompleted && isCorrect) {
              badgeColor = 'bg-emerald-950/80 text-emerald-300 border-emerald-700/80';
            } else if (isRetry || (isCompleted && !isCorrect)) {
              badgeColor = 'bg-amber-950/80 text-amber-300 border-amber-700/80';
            }

            return (
              <button
                key={q.id}
                type="button"
                onClick={() => setActiveQuestionIndex(idx)}
                className={`px-3 py-1 rounded-xl text-xs font-mono font-medium border shrink-0 transition-all cursor-pointer ${badgeColor}`}
              >
                Q{idx + 1}
                {isCompleted && isCorrect && ' ✓'}
                {isRetry && ' ↻'}
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Question Card */}
      {currentQuestion && (
        <QuestionCard
          question={currentQuestion}
          questionIndex={activeQuestionIndex}
          totalQuestions={questions.length}
          userState={userAnswers[currentQuestion.id]}
          onUpdateAnswer={onUpdateAnswer}
          onNextQuestion={() => {
            if (activeQuestionIndex < questions.length - 1) {
              setActiveQuestionIndex(activeQuestionIndex + 1);
            }
          }}
          onPrevQuestion={() => {
            if (activeQuestionIndex > 0) {
              setActiveQuestionIndex(activeQuestionIndex - 1);
            }
          }}
          onOpenReference={onOpenReference}
          isFirst={activeQuestionIndex === 0}
          isLast={activeQuestionIndex === questions.length - 1}
        />
      )}
    </div>
  );
};
