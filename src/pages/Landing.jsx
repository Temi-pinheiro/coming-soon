import { useLayoutEffect, useState } from 'react';
import { Preloader } from '../components/Preloader';
import { AnimatePresence } from 'framer-motion';
import gsap from 'gsap';

export const Landing = () => {
  const [loading, setLoading] = useState(true);
  const master = gsap.timeline();
  useLayoutEffect(() => {
    // setTimeout(() => setLoading(false), 3000);
  }, []);
  return (
    <div className='w-full h-full'>
      <AnimatePresence mode='wait'>
        {loading ? (
          <Preloader timeline={master} />
        ) : (
          <div className='flex flex-col w-full h-full text-slate-50 relative'>
            <div className='flex flex-col w-full h-full px-4 relative z-10 mix-blend-lighten '>
              <h1 className='max-w-[70%] text-[140px] leading-[0.76] font-bold text-slate-50'>
                <span>RETHINK</span> <br />
                <span className='text-orange-400 italic'>DEESGN</span>
              </h1>
              <h1 className='mt-10 max-w-[70%] text-[140px] leading-[0.76] font-bold'>
                RETHINK <span className=' '>BRANDGN</span>
              </h1>
              <div className='flex mt-auto w-full items-center justify-between pb-2'>
                <h5 className='text-4xl font-semibold text-slate-200'>
                  COMING SOON
                </h5>
                <h5 className='text-orange-400 italic font-semibold text-4xl'>
                  Deesgn+
                </h5>
              </div>
            </div>
            {/* <div className='absolute inset-0 w-full h-full max-w-[90%] overflow-clip ml-auto'>
              <video
                src='/home.mp4'
                autoPlay
                loop
                muted
                controls={false}
                playsInline
                className='object-cover w-full h-full'
              /> */}
            {/* <div className='absolute inset-0 z-3 backdrop-brightness-50 backdrop-blur-sm w-full h-full'></div> */}
            {/* <div className='absolute inset-0 pointer-events-none  '>
                <div className='w-full h-full bg-[radial-gradient(circle,rgba(0,0,0,0)_50%,rgba(0,0,0,0.8)_100%)] '></div>
              </div>
            </div> */}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
