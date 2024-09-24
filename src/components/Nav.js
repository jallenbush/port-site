import React from 'react';

//import icons
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatSquareText } from 'react-icons/bs';

//import link
import { Link } from 'react-scroll';

const Nav = () => {
    return (
        <nav className='fixed bottom-2 lg:bottom-4 w-full overflow-hidden z-50 cursor-pointer'>
            <div className='container mx-auto'>
                {/* nav inner */}
                <div className='w-full bg-black/20 h-[72px] backdrop-blur-2xl
        rounded-full max-w-[460px] mx-auto px-8 flex justify-between
        items-center text-2xl text-white/50 '>

                    <Link
                        to='home'
                        activeClass='active'
                        smooth={true}
                        spy={true}
                        offset={-200}
                        className='cursor-pointer w-[50px] h-[50px] flex items-center 
          justify-center hover:text-white'>
                        <BiHomeAlt />
                    </Link>

                    <Link
                        to='about'
                        activeClass='active'
                        smooth={true}
                        spy={true}
                        className='cursor-pointer w-[50px] h-[50px] flex items-center 
          justify-center hover:text-white'>
                        <BiUser />
                    </Link>

                    <Link
                        to='services'
                        activeClass='active'
                        smooth={true}
                        spy={true}
                        className='cursor-pointer w-[50px] h-[50px] flex items-center 
          justify-center hover:text-white'>
                        <BsClipboardData />
                    </Link>

                    <Link
                        to='work'
                        activeClass='active'
                        smooth={true}
                        spy={true}
                        className='cursor-pointer w-[50px] h-[50px] flex items-center 
          justify-center hover:text-white'>
                        <BsBriefcase />
                    </Link>

                    <Link
                        to='contact'
                        activeClass='active'
                        smooth={true}
                        spy={true}
                        className='cursor-pointer w-[50px] h-[50px] flex items-center 
          justify-center hover:text-white'>
                        <BsChatSquareText />
                    </Link>

                </div>
            </div>
        </nav>
    );
};

export default Nav;
