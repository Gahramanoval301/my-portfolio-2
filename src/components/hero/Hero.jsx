import React from 'react'
import "./hero.scss"
import { motion } from "framer-motion"
const Hero = () => {
    const textVariants = {
        initial: {
            x: -500,
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.1
            }
        },
        scrollButton: {
            opacity: 0,
            y: 10,
            transition: {
                duration: 2,
                repeat: Infinity
            }
        }
    }
    const sliderVariants = {
        initial: {
            x: 0,
        },
        animate: {
            x: "-220%",
            transition: {
                repeat: Infinity,
                repeatType: "mirror",
                duration: 20,
            }
        }
    }
    const imageVariants = {
        initial: {
            y: 0,
            opacity:0.7
        },
        animate: {
            y: 10,
            opacity:1,
            transition: {
                duration: 1,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror"
            }
        }
    }
    return (
        <div className='hero'>
            <div className="wrapper">

                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 variants={textVariants}>Gahramanova Leman</motion.h2>
                    <motion.div className='text-animate'>
                        <motion.h1>Full Stack Developer</motion.h1>
                    </motion.div>
                    <motion.div variants={textVariants} className="buttons">
                        <motion.button variants={textVariants} >
                            <a href="#Portfolio">
                                See the Latest Works
                            </a>
                        </motion.button>
                        <motion.button variants={textVariants}>
                            <a href="#Contact">

                                Contact Me
                            </a>
                        </motion.button>
                    </motion.div>
                    <motion.img variants={textVariants} src="/scroll.png" alt="" />

                </motion.div>
            </div>
            <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
                Next.js React.js Vue.js Node.js Express.js MongoDb
            </motion.div>
            <motion.div className="imageContainer" variants={imageVariants} initial="initial" animate="animate">
                <motion.img animate="scrollButton" src="/gahramanova_leman_520.png" alt="" />
            </motion.div>
        </div>
    )
}

export default Hero