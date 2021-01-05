import React from "react";
import github from "../assets/icons/github.svg";
import profil from "../assets/profil.jpg";
import background from "../assets/background.jpg";
import tie from "../assets/icons/tie.svg";
import pin from "../assets/icons/pin.svg";
import linkedin from "../assets/icons/linkedin.svg";
import twitter from "../assets/icons/twitter.svg";
import CV from "../assets/CvFenniche2021.pdf";
import { motion } from "framer-motion";

const Sidebar = () => {
  const handleEmailMe = () => {
    window.open("mailto:ouahabfenniche@outlook.fr");
  };

  const sidebar_variant = {
    hidden: {
      x: "-20vw",
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.1,
        duration: 0.5,
        type: "spring",
      },
    },
  };
  return (
    <motion.div
      className="sidebar"
      variants={sidebar_variant}
      initial="hidden"
      animate="visible"
    >
      <img src={profil} alt="avatar" className="sidebar__avatar" />
      <div className="sidebar__name">
        Ouahab <span>FENNICHE</span>
      </div>
      <div className="sidebar__item sidebar__title">Développeur Full-Stack</div>
      <a href={CV} download="CvFenniche2021.pdf">
        <div className="sidebar__item sidebar__resume">
          <img src={tie} alt="CV" className="sidebar__icon" /> Télécharger mon
          CV
        </div>
      </a>
      <figure className="sidebar__social-icons my-2">
        <a href="https://www.linkedin.com/in/fenniche-ouahab/">
          <img src={linkedin} alt="linkedin" className="sidebar__icon mr-3" />
        </a>

        <a href="https://twitter.com/OuahabFenniche">
          <img src={twitter} alt="twitter" className="sidebar__icon" />
        </a>
      </figure>
      <div className="sidebar__contact">
        <div className="sidebar__item sidebar__github">
          <a href="https://github.com/Fenniche-Ouahab">
            <img src={github} alt="github" className="sidebar__icon mr-3" />{" "}
            github
          </a>
        </div>
        <div className="sidebar__location">
          <img src={pin} alt="location" className="sidebar__icon mr-3" />
          Île-de-France,  France
        </div>
        <div className="sidebar__item">ouahabfenniche@outlook.fr</div>
        <div className="sidebar__item">+33(0)758750137</div>
      </div>
      <div className="sidebar__item sidebar__email" onClick={handleEmailMe}>
        Contactez moi
      </div>
    </motion.div>
  );
};

export default Sidebar;
