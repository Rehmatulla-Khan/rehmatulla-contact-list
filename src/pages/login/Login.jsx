import React from "react";
import logo from "../../assets/svg/logo.svg";

const Login = () => {
  return (
    <div className="ui card" style={{ padding: "2rem", margin: "12rem auto" }}>
      <div className="image">
        <img src={logo} alt="logo" />
      </div>
      <div className="content" style={{ margin: "2rem auto" }}>
        <button className="ui secondary button"> Login </button>
      </div>
    </div>
  );
};

export default Login;
