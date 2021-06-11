import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Item({ data, editclick }) {
  const { itemname, itemprice, itemdesc, itemphoto } = data;
  const history = useHistory();
  return (
    <div className="itemslot">
      <img className="itemphoto" src={itemphoto} />
      <span className="itemname">{itemname}</span>
      <span className="itemprice">{itemprice}</span>
      <span className="itemdesc">{itemdesc}</span>
      <button className="smallBtn" onClick={editclick}>
        Edit
      </button>
    </div>
  );
}

export default Item;
