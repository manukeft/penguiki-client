import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <>
      <div key={props.id} className="card">
        <img
          src={props.imagen}
          alt={props.nombre}
          className="imagen img-responsive"
        />
        <div className="card-body">
          <h4 className="card-text nombre-cientifico">{props.nombre}</h4>
          <p className="card-text nombre-comun">{props.nombre2}</p>
        </div>
      </div>
    </>
  );
};

export default Card;