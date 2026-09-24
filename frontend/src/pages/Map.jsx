import React, { useState } from 'react';
import Topbar from '../components/Topbar';
import MapCanvas from '../components/MapCanvas';
import { MAP_ISSUES, MAP_FILTERS } from '../services/mapMarkers';

export default function MapPage() {
  const [activeTypes, setActiveTypes] = useState(new Set(MAP_FILTERS.map(f => f.type)));
  const [searchLocation, setSearchLocation] = useState('');

  const toggleFilter = (type) => {
    const next = new Set(activeTypes);
    if (next.has(type)) {
      next.delete(type);
    } else {
      next.add(type);
    }
    setActiveTypes(next);
  };

  const filteredMarkers = MAP_ISSUES.filter(m => 
    activeTypes.has(m.type) && 
    (searchLocation === '' || m.loc.toLowerCase().includes(searchLocation.toLowerCase()) || m.title.toLowerCase().includes(searchLocation.toLowerCase()))
  );

  return (
    <div className="app-page active">
      <Topbar title="Live Map" />

      <div className="content">
        <div className="map-layout">
          <div>
            <div className="map-search">
              <svg viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8"/><path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
              <input 
                type="text" 
                placeholder="Search location..." 
                value={searchLocation} 
                onChange={(e) => setSearchLocation(e.target.value)}
              />
            </div>

            <div className="filter-list">
              <h4>Filters</h4>
              {MAP_FILTERS.map((f) => (
                <label key={f.type} className="filter-opt">
                  <input
                    type="checkbox"
                    checked={activeTypes.has(f.type)}
                    onChange={() => toggleFilter(f.type)}
                  />
                  <span className="filter-dot" style={{ background: f.color }}></span>
                  {f.label}
                </label>
              ))}
            </div>
          </div>

          <MapCanvas markers={filteredMarkers} />
        </div>
      </div>
    </div>
  );
}
