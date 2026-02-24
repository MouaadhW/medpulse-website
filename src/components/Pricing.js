import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

export default function Pricing() {
  const navigate = useNavigate();

  const plans = [
    {
      name: 'Regular',
      price: '$299',
      period: '/month',
      color: '#64748B',
      gradient: 'linear-gradient(135deg, #64748B, #475569)',
      features: [
        'AI Voice Receptionist',
        'Up to 500 monthly calls',
        'Basic appointment scheduling',
        'Email notifications',
        'Standard support',
        'Patient database (up to 1,000)',
        'Basic analytics dashboard'
      ]
    },
    {
      name: 'Pro',
      price: '$599',
      period: '/month',
      color: '#0891B2',
      gradient: 'linear-gradient(135deg, #0891B2, #4F46E5)',
      featured: true,
      features: [
        'Everything in Regular, plus:',
        'Up to 2,000 monthly calls',
        'Advanced AI scheduling with priorities',
        'SMS & Email notifications',
        'Priority support (24/7)',
        'Unlimited patient database',
        'Advanced analytics & reports',
        'Multi-language support',
        'Custom voice & branding',
        'API access'
      ]
    },
    {
      name: 'Ultimate',
      price: '$999',
      period: '/month',
      color: '#4F46E5',
      gradient: 'linear-gradient(135deg, #4F46E5, #8B5CF6)',
      features: [
        'Everything in Pro, plus:',
        'Unlimited monthly calls',
        'Dedicated AI model training',
        'White-label solution',
        'Custom integrations (EHR/EMR)',
        'Dedicated account manager',
        'On-premise deployment option',
        'Advanced security & compliance',
        'Custom feature development',
        'SLA guarantee (99.9% uptime)'
      ]
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #F8FAFC 0%, #E0F2FE 100%)',
      padding: '2rem'
    }}>
      <Navbar currentPage="/pricing" />

      <div style={{ maxWidth: '1300px', margin: '6rem auto 0', padding: '0 2rem' }}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: '800',
          color: '#0F172A',
          marginBottom: '1rem',
          textAlign: 'center'
        }}>
          Simple, Transparent Pricing
        </h1>
        <p style={{
          fontSize: '1.1rem',
          color: '#475569',
          textAlign: 'center',
          marginBottom: '4rem',
          maxWidth: '700px',
          margin: '0 auto 4rem'
        }}>
          Choose the plan that fits your clinic's needs
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
          marginTop: '3rem'
        }}>
          {plans.map((plan, i) => (
            <div key={i} style={{
              position: 'relative',
              transform: plan.featured ? 'scale(1.05)' : 'scale(1)',
              zIndex: plan.featured ? 10 : 0
            }}>
              {plan.featured && (
                <div style={{
                  position: 'absolute',
                  top: '-15px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: plan.gradient,
                  color: 'white',
                  padding: '0.5rem 1.5rem',
                  borderRadius: '20px',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  zIndex: 20
                }}>
                  MOST POPULAR
                </div>
              )}
              <div className="glass-medium" style={{
                padding: '2.5rem',
                borderRadius: '16px',
                border: plan.featured ? `2px solid ${plan.color}` : '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s ease',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                background: plan.featured ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.8)'
              }}
              onMouseEnter={(e) => {
                if (!plan.featured) {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                }
              }}
              onMouseLeave={(e) => {
                if (!plan.featured) {
                  e.currentTarget.style.transform = 'translateY(0)';
                }
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: plan.color,
                  marginBottom: '1rem'
                }}>
                  {plan.name}
                </h3>

                <div style={{ marginBottom: '2rem' }}>
                  <span style={{
                    fontSize: '3rem',
                    fontWeight: '800',
                    color: '#0F172A'
                  }}>
                    {plan.price}
                  </span>
                  <span style={{
                    color: '#475569',
                    marginLeft: '0.5rem'
                  }}>
                    {plan.period}
                  </span>
                </div>

                <button style={{
                  background: plan.gradient,
                  color: 'white',
                  border: 'none',
                  padding: '1rem 2rem',
                  borderRadius: '25px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  marginBottom: '2rem',
                  width: '100%'
                }}
                onClick={() => navigate('/contact')}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = `0 8px 20px rgba(${plan.color === '#0891B2' ? '8, 145, 178' : '79, 70, 229'}, 0.4)`;
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = `0 4px 12px rgba(${plan.color === '#0891B2' ? '8, 145, 178' : '79, 70, 229'}, 0.2)`;
                }}>
                  Get Started
                </button>

                <div style={{
                  flex: 1,
                  borderTop: '1px solid rgba(8, 145, 178, 0.1)',
                  paddingTop: '2rem'
                }}>
                  {plan.features.map((feature, j) => (
                    <div key={j} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      marginBottom: '1rem',
                      color: '#475569',
                      fontSize: '0.95rem',
                      fontWeight: feature.includes('Everything') ? '600' : '400'
                    }}>
                      <span style={{
                        color: plan.color,
                        fontSize: '1.2rem'
                      }}>
                        ✓
                      </span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
