import React from 'react';

export default function PhoneMockup() {
  return (
    <div className="mockup-wrap">
      <div className="phone">
        <div className="phone-screen">
          <div className="phone-photo">
            <div className="phone-scanline"></div>
            <div className="phone-bbox"></div>
          </div>
          <div className="phone-info">
            <span className="tag">AI Detecting Pothole</span>
            <h4>Pothole detected</h4>
            <div className="row"><span>Severity</span><b style={{ color: '#B91C1C' }}>High</b></div>
            <div className="row"><span>Department</span><b>PWD</b></div>
            <div className="row"><span>Location</span><b>Sector 62, Noida</b></div>
          </div>
        </div>
      </div>
      <div className="float-chip c1">
        <div className="dotwrap" style={{ background: 'var(--secondary-light)' }}>✅</div>
        Duplicate check clear
      </div>
      <div className="float-chip c2">
        <div className="dotwrap" style={{ background: 'var(--primary-light)' }}>📍</div>
        GPS locked
      </div>
    </div>
  );
}
