import React, { useState, useEffect } from "react";

function Login() {
  return (
    <div className="login container">
      <h1>로그인</h1>

      <form className="loginForm">
        <div className="inputGuoup">
          <label htmlFor="email">email</label>
          <input name="email" required></input>
        </div>

        <div className="inputGuoup">
          <label htmlFor="password">password</label>
          <input name="password" required></input>
        </div>

        <button className="mediumBtn singIn">Sign in</button>
        <button className="mediumBtn reverse singUp">Sign up</button>
      </form>
    </div>
  );
}

export default Login;
