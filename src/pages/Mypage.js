import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Profile from '../component/Profile';
import EditProfile from '../component/EditProfile';
import axios from 'axios';

function Mypage({ isLoggedIn, setLoggedIn }) {
  const history = useHistory();
  const [isEditMode, setEditMode] = useState(false);
  const [userinfo, setUserinfo] = useState({
    nickname: '',
    email: '',
    storename: '',
    address: '',
    phone: '',
    tagname: '',
  });

  const setEditModeHandler = () => {
    if (isEditMode) {
      setEditMode(false);
    } else {
      setEditMode(true);
    }
  };

  const dropUserHandler = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/dropuser`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${isLoggedIn.accessToken}`,
        },
        withCredentials: true,
      })
      .then(() => {
        setLoggedIn({
          isLogin: false,
          accessToken: '',
        });
        history.push({
          pathname: '/',
        });
      });
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/userinfo`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${isLoggedIn.accessToken}`,
        },
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data.data);
        const { nickname, email, storename, address, phone, tagname } =
          res.data.data;
        setUserinfo({
          nickname,
          email,
          storename,
          address,
          phone,
          tagname,
        });
      });
  }, []);

  return (
    <div className="mypage container center">
      {isEditMode ? (
        <EditProfile
          isLoggedIn={isLoggedIn}
          userinfo={userinfo}
          setEditModeHandler={setEditModeHandler}
        />
      ) : (
        <Profile
          userinfo={userinfo}
          setEditModeHandler={setEditModeHandler}
          dropUserHandler={dropUserHandler}
        />
      )}
    </div>
  );
}

export default Mypage;
