import React from "react";
import "../styles.css";
export default function(props) {
  return (
    <div>
      <nav class="navbar">
        <h3 className="text-white text-monospace">Food Spot</h3>
        <div>
          {props.viewCart ? (
            <button
              type="button"
              class="btn btn-outline-success"
              onClick={props.hideCart}
            >
              Dashboard
            </button>
          ) : (
            <button
              type="button"
              class="btn btn-outline-success"
              onClick={props.seeCart}
            >
              Cart ({props.cart.length})
            </button>
          )}
        </div>
      </nav>
    </div>
  );
}
