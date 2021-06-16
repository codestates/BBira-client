import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function EditProfile({ isLoggedIn, userinfo, setEditModeHandler }) {
  const history = useHistory();
  const { nickname, email, storename, address, phone, tagname } = userinfo;
  const [inputUserinfo, setUserinfo] = useState({
    nickname,
    storename,
    address,
    phone,
    tagname,
    password: '',
  });
  const [oldinfo, setOldinfo] = useState({
    storename,
    address,
    phone,
    tagname,
  });

  const setUserinfoHandler = (e) => {
    setUserinfo({
      ...inputUserinfo,
      [e.target.name]: e.target.value,
    });
  };

  const editProfileHandler = (e) => {
    const { nickname, address, phone, password, tagname } = inputUserinfo;
    if (!password) {
      e.target.parentNode.previousSibling.classList.add('err');
      return;
    }

    let storename = inputUserinfo.storename || oldinfo.storename;

    axios
      .post(
        `http://ec2-13-209-69-167.ap-northeast-2.compute.amazonaws.com/fixuserinfo`,
        {
          nickname,
          phone,
          address,
          storename,
          password,
          tagname,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${isLoggedIn.accessToken}`,
          },
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res);
        history.push({ pathname: '/' });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="subNav">
        <button className="mediumBtn reverse" onClick={setEditModeHandler}>
          마이페이지
        </button>
      </div>
      <h1>프로필 편집</h1>
      <div className="grid userInfo">
        <div className="tag">name</div>
        <input
          className="data"
          name="nickname"
          placeholder={nickname}
          required
          onChange={setUserinfoHandler}
        />

        <div className="tag">email</div>
        <div className="data">{email}</div>

        {storename ? (
          <>
            <div className="tag">store name</div>
            <input
              className="data"
              name="storename"
              placeholder={storename}
              required
              onChange={setUserinfoHandler}
            />

            <div className="tag">address</div>
            <input
              className="data"
              name="address"
              placeholder={address}
              required
              onChange={setUserinfoHandler}
            />

            <div className="tag">phone</div>
            <input
              className="data"
              name="phone"
              placeholder={phone}
              required
              onChange={setUserinfoHandler}
            />

            <div className="tag">tag</div>
            <input
              className="data"
              type="text"
              name="tagname"
              placeholder={tagname}
              required
              onChange={setUserinfoHandler}
            />
          </>
        ) : (
          <></>
        )}
        <div className="tag">password</div>
        <input
          className="data"
          type="password"
          name="password"
          required
          onChange={setUserinfoHandler}
        />
        <div>
          <button className="mediumBtn submitBtn" onClick={editProfileHandler}>
            Edit Done
          </button>
        </div>
      </div>
    </>
  );
}

export default EditProfile;
