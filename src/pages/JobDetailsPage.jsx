import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./JobDetailsPage.css";

const jobDetails = [
  {
    id: "ai-ml-developer",
    title: "AI/ML Developer",
    location: "Pune, India",
    type: "Full-time",
    about:
      "We are seeking an innovative AI/ML Developer to design, develop, and deploy intelligent systems for real-world applications. You’ll work closely with our product and data teams to build predictive models and AI-driven solutions.",
    responsibilities: [
      "Develop and train ML models using Python, TensorFlow, PyTorch, or similar frameworks.",
      "Perform data preprocessing, cleaning, and transformation.",
      "Optimize model accuracy, speed, and scalability.",
      "Integrate AI solutions into production systems.",
      "Collaborate with cross-functional teams to identify AI opportunities."
    ],
    required: [
      "Bachelor’s in Computer Science, AI, Data Science, or related field.",
      "Strong Python programming skills.",
      "Experience with ML/DL frameworks (TensorFlow, PyTorch, Scikit-learn).",
      "Understanding of algorithms, statistics, and data structures."
    ],
    preferred: [
      "Knowledge of NLP, Computer Vision, or Reinforcement Learning.",
      "Experience with cloud AI services (AWS, Azure, GCP)."
    ],
    perks: [
      "Flexible work environment.",
      "Learning and development opportunities.",
      "Competitive salary & incentives."
    ]
  },
  {
    id: "full-stack-developer",
    title: "Full Stack Developer",
    location: "Pune, India",
    type: "Full-time",
    about:
      "We are looking for a Full Stack Developer to build dynamic, scalable, and high-performance web applications using modern technologies.",
    responsibilities: [
      "Design and develop front-end and back-end systems.",
      "Work with databases (SQL/NoSQL).",
      "Integrate APIs and third-party services.",
      "Optimize applications for speed and scalability.",
      "Collaborate with UI/UX designers and other developers."
    ],
    required: [
      "Bachelor’s in Computer Science or related field.",
      "Proficiency in JavaScript, HTML, CSS.",
      "Experience with React.js, Next.js, or Angular (Frontend).",
      "Experience with Node.js, Express, or Django (Backend).",
      "Familiarity with MongoDB, MySQL, or PostgreSQL."
    ],
    preferred: ["Experience with DevOps tools and CI/CD pipelines."],
    perks: [
      "Flexible hours & hybrid work options.",
      "Growth opportunities in diverse projects."
    ]
  },
  {
    id: "business-development-manager",
    title: "Business Development Manager",
    location: "Pune, India",
    type: "Full-time",
    about:
      "We are seeking a result-driven Business Development Manager to expand our client base and strengthen our market presence.",
    responsibilities: [
      "Identify and target potential clients.",
      "Develop business proposals and presentations.",
      "Build strong relationships with stakeholders.",
      "Achieve sales and revenue growth targets.",
      "Collaborate with the marketing team for lead generation."
    ],
    required: [
      "Bachelor’s degree in Business, Marketing, or related field.",
      "Strong communication and negotiation skills.",
      "Proven track record in business development."
    ],
    preferred: ["Experience in IT/Software sales."],
    perks: [
      "Attractive incentive structure.",
      "Professional development support."
    ]
  },
  {
    id: "sales-executive",
    title: "Sales Executive",
    location: "Pune, India",
    type: "Full-time",
    about:
      "We are looking for energetic Sales Executives to drive product/service sales and meet revenue goals.",
    responsibilities: [
      "Approach potential customers and explain offerings.",
      "Maintain client relationships.",
      "Meet monthly/quarterly sales targets.",
      "Conduct market research to find new opportunities."
    ],
    required: [
      "Any graduate degree.",
      "Good communication & interpersonal skills.",
      "Ability to work with targets."
    ],
    preferred: ["Prior experience in IT sales."],
    perks: [
      "Incentives on performance.",
      "Career growth opportunities."
    ]
  },
  {
    id: "graphic-designer",
    title: "Graphic Designer",
    location: "Pune, India",
    type: "Full-time",
    about:
      "We are hiring a creative Graphic Designer to produce engaging and visually appealing designs for branding and marketing purposes.",
    responsibilities: [
      "Create designs for social media, websites, and marketing materials.",
      "Collaborate with the marketing and development teams.",
      "Ensure brand consistency across all designs."
    ],
    required: [
      "Proficiency in Adobe Photoshop, Illustrator, Figma, or similar tools.",
      "Creativity and attention to detail."
    ],
    preferred: ["Experience in UI/UX design."],
    perks: [
      "Creative freedom in projects.",
      "Flexible working environment."
    ]
  },
  {
    id: "telecaller",
    title: "Telecaller",
    location: "Pune, India",
    type: "Full-time",
    about:
      "We are seeking Telecallers to handle customer inquiries and generate leads through outbound calls.",
    responsibilities: [
      "Call prospective customers to explain services.",
      "Maintain call records and follow up on leads.",
      "Achieve call and conversion targets."
    ],
    required: [
      "Good verbal communication in English & Hindi.",
      "Basic computer knowledge."
    ],
    preferred: ["Prior experience in telemarketing."],
    perks: [
      "Incentives based on conversions.",
      "Comfortable workspace."
    ]
  },
  {
    id: "sap-consultant",
    title: "SAP Consultant",
    location: "Pune, India",
    type: "Full-time",
    about:
      "We are looking for an SAP Consultant to implement, configure, and support SAP solutions for clients.",
    responsibilities: [
      "Analyze business processes and recommend SAP solutions.",
      "Configure SAP modules as per requirements.",
      "Provide support, testing, and documentation."
    ],
    required: [
      "Bachelor’s in IT, Computer Science, or related field.",
      "SAP module expertise (e.g., FI, MM, SD)."
    ],
    preferred: ["SAP certification."],
    perks: [
      "Exposure to diverse industry projects.",
      "Training and certifications support."
    ]
  },
  {
    id: "sap-trainer",
    title: "SAP Trainer",
    location: "Pune, India",
    type: "Part-time/Contract",
    about:
      "We are hiring an SAP Trainer to provide professional training sessions for individuals and corporate teams.",
    responsibilities: [
      "Deliver structured SAP training programs.",
      "Prepare training materials and assignments.",
      "Assess learner progress."
    ],
    required: [
      "Strong expertise in SAP modules.",
      "Excellent presentation and communication skills."
    ],
    preferred: ["Corporate training experience."],
    perks: [
      "Flexible work schedule.",
      "Competitive hourly pay."
    ]
  }
];

