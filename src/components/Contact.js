import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { IoCall, IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
const Contact = () => {
  return (
    <section id='contact' className='py-16 lg:section'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'>
            <div>
              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Get in touch</h4>
              <h2 className='text-[45px] lg:text-[70px] leading-none mb-10'>Let's work
                <br />
                together
              </h2>
              <div>
                <div className='flex'>
                  <MdEmail className='pb-2 w-10 h-10'/>
                  <a href="/" className='text-[20px] mx-4'>mangaisuresh2923@gmail.com <span className='text-[30px] pt-2'>| </span>2115032@nec.edu.in</a>      
                </div>
                <div className='flex'>
                  <IoCall className='pb-2 w-11 h-11 pt-2'/>
                  <a href="/" className='text-[20px] mx-4 mt-2'>+91-8668070568</a>      
                </div>
                <div className='flex'>
                  <IoLocationSharp className='pb-2 w-11 h-11 pt-2'/>
                  <a href="/" className='text-[20px] mx-4 mt-2'>Tirunelveli, India</a>      
                </div>
              </div>
            {/* <a href="https://github.com/Mangai-23" >
                  <FaGithub className='pb-4 w-10 h-10 mt-2'/>
                </a> */}
            </div>
          </motion.div>
          {/* form */}
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'>
            <input className='bg-transparent border-b py-3 outline-none placeholder:text-white focus:border-accent transition-all' type="text" placeholder='Your name' />
            <input className='bg-transparent border-b py-3 outline-none placeholder:text-white focus:border-accent transition-all' type="email" placeholder='Your email' />
            <textarea className='bg-transparent border-b py-10 outline-none placeholder:text-white focus:border-accent transition-all 
            resize-none mb-10
            'placeholder='Your message'
            ></textarea>
            <button className='btn btn-lg'>Send message</button>
          </motion.div>
        </div>
      </div>
    </section>);
};

export default Contact;
