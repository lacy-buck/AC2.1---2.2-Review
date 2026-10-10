import React from 'react';
import { TopicId } from '../types/chemistry';
import { TOPICS } from '../data/referenceData';
import { Atom, BookOpen, GraduationCap, CheckCircle } from 'lucide-react';

interface HeaderProps {
  currentView: 'topic' | 'exam';
  currentTopicId: TopicId;
  onSelectTopic: (topicId: TopicId) => void;
  onSelectExam: () => void;
  onOpenReference: () => void;
  totalCompleted: number;
  totalCorrect: number;
  totalQuestions: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  currentTopicId,
  onSelectTopic,
  onSelectExam,
  onOpenReference,
  totalCompleted,
  totalCorrect,
  totalQuestions
}) => {
  return (
    <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-30">
      <div className="max-w-6xl mx-auto px-4 py-3.5 flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Brand / Logo */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-sky-500/20 text-slate-950">
              <Atom className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base font-extrabold tracking-tight text-slate-100">
                  ChemReview
                </h1>
                <span className="text-[11px] font-semibold text-sky-400 bg-sky-950/80 px-2 py-0.5 rounded-md border border-sky-800/40">
                  HS Assessment Mastery
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                Bonding · Ionic Formulas · Properties · Halogen Reactivity · CER
              </p>
            </div>
          </div>

          {/* Mobile Reference Button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={onOpenReference}
              className="p-2 rounded-xl bg-slate-900 border border-slate-700 text-sky-400 cursor-pointer"
              aria-label="Open reference tables"
            >
              <BookOpen className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Global Progress & Reference Action */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-3 text-xs bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-xl">
            <div className="flex items-center gap-1.5 text-slate-300">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>{currentView === 'exam' ? 'Exam Mastery:' : 'Topic Mastery:'}</span>
              <strong className="text-slate-100 font-mono">
                {totalCorrect}/{totalQuestions}
              </strong>
            </div>
            <span className="text-slate-700">|</span>
            <div className="text-slate-400 font-mono text-[11px]">
              {Math.round((totalCorrect / Math.max(1, totalQuestions)) * 100)}% Complete
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenReference}
            className="hidden md:flex items-center gap-2 text-xs font-semibold text-sky-300 bg-sky-950/50 hover:bg-sky-900/50 border border-sky-800/60 px-3.5 py-2 rounded-xl transition-all cursor-pointer shadow-xs"
          >
            <BookOpen className="w-4 h-4 text-sky-400" />
            <span>Reference Drawer</span>
          </button>
        </div>
      </div>

      {/* Main Navigation Segmented Bar */}
      <div className="max-w-6xl mx-auto px-4 pb-2.5 pt-1 overflow-x-auto flex items-center gap-1.5 text-xs">
        {TOPICS.map((topic) => {
          const isActive = currentView === 'topic' && currentTopicId === topic.id;
          return (
            <button
              key={topic.id}
              type="button"
              onClick={() => onSelectTopic(topic.id)}
              className={`px-3 py-1.5 rounded-xl font-medium whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? 'bg-sky-500 text-slate-950 font-bold shadow-md shadow-sky-500/20'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              {topic.shortTitle}
            </button>
          );
        })}

        <div className="h-4 w-[1px] bg-slate-800 mx-1 shrink-0" />

        <button
          type="button"
          onClick={onSelectExam}
          className={`px-3.5 py-1.5 rounded-xl font-medium whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
            currentView === 'exam'
              ? 'bg-amber-400 text-slate-950 font-bold shadow-md shadow-amber-400/20'
              : 'text-amber-300/80 hover:text-amber-200 hover:bg-amber-950/40 border border-amber-800/40'
          }`}
        >
          <GraduationCap className="w-4 h-4" />
          <span>Practice Exam</span>
        </button>
      </div>
    </header>
  );
};
