import React, { useState, useEffect } from 'react';
import { Question, UserAnswerState, TopicId } from '../types/chemistry';
import { QuestionCard } from './QuestionCard';
import { 
  Trophy, 
  RotateCcw, 
  Clock, 
  BarChart2, 
  Filter
} from 'lucide-react';
import { TOPICS } from '../data/referenceData';

interface ExamViewProps {
  questions: Question[];
  examAnswers: Record<string, UserAnswerState>;
  onUpdateAnswer: (state: UserAnswerState) => void;
  onResetExam: () => void;
  onOpenReference: () => void;
}

export const ExamView: React.FC<ExamViewProps> = ({
  questions,
  examAnswers,
  onUpdateAnswer,
  onResetExam,
  onOpenReference
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isExamFinished, setIsExamFinished] = useState<boolean>(false);
  const [filterMissedOnly, setFilterMissedOnly] = useState<boolean>(false);
  const [secondsElapsed, setSecondsElapsed] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(true);

  // Timer effect
  useEffect(() => {
    let interval: any;
    if (isTimerRunning && !isExamFinished) {
      interval = setInterval(() => {
        setSecondsElapsed((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, isExamFinished]);

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remainingSecs.toString().padStart(2, '0')}`;
  };

  const answeredCount = questions.filter((q) => examAnswers[q.id]?.isCompleted).length;
  const correctCount = questions.filter(
    (q) => examAnswers[q.id]?.isCompleted && examAnswers[q.id]?.isCorrect
  ).length;

  const currentQuestionsList = filterMissedOnly
    ? questions.filter((q) => examAnswers[q.id]?.isCompleted && !examAnswers[q.id]?.isCorrect)
    : questions;

  const currentQuestion = currentQuestionsList[currentIndex] || questions[0];

  // Topic mastery calculations
  const calculateTopicStats = (topicId: TopicId) => {
    const topicQs = questions.filter((q) => q.topicId === topicId);
    const comp = topicQs.filter((q) => examAnswers[q.id]?.isCompleted);
    const corr = topicQs.filter((q) => examAnswers[q.id]?.isCompleted && examAnswers[q.id]?.isCorrect);
    return {
      total: topicQs.length,
      answered: comp.length,
      correct: corr.length,
      pct: topicQs.length > 0 ? Math.round((corr.length / topicQs.length) * 100) : 0
    };
  };

  if (isExamFinished) {
    const scorePct = Math.round((correctCount / questions.length) * 100);

    return (
      <div className="space-y-6 max-w-4xl mx-auto">
        {/* Results Banner */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-amber-400" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                  Assessment Complete
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-100">
                Chemistry Exam Mastery Report
              </h2>
              <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                Total Time: <span className="font-mono text-slate-200 font-semibold">{formatTime(secondsElapsed)}</span> · Answered: {answeredCount} of {questions.length} Questions
              </p>
            </div>

            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-5 text-center min-w-[170px] shrink-0">
              <div className="text-[10px] uppercase font-bold tracking-wider text-slate-500">Exam Score</div>
              <div className="font-mono text-4xl md:text-5xl font-black text-sky-400 mt-1">{scorePct}%</div>
              <div className="text-xs font-mono text-slate-400 mt-1">
                {correctCount} / {questions.length} Correct
              </div>
            </div>
          </div>

          {/* Diagnostic breakdown by topic standard */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <BarChart2 className="w-4 h-4 text-sky-400" />
              <span>Performance Breakdown by Chemistry Standard</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {TOPICS.map((topic) => {
                const stats = calculateTopicStats(topic.id);
                if (stats.total === 0) return null;

                return (
                  <div key={topic.id} className="p-4 bg-slate-950/60 border border-slate-800/80 rounded-2xl space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-200">{topic.shortTitle}</span>
                      <span className="font-mono font-bold text-sky-400">
                        {stats.correct} / {stats.total} ({stats.pct}%)
                      </span>
                    </div>
                    {/* Progress bar */}
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${
                          stats.pct >= 80 ? 'bg-emerald-400' : stats.pct >= 50 ? 'bg-amber-400' : 'bg-rose-400'
                        }`}
                        style={{ width: `${stats.pct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setFilterMissedOnly(!filterMissedOnly)}
                className={`text-xs uppercase font-bold tracking-wider px-4 py-2 rounded-xl border transition-all flex items-center gap-1.5 cursor-pointer ${
                  filterMissedOnly
                    ? 'border-sky-500 text-sky-400 bg-sky-950/40'
                    : 'border-slate-700 text-slate-300 hover:bg-slate-800'
                }`}
              >
                <Filter className="w-3.5 h-3.5" />
                {filterMissedOnly ? 'Showing Missed Questions' : 'Review Missed Questions'}
              </button>
            </div>

            <button
              type="button"
              onClick={() => {
                if (window.confirm('Reset exam progress and restart timed exam?')) {
                  onResetExam();
                  setIsExamFinished(false);
                  setFilterMissedOnly(false);
                  setCurrentIndex(0);
                  setSecondsElapsed(0);
                }
              }}
              className="px-6 py-2.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-sky-500/20"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Retake Practice Exam
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Exam Header Bar */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-5 md:p-6 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
              Assessment Practice Mode
            </span>
            <h2 className="text-xl md:text-2xl font-black text-slate-100">
              Comprehensive Practice Exam
            </h2>
            <div className="flex items-center gap-4 pt-1">
              <div className="flex items-center gap-1.5 font-mono text-xs text-sky-400">
                <Clock className="w-3.5 h-3.5 text-sky-400" />
                <span>Elapsed: {formatTime(secondsElapsed)}</span>
              </div>
              <span className="text-slate-700">·</span>
              <div className="font-mono text-xs text-slate-400">
                Answered: {answeredCount} / {questions.length}
              </div>
            </div>
          </div>

          <div>
            <button
              type="button"
              onClick={() => setIsExamFinished(true)}
              className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-emerald-500/20 transition-all cursor-pointer"
            >
              Finish & Grade Exam
            </button>
          </div>
        </div>

        {/* Question Palette Strip */}
        <div className="flex items-center gap-1.5 overflow-x-auto pt-3 border-t border-slate-800/80">
          <span className="text-[11px] text-slate-500 font-semibold mr-1 shrink-0">Jump To:</span>
          {currentQuestionsList.map((q, idx) => {
            const state = examAnswers[q.id];
            const isSelected = idx === currentIndex;
            const isDone = state?.isCompleted;
            const isRight = state?.isCorrect;

            let badgeColor = 'bg-slate-800 text-slate-400 border-slate-700/60 hover:bg-slate-700/60';
            if (isSelected) {
              badgeColor = 'bg-sky-500 text-slate-950 font-bold border-sky-400 shadow-md shadow-sky-500/20';
            } else if (isDone && isRight) {
              badgeColor = 'bg-emerald-950/80 text-emerald-300 border-emerald-700/80';
            } else if (isDone && !isRight) {
              badgeColor = 'bg-rose-950/80 text-rose-300 border-rose-700/80';
            }

            return (
              <button
                key={q.id}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`w-8 h-8 rounded-xl border font-mono text-xs flex items-center justify-center shrink-0 transition-all cursor-pointer ${badgeColor}`}
                title={`Question ${idx + 1}`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Question */}
      {currentQuestion && (
        <QuestionCard
          question={currentQuestion}
          questionIndex={currentIndex}
          totalQuestions={currentQuestionsList.length}
          userState={examAnswers[currentQuestion.id]}
          onUpdateAnswer={onUpdateAnswer}
          onNextQuestion={() => {
            if (currentIndex < currentQuestionsList.length - 1) {
              setCurrentIndex(currentIndex + 1);
            }
          }}
          onPrevQuestion={() => {
            if (currentIndex > 0) {
              setCurrentIndex(currentIndex - 1);
            }
          }}
          onOpenReference={onOpenReference}
          isFirst={currentIndex === 0}
          isLast={currentIndex === currentQuestionsList.length - 1}
        />
      )}
    </div>
  );
};
