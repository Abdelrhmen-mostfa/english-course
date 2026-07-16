import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Clock, BookOpen, PenTool, MessageCircle, Hand, Users, 
  Play, QrCode, Image, Star, Trophy
} from 'lucide-react';
import { ImageUploader } from './ImageUploader';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export const WelcomeSlide = () => (
  <div className="flex flex-col items-center justify-center min-h-full space-y-8 text-center p-8 relative overflow-hidden">
    <div className="absolute top-10 left-10 text-6xl opacity-50 animate-bounce delay-100">🎈</div>
    <div className="absolute top-20 right-20 text-6xl opacity-50 animate-bounce delay-300">☀️</div>
    <div className="absolute bottom-20 left-20 text-6xl opacity-50 animate-bounce delay-500">🖍️</div>
    <div className="absolute bottom-10 right-10 text-6xl opacity-50 animate-bounce delay-700">🎨</div>

    <motion.div variants={itemVariants} className="text-5xl md:text-8xl mb-4">🌟👩‍🏫👧👦🌟</motion.div>
    <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-display text-indigo-700 font-bold drop-shadow-md">
      Welcome to Our English Lesson!
    </motion.h1>
    <motion.h2 variants={itemVariants} className="text-xl md:text-3xl font-bold text-pink-500 bg-white/60 px-8 py-4 rounded-3xl shadow-sm">
      Fun with Words, Conversations, and Games
    </motion.h2>
  </div>
);

