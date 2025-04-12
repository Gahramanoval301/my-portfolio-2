'use client';

import React from 'react';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaSass, FaJs, FaReact } from 'react-icons/fa';
import { FaCheck, FaRotate } from 'react-icons/fa6'; // FontAwesome 6 icons
import { SiTypescript, SiTailwindcss, SiRedux, SiNextdotjs, SiSupabase, SiI18Next, SiFormik, SiSwiper, SiPhp, SiMysql } from 'react-icons/si';
import "./services.scss"


const skills = [
  { name: 'HTML5', icon: <FaHtml5 /> },
  { name: 'CSS3', icon: <FaCss3Alt /> },
  { name: 'Bootstrap', icon: <FaBootstrap /> },
  { name: 'Material UI', icon: <FaCheck /> },
  { name: 'Ant Design', icon: <FaCheck /> },
  { name: 'Tailwind.css', icon: <SiTailwindcss /> },
  { name: 'SASS', icon: <FaSass /> },
  { name: 'JavaScript', icon: <FaJs /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'React.js', icon: <FaReact /> },
  { name: 'Redux Toolkit', icon: <SiRedux /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'SupaBase', icon: <SiSupabase /> },
  { name: 'i18next', icon: <SiI18Next /> },
  { name: 'Formik', icon: <SiFormik /> },
  { name: 'Swiper.js', icon: <SiSwiper /> },
  { name: 'TanStack Query', icon: <FaCheck /> },
  { name: 'React Slick/Modal', icon: <FaCheck /> },
  { name: 'Toastify', icon: <FaCheck /> },
  { name: 'Framer Motion', icon: <FaRotate />, progressing: true },
  { name: 'Vue.js', icon: <FaCheck />, progressing: true },
];

const backendSkills = [
  { name: 'MS-SQL (basic)', icon: <FaCheck /> },
  { name: 'C# (basic)', icon: <FaCheck /> },
  { name: 'Python (basic)', icon: <FaCheck /> },
  { name: 'MVC (basic)', icon: <FaRotate />, progressing: true },
  { name: 'PHP', icon: <SiPhp />, progressing: true },
  { name: 'Laravel', icon: <FaRotate />, progressing: true },
  { name: 'MySQLi', icon: <SiMysql />, progressing: true },
];

const softSkills = [
  'Problem Solving',
  'Analytical Thinking',
  'Adaptability',
  'Flexibility',
  'Collaboration',
  'Innovation',
  'Empathy',
  'Time Management',
  'Teamwork',
];

export default function Services() {
  return (
    <section className="skills" id="skills">

      <div className="skills-row">
        {/* Coding Skills */}
        <div className="skills-column">
          <h3 className="title">
            Coding Skills <span className="animate scroll" style={{ "--i": 2 }}></span>
          </h3>
          <div className="skills-box">
            <div className="skills-content">
              {skills.map(({ name, icon, progressing }, index) => (
                <div key={name} className={`progress ${progressing ? 'progressing' : ''}`}>
                  <h3>{name}</h3>
                  <i>{icon}</i>
                </div>
              ))}

              <h3>For Backend</h3>
              {backendSkills.map(({ name, icon, progressing }) => (
                <div key={name} className={`progress ${progressing ? 'progressing' : ''}`}>
                  <h3>{name}</h3>
                  <i>{icon}</i>
                </div>
              ))}
            </div>
            <span className="animate scroll" style={{ "--i": 3 }}></span>
          </div>
        </div>

        {/* Soft Skills */}
        <div className="skills-column">
          <h3 className="title">
            Soft Skills <span className="animate scroll" style={{ "--i": 2 }}></span>
          </h3>
          <div className="skills-box">
            <div className="skills-content">
              {softSkills.map((skill, idx) => (
                <div key={skill} className="progress">
                  <h3>
                    {skill}
                    {idx === 0 && (
                      <span className="animate scroll" style={{ "--i": 4 }}></span>
                    )}
                  </h3>
                  <i><FaCheck /></i>
                </div>
              ))}
            </div>
            <span className="animate scroll" style={{ "--i": 5 }}></span>
          </div>
        </div>
      </div>
    </section>
  );
}
