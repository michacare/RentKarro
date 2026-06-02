import React, { useState } from 'react';
import './HeroSection.css'; // We will create this styling next

const HeroSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === '') return;

    // TODO: Connect to an API/Firebase in the next phase
    console.log(`Email registered for RentKrro: ${email}`);
    
    setIsSubmitted(true);
    setEmail('');
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="logo-brand">
          <h1>Rent<span className="highlight">Krro</span>.com</h1>
        </div>
        
        <h2 className="hero-title">Why Buy When You Can Rent?</h2>
        <p className="hero-subtitle">
          The ultimate marketplace to rent premium goods near you. From electronics and tools to event gear—launching right in your neighborhood soon.
        </p>

        <div className="badge">🚀 Launching Soon</div>

        {/* Conditional rendering based on form submission state */}
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