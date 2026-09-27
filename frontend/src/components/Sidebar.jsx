import React from 'react';

export default function Sidebar({ currentTab, onNavigate }) {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <div className="mark">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M12 2L3 7V12C3 16.55 6.84 20.74 12 22C17.16 20.74 21 16.55 21 12V7L12 2Z" stroke="#2563EB" strokeWidth="2"/>
          </svg>
        </div>
        RoadGuard AI
      </div>

      <button className={`side-link ${currentTab === 'dashboard' ? 'active' : ''}`} onClick={() => onNavigate('dashboard')}>
        <svg viewBox="0 0 24 24" fill="none"><path d="M3 10L12 3L21 10V20C21 20.55 20.55 21 20 21H4C3.45 21 3 20.55 3 20V10Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/></svg>
        Dashboard
      </button>

      <button className={`side-link ${currentTab === 'report' ? 'active' : ''}`} onClick={() => onNavigate('report')}>
        <svg viewBox="0 0 24 24" fill="none"><path d="M4 8C4 6.9 4.9 6 6 6H7.5L8.5 4H15.5L16.5 6H18C19.1 6 20 6.9 20 8V17C20 18.1 19.1 19 18 19H6C4.9 19 4 18.1 4 17V8Z" stroke="currentColor" strokeWidth="1.8"/><circle cx="12" cy="12.5" r="3.2" stroke="currentColor" strokeWidth="1.8"/></svg>
        Report Issue
      </button>

      <button className="side-link" onClick={() => onNavigate('dashboard')}>
        <svg viewBox="0 0 24 24" fill="none"><path d="M7 3H14L19 8V21H7V3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/><path d="M14 3V8H19" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/></svg>
        My Complaints
      </button>

      <button className={`side-link ${currentTab === 'map' ? 'active' : ''}`} onClick={() => onNavigate('map')}>
        <svg viewBox="0 0 24 24" fill="none"><path d="M12 21C12 21 19 14.5 19 9.5C19 5.9 15.9 3 12 3C8.1 3 5 5.9 5 9.5C5 14.5 12 21 12 21Z" stroke="currentColor" strokeWidth="1.8"/><circle cx="12" cy="9.5" r="2.2" stroke="currentColor" strokeWidth="1.8"/></svg>
        Live Map
      </button>

      <button className="side-link" onClick={() => {}}>
        <svg viewBox="0 0 24 24" fill="none"><path d="M18 8C18 6.4 17.4 4.9 16.2 3.8C15.1 2.6 13.6 2 12 2C10.4 2 8.9 2.6 7.8 3.8C6.6 4.9 6 6.4 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/><path d="M13.7 21C13.5 21.3 13.3 21.6 12.9 21.7C12.6 21.9 12.3 22 12 22C11.7 22 11.4 21.9 11.1 21.7C10.8 21.6 10.5 21.3 10.3 21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
        Notifications
      </button>

      <button className="side-link" onClick={() => {}}>
        <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.8"/><path d="M4 20C4 16.7 7.6 14 12 14C16.4 14 20 16.7 20 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
        Profile
      </button>

      <div className="sidebar-bottom">
        <a className="back-site" href="#landing" onClick={(e) => { e.preventDefault(); onNavigate('landing'); }}>&larr; Back to site</a>
        <div className="sidebar-user">
          <div className="avatar">SS</div>
          <div className="who">Saumya Singh<span>Citizen account</span></div>
        </div>
      </div>
    </div>
  );
}
