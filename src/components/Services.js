import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { FaHtml5, FaJava, FaJs, FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import { SiMysql, SiC, SiMongodb } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';

const Services = () => {
  const skills = [
    { name: 'React JS', logo: <FaReact size={40} className="text-blue-400" /> },
    { name: 'JavaScript', logo: <FaJs size={40} className="text-yellow-500" /> },
    { name: 'HTML', logo: <FaHtml5 size={40} className="text-orange-500" /> },
    {name: 'Tailwind CSS', logo:<SiTailwindcss size={40} className="text-blue-400" /> },
    { name: 'Java', logo: <FaJava size={40} className="text-red-600" /> },
    { name: 'NodeJS', logo: <FaNodeJs size={40} className="text-green-600" /> },
    { name: 'GitHub', logo: <FaGithub size={40} className="text-black" /> },
    { name: 'MySQL', logo: <SiMysql size={44} className="text-blue-700" /> },
    { name: 'C Programming', logo: <SiC size={40} className="text-blue-600" /> },
    { name: 'MongoDB', logo: <SiMongodb size={40} className="text-green-500" /> },
  ];

  return (
    <section id='services' className='py-10'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 bg-no-repeat mix-blend-lighten mb-12 lg:bg-bottom lg:mb-0'>
            <h2 className='h2 text-accent'>What I Have</h2>
            <h3 className='h3 max-w-[455px] mb-16'>I'm a Passionate Front-end Developer with these skills</h3>
            <button className='btn btn-sm'>See my work</button>

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
              <ul className='grid grid-cols-2 gap-4'>
                {skills.map((skill, idx) => (
                  <li 
                    key={idx} 
                    className='bg-gray-200 p-2 rounded-lg text-center flex flex-col items-center justify-center  hover:shadow-lg transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 transform hover:scale-105' 
                    tabIndex="0"
                    style={{ boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 0px' }}>
                    {skill.logo}
                    <div className="mt-2 text-center text-black">{skill.name}</div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;

