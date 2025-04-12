import React from 'react'
import "./contact.scss"
import {easeIn, motion} from "framer-motion"

const variants = {
    initial:{
        y: 500,
        opacity:0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren:0.1
        }
    }
}

const formVariants = {
    initial: {
        x: 200,
        opacity: 0.2,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            ease: "easeOut",
            type: "spring",
            stiffness: 200,
            // damping: 12,
            staggerChildren: 0.3,
        },
    },
};

const Contact = () => {
  return (
      <motion.div className='contact' variants={variants} initial={"initial"} whileInView={"animate"}>
          <motion.div className="textContainer" variants={variants} initial={"initial"} whileInView={"animate"}>
              <motion.h1 variants={variants} >Let&apos;s work together</motion.h1>
              <motion.div variants={variants} className="item">
                  <h2>Mail</h2>
                  <span>hello@gmail.com</span>
              </motion.div>
              <motion.div variants={variants} className="item">
                  <h2>Address</h2>
                  <span>hello@gmail.com</span>
              </motion.div>
              <motion.div variants={variants} className="item">
                  <h2>Phone</h2>
                  <span>+994513106096</span>
              </motion.div>
              
          </motion.div>
          <motion.div variants={formVariants} initial="initial" whileInView={"animate"}  className="formContainer">
              <motion.form action="" variants={formVariants} initial="initial" whileInView={"animate"}>
                  <motion.input type="text" required placeholder='Name' />
                  <motion.input type="email" required placeholder='Email' />
                  <motion.textarea rows={8} placeholder='Message' name="" id=""/>
                  <motion.button>Submit</motion.button>
              </motion.form>
          </motion.div>
    </motion.div>
  )
}

export default Contact