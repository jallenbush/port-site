import React from 'react';
//images
import Logo from "../assets/newDAlogo.png";

const Header = () => {
  return (
    <header className='py-3 h-[85px]'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/* logo */}
          <a href='#'>
            <img className='py-4 -mt-6 h-[450px]' src={Logo} alt=''/>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
