import React, { useState } from "react";
import "./style.css";
import { MdOutlineMail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data:", data);
  };

  return (
    <main className="main">
      <div className="left-login">
        <div className="left-content">
          <div className="content">
            <h1 className="content-title">Creatopay</h1>
            <p className="content-desc">
              Helping your brands connect with your Audience
            </p>
          </div>

          <div className="bg-circle">
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </div>
      </div>

      <div className="right-login">
        <div className="right-content">
          <div className="login-box-header">
            <div className="login-box-title">Hello Again!</div>
            <div className="login-box-subtitle">Welcome Back</div>
          </div>

          <form onSubmit={handleSubmit} className="login-box-content">
            <div className="login-input-box">
              <MdOutlineMail className="login-box-icons" />
              <input
                type="text"
                placeholder="Email Address"
                className="login-box-input"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
            </div>

            <div className="login-input-box">
              <FaLock className="login-box-icons" />
              <input
                type="password"
                placeholder="Password"
                className="login-box-input"
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />
            </div>

            <p className="text-xs font-medium text-center opacity-70 my-2">
              Don't have an account?&nbsp;
              <Link
                to={"/register"}
                className="text-sm font-bold underline cursor-pointer"
              >
                Register
              </Link>
            </p>

            <div className="login-btn-div">
              <button type="submit" className="login-btn">
                Login
              </button>
            </div>

            <p className="p-fp">Forgot Password</p>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
