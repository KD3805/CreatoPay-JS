import React, { useState } from "react";
import "./style.css";
import { MdOutlineMail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
        fullName: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Data:", data);
    };

    return (
        <main className="main">
            <div className="left-register">
                <div className="left-content">
                    <div className="content">
                        <h1 className="content-title">Creatopay</h1>
                        <p className="content-desc">
                            Helping your brands connect with your Audience
                        </p>
                        <div>
                            <button type="submit" className="read-more-btn">
                                Read More
                            </button>
                        </div>
                    </div>

                    <div className="bg-circle">
                        <div className="circle"></div>
                        <div className="circle"></div>
                    </div>
                </div>
            </div>

            <div className="right-register">
                <div className="right-content">
                    <div className="register-box-header">
                        <div className="register-box-title">Hello Again!</div>
                        <div className="register-box-subtitle">Welcome Back</div>
                    </div>

                    <form onSubmit={handleSubmit} className="register-box-content">
                        <div className="register-input-box">
                            <FaUserAlt className="register-box-icons" />
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="register-box-input"
                                value={data.fullName}
                                onChange={(e) => setData({ ...data, fullName: e.target.value })}
                            />
                        </div>

                        <div className="register-input-box">
                            <MdOutlineMail className="register-box-icons" />
                            <input
                                type="text"
                                placeholder="Email Address"
                                className="register-box-input"
                                value={data.email}
                                onChange={(e) => setData({ ...data, email: e.target.value })}
                            />
                        </div>

                        <div className="register-input-box">
                            <FaLock className="register-box-icons" />
                            <input
                                type="password"
                                placeholder="Password"
                                className="register-box-input"
                                value={data.password}
                                onChange={(e) => setData({ ...data, password: e.target.value })}
                            />
                        </div>

                        <p className="text-xs font-medium text-center opacity-70 my-2">
                            Don't have an account?&nbsp;
                            <Link
                                to={"/"}
                                className="text-sm font-bold underline cursor-pointer"
                            >
                                Login
                            </Link>
                        </p>

                        <div className="register-btn-div">
                            <button type="submit" className="register-btn">
                                Register
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </main>
    );
};

export default Register;
