import React from "react";
import "../Styles/Card.css";

export const Card = ({ nameCourse, imageCourse, shortName, per, quad }) => {
  return (
    <div>
      <div
        class={quad == 1 ? "card border-card-red" : "card border-card-green"}
      >
        <div class="wrapper-image">
          <img
            src={require(`../Image/${imageCourse}.png`)}
            alt={imageCourse}
          ></img>
        </div>
        <p class="title">{shortName}</p>
        <p class="info">
          {nameCourse} - ({per})
        </p>
      </div>
    </div>
  );
};
