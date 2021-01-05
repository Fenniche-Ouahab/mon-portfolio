import React from "react";

const Internshipcard = ({ internship: { icon, title, about, langage } }) => (
  <div className="col-lg-6">
    <div className="internship-card">
      <img src={icon} alt="icon" className="internship-card__icon" />
      <div className="internship-card-body">
        <h5 className="internship-card__title">{title}</h5>
        <p className="internship_card_content">{about}</p>
        <h6 className="internship_card_langage">{langage}</h6>
      </div>
    </div>
  </div>
);

export default Internshipcard;
