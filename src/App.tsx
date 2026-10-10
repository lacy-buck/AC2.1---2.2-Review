import React, { useState, useEffect } from 'react';
import { TopicId, UserAnswerState } from './types/chemistry';
import { TOPICS } from './data/referenceData';
import { TOPIC_QUESTIONS, EXAM_QUESTIONS } from './data/questions';
import { Header } from './components/Header';
import { TopicView } from './components/TopicView';
import { ExamView } from './components/ExamView';
import { ReferenceDrawer } from './components/ReferenceDrawer';
import { RotateCcw, BookOpen } from 'lucide-react';

const STORAGE_KEY = 'chem_review_answers_v2';
const EXAM_STORAGE_KEY = 'chem_review_exam_v2';

export default function App() {
  const [currentView, setCurrentView] = useState<'topic' | 'exam'>('topic');
  const [currentTopicId, setCurrentTopicId] = useState<TopicId>('bonding');
  const [isReferenceOpen, setIsReferenceOpen] = useState<boolean>(false);

  // Load saved topic questions progress
  const [userAnswers, setUserAnswers] = useState<Record<string, UserAnswerState>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Load saved exam progress
  const [examAnswers, setExamAnswers] = useState<Record<string, UserAnswerState>>(() => {
    try {
      const saved = localStorage.getItem(EXAM_STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Persist topic answers
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(userAnswers));
    } catch (e) {
      console.error('Failed to save progress', e);
    }
  }, [userAnswers]);

  // Persist exam answers
  useEffect(() => {
    try {
      localStorage.setItem(EXAM_STORAGE_KEY, JSON.stringify(examAnswers));
    } catch (e) {
      console.error('Failed to save exam progress', e);
    }
  }, [examAnswers]);

  const handleUpdateTopicAnswer = (state: UserAnswerState) => {
    setUserAnswers((prev) => ({
      ...prev,
      [state.questionId]: state
    }));
  };

  const handleUpdateExamAnswer = (state: UserAnswerState) => {
    setExamAnswers((prev) => ({
      ...prev,
      [state.questionId]: state
    }));
  };

  const handleResetAllProgress = () => {
    if (window.confirm('Reset all saved chemistry problem progress?')) {
      setUserAnswers({});
      setExamAnswers({});
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem(EXAM_STORAGE_KEY);
    }
  };

  const handleResetExam = () => {
    setExamAnswers({});
    localStorage.removeItem(EXAM_STORAGE_KEY);
  };

  const activeTopic = TOPICS.find((t) => t.id === currentTopicId) || TOPICS[0];
  const topicQuestions = TOPIC_QUESTIONS.filter((q) => q.topicId === currentTopicId);

  // Statistics for current view
  const activeQuestions = currentView === 'topic' ? TOPIC_QUESTIONS : EXAM_QUESTIONS;
  const activeAnswers = currentView === 'topic' ? userAnswers : examAnswers;

  const totalCompleted = activeQuestions.filter((q) => activeAnswers[q.id]?.isCompleted).length;
  const totalCorrect = activeQuestions.filter(
    (q) => activeAnswers[q.id]?.isCompleted && activeAnswers[q.id]?.isCorrect
  ).length;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-sky-500 selection:text-slate-950">
      {/* Top Application Header */}
      <Header
        currentView={currentView}
        currentTopicId={currentTopicId}
        onSelectTopic={(topicId) => {
          setCurrentTopicId(topicId);
          setCurrentView('topic');
        }}
        onSelectExam={() => setCurrentView('exam')}
        onOpenReference={() => setIsReferenceOpen(true)}
        totalCompleted={totalCompleted}
        totalCorrect={totalCorrect}
        totalQuestions={activeQuestions.length}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 py-6 md:py-8">
        {currentView === 'topic' ? (
          <TopicView
            topic={activeTopic}
            questions={topicQuestions}
            userAnswers={userAnswers}
            onUpdateAnswer={handleUpdateTopicAnswer}
            onOpenReference={() => setIsReferenceOpen(true)}
          />
        ) : (
          <ExamView
            questions={EXAM_QUESTIONS}
            examAnswers={examAnswers}
            onUpdateAnswer={handleUpdateExamAnswer}
            onResetExam={handleResetExam}
            onOpenReference={() => setIsReferenceOpen(true)}
          />
        )}
      </main>

      {/* Reference Drawer */}
      <ReferenceDrawer
        isOpen={isReferenceOpen}
        onClose={() => setIsReferenceOpen(false)}
      />

      {/* Bottom Subtle Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-4 text-xs text-slate-400">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span>High School Chemistry Review & Assessment Prep</span>
            <span aria-hidden="true">·</span>
            <span>28 Topic Problems + 15 Unique Exam Questions</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setIsReferenceOpen(true)}
              className="text-sky-400 hover:text-sky-300 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5" />
              Reference Toolkit
            </button>
            <span aria-hidden="true" className="text-slate-800">·</span>
            <button
              type="button"
              onClick={handleResetAllProgress}
              className="text-slate-400 hover:text-slate-200 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset My Work
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
