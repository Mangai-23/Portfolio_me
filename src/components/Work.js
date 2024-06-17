import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import img1 from '../assets/portfolio-img1.png'
import img2 from '../assets/portfolio-img2.png'
import img3 from '../assets/portfolio-img3.png'

const Work = () => {
  return (
    <section id='work' className='py-10'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            {/* text */}
            <h2 className='h2 leading-tight text-accent'>My Latest <br /> Work</h2>
            <p className='max-w-lg mb-16 lg:mb-0 -mt-12'>Explore the Projects part of my portfolio to see three amazing creations made with Tailwind CSS and React.js. Every project showcases my skill at creating user-friendly interfaces and improving user experiences. These dynamic solutions, which simplify event planning, optimize online link sharing, and provide priceless financial insights, demonstrate my dedication to web development innovation and excellence.</p>
            <div className='-mt-8'><button className='btn btn-sm'>
              <span><a href="https://github.com/Mangai-23?tab=repositories">View all projects</a></span>
            </button></div>
          </motion.div>
          {/* image */}
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-10 mt-12'>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>
              </div>
              {/* img */}
              <img src={img2} alt="" className='group-hover:scale-100 h-80 transition-all duration-500' />
              {/* pre-title */}
              <div className='absolute bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>UI/UX Design</span>
              </div>
              {/* title */}
              <div className='absolute bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'><a href="https://github.com/Mangai-23/Event_Organising_Portal">Event Organising Portal</a></span>
              </div>
            </div>
          </motion.div>
          {/* image */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-10'>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>
              </div>
              {/* img */} 
              <img src={img1} alt="" className='group-hover:scale-100 h-80  w-full transition-all duration-500' />
              {/* pre-title */}
              <div className='absolute bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>MERN Stack</span>
              </div>
              {/* title */}
              <div className='absolute bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'><a href="https://github.com/Mangai-23/LinkList">LinkList</a></span>
              </div>
            </div>
          </motion.div>
          {/* image */}
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-10'>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>
              </div>
              {/* img */}
              <img src={img3} alt="" className='group-hover:scale-100 h-80 w-full transition-all duration-500' />
              {/* pre-title */}
              <div className='absolute bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Web Development</span>
              </div>
              {/* title */}
              <div className='absolute bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'><a href="https://github.com/Mangai-23/Net-Profit-Margin-Calculator">Net Profit Margin Calc</a></span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section >);
};

export default Work;
