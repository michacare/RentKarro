import React from 'react';
import HeroSection from './sections/HeroSection';
import './App.css';

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="app-container">
      {/* Main Content Area */}
      <main>
        <HeroSection />
      </main>

      {/* Persistent Footer */}
      <footer style={footerStyle}>
        <p>&copy; {currentYear} RentKrro.com. All rights reserved.</p>
      </footer>
    </div>
  );
}

// Quick clean inline styling for a simple phase 1 footer
const footerStyle = {
  textAlign: 'center',
  padding: '1.5rem',
  fontSize: '0.9rem',
  color: '#94a3b8',
  borderTop: '1px solid #e2e8f0',
};

export default App;