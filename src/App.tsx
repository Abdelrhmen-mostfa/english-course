import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { slides } from './components/Slides';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const SlideComponent = slides[currentSlide];

  return (
    <div className="h-screen w-screen bg-sky-50 flex flex-col font-sans text-slate-800 overflow-hidden">
      {/* Main Presentation Area */}
      <div className="flex-1 relative m-2 md:m-8 bg-white rounded-3xl md:rounded-[3rem] shadow-2xl border-4 md:border-8 border-white overflow-hidden flex flex-col">
        {/* Colorful top border detail */}
        <div className="h-2 md:h-4 w-full bg-gradient-to-r from-pink-400 via-yellow-400 to-sky-400 shrink-0" />
        
        <div className="flex-1 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full overflow-y-auto overflow-x-hidden"
            >
              <SlideComponent />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation & Progress Bar */}
      <div className="h-auto md:h-20 shrink-0 px-4 md:px-8 flex items-center justify-between pb-4 pt-2 md:pt-0 gap-2">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`p-3 md:p-4 rounded-full flex items-center justify-center transition-all flex-shrink-0 ${
            currentSlide === 0 
              ? 'text-sky-200 cursor-not-allowed bg-sky-100/50' 
              : 'text-white bg-indigo-600 shadow-md hover:bg-indigo-700 hover:scale-105 hover:shadow-lg active:scale-95'
          }`}
        >
          <ChevronLeft className="w-8 h-8 md:w-8 md:h-8" />
        </button>

        {/* Dots Progress */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 px-4 py-2 md:px-6 md:py-3 bg-white/80 backdrop-blur-sm rounded-3xl md:rounded-full shadow-inner flex-1 max-w-[60vw] md:max-w-none">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 md:h-3 rounded-full transition-all ${
                idx === currentSlide 
                  ? 'bg-indigo-600 w-6 md:w-8' 
                  : 'bg-indigo-200 hover:bg-indigo-400 w-2 md:w-3'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className={`p-3 md:p-4 rounded-full flex items-center justify-center transition-all flex-shrink-0 ${
            currentSlide === slides.length - 1 
              ? 'text-sky-200 cursor-not-allowed bg-sky-100/50' 
              : 'text-white bg-indigo-600 shadow-md hover:bg-indigo-700 hover:scale-105 hover:shadow-lg active:scale-95'
          }`}
        >
          <ChevronRight className="w-8 h-8 md:w-8 md:h-8" />
        </button>
      </div>
    </div>
  );
}
