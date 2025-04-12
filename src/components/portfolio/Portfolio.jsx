import React, { useRef } from 'react'
import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
const items = [
    {
        id: 1,
        title: "React Commerce",
        img: "https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum placeat ipsa perferendis, quibusdam officiis tempora totam voluptatum distinctio explicabo assumenda incidunt? Ea eveniet dicta distinctio sed eum modi fugit aut, porro debitis reprehenderit ut ullam iusto, cum nam dolorem cumque repellendus vel praesentium voluptate quos, totam id. Error, molestiae eaque."
    },
    {
        id: 2,
        title: "Nextşjs Commerce",
        img: "https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum placeat ipsa perferendis, quibusdam officiis tempora totam voluptatum distinctio explicabo assumenda incidunt? Ea eveniet dicta distinctio sed eum modi fugit aut, porro debitis reprehenderit ut ullam iusto, cum nam dolorem cumque repellendus vel praesentium voluptate quos, totam id. Error, molestiae eaque."
    },
    {
        id: 3,
        title: "Vanila Commerce",
        img: "https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum placeat ipsa perferendis, quibusdam officiis tempora totam voluptatum distinctio explicabo assumenda incidunt? Ea eveniet dicta distinctio sed eum modi fugit aut, porro debitis reprehenderit ut ullam iusto, cum nam dolorem cumque repellendus vel praesentium voluptate quos, totam id. Error, molestiae eaque."
    },
    {
        id: 4,
        title: "Music App",
        img: "https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum placeat ipsa perferendis, quibusdam officiis tempora totam voluptatum distinctio explicabo assumenda incidunt? Ea eveniet dicta distinctio sed eum modi fugit aut, porro debitis reprehenderit ut ullam iusto, cum nam dolorem cumque repellendus vel praesentium voluptate quos, totam id. Error, molestiae eaque."
    },
]

const Single = ({ item }) => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        // offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return <section >
        <div className="container">
            <div className="wrapper">
                <div ref={ref} className="imageContainer">

                    <img src={item.img} alt="" />
                </div>
                <motion.div className="textContainer" style={{ y }}>
                    <h2 >{item.title}</h2>
                    <p>{item.desc}</p>
                    <button>See Demo</button>
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