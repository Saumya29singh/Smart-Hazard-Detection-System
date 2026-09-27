import React, { useState } from 'react';

export default function MapCanvas({ markers }) {
  const [selectedMarker, setSelectedMarker] = useState(null);

  return (
    <div className="map-canvas">
      <div className="map-legend-note">📍 Click a marker for details</div>

      {markers.map((m) => (
        <div
          key={m.id}
          className={`map-marker ${selectedMarker?.id === m.id ? 'selected' : ''}`}
          style={{ left: `${m.x}%`, top: `${m.y}%`, background: m.color }}
          onClick={() => setSelectedMarker(m)}
        >
          <svg viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="4" fill="white"/>
          </svg>
        </div>
      ))}

      {selectedMarker && (
        <div className="marker-detail show">
          <button className="close" onClick={() => setSelectedMarker(null)}>✕</button>
          <div className="md-top">
            <span className="filter-dot" style={{ background: selectedMarker.color, width: '12px', height: '12px' }}></span>
            <h4>{selectedMarker.title}</h4>
          </div>
          <div className="md-meta">
            <span>📍 {selectedMarker.loc}</span>
            <span>🏛 {selectedMarker.dept}</span>
            <span>⚠️ {selectedMarker.severity} severity</span>
            <span>🕒 {selectedMarker.date}</span>
          </div>
        </div>
      )}
    </div>
  );
}
