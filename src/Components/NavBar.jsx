import React from "react";

function NavBar() {
  return (
    <div class="main-cont">
      <nav class="navbar navbar-expand-lg navbar-light lg-light">
        <a class="navbar-brand" href="#">
          Pizza-House
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link" href="#">
              Home <span class="sr-only">(current)</span>
            </a>
            <a class="nav-link" href="#">
              Menu
            </a>
            <a class="nav-link" href="#">
              About
            </a>
            <a class="nav-link" href="#">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
