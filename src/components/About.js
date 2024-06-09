import React from 'react';
// import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import resume from '../assets/Mangai_Resume.pdf'
const About = () => { 
  const [ref, inView] = useInView({
    threshold: 0.5,
  })
  return <section id='about' className='' ref={ref}>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center
      lg:gap-x-20 lg:gap-y-0 h-screen'>
        {/* img */}
        <motion.div
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1 bg-about bg-cover bg-no-repeat h-[550px] mix-blend-lighten bg-top rounded-xl'>
        </motion.div>
        <motion.div
          variants={fadeIn('left', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1'>
          <h2 className='h2 text-accent'>About me</h2>
          <h3 className='h3 mb-4'>I'm a Front-end Developer </h3>
          <p className='mb-6'>Currently pursuing a Bachelor's degree in Information Technology at National Engineering College, along with a minor degree in Data Science. As a passionate full-stack developer, I specialize in front-end technologies such as <b>ReactJS, HTML, Tailwind CSS, and JavaScript</b>. Additionally, I have a foundational knowledge of backend frameworks like Node.js. Currently, I am broadening my expertise into blockchain technology to enhance security. I am excited about exploring new opportunities and tackling new challenges!</p>
          {/* stats */}
          {/* <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ?
                  <CountUp start={0} end={5} duration={3} />
                  :
                  null
                }
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Years of <br />
                Experience
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ?
                  <CountUp start={0} end={10} duration={3} />
                  :
                  null
                }
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Projects <br />
                Completed
              </div>
            </div>
            {/* <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ?
                  <CountUp start={0} end={6} duration={3} />
                  :
                  null
                }K+
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Satisfied <br />
                Clients
              </div>
            </div> 
          </div> */}
          <div className='flex gap-x-8 items-center'>
            <button className='btn btn-lg'>
              <span>
                <a target='_blank' href={resume}>Resume</a>
              </span>
            </button>
            <a href="/" className='text-gradient btn-link'>My Portfolio</a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>;
};

export default About;
