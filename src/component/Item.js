import React, { useState } from "react";

function Item({ data }) {
  const { itemname, itemprice, itemdesc, itemphoto } = data;
  return (
    <div className="itemslot">
      <img className="itemphoto" src={itemphoto} />
      <span className="itemname">{itemname}</span>
      <span className="itemprice">{itemprice}</span>
      <span className="itemdesc">{itemdesc}</span>
    </div>
  );
}

export default Item;
