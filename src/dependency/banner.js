import React from "react";
import "../styles.css";

export default function(props) {
  return (
    <div className="banner">
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          />
          <li data-target="#carouselExampleIndicators" data-slide-to="1" />
        </ol>
        <div class="carousel-inner" role="listbox">
          <div class="carousel-item active">
            <img
              class="d-block w-100"
              src="https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_1366/v1579523537/WebBanner/Banner98.jpg"
              alt="First slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_1366/v1580292174/WebBanner/Banner101.png"
              alt="Second slide"
            />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true" />
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true" />
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}
