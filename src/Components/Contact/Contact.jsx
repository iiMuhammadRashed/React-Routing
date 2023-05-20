import React from "react";
import style from "./Contact.module.css";

export default function Contact() {
  return (
    <section className="py-5 min-vh-100 mt-5">
      <div className="container">
        <div className="contact">
          <div className="contact-title d-flex justify-content-center align-items-center flex-column mb-3">
            <h2>CONTACT ME</h2>
            <div className={`${style.icon} mb-4`}>
              <i className="fa-solid fa-star fs-3 text-dark"></i>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <form className="mb-3">
                <div className="control-group">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="Name"
                    />
                    <label htmlFor="floatingInput">Name</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label htmlFor="floatingInput">Email Address</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="tel"
                      className="form-control"
                      id="floatingInput"
                      placeholder="Phone"
                    />
                    <label htmlFor="floatingInput">Phone Number</label>
                  </div>
                  <div className="form-floating">
                    <textarea
                      className="form-control h-25"
                      placeholder="Leave a comment here"
                      id="floatingTextarea2"
                      rows={5}
                    ></textarea>
                    <label htmlFor="floatingTextarea2">Message</label>
                  </div>
                </div>
              </form>
              <button className="btn btn-success d-inline-block fs-4">Send</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
