import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Profile from '../component/Profile';
import EditProfile from '../component/EditProfile';
import axios from 'axios';

function Mypage({ setLoggedIn }) {
  const history = useHistory();
  const [isEditMode, setEditMode] = useState(false);
  const [userinfo, setUserinfo] = useState({
    name: '',
    email: '',
    storename: '',
    address: '',
    phone: '',
  });

  const setEditModeHandler = () => {
    if (isEditMode) {
      setEditMode(false);
    } else {
      setEditMode(true);
    }
  };

  const dropUserHandler = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/dropuser`).then(() => {
      setLoggedIn(false);
      history.push({
        pathname: '/',
      });
    });
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/userinfo`, {
        'Content-Type': 'application/json',
        withCredentials: true,
      })
      .then((response) => {
        const { name, email, storename, address, phone } = response.data;
        setUserinfo({
          name,
          email,
          storename,
          address,
          phone,
        });
      });
  });

  return (
    <div className="mypage container center">
      {isEditMode ? (
        <EditProfile
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
