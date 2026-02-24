import React from 'react';
import Navbar from './Navbar';

export default function Services() {
  const productVideoPath = '/videos/medpulse-video.mp4';

  const services = [
    {
      icon: '🎙️',
      title: 'Voice Reception',
      desc: 'AI-powered voice system that handles patient calls, schedules appointments, and answers common questions 24/7.'
    },
    {
      icon: '📅',
      title: 'Smart Scheduling',
      desc: 'Intelligent appointment scheduling that learns your clinic patterns and optimizes doctor availability.'
    },
    {
      icon: '🏥',
      title: 'Medical Knowledge',
      desc: 'Built-in medical database trained on MIMIC-III data for accurate triage and patient guidance.'
    },
    {
      icon: '🌍',
      title: 'Multi-Language',
      desc: 'Support for English, French, Spanish, and more to serve diverse patient populations.'
    },
    {
      icon: '🔒',
      title: 'HIPAA Compliant',
      desc: 'Enterprise-grade encryption and security compliance for all patient data.'
    },
    {
      icon: '⚡',
      title: 'Real-time Analytics',
      desc: 'Dashboard with call logs, patient insights, and performance metrics.'
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #F8FAFC 0%, #E0F2FE 100%)',
      padding: '2rem'
    }}>
      <Navbar currentPage="/services" />

      <div style={{ maxWidth: '1200px', margin: '6rem auto 0', padding: '0 2rem' }}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: '800',
          color: '#0F172A',
          marginBottom: '1rem',
          textAlign: 'center'
        }}>
          Our Services
        </h1>
        <p style={{
          fontSize: '1.1rem',
          color: '#475569',
          textAlign: 'center',
          marginBottom: '4rem',
          maxWidth: '700px',
          margin: '0 auto 4rem'
        }}>
          Comprehensive AI solutions designed for modern healthcare facilities
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginTop: '3rem'
        }}>
          {services.map((service, i) => (
            <div key={i} className="glass-medium" style={{
              padding: '2rem',
              borderRadius: '16px',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(8, 145, 178, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.08)';
            }}>
              <div style={{
                fontSize: '3rem',
                marginBottom: '1rem'
              }}>
                {service.icon}
              </div>
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: '700',
                color: '#0F172A',
                marginBottom: '0.5rem'
              }}>
                {service.title}
              </h3>
              <p style={{
                color: '#475569',
                lineHeight: '1.6',
                fontSize: '0.95rem'
              }}>
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="glass-medium" style={{
          borderRadius: '18px',
          padding: '1.5rem',
          marginTop: '3rem',
          border: '1px solid rgba(8, 145, 178, 0.2)'
        }}>
          <p style={{
            marginBottom: '1rem',
            color: '#0F172A',
            fontSize: '1.08rem',
            fontWeight: '700',
            lineHeight: '1.6',
            textAlign: 'center',
            background: 'rgba(8, 145, 178, 0.12)',
            border: '1px solid rgba(8, 145, 178, 0.25)',
            borderRadius: '10px',
            padding: '0.9rem 1rem'
          }}>
            Product Walkthrough: see how MedPulse handles incoming calls, guides patients, and manages appointments more efficiently.
          </p>
          <video
            controls
            style={{
              width: '100%',
              aspectRatio: '16 / 9',
              maxHeight: '460px',
              objectFit: 'contain',
              borderRadius: '12px',
              display: 'block',
              background: '#0F172A'
            }}
          >
            <source src={productVideoPath} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}
