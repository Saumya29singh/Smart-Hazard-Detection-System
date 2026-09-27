import React, { useState } from 'react';
import Home from './pages/Home';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import ReportIssue from './pages/ReportIssue';
import MapPage from './pages/Map';
import { INITIAL_COMPLAINTS } from './services/complaintsStore';

export default function App() {
  const [currentTab, setCurrentTab] = useState('landing');
  const [complaints, setComplaints] = useState(INITIAL_COMPLAINTS);

  const handleAddComplaint = (newComplaint) => {
    setComplaints([newComplaint, ...complaints]);
  };

  const handleNavigate = (tab) => {
    setCurrentTab(tab);
    window.scrollTo(0, 0);
  };

  if (currentTab === 'landing') {
    return <Home onNavigate={handleNavigate} />;
  }

  return (
    <div className="app-shell">
      <Sidebar currentTab={currentTab} onNavigate={handleNavigate} />
      <div className="main-area">
        {currentTab === 'dashboard' && (
          <Dashboard complaints={complaints} onNavigate={handleNavigate} />
        )}
        {currentTab === 'report' && (
          <ReportIssue onAddComplaint={handleAddComplaint} onNavigate={handleNavigate} />
        )}
        {currentTab === 'map' && (
          <MapPage />
        )}
      </div>
    </div>
  );
}
