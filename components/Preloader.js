'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Logo animation */}
          <div className="flex flex-col items-center gap-6">
            <motion.div 
              className="flex items-center gap-3"
              initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="w-12 h-12 flex items-center justify-center drop-shadow-xl">
                <Image src="/logo.png" alt="Alurin Logo" width={48} height={48} className="w-full h-full object-contain" priority />
              </div>
              <span className="text-3xl font-bold text-navy-900 tracking-tight">Alurin</span>
            </motion.div>

            {/* Progress Bar Container */}
            <motion.div 
              className="w-48 h-1.5 bg-gray-100 rounded-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {/* Animated Progress */}
              <motion.div 
                className="h-full bg-blue-600 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}