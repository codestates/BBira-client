import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faSms } from '@fortawesome/free-solid-svg-icons';

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

  const KAKAO_CLIENT_ID = `33b7ac8a635390fbdc571a9e6c1b63d0`;
  const KAKAO_CLIENT_SECRET = `2asopaNJYdxoBux1imyKOYkc5XBQHNQt`;
  const KAKAO_REDIRECT_URI = `http://chanyangteam.s3-website.ap-northeast-2.amazonaws.com/`;
  const KAKAO_LOGIN_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&client_secret=${KAKAO_CLIENT_SECRET}&response_type=code&redirect_uri=${KAKAO_REDIRECT_URI}`;

  const kakaoLogin = (e) => {
    e.preventDefault();
    window.location.assign(KAKAO_LOGIN_URL, '카카오 로그인');
  };

  // const gitHubLogin = (e) => {
  //   e.preventDefault();
  //   // window.location.assign(, '깃헙 로그인');
  // };

  const GITHUB_CLIENT_ID = '3f7b46b7c019d9db793c';
  const GITHUB_CLIENT_SECRET = '8e8036d658e8b0051e993852214c746d06cc3aa9';
  const GITHUB_LOGIN_URL = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&client_secret=${GITHUB_CLIENT_SECRET}`;

  /*
  const githubLogin = (e) => {
    e.preventDefault();
    window.location.assign(GITHUB_LOGIN_URL, '깃허브 로그인');
  };
  */

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

        <div className="socialLogin">
          <div className="kakao socialBtn" onClick={kakaoLogin}>
            <FontAwesomeIcon icon={faSms} />
          </div>
          {/* <div className="github socialBtn" onClick={githubLogin}>
            <FontAwesomeIcon icon={faGithubAlt} />
          </div> */}
        </div>
      </form>
    </div>
  );
}

export default Signin;
