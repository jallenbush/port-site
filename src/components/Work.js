import React from 'react';
//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';

import sqlp from '../assets/sqlp.png';
import wsp from '../assets/wsp.png';
import powerbi from '../assets/power.png';
import tableau from '../assets/tableaup.png';

//portfolio data
const work = [
  {
    id: 1,
    src: sqlp,
    title:'SQL Project',
    link: 'https://github.com/jallenbush',
  },
  {
    id: 2,
    src: powerbi,
    title:'Power BI Project',
    link: 'https://github.com/jallenbush',
  },
  {
    id: 3,
    src: wsp,
    title:'Web Scraping Project',
    link: 'https://github.com/jallenbush',
  }
  ,{
    id: 4,
    src: tableau,
    title:'Tableau Project',
    link: 'https://github.com/jallenbush',
  },
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
            className='flex-1 flex flex-col gap-y-10 mb-10 -mt-14 lg:mb-0'>
            {/* text */}
            <div>
              <h2 className='h2 leading-tight text-accent py-0'>
                <br/><br/><br/>My Latest <br /> 
                Work.
              </h2>
              <p className=' max-w-sm mb-8'>
              Beyond my academic pursuits, I have gained valuable hands-on experience through personal projects. 
              Here, you'll find a curated collection of my work that reflects my adeptness in data-driven 
              problem-solving, statistical analysis, and the implementation of innovative solutions. I invite 
              you to explore my projects, 
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
            className='flex-1 grid sm:grid-cols-1 md:grid-cols-2 gap-1 px-10 sm:px-0 mb-12 pt-10'>
            {work.map(({ id, src, title, link }) => (
            <div key={id} className="shadow-md shadow-amber-900 rounded-lg scale-90">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 w-full h-auto"
              />
              <div className="flex items-center justify-center ">
                <button className='w-full px-2 py-1 m-2 duration-200 hover:scale-105 text-md'>
                  {title}
                </button>
              <a href={link}>
                <button className="w-full px-6 py-1 m-4 duration-200 hover:scale-105 text-yellow-900">
                  <strong>Code</strong>
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
