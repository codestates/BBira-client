import React from 'react';
import axios from 'axios';

function Edititem({ item }) {
  const { itemname, itemprice, itemdesc, itemphoto } = item;
  console.log(item);

  return (
    <div>
      <h1>상품 수정</h1>
      <div className="grid userInfo">
        <div className="tag">itemname</div>
        <input className="data">{itemname}</input>

        <div className="tag">itemprice</div>
        <div className="data">{itemprice}</div>

        <div className="tag">itemdesc</div>
        <div className="data">{itemdesc}</div>

        <div className="tag">itemphoto</div>
        <div className="data">{itemphoto}</div>
        <div>
          <button className="mediumBtn">Edit</button>
        </div>
      </div>
    </div>
  );
}

export default Edititem;
