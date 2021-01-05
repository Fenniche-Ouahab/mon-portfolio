import React from "react";

import { motion } from "framer-motion";
import { tools, languages } from "../data/skills_data";
import Bar from "./../Bar";

import "./skills.css";
const Skills = () => {
  const skills_variants = {
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
      className="skills"
      variants={skills_variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h6 className="skills__intro">
        Voici quelques langages, framework, outils et logiciels que j'ai
        utilisés ou sur lesquelles j'ai des notions
      </h6>
      <h6 className="skills__heading">Language et Framework</h6>

      <div className="container skills_container">
        <div className="row">
          {languages.map((language) => (
            <Bar value={language} />
          ))}
        </div>
      </div>
      <h6 className="skills__heading">Outils et logiciels</h6>
      <div className="container skills_container">
        <div className="row">
          {tools.map((tool) => (
            <Bar value={tool} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
