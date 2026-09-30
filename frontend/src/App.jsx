import { useState } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import ReportIssue from './pages/ReportIssue';
import MapPage from './pages/Map';
import GovernmentDashboard from './pages/GovernmentDashboard';
import { INITIAL_COMPLAINTS } from './services/complaintsStore';

export default function App() {
  const [currentTab, setCurrentTab] = useState('landing');
  const [complaints, setComplaints] = useState(INITIAL_COMPLAINTS);

  const handleNavigate = (tab) => {
    setCurrentTab(tab);
    window.scrollTo(0, 0);
  };

  const handleLogin = (role) => {
    handleNavigate(role === 'government' ? 'government' : 'landing');
  };

  const handleAddComplaint = (newComplaint) => {
    setComplaints((current) => [newComplaint, ...current]);
  };

  if (currentTab === 'landing') {
    return <Home onNavigate={handleNavigate} />;
  }

  if (currentTab === 'login') {
    return <Login onLogin={handleLogin} onNavigate={handleNavigate} />;
  }

  if (currentTab === 'government') {
    return <GovernmentDashboard />;
  }

  return (
    <div className="app-shell">
      <Sidebar currentTab={currentTab} onNavigate={handleNavigate} />
      <div className="main-area">
        {currentTab === 'dashboard' && (
          <Dashboard complaints={complaints} onNavigate={handleNavigate} />
        )}
        {currentTab === 'report' && (
          <ReportIssue
            onAddComplaint={handleAddComplaint}
            onNavigate={handleNavigate}
          />
        )}
        {currentTab === 'map' && <MapPage />}
      </div>
    </div>
  );
}
