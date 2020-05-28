import React from "react";
import "../styles.css";

export default function(props) {
  return (
    <div class="item">
      <h1 class="title-align"> Menu </h1>
      {props.menu.map(({ num, name, src, rate }) => (
        <div class="card">
          <img class="card-img-top" src={src} width="10px" alt="Card cap" />
          <div data-id={num} class="card-body">
            <h5 class="card-title">{name}</h5>
            <p class="badge-price"> Rs {rate} </p>
            <button
              onClick={props.addCart}
              data-id={num}
              data-name={name}
              data-rate={rate}
              class="btn btn-primary"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
