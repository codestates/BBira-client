import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWonSign } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Item({ item, isBtn, isLoggedIn, clickedBtn }) {
  const { itemname, itemprice, itemdesc, itemphoto, id } = item;
  const history = useHistory();

  const deleteItem = () => {
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/dropitem`,
        { id },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${isLoggedIn.accessToken}`,
          },
          withCredentials: true,
        }
      )
      .then(() => {
        history.push({ pathname: '/mypage' });
      })
      .then(() => {
        history.push({ pathname: '/mystore' });
      });
  };
  return (
    <div className="itemSlot">
      <div className="itemphotoContainer">
        <img className="itemphoto" src={itemphoto} />
      </div>
      <span className="itemname">{itemname}</span>
      <span className="itemdesc">{itemdesc}</span>
      <span className="itemprice">
        {itemprice}
        <FontAwesomeIcon icon={faWonSign} className="wonSignIcon" />
      </span>

      {isBtn ? (
        <div className="buttonContainer">
          <button className="smallBtn itemEditBtn" id={id} onClick={clickedBtn}>
            Edit
          </button>
          <button className="smallBtn itemDeleteBtn red" onClick={deleteItem}>
            Delete
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Item;
