import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Features = ({ title, ReadMore, icon }) => (
  <div className="feature-item">
    <i>
      <FontAwesomeIcon icon={icon} />
    </i>
    <h4>{title}</h4>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas velit
      reprehenderit neque officia molestiae fuga quaerat ad mollitia! Inventore,
      mollitia.
    </p>
    <a href="#something" className="button">
      {ReadMore}
    </a>
  </div>
);

export default Features;
