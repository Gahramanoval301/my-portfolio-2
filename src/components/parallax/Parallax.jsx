import { useRef } from "react";
import "./parallax.scss"
import { motion, useScroll, useTransform } from "framer-motion"

const Parallax = ({ type }) => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({ target: ref, offset:["start start", "end start"] });
    
    const yText= useTransform(scrollYProgress, [0,1], ["0%", "500%"])
    const yBg= useTransform(scrollYProgress, [0,1], ["0%", "100%"])
    return (
        <div className='parallax' ref={ref} style={{ backgroundImage: type === "services" ? "linear-gradient(180deg, #464679, #0c0c1d, #000000)" : "linear-gradient(180deg, #111132,rgb(74, 74, 130), rgb(245, 239, 203))" }}>
            <motion.h1 style={{y:yText}}> {type === "services" ? "What We Do?" : "What We Did?"}</motion.h1>
            <motion.div className="mountains"></motion.div>
            <motion.div  className="planets"
                style={{ y: yBg, backgroundImage: `url(${type === "services" ? "/planets.png" : "/sun.png"})`}}></motion.div>
            <motion.div style={{ x: yBg }}  className="stars"></motion.div>
        </div>
    )
}

export default Parallax