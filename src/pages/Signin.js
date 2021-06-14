import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

function Signin({ setLoggedIn }) {
  const history = useHistory();
  const [error, setError] = useState(null);
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    setError(null);
  }, []);

  const inputHandler = (e) => {
    e.target.classList.remove('err');
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const loginRequestHandler = async (e) => {
    if (!inputs.email || !inputs.password) {
      if (!inputs.email) {
        e.target.form[0].classList.add('err');
      }
      if (!inputs.password) {
        e.target.form[1].classList.add('err');
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
          'Content-Type': 'application/json',
          withCredentials: true,
        }
      )
      .then((res) => {
        // 로그인 핸들러
        console.log(res.headers);
        setLoggedIn({
          isLogin: true,
          accessToken: res.data.data.accessToken,
        });
        history.push({
          pathname: '/',
        });
      })
      .catch((err) => setError(err));
  };
  return (
    <div className="signIn container center">
      <h1>로그인</h1>

      <form>
        <div className="inputGroup">
          <label htmlFor="email">email</label>
          <input
            name="email"
            type="email"
            required
            onChange={inputHandler}
          ></input>
        </div>

        <div className="inputGroup">
          <label htmlFor="password">password</label>
          <input
            name="password"
            type="password"
            required
            onChange={inputHandler}
          ></input>
        </div>
        {error ? (
          <p className="err">
            가입하지 않은 이메일이거나, 잘못된 비밀번호입니다.
          </p>
        ) : (
          <></>
        )}
        <button
          className="mediumBtn submitBtn signInForm"
          onClick={loginRequestHandler}
        >
          Sign in
        </button>
        <Link to="/signup">
          <button className="mediumBtn reverse signUpBtn">Sign up</button>
        </Link>
      </form>
    </div>
  );
}

export default Signin;
