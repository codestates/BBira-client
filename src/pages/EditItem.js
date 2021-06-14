import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function Edititem({ chosenItem, isLoggedIn }) {
  const { itemname, itemprice, itemdesc, itemphoto, tagname, originalname } =
    chosenItem;
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
    tagname: '',
    itemname: '',
    itemprice: '',
    itemdesc: '',
    itemphoto: '',
  });


  const editRequestHandler = async () => {
    //axios
    await axios
      .post(
        `http://ec2-13-209-69-167.ap-northeast-2.compute.amazonaws.com/fixiteminfo`,
        {
          ​tagname: inputs.tagname,
          ​originalname: originalname,
          itemname: inputs.itemname,
          itemprice: inputs.itemprice,
          itemdesc: inputs.itemdesc,
          itemphoto: inputs.itemphoto,
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
    <div>
      <h1>상품 수정</h1>
      <div className="grid userInfo">
        <div className="tag">itemname</div>
        <input
          className="data"
          name="itemname"
          placeholder={itemname}
          required
          onChange={inputHandler}
        />

        <div className="tag">itemprice</div>
        <input
          className="data"
          name="itemprice"
          placeholder={itemprice}
          required
          onChange={inputHandler}
        />

        <div className="tag">itemdesc</div>
        <input
          className="data"
          name="itemdesc"
          placeholder={itemdesc}
          required
          onChange={inputHandler}
        />

        <div className="tag">itemphoto</div>
        <input
          className="data"
          name="itemphoto"
          placeholder={itemphoto}
          required
          onChange={inputHandler}
        />

        <div className="tag">tagname</div>
        <input
          className="data"
          name="tagname"
          placeholder={tagname}
          required
          onChange={inputHandler}
        />
        <div>
          <button className="mediumBtn" onClick={editRequestHandler}>
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Edititem;
