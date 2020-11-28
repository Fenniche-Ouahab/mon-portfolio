import React from "react";

import { motion } from "framer-motion";
import education from "./../data/education_data";
import Educationcard from "./Educationcard.js";
import "./education.css";
import "../../index";
const Education = () => {
  const education_variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.6,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        ease: "easeInOut",
      },
    },
  };
  return (
    <motion.div
      className="education"
      variants={education_variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h6 className="education__intro">
        J'ai suivi ma formation à l'université d'artois
      </h6>
      <div className="container education_container">
        <h6 className="education__heading">Mon parcours</h6>
        <div className="row">
          {education.map((education) => (
            <Educationcard education={education} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
