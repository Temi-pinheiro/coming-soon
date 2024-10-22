/* eslint-disable react/prop-types */
'use client';
import { useLayoutEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap/all';

export const Preloader = ({ timeline }) => {
  const preloaderBackground = useRef(null);
  const preloaderText = useRef(null);

  useLayoutEffect(() => {
    // Refs allow you to access DOM nodes
    // then we can animate them like so...
    const setInitialStates = () => {
      gsap.set(preloaderText, { yPercent: 100 });
    };
    const preloaderAnimation = () => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
      tl.to(preloaderText, {
        yPercent: 0,
        delay: 0.5,
      });
      tl.to(preloaderText, {
        yPercent: -105,
        delay: 0.6,
      });
      return tl;
    };
    timeline.add(setInitialStates()).add(preloaderAnimation());
  });

  return (
    <motion.div className=' h-screen w-screen block'>
      <p className='overflow-hidden z-3 leading-none text-slate-50 fixed top-[50%] left-[50%] [transform:translate(-50%,-50%)]'>
        <span ref={preloaderText} className='block'>
          Rethink Design
        </span>
      </p>
      <div ref={preloaderBackground}></div>
    </motion.div>
  );
};
