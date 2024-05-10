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

      <div className = 'menu-container'>
        <div className = 'menu-button-left'>
        <button className = 'menu-button'>
        <Link href="/home">SkinLens</Link>
        </button>
        </div>

        <div className='menu-button-right'>
          <button onClick={toggleMenu} className="menu-button">
            menu
          </button>

          {isMenuOpen && (
            <div className='menu'>
              <Link href="/diagnosis">My Diagnosis</Link>
              <Link href="/doctors/contact">Contact</Link>
              <Link href="/log/medication">Log</Link>
            </div>
          )}
        </div>
      </div>

  );
};

export default Navigation;
