import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './toggle.css';
import { useHistory } from 'react-router-dom';

function Signup(props) {
  const history = useHistory();
  const [Owner, setOwner] = useState(false);
  const [error, setError] = useState(null);
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    nickname: '',
    storename: '',
    phone: '',
    address: '',
    tagname: '',
  });

  function isOwner(e) {
    if (Owner) {
      setOwner(false);
    } else {
      setOwner(true);
    }
  }

  useEffect(() => {
    setError(null);
    console.log('유즈이펙트');
  }, []);

  const inputHandler = (e) => {
    e.target.classList.remove('err');
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const signupRequestHandler = async (e) => {
    //기본 회원가입시
    e.preventDefault();

    if (Owner === false) {
      if (!inputs.email || !inputs.password || !inputs.nickname) {
        if (!inputs.email) {
          e.target.form[0].classList.add('err');
        }
        if (!inputs.password) {
          e.target.form[1].classList.add('err');
        }
        if (!inputs.nickname) {
          e.target.form[2].classList.add('err');
        }
        return;
      }

      await axios
        .post(
          `${process.env.REACT_APP_API_URL}/signup`,
          {
            email: inputs.email,
            password: inputs.password,
            nickname: inputs.password,
          },
          {
            'Content-Type': 'application/json',
            withCredentials: true,
          }
        )
        .then((response) => {
          console.log(response);
          history.push({ pathname: '/signin' });
        })
        .catch((err) => setError(err));
    } else {
      /* 상점 회원가입시 */
      if (
        !inputs.email ||
        !inputs.password ||
        !inputs.nickname ||
        !inputs.phone ||
        !inputs.address ||
        !inputs.tagname
      ) {
        if (!inputs.email) {
          e.target.form[0].classList.add('err');
        }
        if (!inputs.password) {
          e.target.form[1].classList.add('err');
        }
        if (!inputs.nickname) {
          e.target.form[2].classList.add('err');
        }
        if (!inputs.storename) {
          e.target.form[4].classList.add('err');
        }
        if (!inputs.phone) {
          e.target.form[5].classList.add('err');
        }
        if (!inputs.address) {
          e.target.form[6].classList.add('err');
        }
        if (!inputs.tagname) {
          e.target.form[7].classList.add('err');
        }
        e.preventDefault();
        return;
      }

      await axios
        .post(
          `${process.env.REACT_APP_API_URL}/signup`,
          {
            email: inputs.email,
            password: inputs.password,
            nickname: inputs.password,
            storename: inputs.storename,
            phone: inputs.phone,
            address: inputs.address,
            tagname: inputs.tagname,
          },
          {
            'Content-Type': 'application/json',
            withCredentials: true,
          }
        )
        .then((response) => {
          console.log(response);
          history.push({ pathname: '/signin' });
        })
        .catch((err) => setError(err));
    }
  };

  return (
    <div className="signIn container center">
      <h1>회원 가입</h1>
      <form className="signInForm">
        <div className="inputGroup">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            onChange={inputHandler}
            required
          ></input>
        </div>

        <div className="inputGroup">
          <label htmlFor="password">password</label>
          <input
            name="password"
            type="password"
            onChange={inputHandler}
            required
          ></input>
        </div>

        <div className="inputGroup">
          <label htmlFor="nickname">nickname</label>
          <input name="nickname" onChange={inputHandler} required></input>
        </div>

        <div className="isOwner">
          <span>I`m The Owner</span>
          <label className="switch">
            <input className="toggleBtn" type="checkbox" onClick={isOwner} />
            <span className="slider round"></span>
          </label>
        </div>
        {Owner ? (
          <div>
            <div className="inputGroup">
              <label htmlFor="storename">storename</label>
              <input name="storename" onChange={inputHandler} required></input>
            </div>
            <div className="inputGroup">
              <label htmlFor="phone">phone</label>
              <input
                name="phone"
                type="phone"
                onChange={inputHandler}
                required
              ></input>
            </div>
            <div className="inputGroup">
              <label htmlFor="address">address</label>
              <input name="address" onChange={inputHandler} required></input>
            </div>
            <div className="inputGroup">
              <label htmlFor="tagname">tag</label>
              <input
                name="tagname"
                type="text"
                onChange={inputHandler}
                placeholder="태그를 쉼표(,)로 띄어쓰기 없이 구분해 입력해 주세요."
                required
              ></input>
            </div>
          </div>
        ) : (
          <div></div>
        )}
        {error ? <p className="err">이미 가입된 이메일 입니다.</p> : <></>}
        <button className="mediumBtn submitBtn" onClick={signupRequestHandler}>
          Sign up
        </button>
      </form>
    </div>
  );
}

export default Signup;
