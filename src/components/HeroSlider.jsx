import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom'; // ✅ for navigation to Services page
import "./HeroSlider.css";
import b1 from '../assets/b1.jpeg'; // ✅ Importing an image for the first slide

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "AI Research & Custom AI Solutions",
      description: "Cutting-edge artificial intelligence research and custom solutions for enterprises.",
      image: b1
    },
    {
      title: "Custom Software Development & Integration",
      description: "Tailored software solutions with seamless third-party system integration capabilities.",
      image: "/lovable-uploads/444a43f2-1180-4bc4-8e7a-3825ce1d3226.png"
    },
    {
      title: "Website & E-Commerce Development",
      description: "Modern responsive websites and robust e-commerce platforms for business growth.",
      image: "/lovable-uploads/444a43f2-1180-4bc4-8e7a-3825ce1d3226.png"
    },
    {
      title: "Digital Marketing & Growth Solutions",
      description: "Data-driven marketing strategies and growth hacking for sustainable business expansion.",
      image: "/lovable-uploads/444a43f2-1180-4bc4-8e7a-3825ce1d3226.png"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slider-container">
      <div className="slider-wrapper">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : index < currentSlide ? 'prev' : 'next'}`}
          >
            <div className="slide-content">
              <div className="slide-text">
                <h2 className="slide-title">{slide.title}</h2>
                <p className="slide-description">{slide.description}</p>
                
                {/* ✅ Link to Services page */}
                <Link to="/services" className="slide-button">
                  Learn More
                </Link>
              </div>

              <div className="slide-image-container">
                <div className="slide-image-wrapper">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="slide-image"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="slider-controls">
          <div className="arrow-controls">
            <button onClick={prevSlide} className="arrow-button">
              <ChevronLeft className="arrow-icon" />
            </button>
            <button onClick={nextSlide} className="arrow-button">
              <ChevronRight className="arrow-icon" />
            </button>
          </div>

          <div className="dot-controls">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
