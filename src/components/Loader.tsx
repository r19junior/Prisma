import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-prisma-white"
        >
          <div className="relative w-32 h-32">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <motion.path
                d="M50 10 L90 80 L10 80 Z"
                fill="none"
                stroke="var(--color-prisma-dark-red)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              <motion.path
                d="M50 10 L50 80"
                fill="none"
                stroke="var(--color-prisma-light-red)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.5 }}
                transition={{ delay: 0.8, duration: 1 }}
              />
            </svg>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs tracking-[0.3em] font-display text-prisma-dark-red"
            >
              PRISMA GLOBAL
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
