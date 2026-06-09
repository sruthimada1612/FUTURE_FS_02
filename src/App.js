import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import LeadDashboard from './components/LeadDashboard';
import RestaurantBusiness from './components/RestaurantBusiness';

function App() {
  const [currentView, setCurrentView] = useState('portfolio'); 

  return (
    <div className="App">
      <nav className="view-switcher-nav" style={{
        display: 'flex', justifyContent: 'space-between', alignitems: 'center',
        padding: '1rem 10%', background: '#1e293b', borderBottom: '2px solid #334155'
      }}>
        <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#38bdf8' }}>Internship Workspace</div>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <button 
            onClick={() => setCurrentView('portfolio')}
            style={{
              padding: '0.5rem 1rem', borderRadius: '4px', border: 'none', cursor: 'pointer', fontweight: 'bold',
              background: currentView === 'portfolio' ? '#38bdf8' : '#0f172a',
              color: currentView === 'portfolio' ? '#0f172a' : '#f8fafc'
            }}
          >
            Task 1: Portfolio
          </button>
          <button 
            onClick={() => setCurrentView('crm')}
            style={{
              padding: '0.5rem 1rem', borderRadius: '4px', border: 'none', cursor: 'pointer', fontweight: 'bold',
              background: currentView === 'crm' ? '#38bdf8' : '#0f172a',
              color: currentView === 'crm' ? '#0f172a' : '#f8fafc'
            }}
          >
            Task 2: Mini CRM
          </button>
          <button 
            onClick={() => setCurrentView('restaurant')}
            style={{
              padding: '0.5rem 1rem', borderRadius: '4px', border: 'none', cursor: 'pointer', fontweight: 'bold',
              background: currentView === 'restaurant' ? '#ff7c5c' : '#0f172a',
              color: currentView === 'restaurant' ? '#0f172a' : '#f8fafc'
            }}
          >
            Task 3: Live Business Site
          </button>
        </div>
      </nav>

      {currentView === 'portfolio' && (
        <>
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Contact />
        </>
      )}
      {currentView === 'crm' && <LeadDashboard />}
      {currentView === 'restaurant' && <RestaurantBusiness />}
    </div>
  );
}

export default App;