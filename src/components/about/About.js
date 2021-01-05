import React from "react";

import { motion } from "framer-motion";
import sKills from "../data/about_data";
import Skillcard from "./../Skillcard";
import "./about.css";
const About = () => {
  const about_variants = {
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
      className="about"
      variants={about_variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h6 className="about__intro">
        Fraichement sortie de ma formation de l'université d'Artois en tant que
        développeur web et application, je suis activement à la recherche d'un
        poste en tant que développeur Full-Stack afin de mettre en application
        toutes les compétences que j'ai acquis tout au long de ma formation et
        mes différents stages, au sein d'une équipe qui me permettrait de
        continuer à apprendre toujours plus :).
      </h6>
      <div className="container about__container">
        <h6 className="about__heading">Ce que je propose</h6>
        <div className="row">
          {sKills.map((skill) => (
            <Skillcard skill={skill} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default About;
