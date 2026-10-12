'use client';
import { motion } from 'framer-motion';

export function FadeIn({ children, delay = 0, className }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-15%' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
      className={`will-change-[transform,opacity] transform-gpu ${className || ''}`}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({ children, className }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-15%' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.12 } },
      }}
      className={`will-change-[transform,opacity] transform-gpu ${className || ''}`}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30, filter: 'blur(5px)' },
        visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
      }}
      className={`will-change-[transform,opacity] transform-gpu ${className || ''}`}
    >
      {children}
    </motion.div>
  );
}

export function FloatingElement({ children, delay = 0, className, yOffset = 6, duration = 7 }) {
  return (
    <motion.div
      animate={{ y: [0, -yOffset, 0] }}
      transition={{ 
        duration, 
        repeat: Infinity, 
        ease: "easeInOut",
        delay 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
