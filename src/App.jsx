import React, { useState } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Teachers from './components/Teachers';
import Students from './components/Students';
import Income from './components/Income';
import Issues from './components/Issues';
import Feedback from './components/Feedback';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');

  const handleLogin = (credentials) => {
    // Simple authentication check
    if (credentials.email === 'owner@education.com' && credentials.password === 'admin123') {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentPage('dashboard');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'teachers':
        return <Teachers />;
      case 'students':
        return <Students />;
      case 'income':
        return <Income />;
      case 'issues':
        return <Issues />;
      case 'feedback':
        return <Feedback />;
      default:
        return <Dashboard />;
    }
  };

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} />
      <div className="flex-1 flex flex-col">
        <Header onLogout={handleLogout} />
        <main className="flex-1 p-6 overflow-auto">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}

export default App;