'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export default function AnimatedText({ text, className = "" }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2']
  });

  const characters = text.split("");

  return (
    <p ref={ref} className={className}>
      {characters.map((char, i) => {
        const start = i / characters.length;
        const end = (i + 1) / characters.length;
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
        
        return (
          <span key={i} className="relative inline-block">
            <span className="opacity-0">{char}</span>
            <motion.span 
              style={{ opacity }}
              className="absolute inset-0"
            >
              {char}
            </motion.span>
          </span>
        );
      })}
    </p>
  );
}
