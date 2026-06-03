import React, { useState } from 'react';
import './HeroSection.css'; 
// Import your logo image file from the assets directory
import logoImg from '../assets/logo.png'; // Make sure the filename matches yours (e.g., logo.svg or logo.png)

const HeroSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === '') return;

    console.log(`Email registered for RentKrro: ${email}`);
    
    setIsSubmitted(true);
    setEmail('');
  };

  return (
    <section className="hero">
      <div className="hero-content">
        {/* Swapped out the old h1 text with your brand logo image */}
        <div className="logo-brand">
          <img 
            src={logoImg} 
            alt="RentKrro.com Logo" 
            className="brand-logo" 
          />
        </div>
        
        <h2 className="hero-title">Why Buy When You Can Rent?</h2>
        <p className="hero-subtitle">
          The ultimate marketplace to rent premium goods near you. From electronics and tools to event gear—launching right in your neighborhood soon.
        </p>

        <div className="badge">🚀 Launching Soon</div>

        {!isSubmitted ? (
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder="Enter your email to get early access" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="email-input"
            />
            <button type="submit" className="submit-btn">Notify Me</button>
          </form>
        ) : (
          <div className="success-message">
            🎉 Thank you! We'll notify you the moment we go live.
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;