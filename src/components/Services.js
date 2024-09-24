import React from 'react';
//import { Link } from 'react-scroll';

//motion
import { motion } from 'framer-motion';

//icon
import { BsArrowUpRight } from 'react-icons/bs';

//variants
import { fadeIn } from '../variants';

//images
import python from '../assets/python.png';
import sql from '../assets/sql.png';
import jup from '../assets/jup.png';
import excel from '../assets/excel.png';
import powerbi from '../assets/powerbi.png';
import tableau from '../assets/tableau.png';

// services data with descriptions and work links
const services = [
    {
        id: 1,
        src: sql,
        title: "SQL",
        description: "Structured Query Language for managing relational databases.",
        style: "shadow-amber-900",
        workLink: 'https://github.com/jallenbush/SQL',
    },
    {
        id: 2,
        src: excel,
        title: "Microsoft Excel",
        description: "Spreadsheet software for data analysis, visualization, and manipulation.",
        style: "shadow-amber-900",
        workLink: "https://github.com/jallenbush/Excel"
    },
    {
        id: 3,
        src: tableau,
        title: "Tableau",
        description: "Business intelligence and analytics software for interactive data visualizations.",
        style: "shadow-amber-900",
        workLink: "https://github.com/jallenbush/Tableau"
    },
    {
        id: 4,
        src: powerbi,
        title: "Microsoft Power BI",
        description: "Powerful data visualization and business analytics tool from Microsoft.",
        style: "shadow-amber-900",
        workLink: "https://github.com/jallenbush/Power-BI"
    },
    {
        id: 5,
        src: jup,
        title: "Jupyter",
        description: "Open-source web application for interactive data science and analysis.",
        style: "shadow-amber-900",
        workLink: "https://github.com/jallenbush/Pandas-Jupyter/tree/main/Pandas-Jupyter"      
    },
    {
        id: 6,
        src: python,
        title: "Python",
        description: "High-level programming language used for general-purpose and data analysis tasks.",
        style: "shadow-amber-900",
        workLink: "https://github.com/jallenbush/Python-Jupyter-Notebook/tree/main/Python-Jupyter"
    },
];

const Services = () => {
    return (
        <section className='section pt-10 h-auto' id='services'>
            <div className='container mx-auto'>

                {/* Title and Intro Paragraph at the Top */}
                <motion.div
                    variants={fadeIn('up', 0.3)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.3 }}
                    className='text-center mb-3'
                >
                    <h2 className='h2 text-accent mb-2 pt-18'>Experience</h2>
                    <p className='max-w-[600px] mx-auto text-lg mb-2'>
                        Here, you'll find a detailed overview of the skills I've gained through my education and
                        hands-on experience. These skills empower me to solve real-world problems and make
                        data-driven decisions.
                    </p>
                </motion.div>

                {/* Services at the Bottom */}
                <motion.div
                    variants={fadeIn('up', 0.5)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <div className='w-full h-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8 px-12 sm:px-0'>
                        {services.map((service, id) => {
                            const { src, title, description, style, workLink } = service;
                            return (
                                <div
                                    key={id}
                                    className={`shadow-md hover:scale-105 duration-500 py-4 px-2 rounded-lg ${style} text-center`}
                                >
                                    <img src={src} alt={title} className="w-14 h-14 mx-auto mb-4" />
                                    <h4 className='text-lg font-semibold mb-2'>{title}</h4>
                                    <p className='text-xs mb-4'>{description}</p>
                                    <a href={workLink} target="_blank" rel="noopener noreferrer">
                                        <button className='btn btn-sm text-xs'>
                                            <BsArrowUpRight className="ml-2" />
                                        </button>
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Services;
