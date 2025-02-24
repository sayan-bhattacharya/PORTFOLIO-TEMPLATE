  "use client";
  import Image from 'next/image';
  import { motion } from 'framer-motion';
  import { styles } from '../styles';

  const Hero = () => {
    const scrollToAbout = (e) => {
      e.preventDefault();
      const aboutSection = document.querySelector('#about');
      if (aboutSection) {
        aboutSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    };

    return (
      <>
        {/* Main background with hero gradient and world map */}
        <div className="absolute top-0 left-0 z-0 h-screen w-full bg-hero sm:bg-hero-mobile">
          <Image
            src="/images/world-map.png"
            alt="world map"
            className="object-cover opacity-20 mix-blend-overlay"
            fill
            priority
            quality={100}
          />
        </div>

        <section className="relative h-screen w-full">
          <div className="absolute inset-0 flex flex-row justify-between items-center">
            {/* Left content section */}
            <div className="flex-1 pl-16 sm:pl-24 z-10">
              <h1 className="text-eerieBlack font-jetBrains text-[42px] sm:text-[52px] tracking-tighter">
                Hi, I&apos;m{' '}
                <span className="sm:text-battleGray sm:text-[75px] 
                  text-eerieBlack text-[45px] font-spaceMono
                  font-extrabold uppercase tracking-tight">
                  Sayan
                </span>
              </h1>
              <div className="mt-6 max-w-[600px]">
                <p className="text-eerieBlack font-jetBrains text-[24px] sm:text-[28px] leading-relaxed">
                  Hello, I&apos;m Sayan Bhattacharya - a Machine Learning Engineer transforming ideas into intelligent solutions.
                  Specializing in production ML systems and deep learning.
                </p>
                <p className="mt-4 text-eerieBlack font-jetBrains text-[24px] sm:text-[28px] leading-relaxed">
                  Building scalable AI solutions
                  with MLOps that make an impact.
                </p>
              </div>
            </div>

            {/* Right image section */}
            <div className="flex-1 relative h-full">
              <Image
                src="/images/shaq.png"
                alt="profile"
                width={400}  // reduced size
                height={600} // reduced size
                className="absolute bottom-0 right-0 object-contain
                  sm:ml-[20vw] md:ml-[25vw] lg:ml-[30vw]
                  sm:h-[65vh] md:h-[60vh] xl:h-[65vh]"
                priority
              />
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute xs:bottom-10 bottom-32 w-full 
            flex justify-center items-center z-10">
            <button
              onClick={scrollToAbout}
              className="cursor-pointer focus:outline-none"
              aria-label="Scroll to About section">
              <div className="w-[35px] h-[64px] rounded-3xl border-4 
                border-french border-dim flex
                justify-center items-start p-2 hover:border-opacity-70 
                transition-all duration-300">
                <motion.div
                  animate={{
                    y: [0, 24, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: 'loop',
                  }}
                  className="w-3 h-3 rounded-full bg-taupe mb-1"
                />
              </div>
            </button>
          </div>
        </section>
      </>
    );
  };

  export default Hero;