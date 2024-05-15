import React from "react";

function Hero() {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://thumbs.dreamstime.com/b/pieces-pizza-different-various-types-banner-old-retro-boards-still-life-concept-closeup-129819511.jpg?w=1600"
            className="d-block w-100"
            alt="..."
          />
        </div>

        <div className="carousel-item">
          <img src="./images/3.avif" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img
            src="https://media.istockphoto.com/id/842082336/photo/homemade-veggie-pizza-with-mushrooms-peppers.webp?b=1&s=170667a&w=0&k=20&c=yxVCynphFn1pnJqXrzUKYX0Q55JhI0KqVe7EZ-_mrtM="
            className="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-target="#carouselExampleControls"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-target="#carouselExampleControls"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </button>
    </div>
  );
}

export default Hero;
