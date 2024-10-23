/* eslint-disable react/prop-types */
'use client';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

export const Preloader = ({ timeline }) => {
  useGSAP(
    () => {
      const preloaderBackground = document.querySelector(
        '#preloaderBackground'
      );
      const preloaderText = document.querySelector('#preloaderText');
      // Refs allow you to access DOM nodes
      // then we can animate them like so...
      const setInitialStates = () => {
        gsap.set(preloaderText, { yPercent: 100 });
      };
      const preloaderAnimation = () => {
        const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
        tl.to(preloaderText, {
          yPercent: 0,
          delay: 0.8,
        })
          .to(preloaderText, {
            yPercent: -105,
            delay: 0.8,
          })
          .to(
            preloaderBackground,
            {
              yPercent: -100,
              duration: 1.5,
              ease: 'power4.inOut',
            },
            '<'
          );
        return tl;
      };
      timeline.add(setInitialStates()).add(preloaderAnimation());
    },
    { dependencies: [] }
  );

  return (
    <div className='overflow-hidden '>
      <p className='overflow-hidden z-[3] leading-none text-orange-400 fixed top-[50%] left-[50%] [transform:translate(-50%,-50%)]'>
        <span id='preloaderText' className='block'>
          Rethink Design
        </span>
      </p>
      <div
        id='preloaderBackground'
        className='fixed inset-0 z-[2] flex h-screen bg-slate-950 items-center justify-center'
      ></div>
    </div>
  );
};
