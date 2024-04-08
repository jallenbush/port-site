import React from 'react';
import { Link } from 'react-scroll';
//motion
import { motion } from 'framer-motion';
//variants
import {fadeIn} from '../variants'; 
//images
//import css from '../assets/css.png'
//import java from '../assets/java.png'
//import bootstrap from '../assets/bootstrap.png'
//import git from '../assets/git.png'
import html from '../assets/html.png';
import python from '../assets/python.png'
import django from '../assets/django.png'
import sql from '../assets/sql.png'
import jup from '../assets/jup.png'
import excel from '../assets/excel.png'
import powerbi from '../assets/powerbi.png'
import tableau from '../assets/tableau.png'
import pandas from '../assets/pandas.png'

//services data 
const services = [
  {
    id: 1,
    src: sql,
    title: "SQL",
    style: "shadow-amber-900",
  },   
  {
    id: 2,
    src: excel,
    title: "Microsoft Excel",
    style: "shadow-amber-900",
  },
  {
    id: 3,
    src: tableau,
    title: "Tableau",
    style: "shadow-amber-900",
  },
  {
    id: 4,
    src: powerbi,
    title: "Microsoft Power BI",
    style: "shadow-amber-900",
  },
  {
    id: 5,
    src: jup,
    title: "Jupyter",
    style: "shadow-amber-900",
  },
  {
    id: 6,
    src: python,
    title: "Python",
    style: "shadow-amber-900",
  },
  {
    id: 7,
    src: pandas,
    title: "Pandas",
    style: "shadow-amber-900", 
  },
  
  {
    id: 8,
    src: html,
    title: "HTML",
    style: "shadow-amber-900",
  },
  {
    id: 9,
    src: django,
    title: "Django",
    style: "shadow-amber-900",
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
            real world challenges as a data analysis.
            </h3>
          <Link
          to='work'
          activeClass='active'
          smooth={true}
          spy={true}>
            <button className='btn btn-sm px-8'>See My Work</button>
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
            <div className='w-full h-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-10 px-12 sm:px-0 pt-9'>
              {services.map((service, id) => {
                //destructive service
                const {src, title, style } = service;
                return ( 
                  <div    
                    key={id}
                    className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`} style={{ position: 'relative', padding: '8px' }}>
                    <img src={src} alt="" className="w-20 h-20 mx-auto"></img>
                    <div className='max-w-[476px]'>
                      <h4 className='text-[18px] tracking-wider font-primary font-semibold mb-2 pt-6'>
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
