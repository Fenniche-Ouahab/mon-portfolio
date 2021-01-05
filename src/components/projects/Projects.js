import React, { useState } from "react";
import data_projects from "../data/projects_data";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import "../projects/projetcs.css";

const Projects = () => {
  const [projects, setProjects] = useState(data_projects);
  const [active, setActive] = useState("All");
  /* function to filter according to the language or framework */
  const handleFilterCategory = (name) => {
    const new_array = data_projects.filter(
      (project) => project.category.includes(name),
      setActive(name)
    );
    setProjects(new_array);
  };

  const project_variants = {
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
      className="container projects"
      variants={project_variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="projects__navbar">
        <div
          className={active === "All" && "projects__navbar-active"}
          onClick={() => {
            setProjects(data_projects);
            setActive("All");
          }}
        >
          All
        </div>
        <div
          className={active === "react.js" && "projects__navbar-active"}
          onClick={() => handleFilterCategory("react.js")}
        >
          React
        </div>
        <div
          className={active === "angular" && "projects__navbar-active"}
          onClick={() => handleFilterCategory("angular")}
        >
          Angular
        </div>
        <div
          className={active === "java" && "projects__navbar-active"}
          onClick={() => handleFilterCategory("java")}
        >
          Java
        </div>
        <div
          className={active === "php" && "projects__navbar-active"}
          onClick={() => handleFilterCategory("php")}
        >
          Php
        </div>
      </div>
      <div className="row">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
