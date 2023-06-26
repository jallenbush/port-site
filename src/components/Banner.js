import React from 'react';
//immages
import Images from '../assets/avatar.svg';
//icons
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";
//type animation
import { TypeAnimation } from "react-type-animation";
//motion
import { motion } from "framer-motion";
//varients 
import { fadeIn } from "../variants";
//import link
import {Link} from 'react-scroll';

const Banner = () => {
  return( 
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12 '>
          {/* text */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 
            variants={fadeIn('up', 0.3)} 
            initial='hidden'
            whileInView={'show'} 
            viewport={{once: false, amount: 0.7}} 
            className='text-[55px] -mt-8 font-bold leading-[0.8] lg:text-[95px]'>
              JASSMON<span> ALLEN</span>
            </motion.h1>

            <motion.div 
            variants={fadeIn('up', 0.4)} 
            initial='hidden'
            whileInView={'show'} 
            viewport={{once: false, amount: 0.7}}
            className='mb-6 text-[26px] lg:text-[60px] font-secondary font-semibold uppercase loading-[1] '>
              <span className=' text-white mr-4'>I am a</span>
              <TypeAnimation 
                sequence={[
                  'Developer',
                  2000,
                  'Programmer',
                  2000,
                  'Engineer',
                  2000,
                ]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity} 
              />
            </motion.div>
            
            <motion.p
            variants={fadeIn('up', 0.5)} 
            initial='hidden'
            whileInView={'show'} 
            viewport={{once: false, amount: 0.7}} 
            className='mb-6 max-w-lg mx-auto lg:mx-0 sm:text-[15px]'> Welcome to my portfolio website! Through my years of academic 
            study and hands-on projects I have developed a solid foundation in software development, algorithm design, 
            and problem-solving. Whether you're a fellow developer, potential employer, or simply curious about my work, 
            I invite you to explore my portfolio and discover how my knowledge and creativity can contribute to solving 
            real-world challenges.
            </motion.p>

            <motion.div 
            variants={fadeIn('up', 0.6)} 
            initial='hidden'
            whileInView={'show'} 
            viewport={{once: false, amount: 0.7}}
            className='flex max-w-max gap-x-6 items-center mb-8 mx-auto lg:mx-0'>
              <Link
              to='contact'
              activeClass='active'
              smooth={true}
              spy={true}>
                <button className='btn btn-sm'>Contact Me</button>
              </Link>
              <Link
              to='work'
              activeClass='active'
              smooth={true}
              spy={true}>
                <a href='#' className='text-gradient btn-link px-4'>
                  My Portfolio 
                </a>
              </Link>
            </motion.div>
            
            {/* soicals */}
            <motion.div 
            variants={fadeIn('up', 0.7)} 
            initial='hidden'
            whileInView={'show'} 
            viewport={{once: false, amount: 0.7}}
            className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href='https://www.linkedin.com/in/jassmonallen27' target='_blank' rel='noopener noreferrer'>
                <FaLinkedin/>
              </a>
              <a href='https://github.com/jallenbush' target='_blank' rel='noopener noreferrer'>
                <FaGithub/>
              </a>
              <a href='https://discord.com/channels/@Lvrd Kunoichi#4420' target='_blank' rel='noopener noreferrer'>
                <FaDiscord/>
              </a>
            </motion.div>

          </div>
          {/*image */}
          <motion.div 
          variants={fadeIn('left', 0.5)} 
          initial='hidden'
          whileInView={'show'} 
          className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] -mt-18'>
            <img src={Images} alt='' />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
