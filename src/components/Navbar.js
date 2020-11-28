import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const NavBar = () => {
  const [active, setActive] = useState("");
  useEffect(() => {
    let currentURL = window.location.href;
    console.log(currentURL);
    if (currentURL.endsWith("/")) setActive("À propos");
    else if (currentURL.endsWith("/formations")) setActive("Formations");
    else if (currentURL.endsWith("/stages")) setActive("Stages");
    else if (currentURL.endsWith("/projets")) setActive("Projets");
    else if (currentURL.endsWith("/connaissance")) setActive("Compétences");
  }, [active]);

  const navbar_variant = {
    hidden: {
      y: "-38vh",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.7,
        type: "spring",
      },
    },
  };

  return (
    <motion.div
      className="navbar"
      variants={navbar_variant}
      initial="hidden"
      animate="visible"
    >
      <div className="navbar__active">{active}</div>
      <div className="navbar__items">
        {active !== "À propos" && (
          <Link to="/">
            <div className="navbar__item" onClick={() => setActive("À propos")}>
              À propos
            </div>
          </Link>
        )}

        {active !== "Stages" && (
          <Link to="/stages">
            <div className="navbar__item" onClick={() => setActive("Stages")}>
              Stages
            </div>
          </Link>
        )}
        {active !== "Compétences" && (
          <Link to="/connaissance">
            <div
              className="navbar__item"
              onClick={() => setActive("Compétences")}
            >
              Compétences
            </div>
          </Link>
        )}

        {active !== "Projets" && (
          <Link to="/projets">
            <div
              className="navbar__item"
              onClick={() => setActive("Projets")}
            >
              Projets
            </div>
          </Link>
        )}


        {active !== "Formations" && (
          <Link to="/formations">
            <div
              className="navbar__item"
              onClick={() => setActive("Formations")}
            >
              Formations
            </div>
          </Link>
        )}
      </div>
    </motion.div>
  );
};

export default NavBar;
