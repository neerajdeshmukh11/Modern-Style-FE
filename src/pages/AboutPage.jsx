import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./AboutPage.css";

import backgroundImage from "../assets/hero/hero-background.jpg";

gsap.registerPlugin(ScrollTrigger);

const industries = [
  { icon: "💰", title: "FinTech", text: "Smart AI solutions for banking, payments, and risk management." },
  { icon: "🛍️", title: "Retail & E-commerce", text: "AI-driven personalization and analytics for commerce." },
  { icon: "🏥", title: "HealthTech", text: "Predictive diagnostics and workflow automation in healthcare." },
  { icon: "🎓", title: "Education & EdTech", text: "Adaptive learning platforms and intelligent content curation." }
];

const approach = [
  { icon: "🧠", title: "Consult", text: "Deep consultations to understand your unique challenges." },
  { icon: "💡", title: "Innovate", text: "Apply latest AI and software innovations for custom solutions." },
  { icon: "🛠️", title: "Build", text: "Agile, user-focused engineering for high-quality delivery." },
  { icon: "🔧", title: "Support", text: "SLA-backed ongoing support and optimization services." }
];

const whyChoose = [
  { icon: "🔬", title: "In-house AI Research", text: "Dedicated team exploring cutting-edge AI technologies." },
  { icon: "⚙️", title: "Custom Frameworks", text: "Fully adaptable software tailored to your needs." },
  { icon: "🔍", title: "Transparency", text: "Clear pricing and processes with no surprises." },
  { icon: "🤝", title: "Partnership Mindset", text: "Long-term committed technology partnership." }
];

const AboutPage = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      sectionRefs.current.forEach((section) => {
        if (!section) return;
        gsap.from(section.querySelectorAll(".about-card"), {
          opacity: 0,
          y: 60,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
          },
        });
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed"
      }}
    >
      <div className="relative z-10 container mx-auto px-6 py-16 lg:py-24">
        
        {/* Main Heading */}
        <h1 className="main-about-heading">About Us</h1>

        {/* Who We Are */}
        <section className="about-section-text">
          <h2 className="section-title">Who We Are</h2>
          <p className="about-paragraph">
            Encegen Ai Labs Pvt Ltd is a next-generation AI research and software
            product & service based company, born out of a mission to democratize
            artificial intelligence and transform it into practical, impactful,
            and scalable solutions for modern enterprises. 
            At our core, we are a team of researchers, engineers, technologists, 
            designers, and dreamers – united by a single vision.
          </p>
          <blockquote className="about-quote">
            To make Artificial Intelligence a powerful enabler of business
            growth, operational excellence, and digital transformation.
          </blockquote>
          <p className="about-paragraph">
            With roots in deep AI research and a foundation built upon years of
            experience in enterprise software development, Encegen combines
            intelligence, innovation, and intuition to develop custom AI-driven
            products, platforms, and solutions tailored for the unique challenges
            of modern businesses.
          </p>
        </section>

        {/* Industries We Serve */}
        <section ref={(el) => (sectionRefs.current[0] = el)} className="about-section">
          <h2 className="section-title">Industries We Serve</h2>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((item, i) => (
              <div key={i} className="about-card">
                <div className="card-icon">{item.icon}</div>
                <h3 className="about-card-title">{item.title}</h3>
                <p className="about-card-text">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Mission/Vision */}
        <section className="about-section-text">
          <h2 className="section-title">Our Mission</h2>
          <blockquote className="about-quote">
            "To engineer intelligent software systems that empower businesses
            to unlock their full potential using the power of AI and digital
            technology."
          </blockquote>
          <h2 className="section-title">Our Vision</h2>
          <blockquote className="about-quote">
            "To become India’s most trusted AI and software innovation company,
            with a global footprint, known for pioneering next-gen solutions that
            blend human intuition with machine intelligence."
          </blockquote>
        </section>

        {/* Our Approach */}
        <section ref={(el) => (sectionRefs.current[1] = el)} className="about-section">
          <h2 className="section-title">Our Approach</h2>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {approach.map((item, i) => (
              <div key={i} className="about-card">
                <div className="card-icon">{item.icon}</div>
                <h3 className="about-card-title">{item.title}</h3>
                <p className="about-card-text">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Encegen */}
        <section ref={(el) => (sectionRefs.current[2] = el)} className="about-section">
          <h2 className="section-title">Why Choose Encegen?</h2>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map((item, i) => (
              <div key={i} className="about-card">
                <div className="card-icon">{item.icon}</div>
                <h3 className="about-card-title">{item.title}</h3>
                <p className="about-card-text">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default AboutPage;
