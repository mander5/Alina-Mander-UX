import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = (event) => {
    event.stopPropagation(); // Prevent closing the menu when clicking the button
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', closeMenu);
    return () => {
      document.removeEventListener('click', closeMenu);
    };
  }, []);

  return (
    <header className='header'>
      <div className='header-container'>
        <button className='hamburger' onClick={toggleMenu}>
          ☰
        </button>
        <nav ref={menuRef} className={`nav ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/ux-research'>CV</Link>
            </li>
            <li>
              <Link to='/ux-research'>UX Research</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