const JobDetailsPage = () => {
  const location = useLocation();

  // Smooth scroll to the section if hash is present
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  const handleApply = (title) => {
    const receiver = "hr@encegenailabs.com";
    const subject = `Job Application – ${title}`;
    const body = `Dear HR,\n\nPlease find attached my resume for the position of ${title}.\n\nThanks & Regards,`;
    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      receiver
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailURL, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="details-background">
      <div className="details-container">
        <h1 className="details-main-title">Job Details</h1>
        {jobDetails.map((job, idx) => (
          <div key={idx} id={job.id} className="job-details-card" tabIndex="-1">
            <div className="job-details-header">
              <h2>{job.title}</h2>
              <span className="details-meta">
                {job.location} • {job.type}
              </span>
              <button
                className="apply-btn-side"
                onClick={() => handleApply(job.title)}
              >
                Apply Now
              </button>
            </div>
            <p className="job-details-about">{job.about}</p>
            <h3>Key Responsibilities:</h3>
            <ul>
              {job.responsibilities.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
            <h3>Required Skills & Qualifications:</h3>
            <ul>
              {job.required.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
            {job.preferred.length > 0 && (
              <>
                <h3>Preferred Qualifications:</h3>
                <ul>
                  {job.preferred.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </>
            )}
            <h3>Perks & Benefits:</h3>
            <ul>
              {job.perks.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobDetailsPage;
