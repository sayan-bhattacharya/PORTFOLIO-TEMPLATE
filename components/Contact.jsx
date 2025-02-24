"use client";
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import Image from 'next/image';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_dck0r84',
        'template_wgcy2cb',
        {
          from_name: form.name,
          to_name: 'thedigitalmindmeldpodcast',
          from_email: form.email,
          to_email: 'thedigitalmindmeldpodcast@gmail.com',
          message: form.message,
        },
        '4dpdj0OfkrlbmDuxFy'
      )
      .then(
        () => {
          setLoading(false);
          alert('Thank you. I will get back to you as soon as possible.');
          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          console.error('EmailJS Error:', error);
          alert('Something went wrong. Please try again.');
        }
      );
  };

  return (
    <div className="-mt-[8rem] xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-jet p-8 rounded-2xl"
      >
        <p className="text-[18px] tracking-tight text-timberWolf uppercase">Get in touch</p>
        <h3 className="text-[45px] tracking-tighter font-jetBrains text-timberWolf">Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8 font-jetBrains"
        >
          <label className="flex flex-col">
            <span className="text-timberWolf text-[16px] font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-eerieBlack py-4 px-6 placeholder:text-taupe text-timberWolf rounded-lg outline-none border-none font-medium text-[16px]"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-timberWolf text-[16px] font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-eerieBlack py-4 px-6 placeholder:text-taupe text-timberWolf rounded-lg outline-none border-none font-medium text-[16px]"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-timberWolf text-[16px] font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              required
              value={form.message}
              onChange={handleChange}
              placeholder="What's your message?"
              className="bg-eerieBlack py-4 px-6 placeholder:text-taupe text-timberWolf rounded-lg outline-none border-none font-medium text-[16px] resize-none"
            />
          </label>

          <button
            type="submit"
            className="live-demo flex justify-center sm:gap-4 gap-3 text-[18px] text-timberWolf font-bold font-jetBrains items-center py-5 whitespace-nowrap sm:w-[140px] sm:h-[55px] w-[120px] h-[50px] rounded-[10px] bg-night hover:bg-battleGray hover:text-eerieBlack transition duration-[0.2s] ease-in-out"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {loading ? 'Sending...' : 'Send'}
            <div className="relative w-[26px] h-[26px]">
              <Image
                src={isHovered ? '/icons/sendHover.png' : '/icons/send.png'}
                alt="send"
                fill
                sizes="26px"
                className="object-contain"
                priority
              />
            </div>
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');