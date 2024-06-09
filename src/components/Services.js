import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import image from '../assets/skills.gif'
const Services = () => {
  const skills = [
    { name: 'HTML', level: '90%' },
    { name: 'Tailwind CSS', level: '75%' },
    { name: 'Java', level: '90%' },
    { name: 'Javascript', level: '80%' },
    { name: 'React JS', level: '70%' },
    { name: 'NodeJS', level: '65%'},
  ];

  return (
    <section id='services' className='py-10'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text & img*/}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 bg-no-repeat mix-blend-lighten mb-12 lg:bg-bottom lg:mb-0'>
            <h2 className='h2 text-accent'>What I Have</h2>
            <h3 className='h3 max-w-[455px] mb-16'>I'm a Passionated Front-end Developer with these skills</h3>
            <button className='btn btn-sm'>See my work</button>
            <motion.img 
              src={image} 
              alt="Sample"
              className="mt-2 w-70 h-64 ml-24"
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
            />
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'>
            {/* skills */}
            <div className='mt-8'>
              <h3 className='h3 mb-4'>Skills</h3>
              {skills.map((skill, idx) => (
                <div key={idx} className='progress-bar-container mb-4'>
                <div className='skill-title mb-1'>{skill.name}</div>
                <div className='progress-bar bg-gray-300 h-6 rounded-full'>
                  <motion.div
                    className='progress bg-gradient-to-r from-blue-500 to-purple-600 h-6 rounded-full'
                    initial={{ width: 0 }}
                    animate={{ width: skill.level }}
                    transition={{ duration: 2.0 }}
                  >
                    {/* <span className='progress-text text-white text-base font-bold ml-2'>{skill.level}</span> */}
                  </motion.div>
                </div>
              </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
