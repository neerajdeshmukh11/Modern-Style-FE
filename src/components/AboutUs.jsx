import "./AboutUs.css";
import aboutImage from "../assets/AboutUs.jpg";

const AboutUs = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <div className="about-image-container">
            <div className="about-image-wrapper">
              <img
                src={aboutImage}
                alt="Encegen AI Labs"
                className="about-image"
              />
            </div>
          </div>

          <div className="about-text">
            <h2 className="about-title">About Us</h2>
            
            <div className="about-divider"></div>
            
            <p className="about-description">
              Encegen Ai Labs Pvt Ltd is a next-generation AI research and software product & Service based company, born out of a mission to democratize artificial intelligence and transform it into practical, impactful, and scalable solutions for modern enterprises. At our core, we are a team of researchers, engineers, technologists, designers, and dreamers—united by a single vision:
            </p>
            
            <blockquote className="about-quote">
              To make Artificial Intelligence a powerful enabler of business growth, operational excellence, and digital transformation.
            </blockquote>
            
            <p className="about-description">
              With roots in deep AI research and a foundation built upon years of experience in enterprise software development, Encegen combines intelligence, innovation, and intuition to develop custom AI-driven products, platforms, and solutions tailored for the unique challenges of modern-day businesses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
