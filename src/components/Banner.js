import React from 'react';
// images
import Image from '../assets/avatar.svg'
// Icons
import { FaGithub,FaInstagram, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
// Type animation
import { TypeAnimation } from 'react-type-animation'
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants'


const Banner = () => {
  return <section id='home' className='min-h-[85vh] lg:min-h-[78vh] flex items-center'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
        {/* text */}
        <div className='flex-1 text-center font-secondary lg:text-left'>
          <motion.h1
            variants={fadeIn('up', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='text-[55px] font-bold leading-[0.8] lg:text-[100px]'><span>Mangayarkarasi</span> S</motion.h1>
          <motion.div
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='my-6 text-[36px] lg:text-[60px] font-semibold uppercase leading-[1]'>
            <span className='mr-4 text-white'>I am a</span>
            <TypeAnimation
              sequence={['Developer', 2000, 'Team Worker', 2000]}
              speed={50}
              className='text-accent'
              repeat={Infinity}
              wrapper='span'
            />
          </motion.div>
          <motion.p
            variants={fadeIn('up', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='mb-8 max-w-lg mx-auto lg:mx-0'>
            Crafting seamless experiences from pixels to databases, because in the world of coding, I'm not just a developer — I'm the full-stack architect of digital possibilities.
          </motion.p>
          {/* <motion.div
            variants={fadeIn('up', 0.6)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
            <button className='btn btn-lg'>Contact me</button>
            <a href="#" className='text-gradient btn-link'>My Portfolio</a>
          </motion.div> */}
          {/* socials */}
          <motion.div
            variants={fadeIn('up', 0.7)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
            {/* <a href="">
              <FaYoutube />
            </a> */}
            <a href="https://github.com/Mangai-23">
              <FaGithub />
            </a>
            <a href="http://www.linkedin.com/in/mangayarkarasi-s-879524224">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/mangai9575/?hl=en">
            <FaInstagram />
            </a>
            <a href="https://leetcode.com/u/Mangayarkarasi/">
              <SiLeetcode />
            </a>
          </motion.div>
        </div>
        {/* Image */}
        <motion.div
          variants={fadeIn('down', 0.5)}
          initial='hidden'
          whileInView={'show'}
          className='hidden lg:flex flex-1 max-w-[320px] lg:mx-w-[482px]'>
          <img src={Image} alt="" className='rounded-lg' />
        </motion.div>
      </div>
    </div>
  </section>;
};

export default Banner;
