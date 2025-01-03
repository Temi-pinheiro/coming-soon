import { Preloader } from '../components/Preloader';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const Landing = () => {
  //   const [loading, setLoading] = useState(true);
  const master = gsap.timeline();
  useGSAP(() => {
    const comingSoon = document.querySelector('#comingsoon');
    const deesgn = document.querySelector('#deesgn');
    // Refs allow you to access DOM nodes
    // then we can animate them like so...
    const setInitialStates = () => {
      gsap.set(comingSoon, { yPercent: 110 });
      gsap.set(deesgn, { yPercent: 100 });
    };
    const preloaderAnimation = () => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
      tl.to(deesgn, {
        yPercent: 0,
        delay: 0.5,
      }).to(comingSoon, {
        yPercent: 0,
        delay: 0.6,
      });

      return tl;
    };
    master.add(setInitialStates()).add(preloaderAnimation(), 2.5);
  }, []);
  return (
    <div className='w-full h-full '>
      <Preloader timeline={master} />

      <div className='flex flex-col w-full h-full text-slate-50 relative bg-[#fff]'>
        <div className='flex flex-col w-full h-full z-[1] relative  px-4 md:px-14 '>
          {/* <h1 className='max-w-[70%] text-[140px] leading-[0.76] font-bold text-slate-50'>
            <span>RETHINK</span> <br />
            <span className='text-[#ff641f] italic'>DEESGN</span>
          </h1>
          <h1 className='mt-10 max-w-[70%] text-[140px] leading-[0.76] font-bold'>
            RETHINK <span className=' '>BRANDGN</span>
          </h1> */}
          <div className='flex flex-row-reverse mt-auto w-full items-center justify-between pb-2 overflow-hidden'>
            {/* <h5
              id='comingsoon'
              className='text-xl md:text-4xl font-semibold text-slate-950 '
            >
              See you Soon
            </h5> */}
            <a
              id='deesgn'
              href='mailto:hello@deesgn.plus'
              target='_blank'
              className='text-[#ff641f] italic font-semibold text-xl md:text-4xl block underline underline-offset-2'
            >
              Get in touch
            </a>
            <a
              id='WHO WE ARE'
              href='https://drive.google.com/file/d/13VYjz7TSTMUMNvS8PtLIbp9366xiyURM/view?usp=sharing'
              target='_blank'
              className='text-[#ff641f] italic font-semibold text-xl md:text-4xl block underline underline-offset-2'
            >
              WHO WE ARE
            </a>
            <a
              id='SOCIALS'
              href='https://x.com/Deesgnplus'
              target='_blank'
              className='text-[#ff641f] italic font-semibold text-xl md:text-4xl block underline underline-offset-2'
            >
              Deesgn+
            </a>
          </div>
        </div>
        <div className='absolute inset-0 w-[94%] h-full overflow-clip rounded-t-3xl max-md:rounded-b-3xl mt-10 max-md:mb-10 max-h-[90%] mx-auto'>
          <video
            src='/afro_promo.mp4'
            autoPlay
            loop
            muted
            controls={false}
            playsInline
            className='object-cover w-full h-full'
          />
          {/* <div className='absolute inset-0 z-3 backdrop-brightness-50 backdrop-blur-sm w-full h-full'></div> */}
          <div className='absolute inset-0 pointer-events-none  '>
            <div className='w-full h-full bg-[gradient(to-right,rgba(0,0,0,0)0%,rgba(2,6,23,0.8)80%)] '></div>
          </div>
        </div>
      </div>
    </div>
  );
};
