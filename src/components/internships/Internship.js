import React from "react";

import { motion } from "framer-motion";
import internships from "./../data/internship_data";
import Internshipcard from "./Internshipcard.js";
import "./internship.css";
import "../../index";
const Internship = () => {
  const internship_variants = {
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
      className="internship"
      variants={internship_variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h6 className="internship__intro">J'ai fait différents stage ...</h6>
      <div className="container internship_container">
        <h6 className="internship__heading">My different internships</h6>
        <div className="row">
          {internships.map((internship) => (
            <Internshipcard internship={internship} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Internship;
