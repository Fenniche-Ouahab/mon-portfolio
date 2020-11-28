import React from "react";

const Educationcard = ({ education: { icon, title, about } }) => (
  <div className="col-lg-6">
    <div className="education-card">
      <img src={icon} alt="icon" className="education-card__icon" />
      <div className="education-card-body">
        <h5 className="education-card__title">{title}</h5>
        <p className="education_card_content">{about}</p>
      </div>
    </div>
  </div>
);

export default Educationcard;
