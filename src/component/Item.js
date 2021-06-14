import React, { useState } from 'react';

function Item({ item }) {
  const { itemname, itemprice, itemdesc, itemphoto } = item;
  return (
    <div className="itemslot">
      <img className="itemphoto" src={itemphoto} />
      <span className="itemname">{itemname}</span>
      <span className="itemprice">{itemprice}</span>
      <span className="itemdesc">{itemdesc}</span>
      <button className="smallBtn">Edit</button>
    </div>
  );
}

export default Item;
