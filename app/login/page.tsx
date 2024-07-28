"use client";

import { useState } from "react";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import "./login.css";
const Login = () => {
  const [pageState, setPageState] = useState({ showPassword: false });

  return (
    <div className="container">
      <div className="login-card">
        <h1>
          Welcome to <span>Workflo</span>!
        </h1>
        <form>
          <div className="form-group">
            <div className="password-field">
              <input placeholder="Your email" type="email" />
            </div>
            <div className="password-field">
              <input
                placeholder="Password"
                type={pageState.showPassword ? "text" : "password"}
              />

              <a
                onClick={() =>
                  setPageState({
                    ...pageState,
                    showPassword: !pageState.showPassword,
                  })
                }
              >
                {pageState.showPassword ? <VscEyeClosed /> : <VscEye />}
              </a>
            </div>
          </div>

          <button>Login</button>
        </form>

        <p>
          Dont have an account? Create a <a>new account</a>.
        </p>
      </div>
    </div>
  );
};

export default Login;
