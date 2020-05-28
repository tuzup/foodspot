import React from "react";
import "../styles.css";
export default function(props) {
  return (
    <div>
      <nav className="sidebar">
        <h3 className="text-white title-align">Food Spot</h3>
        <div class="sidecontent">
          <a href="/#" data-id={"all"} onClick={props.makeSelect}>
            All Category
          </a>
          <br />
          <br />
          <a href="/#" data-id={"burger"} onClick={props.makeSelect}>
            Burger
          </a>
          <br />
          <br />
          <a href="/#" data-id={"combo"} onClick={props.makeSelect}>
            Combos
          </a>
          <br />
          <br />
          <a href="/#" data-id={"rice"} onClick={props.makeSelect}>
            Rice
          </a>
        </div>
      </nav>
    </div>
  );
}
