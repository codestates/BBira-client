import React, { useState } from 'react';

function Item({ item, id }) {
  const { itemname, itemprice, itemdesc, itemphoto } = item;
  // const [decodePhoto, setDecodePhoto] = useState(null);

  console.log(id + 1);

  return (
    <div className="itemslot">
      <img className="itemphoto" src={itemphoto} />
      <span className="itemname">{itemname}</span>
      <span className="itemprice">{itemprice}</span>
      <span className="itemdesc">{itemdesc}</span>
      {/* <span className="tagname">{tagname}</span> */}
      <button className="smallBtn" id={id + 1}>
        Edit
      </button>
    </div>
  );
}

export default Item;
