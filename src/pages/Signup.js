import React, { useState } from 'react';
import axios from 'axios';
import './toggle.css';

function Signup() {
  const [Owner, setOwner] = useState(false);
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    nickname: '',
    storename: '',
    phone: '',
    address: '',
  });

  function isOwner(e) {
    if (Owner) {
      setOwner(false);
    } else {
      setOwner(true);
    }
  }

  const inputHandler = (e) => {
    e.target.classList.remove('err');
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
    console.log(inputs);
  };

  const signupRequestHandler = async (e) => {
    //기본 회원가입시
    if (Owner === false) {
      if (!inputs.email) {
        e.target.form[0].classList.add('err');
      }
      if (!inputs.password) {
        e.target.form[1].classList.add('err');
      }
      if (!inputs.nickname) {
        e.target.form[2].classList.add('err');
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
        })
        .catch((err) => console.log(err));
    } /* 상점 회원가입시 */ else {
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
        e.target.form[3].classList.add('err');
      }
      if (!inputs.phone) {
        e.target.form[4].classList.add('err');
      }
      if (!inputs.address) {
        e.target.form[5].classList.add('err');
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
          },
          {
            'Content-Type': 'application/json',
            withCredentials: true,
          }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="signup container">
      <h1>회원 가입</h1>

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
        <input
          name="nickname"
          type="nickname"
          onChange={inputHandler}
          required
        ></input>
      </div>

      <div>
        I`m The Owner
        <label className="switch">
          <input className="toggleBtn" type="checkbox" onClick={isOwner} />
          <span className="slider round"></span>
        </label>
      </div>
      {Owner ? (
        <div>
          <div className="inputGroup">
            <label htmlFor="storename">storename</label>
            <input
              name="storename"
              type="storename"
              onChange={inputHandler}
              required
            ></input>
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
            <input
              name="address"
              type="address"
              onChange={inputHandler}
              required
            ></input>
          </div>
        </div>
      ) : (
        <div></div>
      )}
      <button className="signup" onClick={signupRequestHandler}>
        Sign up
      </button>
    </div>
  );
}

export default Signup;
