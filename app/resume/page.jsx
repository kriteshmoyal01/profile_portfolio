import React from "react";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// About data
const about = {
  title: "About Me",
  description:
    "I'm a passionate developer with a keen interest in building efficient, scalable web applications. Skilled in modern web technologies, I enjoy creating solutions that make a real impact. Always eager to learn and improve, I'm focused on developing both my technical skills and collaborative capabilities.",
};

// Personal information
const personalInfo = [
  { fieldName: "Name", fieldValue: "Kritesh Moyal" },
  { fieldName: "Email", fieldValue: "kartikdewani01@gmail.com" },
  { fieldName: "Phone", fieldValue: "9571135533" },
  { fieldName: "Address", fieldValue: "NIT Raipur, Raipur, Chhattisgarh" },
  { fieldName: "Profession", fieldValue: "Senior Software Development Engineer" },
  { fieldName: "Company", fieldValue: "Bioinformatics Company" },
  { fieldName: "Freelance", fieldValue: "Available" },
  { fieldName: "Languages", fieldValue: "English, Hindi" },
  { fieldName: "Experience", fieldValue: "2+ Years" },
  { fieldName: "Skype", fieldValue: "kritesh.moyal" },
];

// Experience data
const experiences = [
  {
    company: "Tech Solution",
    position: "Senior Software Development Engineer",
    duration: "2+ years",
    description:
      "Developed scalable web applications using React, Next.js, and Tailwind CSS. Contributed to bioinformatics projects, ensuring optimal performance and reliability.",
  },
  {
    company: "Another Tech Firm",
    position: "Frontend Developer",
    duration: "1 year",
    description: "Worked on UI/UX improvements and responsive designs.",
  },
];

// Education data
const education = [
  {
    institution: "NIT Raipur",
    degree: "Bachelor of Technology in Computer Science",
    duration: "2017 - 2021",
    description: "Graduated with distinction. Specialized in web development.",
  },
];

// Resume component
const Resume = () => {
  return (
    <div className="p-6">
      {/* About Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold">{about.title}</h2>
        <p className="mt-2">{about.description}</p>
      </section>

      {/* Personal Info Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold">Personal Information</h2>
        <ul className="mt-2">
          {personalInfo.map((info, index) => (
            <li key={index}>
              <strong>{info.fieldName}: </strong>
              {info.fieldValue}
            </li>
          ))}
        </ul>
      </section>

      {/* Experience Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold">Experience</h2>
        <ul className="mt-2">
          {experiences.map((exp, index) => (
            <li key={index} className="mb-4">
              <h3 className="font-semibold">{exp.company}</h3>
              <p>{exp.position} - {exp.duration}</p>
              <p>{exp.description}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Education Section */}
      <section>
        <h2 className="text-2xl font-bold">Education</h2>
        <ul className="mt-2">
          {education.map((edu, index) => (
            <li key={index} className="mb-4">
              <h3 className="font-semibold">{edu.institution}</h3>
              <p>{edu.degree} - {edu.duration}</p>
              <p>{edu.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Resume;

