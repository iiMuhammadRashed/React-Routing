import React from "react";
import style from "./footer.module.css";

export default function Footer() {
  return <>
  <footer className={`${style.footer} p-5 text-white`}>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="item mb-4">
            <h4 className="mb-4 fw-bold text-center">LOCATION</h4>
            <p className="text-center">
              2215 John Daniel Drive <br />
              Clark, MO 65243
            </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="item mb-4">
            <h4 className="fw-bold mb-4 text-center">AROUND THE WEB</h4>
            <div className="social-icons text-center">
            <a href="" className="btn btn-outline-light btn-social mx-1 rounded-circle border border-2">
            <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="" className="btn btn-outline-light btn-social mx-1 rounded-circle border border-2">
            <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="" className="btn btn-outline-light btn-social mx-1 rounded-circle border border-2 border">
            <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="" className="btn btn-outline-light btn-social mx-1 rounded-circle border border-2">
            <i className="fa-brands fa-dribbble"></i>
            </a>
            </div>
            </div>
          </div>
          <div className="col-md-4">
            <h4 className="text-center mb-3 fw-bold">ABOUT FREELANCER</h4>
            <p className="fs-5 text-center">Freelance is a free to use, MIT <br /> licensed Bootstrap theme created by <br /> Route</p>
          </div>
        </div>
      </div>
    </footer>
    <div className="copyright bg-dark p-3 text-center">
        <small className="text-white">Copyright © Mohamed Khaled 2023</small>
    </div>
  </>
}
