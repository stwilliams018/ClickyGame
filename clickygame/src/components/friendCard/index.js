import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card" onClick={() => props.clickImage(props.id)}>
    <h1 class="name">{props.name}</h1>
      <div className="img-container">
        <img alt ="Hell" src={props.image} />
      </div>
    </div>
  );
}



export default Card;
