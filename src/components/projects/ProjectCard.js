import React from "react";
const ProjectCard = ({ project: { name, image, site_url } }) => {
  return (
    <div className="projectrCard col-md-6 col-lg-4 my-2">
      <figure className="projectCard__wrapper">
        <a href={site_url} target="_blank" rel="noopener noreferrer">
          <img src={image} alt={name} className="projectCard__image" />
        </a>
        <div className="projectCard__title">
          {name}
        </div>
      </figure>
    </div>
  );
};

export default ProjectCard;
