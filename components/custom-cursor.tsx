'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useMotionValue, useVelocity, useTransform } from 'framer-motion';

export const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Velocity for stretching effect
  const velocityX = useVelocity(cursorX);
  const velocityY = useVelocity(cursorY);
  
  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const trailX = useSpring(cursorX, springConfig);
  const trailY = useSpring(cursorY, springConfig);

  // Calculate speed and angle for stretching
  const speed = useTransform([velocityX, velocityY], ([latestX, latestY]: any[]) => {
    return Math.sqrt(latestX ** 2 + latestY ** 2);
  });

  const stretch = useTransform(speed, [0, 3000], [1, 2]);
  const angle = useTransform([velocityX, velocityY], ([latestX, latestY]: any[]) => {
    return Math.atan2(latestY, latestX) * (180 / Math.PI);
  });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('group') ||
        target.classList.contains('hover-glitch')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Main Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 bg-white rounded-full pointer-events-none z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* Trailing Stretchy Circle */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-primary/40 pointer-events-none z-[9998] flex items-center justify-center"
        style={{
          x: trailX,
          y: trailY,
          translateX: '-50%',
          translateY: '-50%',
          width: 20,
          height: 20,
          scaleX: stretch,
          rotate: angle,
          backgroundColor: isHovering ? 'rgba(0, 112, 243, 0.1)' : 'transparent',
        }}
      />
      
      {/* Ambient Cursor Glow (Site-wide) */}
      <motion.div
        className="fixed top-0 left-0 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[120px] pointer-events-none z-[0]"
        style={{
          x: trailX,
          y: trailY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  );
};
