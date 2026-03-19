import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar({ currentPage }) {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Pricing', path: '/pricing' }
  ];

  return (
    <nav className="navbar-shell">
      <div
        onClick={() => {
          navigate('/');
          setIsMenuOpen(false);
        }}
        className="navbar-logo"
      >
        <span className="navbar-logo-dot" />
        MedPulse
      </div>

      <button
        type="button"
        aria-label="Toggle menu"
        className="navbar-menu-button"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        Menu
      </button>

      <div className={`navbar-links ${isMenuOpen ? 'is-open' : ''}`}>
        {navItems.map(item => (
          <a
            key={item.path}
            href={item.path}
            onClick={(e) => {
              e.preventDefault();
              navigate(item.path);
              setIsMenuOpen(false);
            }}
            className={`navbar-link ${currentPage === item.path ? 'is-active' : ''}`}
          >
            {item.label}
          </a>
        ))}
        <button
          onClick={() => {
            navigate('/contact');
            setIsMenuOpen(false);
          }}
          className="navbar-cta"
        >
          Contact Us
        </button>
      </div>
    </nav>
  );
}
