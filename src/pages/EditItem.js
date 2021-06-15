import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function Edititem({ chosenItem, isLoggedIn }) {
  const { itemname, itemprice, itemdesc, itemphoto, id } = chosenItem;
  const history = useHistory();

  const inputHandler = (e) => {
    e.target.classList.remove('err');
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
    console.log(inputs);
  };

  const [inputs, setInputs] = useState({
    itemname: '',
    itemprice: '',
    itemdesc: '',
    itemphoto: '',
  });

  const editRequestHandler = async (e) => {
    //axios
    await axios
      .post(
        `http://ec2-13-209-69-167.ap-northeast-2.compute.amazonaws.com/fixiteminfo`,
        {
          itemname: inputs.itemname,
          itemprice: inputs.itemprice,
          itemdesc: inputs.itemdesc,
          itemphoto: inputs.itemphoto,
          id: id,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${isLoggedIn.accessToken}`,
          },
          withCredentials: true,
        }
      )
      .then((response) => {
        console.log(response);
        history.push({ pathname: '/itemlist' });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="edit container center">
      <h1>상품 수정</h1>
      <div className="edit storeManagement userInfo">
        <div className="edititemname">itemname</div>
        <input
          className="editinputname"
          name="itemname"
          placeholder={itemname}
          required
          onChange={inputHandler}
        />

        <div className="edititemprice">itemprice</div>
        <input
          className="editinputprice"
          name="itemprice"
          placeholder={itemprice}
          required
          onChange={inputHandler}
        />

        <div className="edititemdesc">itemdesc</div>
        <textarea
          className="editinputdesc"
          name="itemdesc"
          placeholder={itemdesc}
          required
          onChange={inputHandler}
        />

        <div className="edititemphoto">itemphoto</div>
        <input
          type="file"
          className="editinputphoto"
          name="itemphoto"
          placeholder={itemphoto}
          required
          onChange={inputHandler}
        />
        <button className="mediumBtn editBtn" onClick={editRequestHandler}>
          Edit
        </button>
      </div>
    </div>
  );
}

export default Edititem;
