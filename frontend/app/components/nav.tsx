'use client'
import Link from 'next/link';
import { useState, useEffect} from 'react';

const Navigation = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, []);

  return (
    <main>

      <div className = 'menu-container'>
        <div className = 'menu-button-left'>
        <button className = 'menu-button'>
        <Link href="/">SkinLens</Link>
        </button>
        </div>

        <div className='menu-button-right'>
          <button onClick={toggleMenu} className="menu-button">
            menu
          </button>
          <svg width="20px" height="20px" viewBox="0 -2 20 20" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#0000FF" fillRule="evenodd" d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"></path> </g></svg>          

          {isMenuOpen && (
            <div className='menu'>
              <Link href="/about">about us</Link>
              <Link href="/contact">contact</Link>
              <Link href="/account">contact</Link>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Navigation;
