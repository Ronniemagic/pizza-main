import React from "react";

function About() {
  return (
    <div>
      <h1 className="text-center mt-5">About Pizza</h1>

      <div className="row h-auto">
        <div className="col-md-6">
          <img
            src="./images/about.avif"
            className="d-block w-100 h-75"
            alt=""
          />
        </div>
        <div className="col-md-6">
          <p>
            pizza, dish of Italian origin consisting of a flattened disk of
            bread dough topped with some combination of olive oil, oregano,
            tomato, olives, mozzarella or other cheese, and many other
            ingredients, baked quickly—usually, in a commercial setting, using a
            wood-fired oven heated to a very high temperature—and served hot.
            One of the simplest and most traditional pizzas is the Margherita,
            which is topped with tomatoes or tomato sauce, mozzarella, and
            basil. Popular legend relates that it was named for Queen
            Margherita, wife of Umberto I, who was said to have liked its mild
            fresh flavour and to have also noted that its topping colours—green,
            white, and red—were those of the Italian flag.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
