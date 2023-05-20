import React from "react";
import style from "./About.module.css";

export default function About() {
  return (
    <section className="bg-success py-5 min-vh-100 d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="about-title d-flex justify-content-center align-items-center flex-column">
          <h2 className="text-white fs-1">About</h2>
          <div className={`${style.icon} mb-4`}>
            <i className="fa-solid fa-star fs-3 text-white"></i>
          </div>
        </div>
        <div className="about-content">
          <div class="row">
            <div class="col-lg-4 ms-auto">
              <p class="lead text-white fw-normal">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div class="col-lg-4 me-auto">
              <p class="lead text-white fw-normal">
                You can create your own custom avatar for the masthead, change
                the icon in the dividers, and add your email address to the
                contact form to make it fully functional!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
