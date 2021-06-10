import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Profile from '../component/Profile';
import EditProfile from '../component/EditProfile';

function Mypage() {
  const [isEditMode, setEditMode] = useState(false);
  const [userinfo, setUserinfo] = useState({
    name: '',
    email: '',
    storename: '',
    address: '',
    phone: '',
  });

  const setEditModeHandler = () => {
    setEditMode(true);
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
        <EditProfile userinfo={userinfo} />
      ) : (
        <Profile userinfo={userinfo} setEditModeHandler={setEditModeHandler} />
      )}
    </div>
  );
}

export default Mypage;
