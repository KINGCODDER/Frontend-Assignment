import React from "react";
import "./LoginPage.css";
import image from "./Resource/login.png";
import image2 from "./Resource/googlelogo2.png";

function LoginPage() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-transparent">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            LOGO HERE
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  PAGE NO. 2
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  PAGE NO. 3
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button
                className="btn btn-outline-success btn-custom2"
                type="submit"
              >
                Signup
              </button>
              <button
                className="btn btn-outline-success btn-custom mx-4"
                type="submit"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </nav>

      {/* Main form */}

      <div className="card mb-3">
        <div className="card-body">
          <div className="container-box">
            <div className="container-1">
              <img src={image} alt="No image, Check internet connection" />
              <h2>Lorem ipsum dolor sit amet.</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
            <div className="container-2">
              <div className="top-text">
                <h2>Sign Up to Create an Account</h2>
                <p>See what's going on in this world</p>
              </div>

              <button
                type="button"
                className="btn btn-outline-secondary"
                style={{ width: "40%" }}
              >
                <img
                  src={image2}
                  alt=""
                  style={{ width: "14%", marginRight: "8%" }}
                />
                SignUp with Google
              </button>

              <form action="submit" className="login-form">
                <div className="form-floating mb-3">
                  <p style={{ textAlign: "left" }}>Email</p>
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                </div>
                <p style={{ textAlign: "left" }}>Password</p>
                <div className="form-floating">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                </div>

                <button
                  className="btn btn-outline-success btn-custom3 mx-4"
                  type="submit"
                  
                >
                  SignUp
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
