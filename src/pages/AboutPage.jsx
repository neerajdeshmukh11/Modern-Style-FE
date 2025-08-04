// src/pages/AboutPage.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./AboutPage.css"; // Import the new CSS file

// Import your logo with the .png extension
import logo from '../assets/encegen-logo.png'; 

// Import the background image as well
import backgroundImage from '../assets/hero/hero-background.jpg';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Sample data for the team members
const teamMembers = [
  {
    name: "Mr. Saurabh Anil Gite",
    title: "Managing Director, Encegen Ai Labs Pvt. Ltd.",
    image: "https://placehold.co/400x400/22d3ee/FFFFFF?text=Saurabh",
    description: `Saurabh Anil Gite is the visionary founder and Managing Director of Encegen Ai Labs Pvt. Ltd., a forward-thinking IT solutions company specializing in Software Development, AI/ML Workflow Agents, Website Development, and Digital Marketing.
    With a strong academic background — holding a Bachelor’s degree in Computer Science and an MBA in Sales, Marketing, and Business Analytics — Mr. Gite brings a unique blend of technical expertise and business strategy to the forefront of the digital industry.
    With over a decade of experience working with top-tier multinational corporations, he has mastered the intricacies of sales, marketing, and team leadership. His professional journey is marked by a consistent drive to build high-performance teams, nurture future leaders, and bridge the gap between technology and business growth.
    Under his leadership, Encegen Ai Labs is committed to delivering value-driven, scalable, and intelligent digital solutions. From AI-powered automation to impactful digital campaigns, Mr. Gite’s mission is to lead businesses into the future with innovation, efficiency, and creativity.`,
    quote: "Let’s build the future — intelligently, efficiently, and creatively.",
  },
  {
    name: "Mr. Amar Gite",
    title: "Co-Founder",
    image: "https://placehold.co/400x400/06b6d4/FFFFFF?text=Amar",
    description: `Registered Indian Patent Agent | IP Strategist | Inventor
    Amar Gite is a visionary inventor and a seasoned computer engineer who transitioned into the field of Intellectual Property Rights (IPR) to become a leading Patent Attorney with over 13 years of industry experience. As a Registered Indian Patent Agent (INPA-2559), he is authorized to represent clients globally in filing and prosecuting patent applications in India.
    With a unique dual perspective — both as an inventor and a legal expert — Amar possesses a deep understanding of an inventor's mindset. This rare insight enables him to collaborate effectively with innovators, extracting core ideas and transforming them into strong, defensible patent applications. To date, he has successfully worked on 1,000+ patent cases, helping clients across sectors develop and protect their intellectual property portfolios.
    Amar’s technical acumen spans across diverse fields such as Software, IoT, AR/VR, Automobiles, Vehicle Lighting, Optics, Telecommunications, Renewable Energy, Electronics, Defense Systems, and more. His expertise extends from Patent Drafting and Prosecution to Patent Enforcement and IP Analytics.
    Amar brings invaluable strategic depth to the leadership of the company, ensuring that innovation is not only created but also legally fortified to drive sustainable growth.`,
  },
];

