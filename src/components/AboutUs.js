import React from 'react';
import Navbar from './Navbar';

export default function AboutUs() {
  const businessPoints = [
    {
      title: 'Lower Operating Costs',
      desc: 'Automates repetitive front-desk tasks, helping clinics reduce administrative workload and staffing pressure.'
    },
    {
      title: 'Higher Patient Conversion',
      desc: 'Captures and qualifies incoming requests quickly so fewer potential patients are lost after hours.'
    },
    {
      title: 'Scalable Growth',
      desc: 'Supports higher call and appointment volume without sacrificing consistency as your practice expands.'
    }
  ];

  const customerBenefits = [
    'Faster appointment booking with less waiting',
    'Reliable responses at any time of day',
    'Clear follow-up and reduced communication gaps',
    'Consistent service quality across every interaction'
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #F8FAFC 0%, #DFF4FF 45%, #EDE9FE 100%)',
      padding: '2rem'
    }}>
      <Navbar currentPage="/about" />

      <div className="glass-medium" style={{
        maxWidth: '1200px',
        margin: '6rem auto 0',
        padding: '4rem',
        borderRadius: '24px',
        boxShadow: '0 24px 40px rgba(15, 23, 42, 0.14)',
        border: '1px solid rgba(79, 70, 229, 0.15)'
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          background: 'linear-gradient(135deg, rgba(8, 145, 178, 0.18), rgba(79, 70, 229, 0.18))',
          color: '#0F172A',
          border: '1px solid rgba(79, 70, 229, 0.25)',
          borderRadius: '999px',
          padding: '0.45rem 1rem',
          fontSize: '0.85rem',
          fontWeight: '700',
          marginBottom: '1.25rem'
        }}>
          Healthcare Operations Platform
        </div>

        <h1 style={{
          fontSize: '3rem',
          fontWeight: '800',
          color: '#0F172A',
          marginBottom: '1.25rem'
        }}>
          About MedPulse
        </h1>

        <p style={{
          fontSize: '1.1rem',
          color: '#475569',
          lineHeight: '1.9',
          marginBottom: '1.5rem',
          maxWidth: '900px'
        }}>
          MedPulse is a healthcare operations platform built to improve how clinics manage patient communication. We help medical teams handle appointment demand, inbound questions, and front-desk workflows with greater speed and consistency.
        </p>

        <p style={{
          fontSize: '1.05rem',
          color: '#475569',
          lineHeight: '1.85',
          marginBottom: '2rem',
          maxWidth: '900px'
        }}>
          From a business perspective, our goal is simple: reduce avoidable overhead, protect revenue opportunities, and improve patient satisfaction. MedPulse enables providers to run a more efficient reception operation while keeping service quality high as the organization grows.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5rem',
          marginTop: '2.5rem'
        }}>
          {businessPoints.map((point, index) => (
            <div key={index} style={{
              background: 'linear-gradient(145deg, rgba(8, 145, 178, 0.12), rgba(79, 70, 229, 0.08), rgba(255, 255, 255, 0.95))',
              borderRadius: '14px',
              padding: '1.75rem',
              border: '1px solid rgba(79, 70, 229, 0.22)',
              boxShadow: '0 14px 24px rgba(15, 23, 42, 0.08)'
            }}>
              <h2 style={{
                fontSize: '1.15rem',
                fontWeight: '700',
                color: '#1E1B4B',
                marginBottom: '0.75rem'
              }}>
                {point.title}
              </h2>
              <p style={{ color: '#475569', lineHeight: '1.7' }}>
                {point.desc}
              </p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '4rem' }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '700',
            color: '#0F172A',
            marginBottom: '2rem'
          }}>
            Benefits for Your Patients
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1rem'
          }}>
            {customerBenefits.map((benefit, i) => (
              <div key={i} style={{
                padding: '1.25rem 1.5rem',
                background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.1), rgba(8, 145, 178, 0.08), rgba(255, 255, 255, 0.9))',
                borderRadius: '12px',
                border: '1px solid rgba(8, 145, 178, 0.24)',
                color: '#334155',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}>
                <span style={{ color: '#4F46E5', fontWeight: '700' }}>•</span>
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
