import React from 'react';

export default function Navbar({ onNavigate }) {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <div className="mark">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M12 2L3 7V12C3 16.55 6.84 20.74 12 22C17.16 20.74 21 16.55 21 12V7L12 2Z" stroke="white" strokeWidth="1.8" strokeLinejoin="round"/>
            <path d="M9 12L11 14L15 9.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        RoadGuard AI
      </div>
      <div className="nav-links">
        <a href="#landing" onClick={() => onNavigate('landing')}>Home</a>
        <a href="#about">About</a>
        <a href="#how-it-works">How It Works</a>
        <a href="#map" onClick={(e) => { e.preventDefault(); onNavigate('map'); }}>Live Map</a>
        <a href="#footer">Contact</a>
      </div>
      <div className="nav-actions">
        <a className="nav-login" href="#dashboard" onClick={(e) => { e.preventDefault(); onNavigate('dashboard'); }}>Login</a>
        <button className="btn btn-primary btn-sm" onClick={() => onNavigate('report')}>Report Now</button>
      </div>
    </nav>
  );
}
