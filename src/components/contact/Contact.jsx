import React, { useState } from 'react'
import "./contact.scss"
import { easeIn, motion } from "framer-motion"
import { sendMessage } from '../../api';

const variants = {
    initial: {
        y: 500,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1
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
    const [data, setData] = useState({ title: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleSubmit = async (e) => {
        try {

            setIsSubmitting(true);
            e.preventDefault();
            console.log(data);
            const res = await sendMessage(data);
            console.log(res);
            if (res.success) {
                alert("Thank you for your message!")
                setData({ title: "", email: "", message: "" })
            }
        } catch {
            alert("Please try again!")
        }
        finally {
            setIsSubmitting(false);
        }
    }
    return (
        <motion.div className='contact' variants={variants} initial={"initial"} whileInView={"animate"}>
            <motion.div className="textContainer" variants={variants} initial={"initial"} whileInView={"animate"}>
                <motion.h1 variants={variants} >Let&apos;s work together</motion.h1>
                <motion.div variants={variants} className="item">
                    <h2>Mail</h2>
                    <span>gahramanovalamann@gmail.com</span>
                </motion.div>
                <motion.div variants={variants} className="item">
                    <h2>Address</h2>
                    <span>Azerbaijan, Baku</span>
                </motion.div>
                <motion.div variants={variants} className="item">
                    <h2>Phone</h2>
                    <span>+994513106096</span>
                </motion.div>

            </motion.div>
            <motion.div variants={formVariants} initial="initial" whileInView={"animate"} className="formContainer">
                <motion.form variants={formVariants} initial="initial" whileInView={"animate"}>
                    <motion.input onChange={(e) => setData((data) => ({ ...data, title: e.target.value }))} value={data.title} name='title' type="text" required placeholder='Name' />
                    <motion.input onChange={(e) => setData((data) => ({ ...data, email: e.target.value }))} value={data.email} name='email' type="email" required placeholder='Email' />
                    <motion.textarea onChange={(e) => setData((data) => ({ ...data, message: e.target.value }))} value={data.message} name='message' rows={8} placeholder='Message' id="" />
                    <motion.button onClick={(e) => handleSubmit(e)}>{isSubmitting ? "Submitting..." : "Submit"}</motion.button>
                </motion.form>
            </motion.div>
        </motion.div>
    )
}

export default Contact