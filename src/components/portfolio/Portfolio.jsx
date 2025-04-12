import React, { useRef } from 'react'
import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
const items = [
    {
        id: 1,
        title: "Lucebra Intenational Educational Platform",
        githubLink: "",
        position: "Startup Project (Frontend Developer)",
        href: "https://lucebra.com",
        date: "January 2024-Present (Remote)",
        img: "/projects/lucebra.png",
        desc: "It is an international educational platform. fixing bugs, make responsive design and user-friendly, additional adding some translations, integrating api requests, checking data based on user management, make dark-mode avaliable for users, and correcting some designs.",
        techStack: "Next.js, Material UI, Typescript, Zustand, Axios, Toastify, Swiper.js, i18next, Formik-Yup and etc"
    },
    {
        id: 3,
        title: "TURKIECOSYSTEM",
        position: "Mern-Stack Developer",
        href: "https://turkiecosystem.vercel.app/en",
        date: "December 2024 - April 2025 (Remote)",
        img: "/projects/turkiecosystem.png",
        desc: "I created this website for the client from CEF Academy. I did everything from scratch for frontend without any team members. I have created good pattern structure, responsive design and user-friendly for users and integrating api requests. For Backend I was working with the team members from CEF Academy.",
        techStack: "Next.js, Typescript, Ant Design, Axios, Toastify, Swiper.js, Formik-Yup"
    },
    {
        id: 2,
        title: "Regional BOKT",
        position: "Frontend Developer",
        githubLink: "https://github.com/Gahramanoval301/regional-bokt",
        href: "https://regional-bokt.vercel.app",
        date: "August 2024 - October 2024 (Remote)",
        img: "/projects/regional-bokt.png",
        desc: "I created this website for the client from CEF Academy. I use there both frontend and backend framework without any team members.",
        techStack: "Next.js, Material UI, Typescript, Tailwind.CSS, Axios, Toastify, Swiper.js, Formik-Yup and etc"
    },
    {
        id: 5,
        title: "Mindmap",
        position: "Frontend Developer Team Lead",
        href: "https://mindmap.az/",
        date: "February 2024 - April 2025 (Remote)",
        img: "/projects/mindmap.png",
        desc: "I divided tasks over interns for api integration, I have helped and teach integrating api requests to frontend interns.",
        techStack: "Next.js, SCSS"
    },
    {
        id: 6,
        title: "Old Portfolio Website",
        position: "Frontend Developer",
        href: "https://lemanportfolio.netlify.app/",
        githubLink: "https://github.com/Gahramanoval301/potfolio_website",
        date: "Regularly Updates",
        img: "/projects/leman-portfolio.png",
        desc: "It is my old portfolio website which I used to show my skills and projects.",
        techStack: "HTML5, CSS3, Javscript"
    },
    {
        id: 7,
        title: "EmkiProduction",
        position: "Frontend Developer",
        githubLink: "https://github.com/Gahramanoval301/emkiprod/tree/main/emkiprod-react",
        href: "https://emkiprod-react.vercel.app/",
        date: "August 2024 - September 2024 (Remote)",
        img: "/projects/emkiproduction.png",
        desc: " This is project which i created in the during of internship in MyMentopship. Here we have learned working with real project structure and team well.",
        techStack: "React.js, Tailwind.css, React-Slider, Swiper.js, i18next "
    },
    {
        id: 8,
        title: "Weather Application",
        position: "Frontend Developer",
        githubLink: "https://github.com/Gahramanoval301/weather-app",
        href: "https://emkiprod-react.vercel.app/",
        date: "May 2024 (Remote)",
        img: "/projects/weather-app.png",
        desc: "This is project which i created in the during of internship in Apponex. The data are fetched dynamically from an API.",
        techStack: "HTML5, CSS3, Javascript, Fetch API, OpenWeatherMap API"
    },
    {
        id: 9,
        title: "E-commerce Shoes",
        position: "Frontend Developer",
        githubLink: "https://github.com/Gahramanoval301/e_commerce_internship",
        href: "https://leman-commerce-internship-2.vercel.app/",
        date: "April 2024 (Remote)",
        img: "/projects/ecommerce-shoes.png",
        desc: "This is project which i created in the during of internship in Synexoo.",
        techStack: "React.js, CSS3, React-Router, Redux Toolkit, Axios, Sweet Alerts"
    },
    {
        id: 10,
        title: "Product Gallery",
        position: "Frontend Developer",
        githubLink: "https://github.com/Gahramanoval301/ProductGalleryEcm",
        href: "https://product-gallery-ecm.vercel.app/",
        date: "May 2024 (Remote)",
        img: "/projects/product-gallery.png",
        desc: "This is project which i have created in the during of internship in Apponex.",
        techStack: "React.js, Typescript, React-Router, Redux Toolkit, React-Modal, Swiper.js"
    },
    {
        id: 11,
        title: "SaaS Community",
        position: "Frontend Developer",
        githubLink: "https://github.com/Gahramanoval301/SaaS-Community",
        href: "https://product-gallery-ecm.vercel.app/",
        date: "May 2024 (Remote)",
        img: "/projects/saas-community.png",
        desc: "I will develop that project when I finish my frontend development course in JET Academy. After that I gain differented certificate by Jet Academy in frontend development",
        techStack: "React.js, React-Router, Swiper.js"
    },
]

const Single = ({ item }) => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        // offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-220, 300]);

    return <section >
        <div className="container">
            <div className="wrapper">
                <div ref={ref} className="imageContainer">
                    <a href={item.href} target='_blank' rel="noreferrer">
                        <img src={item.img} alt={item.title} />
                    </a>
                </div>
                <motion.div className="textContainer" style={{ y }}>
                    <h2>{item.title} </h2>
                    <em>{item.position} |  {item.date}</em>
                    <p>{item.desc}</p>
                    <div>
                        <h4>Tech Stack:</h4>
                        {item.techStack}
                    </div>
                    <div className='buttons'>
                        <button onClick={() => window.open(item.href, "_blank")}>See Demo</button>
                        {

                            item.githublink !== " " && <button onClick={() => window.open(item.githubLink, "_blank")}>Github Link</button>
                        }
                    </div>
                 
                </motion.div>
            </div>
        </div>
    </section>
}
const Portfolio = () => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] });
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    })
    return (
        <div className='portfolio' ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>

            {items.map(item => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Portfolio