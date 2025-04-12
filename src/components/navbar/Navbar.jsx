import React from "react";
import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";
import { FaLinkedin } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa6";

// <a target="_blank" href="https://github.com/Gahramanoval301"><i
//                       class="fa-brands fa-github"></i></a>
//               <a target="_blank"
//                   href="https://www.linkedin.com/in/leman-gahramanova-0a3b6b2a5"><i
//                       class="fa-brands fa-linkedin-in"></i></a>
//               <a target="_blank"
//                   href="https://medium.com/@gahramanovalamann">
//                   <i class="fa-brands fa-medium"></i>
//               </a>
//               <a target="_blank"
//                   href="https://drive.google.com/file/d/14sHOEOxZlt89opVV2R1rKgx7YZBXzDh4/view?usp=sharing">
//                   <i class="fa-solid fa-newspaper">

//                   </i> </a>
const socialMedias = [
  {
    id: 0,
    link: "https://github.com/Gahramanoval301",
    icon: <FaGithub />,
  },
  {
    id: 1,
    link: "https://www.linkedin.com/in/leman-gahramanova-0a3b6b2a5",
    icon: <FaLinkedin />,
  },
  {
    id: 2,
    link: "https://medium.com/@gahramanovalamann",
    icon: <FaMedium />,
  },
  {
    id: 3,
    link: "https://drive.google.com/file/d/14sHOEOxZlt89opVV2R1rKgx7YZBXzDh4/view?usp=sharing",
    icon: <FaNewspaper />,
  },
  {
    id: 4,
    link: "https://drive.google.com/file/d/14sHOEOxZlt89opVV2R1rKgx7YZBXzDh4/view?usp=sharing",
    icon: "CV",
    styles: {marginBottom:5}
  },

]
const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Gahramanova Leman
        </motion.span>
        <div className="social">
          {
            socialMedias.map((socialMedia) => (
              <a
                key={socialMedia.id}
                href={socialMedia.link}
                style={{
                  fontSize: 20,
                  ...(socialMedia.styles || {})
                }}
                target="_blank"
                rel="noreferrer"
              >
                {socialMedia.icon}
              </a>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