export const RulesSlide = () => {
  const rules = [
    { text: "Come on time.", icon: Clock, color: "bg-blue-100 text-blue-600 border-blue-400" },
    { text: "Bring your English book.", icon: BookOpen, color: "bg-green-100 text-green-600 border-green-400" },
    { text: "Do your homework.", icon: PenTool, color: "bg-yellow-100 text-yellow-600 border-yellow-400" },
    { text: "Practice English in class.", icon: MessageCircle, color: "bg-pink-100 text-pink-600 border-pink-400" },
    { text: "Raise your hand.", icon: Hand, color: "bg-purple-100 text-purple-600 border-purple-400" },
    { text: "Respect everyone.", icon: Users, color: "bg-orange-100 text-orange-600 border-orange-400" }
  ];

  return (
    <div className="flex flex-col min-h-full p-8">
      <motion.h1 variants={itemVariants} className="text-3xl md:text-5xl font-display text-indigo-700 text-center mb-10 flex items-center justify-center gap-4">
        📚 Class Rules
      </motion.h1>
      <motion.div variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 flex-1 content-center max-w-6xl mx-auto w-full">
        {rules.map((rule, idx) => (
          <motion.div key={idx} variants={itemVariants} className={`flex flex-col items-center justify-center text-center p-4 md:p-8 rounded-2xl md:rounded-[2rem] border-b-[8px] ${rule.color} shadow-lg transform transition hover:-translate-y-2`}>
            <rule.icon className="w-12 h-12 md:w-20 md:h-20 mb-3 md:mb-6" />
            <h3 className="text-xl md:text-3xl font-bold text-slate-800">{rule.text}</h3>
            <div className="absolute top-4 left-4 text-xl md:text-3xl">✅</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export const WarmupSlide = () => {
  const answers = ["It was great.", "It was exciting.", "It was wonderful.", "It was brilliant.", "It was amazing.", "It was fun."];
  const colors = ["bg-rose-200", "bg-orange-200", "bg-amber-200", "bg-emerald-200", "bg-cyan-200", "bg-violet-200"];

  return (
    <div className="flex flex-col min-h-full p-8 relative">
      <motion.h1 variants={itemVariants} className="text-3xl md:text-5xl font-display text-indigo-700 text-center mb-12 flex items-center justify-center gap-4">
        🎲 Warm-up Activity
      </motion.h1>
      
      <div className="flex flex-col items-center justify-start gap-8 md:gap-12 flex-1">
        <motion.div variants={itemVariants} className="w-full flex flex-col items-center">
          <div className="bg-indigo-100 text-black p-6 md:p-8 rounded-3xl shadow-xl relative w-full max-w-4xl text-center border-4 border-indigo-400">
            <h2 className="text-2xl md:text-5xl font-bold font-display tracking-wide">How was your last vacation?</h2>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-indigo-100 rotate-45 transform rounded-sm border-r-4 border-b-4 border-indigo-400"></div>
          </div>
        </motion.div>
        
        <motion.div variants={containerVariants} className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mt-6 md:mt-12">
          {answers.map((ans, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants} 
              className={`${colors[idx]} text-black p-4 md:p-6 rounded-2xl md:rounded-[2rem] rounded-tl-none shadow-lg text-xl md:text-3xl font-bold text-center transform transition hover:scale-105 cursor-pointer flex items-center justify-center min-h-[80px] md:min-h-[140px] border-b-8 border-black/10`}
            >
              "{ans}"
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export const TextbookImageSlide = () => (
  <div className="flex flex-col min-h-full p-8">
    <div className="flex-1 flex items-center justify-center relative">
        <div className="absolute top-0 left-10 text-6xl animate-bounce delay-75">✨</div>
        <div className="absolute bottom-10 right-10 text-6xl animate-bounce delay-150">🎨</div>
        <div className="absolute top-1/2 right-4 text-5xl hidden md:block">🌴</div>
        <div className="absolute bottom-1/4 left-4 text-5xl hidden md:block">☀️</div>
        
        <div className="w-full max-w-5xl h-full min-h-[50vh] md:max-h-[70vh] bg-slate-50 rounded-[3rem] border-[12px] border-indigo-300 shadow-2xl flex flex-col items-center justify-center p-8 relative overflow-hidden ring-8 ring-indigo-100 ring-offset-8 ring-offset-sky-50 mt-4">
            <div className="absolute inset-0 border-8 border-white rounded-[2rem] pointer-events-none z-10"></div>
            <ImageUploader id="textbook-image-1" defaultText="Textbook Image 1 Goes Here" defaultImagePath="/images/textbook-image-1.jpg" />
        </div>
    </div>
  </div>
);

export const TextbookDialogueSlide = () => (
  <div className="flex flex-col min-h-full p-8 relative overflow-hidden">
      <div className="absolute top-10 left-10 text-4xl md:text-6xl animate-pulse text-yellow-400">💥</div>
      <div className="absolute top-20 right-10 text-4xl md:text-6xl animate-pulse text-sky-400 delay-100">🗯️</div>
      <div className="absolute bottom-10 left-20 text-4xl md:text-6xl animate-pulse text-pink-400 delay-200">💬</div>

      <motion.h1 variants={itemVariants} className="text-3xl md:text-5xl font-display text-indigo-700 text-center mb-4 z-10 font-bold">
          Story Dialogue
      </motion.h1>
      <motion.p variants={itemVariants} className="text-lg md:text-3xl font-bold text-pink-500 text-center mb-8 z-10 bg-white/80 inline-block px-6 md:px-10 py-2 md:py-3 rounded-full self-center shadow-md">
          🎧 Listen, Read, and Act the Dialogue 🎭
      </motion.p>

      <motion.div variants={itemVariants} className="flex-1 flex items-center justify-center z-10 w-full">
          <div className="w-full max-w-6xl bg-white rounded-3xl border-4 md:border-8 border-yellow-400 shadow-2xl flex items-center justify-center p-2 md:p-4 relative shadow-yellow-200/50 shadow-[0_0_40px] overflow-hidden min-h-[40vh]">
              <ImageUploader id="story-dialogue" defaultText="Story Dialogue Image" defaultImagePath="/images/story-dialogue.jpg" />
          </div>
      </motion.div>
  </div>
);

export const ReadingQuestionsSlide = () => (
  <div className="flex flex-col min-h-full p-8 relative">
      <motion.h1 variants={itemVariants} className="text-3xl md:text-5xl font-display text-indigo-700 text-center mb-10 z-10 font-bold flex items-center justify-center gap-4">
          ❓ Let's Answer Together ❓
      </motion.h1>
      <motion.div variants={itemVariants} className="flex-1 flex items-center justify-center z-10 w-full">
          <div className="w-full max-w-5xl h-full min-h-[50vh] md:max-h-[65vh] bg-sky-50 rounded-3xl border-8 border-white shadow-xl flex flex-col items-center justify-center p-8 relative ring-8 ring-sky-200 ring-offset-4 ring-offset-sky-50 mt-4">
              <div className="absolute -top-6 -right-6 text-5xl md:text-7xl transform rotate-12 drop-shadow-md z-20">🤔</div>
              <div className="absolute -bottom-6 -left-6 text-5xl md:text-7xl transform -rotate-12 drop-shadow-md z-20">📝</div>
              <ImageUploader id="textbook-questions" defaultText="Textbook Questions Image Goes Here" defaultImagePath="/images/textbook-questions.jpg" />
          </div>
      </motion.div>
  </div>
);

export const VocabularySlide = () => {
  const [selectedWordIdx, setSelectedWordIdx] = useState<number | null>(null);

  const words = [
    { word: "Afraid", emojiA: "😱", emojiB: "😆", correct: "A" },
    { word: "Brilliant", emojiA: "🗑️", emojiB: "🌟", correct: "B" },
    { word: "Dangerous", emojiA: "⚠️", emojiB: "🎈", correct: "A" },
    { word: "Different", emojiA: "🍎🍎🍎", emojiB: "🍏🍎🍏", correct: "B" },
    { word: "Exciting", emojiA: "🥱", emojiB: "🎢", correct: "B" },
    { word: "Naughty", emojiA: "😈", emojiB: "😇", correct: "A" },
    { word: "Terrible", emojiA: "🤢", emojiB: "🌈", correct: "A" },
    { word: "Surprised", emojiA: "😲", emojiB: "😐", correct: "A" },
  ];

  return (
    <div className="flex flex-col min-h-full p-4 md:p-6">
      <motion.h1 variants={itemVariants} className="text-2xl md:text-4xl font-display text-indigo-700 text-center mb-6 flex items-center justify-center gap-4 font-bold">
        🎯 Choose the Correct Picture
      </motion.h1>

      <motion.div variants={containerVariants} className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 flex-1 max-w-7xl mx-auto w-full">
        {words.map((item, idx) => {
          const isInteracted = selectedWordIdx === idx;
          return (
            <motion.div key={idx} variants={itemVariants} className="bg-white rounded-2xl md:rounded-3xl p-3 md:p-5 shadow-lg border-b-8 border-indigo-200 flex flex-col items-center">
              <h3 className="text-lg md:text-2xl font-bold text-slate-800 mb-2 md:mb-4 bg-indigo-100 px-2 md:px-4 py-1 md:py-2 rounded-full w-full text-center border-2 border-indigo-200">{item.word}</h3>
              <div className="flex gap-2 md:gap-4 w-full flex-1">
                {/* Option A */}
                <button 
                  onClick={() => setSelectedWordIdx(idx)}
                  className={`flex-1 rounded-xl md:rounded-2xl flex items-center justify-center text-4xl md:text-6xl bg-gray-50 border-4 transition-all hover:bg-gray-100 hover:scale-105 active:scale-95
                    ${isInteracted && item.correct === "A" ? 'border-green-500 bg-green-100 shadow-inner' : 'border-gray-200'}
                    ${isInteracted && item.correct !== "A" ? 'opacity-30 grayscale' : ''}`}
                >
                  {item.emojiA}
                </button>
                {/* Option B */}
                <button 
                  onClick={() => setSelectedWordIdx(idx)}
                  className={`flex-1 rounded-xl md:rounded-2xl flex items-center justify-center text-4xl md:text-6xl bg-gray-50 border-4 transition-all hover:bg-gray-100 hover:scale-105 active:scale-95
                    ${isInteracted && item.correct === "B" ? 'border-green-500 bg-green-100 shadow-inner' : 'border-gray-200'}
                    ${isInteracted && item.correct !== "B" ? 'opacity-30 grayscale' : ''}`}
                >
                  {item.emojiB}
                </button>
              </div>
              {isInteracted && (
                <div className="mt-2 md:mt-4 text-green-500 font-bold text-sm md:text-xl animate-bounce">Correct! ✅</div>
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export const NumbersSlide = () => {
  const numbers = ["1st", "2nd", "3rd", "4th", "7th", "12th", "13th", "16th", "18th", "20th"];
  const getBadgeColor = (num: string) => {
    if (num === "1st") return "bg-yellow-400 border-yellow-500 text-yellow-900";
    if (num === "2nd") return "bg-slate-300 border-slate-400 text-slate-800";
    if (num === "3rd") return "bg-orange-400 border-orange-500 text-orange-900";
    return "bg-sky-400 border-sky-500 text-sky-900";
  };

  return (
    <div className="flex flex-col min-h-full p-4 md:p-8">
      <motion.h1 variants={itemVariants} className="text-3xl md:text-5xl font-display text-indigo-700 text-center mb-8 md:mb-16 flex items-center justify-center gap-4 font-bold">
        🏅 Ordinal Numbers
      </motion.h1>
      
      <motion.div variants={containerVariants} className="flex flex-wrap justify-center gap-x-6 gap-y-10 md:gap-x-10 md:gap-y-16 flex-1 content-center max-w-6xl mx-auto">
        {numbers.map((num, idx) => (
          <motion.div 
            key={idx} 
            variants={itemVariants} 
            whileHover={{ scale: 1.15, rotate: [-5, 5, 0] }}
            className={`w-24 h-24 md:w-36 md:h-36 rounded-full border-b-[6px] md:border-b-[10px] flex items-center justify-center shadow-xl ${getBadgeColor(num)} relative cursor-pointer`}
          >
            <div className="absolute -top-3 -right-1 md:-top-4 md:-right-2 text-xl md:text-3xl drop-shadow-sm">✨</div>
            <div className="absolute -bottom-3 md:-bottom-5 bg-white px-2 py-1 md:px-4 md:py-2 rounded-full font-bold text-xs md:text-base shadow-lg border-2 border-inherit text-slate-800 whitespace-nowrap">
              Number {num.replace(/\D/g,'')}
            </div>
            <span className="text-3xl md:text-5xl font-display font-bold drop-shadow-sm">{num}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export const GameSlide = () => (
  <div className="flex flex-col min-h-full p-8 relative overflow-hidden">
      <div className="absolute top-10 left-10 text-6xl animate-bounce text-yellow-400"><Star className="fill-current w-20 h-20"/></div>
      <div className="absolute top-10 right-10 text-6xl animate-bounce delay-100 text-yellow-400"><Trophy className="fill-current w-20 h-20"/></div>
      <div className="absolute bottom-10 left-1/4 text-7xl text-pink-400 drop-shadow-md">🎊</div>
      <div className="absolute bottom-20 right-1/4 text-7xl text-sky-400 drop-shadow-md">🎉</div>

      <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-display text-indigo-700 text-center mb-8 z-10 flex justify-center items-center gap-4 font-bold drop-shadow-sm">
          🎮 Game Time! 🎮
      </motion.h1>

      <motion.div variants={itemVariants} className="flex-1 flex flex-col items-center justify-center z-10 space-y-8 md:space-y-12">
          <a 
              href="https://create.kahoot.it/details/4e6165d3-f46a-469d-a883-1bd9d6828e07" 
              target="_blank" rel="noopener noreferrer"
              className="bg-purple-200 hover:bg-purple-300 text-black text-2xl md:text-5xl font-display font-bold py-4 md:py-8 px-8 md:px-16 rounded-full shadow-2xl flex items-center gap-4 md:gap-6 transform transition hover:scale-110 hover:-translate-y-2 border-[4px] md:border-[6px] border-purple-400 text-center"
          >
              <Play className="fill-current w-8 h-8 md:w-16 md:h-16 hidden md:block" />
              Let's Play Kahoot!
          </a>

          <div className="bg-white p-6 md:p-8 rounded-[2rem] md:rounded-[3rem] shadow-xl border-4 md:border-8 border-dashed border-purple-200 flex flex-col items-center justify-center bg-purple-50/50">
              <QrCode className="w-24 h-24 md:w-40 md:h-40 text-purple-300 mb-2 md:mb-4" />
              <p className="text-purple-500 font-bold text-sm md:text-xl uppercase tracking-widest">Scan to Join</p>
          </div>
      </motion.div>
  </div>
);

export const ThanksSlide = () => (
  <div className="flex flex-col items-center justify-center min-h-full space-y-12 text-center p-8 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-5xl drop-shadow-md"
          initial={{ y: -50, x: Math.random() * window.innerWidth, opacity: 1 }}
          animate={{ y: window.innerHeight, x: Math.random() * window.innerWidth + (Math.random() > 0.5 ? 100 : -100), rotate: 360 }}
          transition={{ duration: 3 + Math.random() * 4, repeat: Infinity, ease: "linear", delay: Math.random() * 2 }}
        >
          {['🎉', '🎊', '✨', '🎈', '🌟'][Math.floor(Math.random() * 5)]}
        </motion.div>
      ))}
    </div>

    <motion.h1 variants={itemVariants} className="text-5xl md:text-8xl font-display text-indigo-700 drop-shadow-lg z-10 font-bold border-b-8 border-yellow-400 pb-4">
      Thanks for Your Time!
    </motion.h1>
    
    <motion.div variants={itemVariants} className="text-7xl md:text-[10rem] z-10 drop-shadow-2xl">
      👋👧👦🧑‍🏫
    </motion.div>

    <motion.h2 variants={itemVariants} className="text-3xl md:text-6xl font-bold text-pink-500 bg-white/90 px-8 md:px-12 py-4 md:py-6 rounded-full shadow-2xl z-10 border-4 md:border-8 border-pink-200 transform -rotate-2">
      See You Next Lesson!
    </motion.h2>
  </div>
);

export const slides = [
  WelcomeSlide,
  RulesSlide,
  WarmupSlide,
  TextbookImageSlide,
  TextbookDialogueSlide,
  ReadingQuestionsSlide,
  VocabularySlide,
  NumbersSlide,
  GameSlide,
  ThanksSlide
];
