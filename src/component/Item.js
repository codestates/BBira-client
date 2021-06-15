import React from 'react';

function Item({ item, id, button }) {
  const { itemname, itemprice, itemdesc, itemphoto } = item;
  // const [decodePhoto, setDecodePhoto] = useState(null);
  console.log(item);

  console.log(id + 1);

  return (
    <div className="itemslot">
      <img className="itemphoto" src={itemphoto} />
      <span className="itemname">{itemname}</span>
      <span className="itemprice">{itemprice}</span>
      <span className="itemdesc">{itemdesc}</span>
      {/* <span className="tagname">{tagname}</span> */}
      <button className="smallBtn" id={id + 1} onClick={button}>
        Edit
      </button>
    </div>
  );
}

export default Item;
