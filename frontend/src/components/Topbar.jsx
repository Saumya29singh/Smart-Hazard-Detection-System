import React from 'react';

export default function Topbar({ title, searchTerm, setSearchTerm }) {
  return (
    <div className="topbar">
      <div className="welcome">{title}</div>
      <div className="top-actions">
        {setSearchTerm !== undefined && (
          <div className="search-box">
            <svg viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8"/><path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
            <input 
              type="text" 
              placeholder="Search complaints..." 
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        )}
        <button className="bell-btn">
          <span className="bell-dot"></span>
          <svg viewBox="0 0 24 24" fill="none"><path d="M18 8C18 6.4 17.4 4.9 16.2 3.8C15.1 2.6 13.6 2 12 2C10.4 2 8.9 2.6 7.8 3.8C6.6 4.9 6 6.4 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="#0F172A" strokeWidth="1.8" strokeLinejoin="round"/></svg>
        </button>
      </div>
    </div>
  );
}
