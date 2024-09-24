import React from 'react';
//countup
import CountUp from 'react-countup'
//intersection observer hook
import { useInView } from 'react-intersection-observer'
//motion
import { motion } from 'framer-motion'
//varient
import { fadeIn } from '../variants'

import Resume from '../documents/da_res_allenjass.pdf';
import { BsDownload } from 'react-icons/bs';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-c gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0  '>
          {/* img */}
          <motion.div 
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className='flex-1 bg-about bg-contain bg-no-repeat h-[440px] mix-blend-lighten bg-top'> 
          </motion.div>
          
          {/* text */}
          <motion.div 
          variants={fadeIn('left', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className='flex-1'>
            <h2 className='h2 text-accent'>About me.</h2>
            <h3 className='h3 mb-2 text-lg'>
                          I'm a computer science graduate with a passion for using technology to create innovative 
                          solutions in data analytics. Skilled in Python, SQL, and data visualization tools like Power BI
                          and Tableau, I enjoy transforming raw data into meaningful insights that drive decision-making.   
            </h3>
            <p className='mb-4'>
                          My experience includes analyzing diverse datasets, building interactive dashboards, and
                          delivering actionable recommendations for business optimization. I'm excited to
                          share my skills, projects, and achievements with you. Feel free to explore my portfolio
                          and reach out if you'd like to connect!
            </p>
            {/* stats */}
            <div className='flex gap-x-6 lg:gap-x-10 mb-8'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={1} duration={1} /> : 
                  null}
                  +
                </div>
                <div className='font-primary text-sm tracking-[2px] '>
                  Years of <br/>
                  Experience
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={10} duration={2} /> : 
                  null}
                  +
                </div>
                <div className='font-primary text-sm tracking-[2px] '>
                  Skills & Tools <br/>
                  Acquired  
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={1} duration={1} /> : 
                  null}
                  +
                </div>
                <div className='font-primary text-sm tracking-[2px] '>
                  Certifications <br/>
                  Acquired
                </div>
              </div>
            </div>
            <div className=' flex gap-x-5 items-center place-content-end'>
                <a className='text-lg font-semibold mb-2'>Download My Resume:</a>
            <a href={Resume} className='btn-link' download={'jassmon-allen-resume'} target='_blank' rel='noopener noreferrer'>
                <button className='btn btn-sm text-xs'>
                    <BsDownload size={18 } /> {/* Replace text with the icon */}
                </button>
            </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
