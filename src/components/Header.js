import React from 'react';
//images
import Logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className='py-3 h-[85px]'>
      <div className='container mx-auto'>
        <div className='flex -mt-16 justify-between items-center'>
          {/* logo */}
          <a href='#'>
            <img className='py-16 h-[650px]' src={Logo} alt=''/>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
