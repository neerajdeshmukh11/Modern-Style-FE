import React from "react";
import "./CareersPage.css";
import { Link, useNavigate } from "react-router-dom";
// ✅ Import your background image asset
import backgroundImage from "../assets/hero/hero-background.jpg";

const jobs = [
  {
    id: "ai-ml-developer",
    title: "AI/ML Developer",
    location: "Pune, India",
    type: "Full-time",
    about:
      "We are seeking an innovative AI/ML Developer to design, develop, and deploy intelligent systems for real-world applications. You’ll work closely with our product and data teams to build predictive models and AI-driven solutions.",
  },
  {
    id: "full-stack-developer",
    title: "Full Stack Developer",
    location: "Pune, India",
    type: "Full-time",
    about:
      "We are looking for a Full Stack Developer to build dynamic, scalable, and high-performance web applications using modern technologies.",
  },
  {
    id: "business-development-manager",
    title: "Business Development Manager",
    location: "Pune, India",
    type: "Full-time",
    about:
      "We are seeking a result-driven Business Development Manager to expand our client base and strengthen our market presence.",
  },
  {
    id: "sales-executive",
    title: "Sales Executive",
    location: "Pune, India",
    type: "Full-time",
    about:
      "We are looking for energetic Sales Executives to drive product/service sales and meet revenue goals.",
  },
  {
    id: "graphic-designer",
    title: "Graphic Designer",
    location: "Pune, India",
    type: "Full-time",
    about:
      "We are hiring a creative Graphic Designer to produce engaging and visually appealing designs for branding and marketing purposes.",
  },
  {
    id: "telecaller",
    title: "Telecaller",
    location: "Pune, India",
    type: "Full-time",
    about:
      "We are seeking Telecallers to handle customer inquiries and generate leads through outbound calls.",
  },
  {
    id: "sap-consultant",
    title: "SAP Consultant",
    location: "Pune, India",
    type: "Full-time",
    about:
      "We are looking for an SAP Consultant to implement, configure, and support SAP solutions for clients.",
  },
  {
    id: "sap-trainer",
    title: "SAP Trainer",
    location: "Pune, India",
    type: "Part-time/Contract",
    about:
      "We are hiring an SAP Trainer to provide professional training sessions for individuals and corporate teams.",
  }
];

const CareersPage = () => {
  const navigate = useNavigate();

  return (
    <div
      className="careers-background"
      style={{
        backgroundImage: `url(${backgroundImage})`, // ✅ imported fixed background
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed"
      }}
    >
      <div className="careers-container">
        <h1 className="animate-gradient-title shadowed-title">
          Careers
        </h1>
        <p className="careers-intro">
          Join us in shaping the future. Explore our openings below!
        </p>

        <div className="jobs-list">
          {jobs.map((job, idx) => (
            <Link
              key={job.id}
              to={`/job#${job.id}`}
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "block",
                height: "100%"
              }}
            >
              <div
                className="job-card"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <div className="job-card-header">
                  <h2>{job.title}</h2>
                  <span className="location">{job.location}</span>
                  <span className="job-type">{job.type}</span>
                </div>
                <p className="job-about">{job.about}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Global Apply Now — top of JobDetailsPage */}
      <button
        className="animated-apply-btn fixed-apply-btn"
        onClick={() => navigate("/job")}
      >
        <span>Apply Now</span>
        <span className="shine"></span>
      </button>
    </div>
  );
};

export default CareersPage;
