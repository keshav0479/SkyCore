import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);

  const handleNav = () => setNav(prevNav => !prevNav);

  const scrollToSection = (sectionId) => {
    if (sectionId === 'Chatbot') {
      window.open('https://lesson-plan-generator-064d10.zapier.app/', '_blank');
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        handleNav();
      }
    }
  };

  const navItems = [
    { id: 1, text: 'Chatbot', sectionId: 'Chatbot' },
    { id: 2, text: 'Project Master', sectionId: 'Project master' },
    { id: 3, text: 'AI Planner', sectionId: 'Ai planner' },
    { id: 4, text: 'About Us', sectionId: 'About' },
  ];

  const socialIcons = [
    {
      id: 1,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="aliceblue" viewBox="0 0 24 24">
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
        </svg>
      ),
      link: '/#',
    },
    {
      id: 2,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="aliceblue" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.689-.072 4.948-.072 3.259 0 3.668.014 4.948.072 3.26.149 4.771 1.698 4.919 4.92.059 1.281.073 1.689.073 4.948 0 3.259-.014 3.667-.072 4.947-.196 4.354-2.617 6.78-6.979 6.98-1.281-.059-1.69-.073-4.949-.073zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.78 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.058-1.689-.072-4.948-.072zM12 14.293c-1.953 0-3.543 1.587-3.543 3.543s1.59 3.543 3.543 3.543 3.543-1.587 3.543-3.543-1.59-3.543-3.543-3.543zm0 5.838c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      link: '/#',
    },
    {
      id: 3,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="aliceblue" viewBox="0 0 24 24">
          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
        </svg>
      ),
      link: '/#',
    },
  ];

  return (
    <div className='navbar-container'>
      <div className="navbar">
        {/* Logo Container */}
        <div className="logo-container">
          <img src="./SKyCORE.svg" alt="SkyCore Logo" className="logo-image" />
        </div>

        {/* Navigation Menu Container */}
        <div className='navbar-nav-container'>
          <div className='nav-items-container'>
            <ul className='navbar-menu'>
              {navItems.map(item => (
                <li
                  key={item.id}
                  onClick={() => scrollToSection(item.sectionId)}
                  role="button"
                  aria-label={item.text}
                >
                  {item.text}
                </li>
              ))}
              <li
                onClick={() => navigate("/career")}
                role="button"
                aria-label="CareerMAP"
              >
                CareerMAP
              </li>
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        {/* <ul className='hidden md:flex social-icons'>
          {socialIcons.map(iconObj => (
            <li key={iconObj.id}>
              <a href={iconObj.link} target="_blank" rel="noopener noreferrer">
                {iconObj.icon}
              </a>
            </li>
          ))}
        </ul> */}

        {/* Mobile Navigation Icon */}
        <div onClick={handleNav} className='block md:hidden mobile-nav-toggle' aria-label="Toggle Navigation">
          {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </div>

        {/* Mobile Navigation Menu */}
        <ul className={`mobile-navigation-menu ${nav ? 'open' : ''}`}>
          {/* Mobile Logo */}
          <img src="./SKyCORE.svg" alt="SkyCore Logo" className="mobile-logo" />

          {/* Mobile Navigation Items */}
          {navItems.map(item => (
            <li
              key={item.id}
              onClick={() => scrollToSection(item.sectionId)}
              role="button"
              aria-label={item.text}
            >
              {item.text}
            </li>
          ))}
          <li
            onClick={() => navigate("/career")}
            role="button"
            aria-label="CareerMAP"
          >
            CareerMAP
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
