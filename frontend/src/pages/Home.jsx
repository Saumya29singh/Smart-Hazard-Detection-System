import React from 'react';
import Navbar from '../components/Navbar';
import PhoneMockup from '../components/PhoneMockup';

export default function Home({ onNavigate }) {
  return (
    <div id="landing">
      <Navbar onNavigate={onNavigate} />

      <section className="hero">
        <div>
          <div className="hero-eyebrow">
            <span className="dot"></span> AI-Powered Civic Infrastructure
          </div>
          <h1>
            AI-Powered<br/>
            <span className="accent">Road Hazard Detection</span>
          </h1>
          <p className="lead">
            Report road hazards with one live photo. Our model identifies the issue, scores its severity, and routes it to the right department — instantly.
          </p>
          <div className="hero-btns">
            <button className="btn btn-primary" onClick={() => onNavigate('report')}>
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M4 8C4 6.9 4.9 6 6 6H7.5L8.5 4H15.5L16.5 6H18C19.1 6 20 6.9 20 8V17C20 18.1 19.1 19 18 19H6C4.9 19 4 18.1 4 17V8Z" stroke="white" strokeWidth="1.8"/>
                <circle cx="12" cy="12.5" r="3.2" stroke="white" strokeWidth="1.8"/>
              </svg>
              Report an Issue
            </button>
            <button className="btn btn-outline" onClick={() => onNavigate('map')}>
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M12 21C12 21 19 14.5 19 9.5C19 5.9 15.9 3 12 3C8.1 3 5 5.9 5 9.5C5 14.5 12 21 12 21Z" stroke="#0F172A" strokeWidth="1.8"/>
                <circle cx="12" cy="9.5" r="2.2" stroke="#0F172A" strokeWidth="1.8"/>
              </svg>
              View Live Map
            </button>
          </div>
        </div>

        <PhoneMockup />
      </section>

      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-item blue">
            <div className="num">12,000+</div>
            <div className="lbl">Issues Reported</div>
          </div>
          <div className="stat-item green">
            <div className="num">9,500+</div>
            <div className="lbl">Resolved</div>
          </div>
          <div className="stat-item orange">
            <div className="num">300+</div>
            <div className="lbl">Cities Covered</div>
          </div>
          <div className="stat-item purple">
            <div className="num">40+</div>
            <div className="lbl">Government Departments</div>
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="section-head">
          <div className="eyebrow">Features</div>
          <h2>Everything a citizen report needs</h2>
          <p>From capture to resolution, RoadGuard AI automates the parts that used to take weeks.</p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon" style={{ background: 'var(--primary-light)' }}>
              <svg viewBox="0 0 24 24" fill="none" width="21" height="21">
                <path d="M4 8C4 6.9 4.9 6 6 6H7.5L8.5 4H15.5L16.5 6H18C19.1 6 20 6.9 20 8V17C20 18.1 19.1 19 18 19H6C4.9 19 4 18.1 4 17V8Z" stroke="#2563EB" strokeWidth="1.8"/>
                <circle cx="12" cy="12.5" r="3.2" stroke="#2563EB" strokeWidth="1.8"/>
              </svg>
            </div>
            <h4>Live Camera Capture</h4>
            <p>Snap the hazard directly in-app — no gallery uploads, so photos and locations stay accurate.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon" style={{ background: 'var(--secondary-light)' }}>
              <svg viewBox="0 0 24 24" fill="none" width="21" height="21">
                <path d="M12 21C12 21 19 14.5 19 9.5C19 5.9 15.9 3 12 3C8.1 3 5 5.9 5 9.5C5 14.5 12 21 12 21Z" stroke="#22C55E" strokeWidth="1.8"/>
                <circle cx="12" cy="9.5" r="2.2" stroke="#22C55E" strokeWidth="1.8"/>
              </svg>
            </div>
            <h4>GPS Auto Detection</h4>
            <p>Location and timestamp attach automatically, so nothing needs to be typed in manually.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon" style={{ background: 'var(--warning-light)' }}>
              <svg viewBox="0 0 24 24" fill="none" width="21" height="21">
                <rect x="4" y="4" width="16" height="16" rx="3" stroke="#F59E0B" strokeWidth="1.8"/>
                <path d="M8 12L11 15L16 9" stroke="#F59E0B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h4>AI Hazard Detection</h4>
            <p>A vision model classifies the hazard type and scores severity in seconds.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon" style={{ background: 'var(--violet-light)' }}>
              <svg viewBox="0 0 24 24" fill="none" width="21" height="21">
                <path d="M3 21H21M5 21V7L12 3L19 7V21M9 21V13H15V21" stroke="#8B5CF6" strokeWidth="1.8" strokeLinejoin="round"/>
              </svg>
            </div>
            <h4>Department Routing</h4>
            <p>Every report is auto-forwarded to the correct civic department — no misdirected complaints.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon" style={{ background: 'var(--danger-light)' }}>
              <svg viewBox="0 0 24 24" fill="none" width="21" height="21">
                <path d="M4 19V13M10 19V9M16 19V5M4 19H20" stroke="#EF4444" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </div>
            <h4>Complaint Tracking</h4>
            <p>Follow a report from submission to repair with real-time status updates.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon" style={{ background: 'var(--primary-light)' }}>
              <svg viewBox="0 0 24 24" fill="none" width="21" height="21">
                <circle cx="12" cy="12" r="9" stroke="#2563EB" strokeWidth="1.8"/>
                <path d="M3 12H21M12 3C14.5 5.7 15.8 8.8 15.8 12C15.8 15.2 14.5 18.3 12 21C9.5 18.3 8.2 15.2 8.2 12C8.2 8.8 9.5 5.7 12 3Z" stroke="#2563EB" strokeWidth="1.8"/>
              </svg>
            </div>
            <h4>Live Public Map</h4>
            <p>Every open issue is visible on a shared map, filterable by hazard type.</p>
          </div>
        </div>
      </section>

      <section className="section" id="how-it-works" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <div className="eyebrow">Process</div>
          <h2>How it works</h2>
          <p>Five steps from photo to repair.</p>
        </div>
        <div className="steps-wrap">
          <div className="step-item"><div className="step-connector"></div><div className="step-circle">1</div><h4>Capture Photo</h4></div>
          <div className="step-item"><div className="step-connector"></div><div className="step-circle">2</div><h4>AI Detects Hazard</h4></div>
          <div className="step-item"><div className="step-connector"></div><div className="step-circle">3</div><h4>GPS Added</h4></div>
          <div className="step-item"><div className="step-connector"></div><div className="step-circle">4</div><h4>Department Assigned</h4></div>
          <div className="step-item"><div className="step-circle">5</div><h4>Track Progress</h4></div>
        </div>
      </section>

      <footer className="footer" id="footer">
        <div className="footer-inner">
          <div className="footer-logo">🛡️ RoadGuard AI</div>
          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#privacy">Privacy Policy</a>
            <a href="#contact">Contact</a>
            <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