const AboutPage = () => {
  // Refs for different sections to apply ScrollTrigger animations
  const introRef = useRef(null);
  const specializationsRef = useRef(null);
  const industriesRef = useRef(null);
  const missionVisionRef = useRef(null);
  const approachRef = useRef(null);
  const whyChooseRef = useRef(null);
  const teamRef = useRef(null); // New ref for the team section
  const callToActionRef = useRef(null);

  useEffect(() => {
    // Ensure animations are cleaned up on component unmount
    const ctx = gsap.context(() => {
      // --- Intro Section Animation ---
      gsap.from(introRef.current.children, {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: introRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // --- Specializations Section Animation ---
      gsap.from(specializationsRef.current.children, {
        opacity: 0,
        y: 50,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: specializationsRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // --- Industries We Serve Section Animation ---
      gsap.from(industriesRef.current.children, {
        opacity: 0,
        y: 50,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: industriesRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // --- Mission & Vision Section Animation ---
      gsap.from(missionVisionRef.current.children, {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: missionVisionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // --- Our Approach Section Animation ---
      gsap.from(approachRef.current.children, {
        opacity: 0,
        y: 50,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: approachRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // --- Why Choose Encegen Section Animation ---
      gsap.from(whyChooseRef.current.children, {
        opacity: 0,
        y: 50,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: whyChooseRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
      
      // --- Meet Our Team Section Animation ---
      gsap.from(teamRef.current.children, {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: teamRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // --- Let's Build the Future Together (Call to Action) ---
      gsap.from(callToActionRef.current.children, {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: callToActionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

    }, []);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative">
      {/* Semi-transparent overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black opacity-75"></div>
      
      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
        {/* Intro Section */}
        <div ref={introRef} className="mb-16">
          <h1 className="text-5xl font-bold text-white text-center mb-6">
            About Us
          </h1>
          <div className="flex items-center justify-center mb-6 ml-[-4rem]">
            {/* Logo of the company - Increased size to h-16 and removed margin class */}
            <img src={logo} alt="Encegen Ai Labs Logo" className="h-16 w-auto mt-[0.5rem]" />
            {/* Company name with adjusted font size */}
            <p className="text-4xl text-gray-300 font-semibold ml-[-1.5rem]">
              Encegen AI Labs Pvt Ltd
            </p>
          </div>
          <p className="text-xl text-gray-300 mb-8 text-center">
            Motto: Engineering Intelligence. Empowering the Future.
          </p>

          <h2 className="text-4xl font-semibold text-white mb-4">Who We Are</h2>
          <p className="text-lg text-gray-300 mb-4">
            Encegen Ai Labs Pvt Ltd is a next-generation AI research and software
            product & Service based company, born out of a mission to democratize
            artificial intelligence and transform it into practical, impactful,
            and scalable solutions for modern enterprises. At our core, we are a
            team of researchers, engineers, technologists, designers, and
            dreamers—united by a single vision:
          </p>
          <blockquote className="text-xl italic text-gray-300 border-l-4 border-color-1 pl-4 mb-6">
            To make Artificial Intelligence a powerful enabler of business
            growth, operational excellence, and digital transformation.
          </blockquote>
          <p className="text-lg text-gray-300 mb-8">
            With roots in deep AI research and a foundation built upon years of
            experience in enterprise software development, Encegen combines
            intelligence, innovation, and intuition to develop custom AI-driven
            products, platforms, and solutions tailored for the unique challenges
            of modern-day businesses.
          </p>
        </div>

        {/* Our Core Specializations Section */}
        <div ref={specializationsRef} className="mb-16">
          <h2 className="text-4xl font-semibold text-white mb-6">
            Our Core Specializations
          </h2>

          <h3 className="text-3xl font-medium text-white mb-4">
            1. AI Research & Custom AI Solutions
          </h3>
          <p className="text-lg text-gray-300 mb-4">
            Our dedicated AI research wing is focused on exploring and applying
            cutting-edge technologies such as:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-300 mb-6 pl-4">
            <li>Natural Language Processing (NLP)</li>
            <li>Computer Vision</li>
            <li>Predictive Analytics & Forecasting</li>
            <li>Generative AI (LLMs, GPT integration, multimodal AI)</li>
            <li>Reinforcement Learning</li>
            <li>AI for Business Process Automation (RPA)</li>
            <li>AI Chatbots & Virtual Assistants</li>
          </ul>
          <p className="text-lg text-gray-300 mb-8">
            We don't just implement AI—we design, train, optimize, and deploy AI
            models tailored to your domain. From retail and healthcare to finance
            and logistics, our AI systems are built to think, learn, and act
            intelligently in real-time business environments.
          </p>

          <h3 className="text-3xl font-medium text-white mb-4">
            2. Custom Software Development & Integration
          </h3>
          <p className="text-lg text-gray-300 mb-4">
            At Encegen, we craft robust, scalable, and secure software products
            and platforms. Our services include:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-300 mb-6 pl-4">
            <li>Enterprise-grade web applications</li>
            <li>Workflow automation tools </li>
            <li>SaaS and cloud-native products</li>
            <li>API development and third-party integration</li>
            <li>CRM, ERP, and HRMS systems</li>
            <li>Cross-platform mobile applications (iOS/Android)</li>
          </ul>
          <p className="text-lg text-gray-300 mb-8">
            Whether you're a startup looking for MVP or an enterprise scaling
            legacy systems, our development methodology ensures clean code, modern
            UI/UX, and future-proof architecture.
          </p>

          <h3 className="text-3xl font-medium text-white mb-4">
            3. Website & E-Commerce Development
          </h3>
          <p className="text-lg text-gray-300 mb-4">
            Your digital presence is your first impression—and we make it
            unforgettable.
          </p>
          <ul className="list-disc list-inside text-lg text-gray-300 mb-6 pl-4">
            <li>Modern UI/UX websites (corporate, personal brands, portfolios)</li>
            <li>CMS-driven websites (WordPress, Webflow, Strapi)</li>
            <li>E-commerce platforms (Shopify, WooCommerce, custom stacks)</li>
            <li>Secure payment gateway integrations</li>
            <li>Marketplace and multi-vendor portals</li>
            <li>Progressive Web Apps (PWA)</li>
          </ul>
          <p className="text-lg text-gray-300 mb-8">
            We build pixel-perfect, SEO-optimized, and lightning-fast websites
            that don’t just attract visitors—they convert them.
          </p>

          <h3 className="text-3xl font-medium text-white mb-4">
            4. Digital Marketing & Growth Solutions
          </h3>
          <p className="text-lg text-gray-300 mb-4">
            Technology without visibility is like a book unread. Our digital
            marketing division ensures your product reaches the right audience at
            the right time through:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-300 mb-6 pl-4">
            <li>SEO (On-page, Off-page, Technical SEO)</li>
            <li>Paid Campaigns (Google Ads, Meta Ads, LinkedIn Ads)</li>
            <li>Social Media Marketing (SMM)</li>
            <li>Content Marketing & Blogging</li>
            <li>Influencer Outreach</li>
            <li>Performance Analytics & Reporting</li>
          </ul>
          <p className="text-lg text-gray-300 mb-8">
            We don’t just drive traffic—we engineer measurable business outcomes.
          </p>
        </div>

        {/* Industries We Serve Section */}
        <div ref={industriesRef} className="mb-16">
          <h2 className="text-4xl font-semibold text-white mb-6">
            Industries We Serve
          </h2>
          <p className="text-lg text-gray-300 mb-4">
            Our solutions are customized for diverse industries and domains,
            including:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-300 mb-6 pl-4">
            <li>FinTech</li>
            <li>Retail & E-commerce</li>
            <li>Real Estate & Property Tech</li>
            <li>HealthTech</li>
            <li>Manufacturing & Supply Chain</li>
            <li>Education & EdTech</li>
            <li>Media, News & Content Publishing</li>
            <li>Travel & Logistics</li>
            <li>Legal & Compliance</li>
          </ul>
          <p className="text-lg text-gray-300 mb-8">
            Our flexible frameworks allow us to adapt AI and digital systems into
            any vertical with high efficiency.
          </p>
        </div>

        {/* Our Mission & Vision Section */}
        <div ref={missionVisionRef} className="mb-16">
          <h2 className="text-4xl font-semibold text-white mb-6">Our Mission</h2>
          <blockquote className="text-xl italic text-gray-300 border-l-4 border-color-1 pl-4 mb-8">
            "To engineer intelligent software systems that empower businesses to
            unlock their full potential using the power of AI and digital
            technology."
          </blockquote>
          <p className="text-lg text-gray-300 mb-8">
            We believe that AI is not just a technology—it's a mindset, a
            transformative approach to solving age-old business problems in new,
            efficient, and scalable ways. Every product we build, every line of
            code we write, and every solution we deliver carries this vision
            forward.
          </p>

          <h2 className="text-4xl font-semibold text-white mb-6">Our Vision</h2>
          <blockquote className="text-xl italic text-gray-300 border-l-4 border-color-1 pl-4 mb-8">
            To become India’s most trusted AI and software innovation company,
            with a global footprint, known for pioneering next-gen solutions that
            blend human intuition with machine intelligence.
          </blockquote>
          <p className="text-lg text-gray-300 mb-8">
            We envision a future where every business, regardless of its size,
            can access the tools of Artificial Intelligence, smart automation,
            and digital transformation—all through our platforms and services.
          </p>
        </div>

        {/* Our Approach: The Encegen Way Section */}
        <div ref={approachRef} className="mb-16">
          <h2 className="text-4xl font-semibold text-white mb-6">
            Our Approach: The Encegen Way
          </h2>
          <ul className="list-decimal list-inside text-lg text-gray-300 mb-8 pl-4">
            <li>Consult. Innovate. Build. Support.</li>
            <li>AI-first thinking with ethical frameworks</li>
            <li>Design-led engineering with user empathy</li>
            <li>Agile & iterative development</li>
            <li>Strong documentation and transparent communication</li>
            <li>Post-launch performance optimization and SLA-backed support</li>
          </ul>
        </div>

        {/* Why Choose Encegen? Section */}
        <div ref={whyChooseRef} className="mb-16">
          <h2 className="text-4xl font-semibold text-white mb-6">
            Why Choose Encegen?
          </h2>
          <ul className="list-disc list-inside text-lg text-gray-300 mb-8 pl-4">
            <li>✅ In-house AI research team</li>
            <li>✅ Industry-specific AI solutions</li>
            <li>✅ 100% customizable software frameworks</li>
            <li>✅ Transparent pricing, agile delivery</li>
            <li>✅ Dedicated R&D for evolving tech like LLMs & Computer Vision</li>
            <li>✅ Long-term support & partnership mindset</li>
          </ul>
        </div>
        
        {/* Meet Our Team Section */}
        <div ref={teamRef} className="mb-16">
          <h2 className="text-4xl font-semibold text-white text-center mb-12">
            Meet Our Team
          </h2>
          <div className="flex flex-col gap-12">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="flex flex-col md:flex-row items-center md:items-start gap-8 bg-n-8 rounded-xl shadow-lg p-8"
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-32 h-32 rounded-full object-cover flex-shrink-0" 
                />
                <div className="text-center md:text-left">
                  <h3 className="text-3xl font-bold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-lg text-gray-400 font-semibold mb-4">
                    {member.title}
                  </p>
                  <p className="text-lg text-gray-300 mb-4 whitespace-pre-line">
                    {member.description}
                  </p>
                  {member.quote && (
                    <blockquote className="text-xl italic text-color-1 border-l-4 border-color-1 pl-4 my-4">
                      "{member.quote}"
                    </blockquote>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Let’s Build the Future Together (Call to Action) */}
        <div ref={callToActionRef} className="text-center">
          <h2 className="text-4xl font-semibold text-white mb-6">
            Let’s Build the Future Together
          </h2>
          <p className="text-lg text-gray-300 mb-4">
            Whether you’re a startup ready to disrupt or an enterprise aiming to
            scale, Encegen Ai Labs Pvt Ltd is your AI-powered technology partner.
          </p>
          <blockquote className="text-2xl font-bold italic text-color-1 border-l-4 border-color-1 pl-4 mx-auto max-w-2xl">
            🚀 Let’s transform your ideas into intelligent, scalable, and
            future-ready solutions.
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;