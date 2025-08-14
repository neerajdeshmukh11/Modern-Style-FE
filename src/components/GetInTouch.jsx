import { ArrowRight } from 'lucide-react';
import "./GetInTouch.css";

const GetInTouch = () => {
  const handleContactClick = () => {
    window.location.href = '/contact';
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-left">
            <h2 className="contact-title">
              Get In Touch
            </h2>
            
            <div className="contact-divider"></div>
            
            <p className="contact-description">
              Ready to transform your business with cutting-edge AI solutions? Let's start the conversation.
            </p>
          </div>

          <div className="contact-right">
            <button
              onClick={handleContactClick}
              className="contact-button"
            >
              <span className="contact-button-content">
                Contact Us
                <ArrowRight className="contact-button-icon" />
              </span>
              
              <div className="contact-button-background"></div>
              <div className="contact-button-shine"></div>
            </button>

            <div className="contact-decorations">
              <div className="contact-decoration contact-decoration-1"></div>
              <div className="contact-decoration contact-decoration-2"></div>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default GetInTouch;