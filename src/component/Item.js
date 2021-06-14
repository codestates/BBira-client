import React, { useState, useEffect } from 'react';

function Item({ item, key }) {
  const { itemname, itemprice, itemdesc, itemphoto } = item;
  const [itemKey, setItemKey] = useState({});
  useEffect(() => {
    setItemKey({ key });
    console.log(itemKey);
  }, {});

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
