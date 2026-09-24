import React, { useState } from 'react';
import Topbar from '../components/Topbar';
import ComplaintTable from '../components/ComplaintTable';
import { calculateKPIs } from '../services/complaintsStore';

export default function Dashboard({ complaints, onNavigate }) {
  const [searchTerm, setSearchTerm] = useState('');
  const kpis = calculateKPIs(complaints);

  const filteredComplaints = complaints.filter((c) =>
    c.issue.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-page active">
      <Topbar title="Welcome, Saumya 👋" searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div className="content">
        <div className="kpi-grid">
          <div className="kpi-card">
            <div>
              <div className="kpi-num">{kpis.total}</div>
              <div className="kpi-lbl">Total Complaints</div>
            </div>
            <div className="kpi-icon" style={{ background: 'var(--primary-light)' }}>
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M7 3H14L19 8V21H7V3Z" stroke="#2563EB" strokeWidth="1.8" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          <div className="kpi-card">
            <div>
              <div className="kpi-num">{kpis.resolved}</div>
              <div className="kpi-lbl">Resolved</div>
            </div>
            <div className="kpi-icon" style={{ background: 'var(--secondary-light)' }}>
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M5 12L10 17L19 7" stroke="#22C55E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          <div className="kpi-card">
            <div>
              <div className="kpi-num">{kpis.pending}</div>
              <div className="kpi-lbl">Pending</div>
            </div>
            <div className="kpi-icon" style={{ background: 'var(--warning-light)' }}>
              <svg viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="#F59E0B" strokeWidth="1.8"/>
                <path d="M12 7V12L15 14" stroke="#F59E0B" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </div>
          </div>

          <div className="kpi-card">
            <div>
              <div className="kpi-num">{kpis.inProgress}</div>
              <div className="kpi-lbl">In Progress</div>
            </div>
            <div className="kpi-icon" style={{ background: 'var(--danger-light)' }}>
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M4 20L20 4M20 4H10M20 4V14" stroke="#EF4444" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="panel">
          <div className="panel-head">
            <h3>Recent Complaints</h3>
            <button className="btn btn-outline btn-sm" onClick={() => onNavigate('report')}>+ New report</button>
          </div>
          <ComplaintTable complaints={filteredComplaints} />
        </div>
      </div>
    </div>
  );
}
