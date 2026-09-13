import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const LoadingScreen: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 950);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.35, ease: 'easeInOut' } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FAF9F6] pointer-events-none"
        >
          <div className="relative flex flex-col items-center">
            {/* Drawing Infinity Loop SVG */}
            <svg
              width="64"
              height="64"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mb-4"
            >
              <defs>
                <linearGradient id="loadLoopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6366F1" />
                  <stop offset="35%" stopColor="#8B5CF6" />
                  <stop offset="70%" stopColor="#EC4899" />
                  <stop offset="100%" stopColor="#F97316" />
                </linearGradient>
              </defs>
              <motion.path
                d="M20 22C13 22 9 26.5 9 30C9 33.5 13 38 20 38C27 38 33 22 40 22C47 22 51 26.5 51 30C51 33.5 47 38 40 38C33 38 27 22 20 22Z"
                stroke="url(#loadLoopGrad)"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.65, ease: 'easeInOut' }}
              />
            </svg>

            {/* Brand Text Fade In */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.35 }}
              className="font-display text-xl font-bold tracking-tight text-charcoal-900"
            >
              Career<span className="gradient-loop-text">Loop</span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
