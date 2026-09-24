import React, { useState, useRef } from 'react';
import Topbar from '../components/Topbar';
import { generateRandomDetection } from '../services/aiScanner';

export default function ReportIssue({ onAddComplaint, onNavigate }) {
  const [photo, setPhoto] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const [scanText, setScanText] = useState('Capture a photo to run AI hazard detection.');
  const [detection, setDetection] = useState(null);
  const [showBbox, setShowBbox] = useState(false);
  const [description, setDescription] = useState('');
  const fileInputRef = useRef(null);

  const handlePhotoSelect = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      setPhoto(event.target.result);
      setDetection(null);
      setShowBbox(false);
      setIsScanning(true);
      setScanText('Analyzing photo…');

      const result = generateRandomDetection();

      setTimeout(() => {
        setShowBbox(true);
      }, 900);

      setTimeout(() => {
        setIsScanning(false);
        setDetection(result);
      }, 1700);
    };
    reader.readAsDataURL(file);
  };

  const handleReset = () => {
    setPhoto(null);
    setDetection(null);
    setShowBbox(false);
    setIsScanning(false);
    setScanText('Capture a photo to run AI hazard detection.');
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleSubmit = () => {
    if (!detection) return;
    const newComplaint = {
      id: Math.floor(2000 + Math.random() * 900),
      issue: detection.hazard,
      status: 'Pending',
      location: 'Sector 62, Noida',
      date: 'Just now',
      photo: photo
    };
    onAddComplaint(newComplaint);
    onNavigate('dashboard');
  };

  return (
    <div className="app-page active">
      <Topbar title="Report Issue" />

      <div className="content">
        <div className="report-layout">
          <div>
            <div className="rp-card">
              <h4>
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M4 8C4 6.9 4.9 6 6 6H7.5L8.5 4H15.5L16.5 6H18C19.1 6 20 6.9 20 8V17C20 18.1 19.1 19 18 19H6C4.9 19 4 18.1 4 17V8Z" stroke="currentColor" strokeWidth="1.8"/>
                  <circle cx="12" cy="12.5" r="3.2" stroke="currentColor" strokeWidth="1.8"/>
                </svg>
                Capture Photo
              </h4>

              {!photo ? (
                <div className="capture-box" onClick={() => fileInputRef.current && fileInputRef.current.click()}>
                  <div className="cam-icon">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M4 8C4 6.9 4.9 6 6 6H7.5L8.5 4H15.5L16.5 6H18C19.1 6 20 6.9 20 8V17C20 18.1 19.1 19 18 19H6C4.9 19 4 18.1 4 17V8Z" stroke="#2563EB" strokeWidth="1.8"/>
                      <circle cx="12" cy="12.5" r="3.2" stroke="#2563EB" strokeWidth="1.8"/>
                    </svg>
                  </div>
                  <p className="main">Camera opens directly</p>
                  <p className="sub">Tap to capture a live photo of the hazard</p>
                </div>
              ) : (
                <div>
                  <div className={`photo-preview ${isScanning ? 'scanning' : ''}`}>
                    <img src={photo} alt="Hazard preview" />
                    <div className="rp-scanline"></div>
                    {detection && (
                      <div className={`rp-bbox ${showBbox ? 'show' : ''}`} style={detection.bbox}>
                        <div className="rp-bbox-label">{detection.hazard} {detection.conf}%</div>
                      </div>
                    )}
                  </div>
                  <button className="retake" onClick={handleReset}>Retake photo</button>
                </div>
              )}

              <input
                type="file"
                ref={fileInputRef}
                id="fileInput"
                accept="image/*"
                capture="environment"
                onChange={handlePhotoSelect}
              />
            </div>

            <div className="rp-card">
              <h4>
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M12 21C12 21 19 14.5 19 9.5C19 5.9 15.9 3 12 3C8.1 3 5 5.9 5 9.5C5 14.5 12 21 12 21Z" stroke="currentColor" strokeWidth="1.8"/>
                  <circle cx="12" cy="9.5" r="2.2" stroke="currentColor" strokeWidth="1.8"/>
                </svg>
                GPS Location
              </h4>
              <div className="gps-row">
                <div className="left">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M12 21C12 21 19 14.5 19 9.5C19 5.9 15.9 3 12 3C8.1 3 5 5.9 5 9.5C5 14.5 12 21 12 21Z" stroke="#22C55E" strokeWidth="1.8"/>
                    <circle cx="12" cy="9.5" r="2.2" stroke="#22C55E" strokeWidth="1.8"/>
                  </svg>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '13px' }}>Sector 62, Noida</div>
                    <div className="coords mono">28.6139, 77.3660</div>
                  </div>
                </div>
                <div className="gps-status">● Auto-detected</div>
              </div>
            </div>

            <div className="rp-card">
              <h4>📝 Description <span style={{ fontWeight: 400, color: 'var(--muted)', fontSize: '12px' }}>(optional)</span></h4>
              <textarea
                placeholder="Add any extra detail — e.g. how deep, how long it's been there..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
          </div>

          <div>
            <div className="rp-card">
              <h4>🤖 AI Prediction</h4>
              {!detection ? (
                <div className="ai-pending-note">
                  <span className="pulse"></span> {scanText}
                </div>
              ) : (
                <div className="ai-pred show">
                  <div className="pred-hazard">
                    <h2>{detection.hazard}</h2>
                    <span className="conf-badge">{detection.conf}% confidence</span>
                  </div>
                  <div className="pred-row">
                    <span className="k">Severity</span>
                    <span className="v">
                      <span className={`sev-tag sev-${detection.severity}`}>{detection.severity}</span>
                    </span>
                  </div>
                  <div className="pred-row">
                    <span className="k">Department</span>
                    <span className="v">{detection.dept}</span>
                  </div>
                  <div className="pred-row">
                    <span className="k">Duplicate check</span>
                    <span className="v">Clear</span>
                  </div>
                  <button className="btn btn-primary submit-full" onClick={handleSubmit}>
                    Submit Complaint
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
