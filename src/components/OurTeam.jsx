import { useState } from 'react';
import { ChevronLeft, ChevronRight, Linkedin, Mail } from 'lucide-react';
import "./OurTeam.css";

const OurTeam = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      position: "CEO & Founder",
      image: "/lovable-uploads/444a43f2-1180-4bc4-8e7a-3825ce1d3226.png",
      linkedin: "#",
      email: "john@encegen.com"
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "CTO",
      image: "/lovable-uploads/444a43f2-1180-4bc4-8e7a-3825ce1d3226.png",
      linkedin: "#",
      email: "jane@encegen.com"
    },
    {
      id: 3,
      name: "Mike Johnson",
      position: "Lead AI Researcher",
      image: "/lovable-uploads/444a43f2-1180-4bc4-8e7a-3825ce1d3226.png",
      linkedin: "#",
      email: "mike@encegen.com"
    },
    {
      id: 4,
      name: "Sarah Wilson",
      position: "Senior Developer",
      image: "/lovable-uploads/444a43f2-1180-4bc4-8e7a-3825ce1d3226.png",
      linkedin: "#",
      email: "sarah@encegen.com"
    },
    {
      id: 5,
      name: "David Brown",
      position: "UI/UX Designer",
      image: "/lovable-uploads/444a43f2-1180-4bc4-8e7a-3825ce1d3226.png",
      linkedin: "#",
      email: "david@encegen.com"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  const getVisibleMembers = () => {
    const visibleCount = 3;
    const members = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % teamMembers.length;
      members.push(teamMembers[index]);
    }
    return members;
  };

  return (
    <section className="team-section">
      <div className="team-container">
        <div className="team-content">
          <div className="team-left">
            <h2 className="team-title">Our Team</h2>
            
            <div className="team-divider"></div>
            
            <p className="team-description">
              We feel proud of our highly-skilled team members who personify the very qualities that have made Martechs successful in delivering the best for each of our clients. Martecians as we call them are a bunch of quality-driven professionals with a commitment towards constant growth.
            </p>
            
            <div className="team-controls">
              <button onClick={prevSlide} className="team-arrow-button">
                <ChevronLeft className="team-arrow-icon" />
              </button>
              <button onClick={nextSlide} className="team-arrow-button">
                <ChevronRight className="team-arrow-icon" />
              </button>
            </div>
          </div>

          <div className="team-right">
            <div className="team-cards-container">
              {getVisibleMembers().map((member, index) => (
                <div key={member.id} className="team-card">
                  <div className="team-card-image-container">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="team-card-image"
                    />
                    <div className="team-card-overlay">
                      <div className="team-card-links">
                        <a href={member.linkedin} className="team-link">
                          <Linkedin className="team-link-icon" />
                        </a>
                        <a href={`mailto:${member.email}`} className="team-link">
                          <Mail className="team-link-icon" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="team-card-content">
                    <h3 className="team-card-name">{member.name}</h3>
                    <p className="team-card-position">{member.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;