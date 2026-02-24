import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar({ currentPage }) {
  const navigate = useNavigate();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Pricing', path: '/pricing' }
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: '1.5rem',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 1000,
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderRadius: '50px',
      padding: '1.25rem 3rem',
      display: 'flex',
      alignItems: 'center',
      gap: '3rem',
      minWidth: '900px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
      border: '1px solid rgba(8, 145, 178, 0.2)',
    }}>
      {/* Logo */}
      <div 
        onClick={() => navigate('/')}
        style={{
          fontSize: '1.4rem',
          fontWeight: '700',
          color: '#0891B2',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          cursor: 'pointer',
          whiteSpace: 'nowrap'
        }}>
        <span style={{
          width: '10px',
          height: '10px',
          background: '#0891B2',
          borderRadius: '50%',
          boxShadow: '0 0 10px rgba(8, 145, 178, 0.5)'
        }}></span>
        MedPulse
      </div>

      {/* Navigation Links */}
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', flex: 1, justifyContent: 'center' }}>
        {navItems.map(item => (
          <a
            key={item.path}
            href={item.path}
            onClick={(e) => {
              e.preventDefault();
              navigate(item.path);
            }}
            style={{
              color: currentPage === item.path ? '#0891B2' : '#475569',
              textDecoration: 'none',
              fontSize: '1rem',
              fontWeight: currentPage === item.path ? '600' : '500',
              transition: 'all 0.2s ease',
              padding: '0.5rem 1.25rem',
              borderRadius: '20px',
              background: currentPage === item.path ? 'rgba(8, 145, 178, 0.1)' : 'transparent',
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
            onMouseEnter={(e) => {
              if (currentPage !== item.path) {
                e.target.style.color = '#0891B2';
                e.target.style.background = 'rgba(8, 145, 178, 0.1)';
              }
            }}
            onMouseLeave={(e) => {
              if (currentPage !== item.path) {
                e.target.style.color = '#475569';
                e.target.style.background = 'transparent';
              }
            }}>
            {item.label}
          </a>
        ))}
      </div>

      {/* CTA Button */}
      <button
        onClick={() => navigate('/contact')}
        style={{
          background: 'linear-gradient(135deg, #0891B2, #4F46E5)',
          color: 'white',
          border: 'none',
          padding: '0.75rem 2rem',
          borderRadius: '25px',
          fontSize: '1rem',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          boxShadow: '0 4px 12px rgba(8, 145, 178, 0.3)',
          whiteSpace: 'nowrap'
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'translateY(-2px)';
          e.target.style.boxShadow = '0 6px 20px rgba(8, 145, 178, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = '0 4px 12px rgba(8, 145, 178, 0.3)';
        }}>
        Contact Us
      </button>
    </nav>
  );
}
