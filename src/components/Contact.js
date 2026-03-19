import React, { useState } from 'react';
import Navbar from './Navbar';

export default function Contact() {
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL || '';

  const [formData, setFormData] = useState({
    email: '',
    reason: ''
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSubmitted(false);
    setErrorMessage('');

    try {
      const response = await fetch(`${apiBaseUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.message || 'Unable to send request.');
      }

      setSubmitted(true);
      setFormData({ email: '', reason: '' });
    } catch (error) {
      setErrorMessage(error.message || 'Unable to send request.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #F8FAFC 0%, #E0F2FE 100%)',
      padding: '2rem'
    }}>
      <Navbar currentPage="/contact" />

      <div style={{ maxWidth: '900px', margin: '6rem auto 0', padding: '0 2rem' }}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: '800',
          color: '#0F172A',
          marginBottom: '1rem',
          textAlign: 'center'
        }}>
          Contact Us
        </h1>
        <p style={{
          fontSize: '1.1rem',
          color: '#475569',
          textAlign: 'center',
          marginBottom: '2.5rem',
          maxWidth: '620px',
          marginInline: 'auto'
        }}>
          Tell us your email and the reason for reaching out. Our team will review your request and get back to you shortly.
        </p>

        <div className="glass-medium" style={{
          maxWidth: '680px',
          margin: '0 auto',
          borderRadius: '18px',
          padding: '2rem',
          border: '1px solid rgba(8, 145, 178, 0.15)',
          boxShadow: '0 18px 35px rgba(15, 23, 42, 0.08)'
        }}>
          <form onSubmit={handleSubmit} style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem'
          }}>
            <input
              type="email"
              name="email"
              placeholder="Work Email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={loading}
              style={{
                padding: '1rem',
                borderRadius: '10px',
                border: '1px solid rgba(8, 145, 178, 0.2)',
                background: 'rgba(255, 255, 255, 0.95)',
                fontSize: '1rem',
                fontFamily: 'inherit'
              }}
            />
            <textarea
              name="reason"
              placeholder="Reason for contact"
              value={formData.reason}
              onChange={handleChange}
              required
              rows="6"
              minLength={10}
              disabled={loading}
              style={{
                padding: '1rem',
                borderRadius: '10px',
                border: '1px solid rgba(8, 145, 178, 0.2)',
                background: 'rgba(255, 255, 255, 0.95)',
                fontSize: '1rem',
                fontFamily: 'inherit',
                resize: 'vertical'
              }}
            />

            {submitted && (
              <div style={{
                background: 'rgba(22, 163, 74, 0.1)',
                border: '1px solid #16A34A',
                padding: '1rem',
                borderRadius: '8px',
                color: '#16A34A'
              }}>
                Thanks, we received your request and will get back to you soon.
              </div>
            )}

            {errorMessage && (
              <div style={{
                background: 'rgba(220, 38, 38, 0.1)',
                border: '1px solid #DC2626',
                padding: '1rem',
                borderRadius: '8px',
                color: '#B91C1C'
              }}>
                {errorMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              style={{
                background: 'linear-gradient(135deg, #0891B2, #4F46E5)',
                color: 'white',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '10px',
                fontWeight: '600',
                cursor: loading ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 8px 20px rgba(8, 145, 178, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}>
              {loading ? 'Sending...' : 'Submit Request'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
