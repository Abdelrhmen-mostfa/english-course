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
      <div className="flex-1 relative m-4 md:m-8 bg-white rounded-[3rem] shadow-2xl border-8 border-white overflow-hidden flex flex-col">
        {/* Colorful top border detail */}
        <div className="h-4 w-full bg-gradient-to-r from-pink-400 via-yellow-400 to-sky-400" />
        
        <div className="flex-1 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <SlideComponent />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation & Progress Bar */}
      <div className="h-20 shrink-0 px-8 flex items-center justify-between pb-4">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`p-4 rounded-full flex items-center justify-center transition-all ${
            currentSlide === 0 
              ? 'text-sky-200 cursor-not-allowed bg-sky-100/50' 
              : 'text-indigo-600 bg-white shadow-md hover:bg-indigo-50 hover:scale-105 hover:shadow-lg'
          }`}
        >
          <ChevronLeft className="w-8 h-8" />
        </button>

        {/* Dots Progress */}
        <div className="flex gap-3 px-6 py-3 bg-white/50 backdrop-blur-sm rounded-full shadow-inner">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === currentSlide 
                  ? 'bg-indigo-600 w-8' 
                  : 'bg-indigo-200 hover:bg-indigo-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className={`p-4 rounded-full flex items-center justify-center transition-all ${
            currentSlide === slides.length - 1 
              ? 'text-sky-200 cursor-not-allowed bg-sky-100/50' 
              : 'text-indigo-600 bg-white shadow-md hover:bg-indigo-50 hover:scale-105 hover:shadow-lg'
          }`}
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
}
