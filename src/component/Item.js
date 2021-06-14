import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWonSign } from '@fortawesome/free-solid-svg-icons';

function Item({ item, isBtn }) {
  const { itemname, itemprice, itemdesc, itemphoto } = item;

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
          <button className="smallBtn itemEditBtn">Edit</button>
          <button className="smallBtn itemDeleteBtn red">Delete</button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Item;
