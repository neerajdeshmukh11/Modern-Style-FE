// src/pages/ServicesPage.jsx
import React from "react";
import backgroundImage from "../assets/hero/hero-background.jpg";

const coreSpecializationsCards = [
  {
    icon: "🧠",
    title: "AI Research & Custom AI Solutions",
    description: `Our dedicated AI research wing is focused on exploring and applying cutting-edge technologies such as:
Natural Language Processing (NLP), Computer Vision, Predictive Analytics & Forecasting, Generative AI, Reinforcement Learning, AI for Business Process Automation (RPA), AI Chatbots & Virtual Assistants.
We design, train, optimize, and deploy AI models tailored to your domain for real-time business intelligence.`,
  },
  {
    icon: "💻",
    title: "Custom Software Development & Integration",
    description:
      "We craft robust, scalable, and secure software products and platforms including enterprise-grade web applications, workflow automation tools, SaaS/cloud-native products, API development, CRM, ERP, HRMS systems, and cross-platform mobile apps for iOS/Android.",
  },
  {
    icon: "🛒",
    title: "Website & E-Commerce Development",
    description:
      "We build pixel-perfect, SEO-optimized websites, CMS-driven sites, e-commerce platforms with secure payment gateways, marketplace portals, and Progressive Web Apps (PWA) that provide unforgettable digital presence.",
  },
  {
    icon: "📈",
    title: "Digital Marketing & Growth Solutions",
    description:
      "Our digital marketing division drives targeted reach through SEO, paid campaigns (Google, Meta, LinkedIn Ads), Social Media Marketing, Content & Influencer Marketing, and Performance Analytics for measurable business results.",
  },
];

const ServicesPage = () => {
  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="relative z-10 container mx-auto px-4 py-20 lg:py-24">
        <h1 className="text-4xl font-bold text-white text-center mb-12 drop-shadow-lg">
          Our Services
        </h1>

        {/* Equal height, equispaced cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {coreSpecializationsCards.map((service, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-start h-full p-8 rounded-xl border border-white/20 shadow-lg
                         bg-white/5 backdrop-blur-sm transition-transform duration-300 hover:scale-105
                         hover:shadow-2xl cursor-pointer"
              style={{ whiteSpace: "pre-line" }}
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                {service.title}
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed flex-grow">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
