import React, { useState, useEffect } from 'react';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
// icons
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';

import sqlp from '../assets/sql_thum.png';
import wsp from '../assets/webscrap_thum.png';
import powerbi from '../assets/powerbi_thum.png';
import tableau from '../assets/tableau_thum.png';
import capstone from '../assets/ibm_cap_thum.png';
import python from '../assets/python_thum.png';

// portfolio data
const work = [
    {
        id: 1,
        src: capstone,
        title: 'IBM Data Professional Certification Capstone Project',
        description: 'Analyzed over 50,000 survey responses from data professionals to predict future trends in skills and tools within the data industry. Utilized advanced data analysis techniques to uncover key insights and forecast emerging trends shaping the data landscape.',
        link: 'https://github.com/jallenbush/IBM_Capstone_Project_',
    },
    {
        id: 2,
        src: python,
        title: 'Python Data Analysis Project',
        description: 'Utilized Python data analysis to evaluate historical stock prices and revenue for GameStop and Tesla. The project focused on comparing stock trends and assessing the relationship between stock performance and company profitability for informed financial decision-making.',
        link: 'https://github.com/jallenbush/Coursea-Python-Project-4-Data-Science-Final/blob/main/Final-Assignment.ipynb',
    },
    {
        id: 3,
        src: tableau,
        title: 'Tableau: AirBnB Project',
        description: 'Developed a Tableau dashboard using Airbnb data to analyze the correlation between the number of bedrooms and revenue sales. Visualized key insights, uncovering trends and relationships that inform property performance and pricing strategies.',
        link: 'https://github.com/jallenbush/Tableau/blob/main/Tableau/tableau_AB%26B_Dash.png',
    },
    {
        id: 4,
        src: wsp,
        title: 'Company Revenue Web Scraping Project',
        description: 'Utilized Python (BeautifulSoup, requests) to scrape and analyze 700 data points from the Wikipedia page on the top U.S. companies by revenue. Cleaned and processed the data with Pandas, then performed exploratory data analysis and visualization using Power BI, uncovering correlations between company size, revenue growth, and industry sectors.',
        link: 'https://github.com/jallenbush/Python-Jupyter-Notebook/blob/main/Web%20Scraping/Web%20Scraping%20-%20Jupyter/webScraping_python_scrapingData_withPandas.ipynb',
    },
    {
        id: 5,
        src: powerbi,
        title: 'PowerBI: Data Analysis Survey Project',
        description: 'Developed an interactive Power BI dashboard using survey data from Data Professions to analyze salary trends across various dimensions, including country, job title, and gender. Integrated diverse datasets and applied advanced visualization techniques to uncover insights, with a focus on analyzing gender pay disparities within the data industry.',
        link: 'https://github.com/jallenbush/Power-BI/blob/main/Power%20BI/Dashboard.png',
    },
    {
        id: 6,
        src: sqlp,
        title: 'Covid-19 SQL Data Manipulation Project',
        description: 'Applied intermediate SQL querying techniques in SQL Server to analyze global Covid-19 data, focusing on key metrics such as total cases, deaths, and infection rates. Conducted in-depth analyses, including fatality rate trends and virus prevalence relative to population size, uncovering regional disparities and key risk factors. Demonstrated proficiency in SQL data manipulation to derive actionable insights from large-scale datasets.',
        link: 'https://github.com/jallenbush/SQL/blob/main/SQL%20Scripts/Covid%20Data%20Querying%201.sql',
    },
];

const Work = () => {
    // Track the currently visible project
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused] = useState(false); // State to pause the slideshow

    // Move to the next slide manually or automatically
    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === work.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Move to the previous slide manually
    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? work.length - 1 : prevIndex - 1
        );
    };

    // Auto-slide functionality, only when not paused
    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                handleNext(); // Move to the next slide every 5 seconds
            }, 13000);
            return () => clearInterval(interval);
        }
    }, [isPaused]);

    return (
        <section className='section' id='work'>
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row gap-x-10'>
                    <motion.div
                        variants={fadeIn('right', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}
                        className='flex-1 flex flex-col gap-y-10 mb-10 -mt-14 lg:mb-0'
                    >
                        {/* text */}
                        <div>
                            <h2 className='h2 leading-tight text-accent py-0'>
                                <br />
                                <br />
                                <br />
                                My Latest Work
                            </h2>
                            <p className='max-w-sm mb-8'>
                                Beyond my academic background, I have developed practical,
                                hands-on experience through various personal and professional
                                projects. In this section, you'll find a curated collection of
                                my work that showcases my proficiency in data-driven
                                problem-solving and statistical analysis. I invite you to
                                explore my portfolio, dive into my accomplishments, and
                                discover the value I can contribute to your organization.
                            </p>
                            <a
                                href='https://github.com/jallenbush?tab=repositories'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <button className='btn btn-sm'>View All Projects</button>
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={fadeIn('left', 0.2)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}
                        className='flex-1 relative flex items-center justify-center px-10'
                    >
                        {/* Left arrow */}
                        <button onClick={handlePrev} className='absolute left-0 p-2'>
                            <BsFillArrowLeftCircleFill className='bg-amber-900 rounded-full text-white text-4xl' />
                        </button>

                        <div className='w-full relative flex flex-col items-center justify-center'>
                            {/* Title above the slideshow */}
                            <h3 className='text-2xl font-semibold text-yellow-900 mb-2'>
                                <strong>{work[currentIndex].title}</strong>
                            </h3>

                            {/* Slideshow with image linking to the project */}
                            <a href={work[currentIndex].link} target='_blank' rel='noopener noreferrer'>
                                <div className='shadow-md shadow-amber-900 rounded-lg scale-90'>
                                    <img
                                        src={work[currentIndex].src}
                                        alt={work[currentIndex].title}
                                        className='rounded-md duration-200 hover:scale-105 w-full h-64 object-cover cursor-pointer'
                                    />
                                </div>
                            </a>

                            {/* Description below the slideshow */}
                            <p className='text-sm text-white-400 mt-2 text-center'>
                                <strong>{work[currentIndex].description}</strong>
                            </p>
                        </div>

                        {/* Right arrow */}
                        <button onClick={handleNext} className='absolute right-0 p-2'>
                            <BsFillArrowRightCircleFill className='bg-amber-900 rounded-full text-white text-4xl' />
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Work;
