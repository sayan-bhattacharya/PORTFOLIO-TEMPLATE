// src/components/About.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';  // This should work now

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-jetBrains font-bold text-center tracking-tight">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const WaitlistForm = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
  };

  return (
    <motion.div
      variants={fadeIn('left', 'spring', 0.3, 0.75)}
      className="w-[350px] bg-white/90 p-6 rounded-lg">
      <h3 className="text-black font-jetBrains text-[20px] mb-6 tracking-tighter">Dialmate AI</h3>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded-lg bg-[#0f0f0f] text-white/70 border border-[#333333] focus:outline-none focus:border-white/50 font-jetBrains text-[14px] placeholder:text-white/30"
            required
          />
          <button
            type="submit"
            className="w-full py-2 px-4 bg-black text-white rounded-lg hover:bg-black/90 transition-colors duration-300 font-jetBrains text-[14px]">
            Join Waitlist
          </button>
        </form>
      ) : (
        <div className="text-black font-jetBrains text-[14px] text-center">
          Thanks for joining! We'll keep you updated.
        </div>
      )}
    </motion.div>
  );
};

// Add the new NewtonsCradle component
const NewtonsCradle = () => {
  return (
    <motion.div className="flex justify-center items-center h-[180px] mt-4">
      <div className="relative w-[250px] h-[180px] transform scale-[0.85]">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute left-1/2 top-0 w-[24px] h-[180px] origin-top"
            style={{
              transform: `translateX(${(i - 2) * 26}px)`,
            }}
            animate={i === 0 ? {
              rotate: ['-30deg', '0deg', '-30deg'],
            } : i === 4 ? {
              rotate: ['0deg', '30deg', '0deg'],
            } : {}}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i === 0 ? 0 : 0.9,
              repeatDelay: 0.2
            }}
          >
            <div className="absolute bottom-0 w-[24px] h-[24px] rounded-full bg-black/90 shadow-lg" />
            <div className="absolute top-0 left-1/2 w-[1.5px] h-full bg-black/80 transform -translate-x-1/2" />
          </motion.div>
        ))}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-black/80" />
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className="text-eerieBlack font-jetBrains text-[18px] tracking-tight">Introduction</p>
        <h2 className="text-eerieBlack font-jetBrains text-[35px] tracking-tighter">Overview.</h2>
      </motion.div>

      <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mt-5">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="text-taupe text-[18px] max-w-2xl leading-[30px] font-jetBrains tracking-wide">
          Hi, I'm Sayan Bhattacharya, a Machine Learning Engineer with a strong background in Communications and Signal Processing.
          I'm a Machine Learning Engineer with 3+ years of expertise in production ML systems and deep learning, combining theoretical foundations from TU Ilmenau with practical implementation experience. I've driven significant results, including 30% cost reduction through ML pipelines and 87% optimization in predictive maintenance solutions.
          Proficient in Python, PyTorch, and major cloud platforms, I leverage my background in Communications and Signal Processing to bridge theory and application. I specialize in GenAI and RAG systems, focusing on building efficient, scalable ML solutions that deliver measurable impact.
        </motion.p>

        <div className="flex flex-col">
          <WaitlistForm />
          <NewtonsCradle />
        </div>
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};
export default SectionWrapper(About, 'about');