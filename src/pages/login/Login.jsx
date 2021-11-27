import React from "react";
import { useDispatch } from "react-redux";
import logo from "../../assets/svg/logo.svg";
import { login } from "../../redux/action/auth.action";

const Login = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login());
  };

  return (
    <div className="ui card" style={{ padding: "2rem", margin: "12rem auto" }}>
      <div className="image">
        <img src={logo} alt="logo" />
      </div>
      <div className="content" style={{ margin: "2rem auto" }}>
        <button className="ui secondary button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
