import React from "react";
import "./CareersPage.css";

const jobs = [
  {
    title: "AI/ML Developer",
    location: "Pune, India",
    type: "Full-time",
    about:
      "We are seeking an innovative AI/ML Developer to design, develop, and deploy intelligent systems for real-world applications. You’ll work closely with our product and data teams to build predictive models and AI-driven solutions.",
  },
  {
    title: "Full Stack Developer",
    location: "Pune, India",
    type: "Full-time",
    about:
      "We are looking for a Full Stack Developer to build dynamic, scalable, and high-performance web applications using modern technologies.",
  },
  {
    title: "Business Development Manager",
    location: "Pune, India",
    type: "Full-time",
    about:
      "We are seeking a result-driven Business Development Manager to expand our client base and strengthen our market presence.",
  },
  {
    title: "Sales Executive",
    location: "Pune, India",
    type: "Full-time",
    about:
      "We are looking for energetic Sales Executives to drive product/service sales and meet revenue goals.",
  },
  {
    title: "Graphic Designer",
    location: "Pune, India",
    type: "Full-time",
    about:
      "We are hiring a creative Graphic Designer to produce engaging and visually appealing designs for branding and marketing purposes.",
  },
  {
    title: "Telecaller",
    location: "Pune, India",
    type: "Full-time",
    about:
      "We are seeking Telecallers to handle customer inquiries and generate leads through outbound calls.",
  },
  {
    title: "SAP Consultant",
    location: "Pune, India",
    type: "Full-time",
    about:
      "We are looking for an SAP Consultant to implement, configure, and support SAP solutions for clients.",
  },
  {
    title: "SAP Trainer",
    location: "Pune, India",
    type: "Part-time/Contract",
    about:
      "We are hiring an SAP Trainer to provide professional training sessions for individuals and corporate teams.",
  }
];

const CareersPage = () => {
  return (
    <div className="careers-background">
      <div className="careers-container">
        <h1 className="animate-gradient-title shadowed-title">
          Careers
        </h1>
        <p className="careers-intro">
          Join us in shaping the future. Explore our openings below!
        </p>
        <div className="jobs-list">
          {jobs.map((job, idx) => (
            <div
              className="job-card"
              style={{ animationDelay: `${idx * 0.15}s` }}
              key={job.title + idx}
            >
              <div className="job-card-header">
                <h2>{job.title}</h2>
                <span className="location">{job.location}</span>
                <span className="job-type">{job.type}</span>
              </div>
              <p className="job-about">{job.about}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Fixed global Apply Now button with prompt for job role */}
      <button
        className="animated-apply-btn fixed-apply-btn"
        onClick={() => {
          const role = prompt("Which role are you applying for?");
          if (!role) {
            alert("Please enter a valid role before sending your application.");
            return;
          }

          const receiver = "hr@encegenailabs.com";
          const subject = `Job Application – ${role}`;
          const body = `Dear HR,%0D%0A%0D%0APlease find attached my resume for the position of ${role}.%0D%0A%0D%0AThanks & Regards,`;

          const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(receiver)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

          // Open Gmail immediately from user click event
          window.open(gmailURL, "_blank", "noopener,noreferrer");
        }}

      >
        <span>Apply Now</span>
        <span className="shine"></span>
      </button>
    </div>
  );
};

export default CareersPage;
