import React from "react";

const Features = ({ title, ReadMore }) => (
  <div className="feature-item">
    <i className="fas fa-mobile-alt" />
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
