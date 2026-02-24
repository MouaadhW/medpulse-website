import React from 'react';
import Spline from '@splinetool/react-spline';
import Navbar from './Navbar';

export default function LandingPage() {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      position: 'fixed',
      top: 0,
      left: 0,
      overflow: 'hidden',
      margin: 0,
      padding: 0
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden'
      }}>
        <Spline scene="https://prod.spline.design/lgELbXdK0VuKc6Ul/scene.splinecode" />
      </div>

      <Navbar currentPage="/" />
    </div>
  );
}
