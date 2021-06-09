import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Signin({ isLogin }) {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const inputHandler = (e) => {
    e.target.classList.remove("err");
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
    console.log(inputs);
  };
  const loginRequestHandler = async (e) => {
    if (!inputs.email || !inputs.password) {
      if (!inputs.email) {
        e.target.form[0].classList.add("err");
      }
      if (!inputs.password) {
        e.target.form[1].classList.add("err");
      }
      return;
    }
    e.preventDefault();

    //axios
    await axios
      .post(
        `${process.env.REACT_APP_API_URL}/login`,
        {
          email: inputs.email,
          password: inputs.password,
        },
        {
          "Content-Type": "application/json",
          withCredentials: true,
        }
      )
      .then((response) => {
        console.log(response);
        // 로그인 핸들러
        isLogin(true);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="login container">
      <h1>로그인</h1>

      <form className="loginForm">
        <div className="inputGuoup">
          <label htmlFor="email">email</label>
          <input
            name="email"
            type="email"
            required
            onChange={inputHandler}
          ></input>
        </div>

        <div className="inputGuoup">
          <label htmlFor="password">password</label>
          <input
            name="password"
            type="password"
            required
            onChange={inputHandler}
          ></input>
        </div>

        <button className="mediumBtn singIn" onClick={loginRequestHandler}>
          Sign in
        </button>
        <Link to="/signup">
          <button className="mediumBtn reverse singUp">Sign up</button>
        </Link>
      </form>
    </div>
  );
}

export default Signin;
