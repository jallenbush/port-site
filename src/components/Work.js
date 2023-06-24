import React from 'react';
//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';
//img
import Img1 from '../assets/port-img1.png';
import Img2 from '../assets/port-img2.png';
import Img3 from '../assets/port-img3.png';
//import Img4 from '../assets/port-img4.png';

//portfolio data
const work = [
  {
    id: 1,
    src: Img1,
    title:'Movie App',
    link: 'https://github.com/jallenbush',
  },
  {
    id: 2,
    src: Img2,
    title:'Social App',
    link: 'https://github.com/jallenbush',
  },
  {
    id: 3,
    src: Img3,
    title:'2D Retro Game',
    link: 'https://github.com/jallenbush',
  },
  /*{
    id: 4,
    src: Img3,
    title:'Weather App',
    link: 'https://github.com/jallenbush',
  },*/
];

const Work = () => {
  return( 
    <section className='section' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div 
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}
            className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0 '>
            {/* text */}
            <div>
              <h2 className='h2 leading-tight text-accent py-4'>
                <br/><br/><br/>My Latest <br /> 
                Work.
              </h2>
              <p className=' max-w-sm mb-6'>
              Beyond my academic pursuits, I have gained valuable hands-on experience through personal projects. 
              Here, you'll find a curated collection of my work that reflects my technical skills, problem-solving 
              abilities, and dedication to delivering innovative solutions. I invite you to explore my projects, 
              delve into my accomplishments, and get a glimpse of the value I can bring to your organization.  
              </p>
              <a href='https://github.com/jallenbush' target='_blank' rel='noopener noreferrer'>
                <button className='btn btn-sm'>View All Projects</button>
              </a>  
            </div>
          </motion.div>
          <motion.div 
            variants={fadeIn('left', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}
            className='flex-1 grid sm:grid-cols-1 md:grid-cols-2 gap-4 px-10 sm:px-0' >
            {work.map(({ id, src, title, link }) => (
            <div key={id} className="shadow-md shadow-blue-500 rounded-lg scale-95">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center ">
                <button className='w-1/2 px-2 py-1 m-2 duration-200 hover:scale-105 text-md'>
                  {title}
                </button>
              <a href={link}>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </a>
              </div>
            </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
