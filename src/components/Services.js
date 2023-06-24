import React from 'react';
import { Link } from 'react-scroll';
//motion
import { motion } from 'framer-motion';
//variants
import {fadeIn} from '../variants'; 
//images
import html from '../assets/html.png';
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import python from '../assets/python.png'
import django from '../assets/django.png'
import java from '../assets/java.png'
import mysql from '../assets/mysql.png'
import bootstrap from '../assets/bootstrap.png'
import git from '../assets/git.png'
import docker from '../assets/docker.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'

//services data 
const services = [
  {
    id: 1,
    src: html,
    title: "HTML",
    style: "shadow-orange-500",
  },
  {
    id: 2,
    src: css,
    title: "CSS",
    style: "shadow-blue-500",
  },
  {
    id: 3,
    src: javascript,
    title: "JavaScript",
    style: "shadow-yellow-500",
  },
  {
    id: 4,
    src: python,
    title: "Python",
    style: "shadow-blue-600",
  },
  {
    id: 5,
    src: django,
    title: "Django",
    style: "shadow-green-400",
  },
  {
    id: 6,
    src: java,
    title: "Java",
    style: "shadow-orange-500",
  },
  {
    id: 7,
    src: mysql,
    title: "MySQL",
    style: "shadow-blue-400",
  },
  {
    id: 8,
    src: bootstrap,
    title: "Bootstrap",
    style: "shadow-purple-400",
  },
  {
    id: 9,
    src: git,
    title: "Git",
    style: "shadow-red-400",
  },
  {
    id: 10,
    src: docker,
    title: "Docker",
    style: "shadow-blue-400",
  },
  {
    id: 11,
    src: react,
    title: "React",
    style: "shadow-teal-400",
  },
  {
    id: 12,
    src: tailwind,
    title: "Tailwind",
    style: "shadow-teal-400",
  },
];


const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/*text & image*/}
          <motion.div 
             variants={fadeIn('right', 0.3)}
             initial='hidden'
             whileInView={'show'}
             viewport={{once: false, amount: 0.3}}
             className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat bg-[length:300px_300px] mix-blend-lighten mt-12 lg:mb-0'>
            <h2 className='h2 text-accent mb-6 pt-16'>Welcome!</h2>
            <h3 className='h3 max-w-[455px] mb-16 text-xl '>
            Here, you'll find a comprehensive list of the skills I have acquired throughout 
            my education and hands-on experiences. These skills have equipped me to tackle a wide range of 
            real world challenges as a developer.
            </h3>
          <Link
          to='work'
          activeClass='active'
          smooth={true}
          spy={true}>
            <button className='btn btn-sm'>See My Work</button>
          </Link>
          </motion.div>
          {/*services*/}
          <motion.div 
             variants={fadeIn('down', 0.5)}
             initial='hidden'
             whileInView={'show'}
             viewport={{once: false, amount: 0.3}}
             className='flex-1'>
            {/*services list*/}
            <div className='w-full h-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 px-12 sm:px-0 pt-8'>
              {services.map((service, id) => {
                //destructive service
                const {src, title, style } = service;
                return ( 
                  <div    
                    key={id}
                    className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src} alt="" className="w-20 mx-auto"></img>
                    
                    <div className='max-w-[476px]'>
                      <h4 className='text-[18px] tracking-wider font-primary font-semibold mb-6'>
                        {title}
                      </h4>
                
                    </div>
                  </div> 
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
