import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function Edititem({ chosen, isLoggedIn }) {
  const { itemname, itemprice, itemdesc, itemphoto } = chosen;
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
    if (!inputs.itemname) {
      e.target.form[0].classList.add('err');
    }
    if (!inputs.itemprice) {
      e.target.form[1].classList.add('err');
    }
    if (!inputs.itemdesc) {
      e.target.form[2].classList.add('err');
    }
    if (!inputs.itemphoto) {
      e.target.form[3].classList.add('err');
    }
    e.preventDefault();
    console.log(inputs);

    //axios
    await axios
      .post(
        `${process.env.REACT_APP_API_URL}/itemregister`,
        {
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
        <input className="data" onChange={inputHandler}>
          {itemname}
        </input>

        <div className="tag">itemprice</div>
        <div className="data" onChange={inputHandler}>
          {itemprice}
        </div>

        <div className="tag">itemdesc</div>
        <div className="data" onChange={inputHandler}>
          {itemdesc}
        </div>

        <div className="tag">itemphoto</div>
        <div className="data" onChange={inputHandler}>
          {itemphoto}
        </div>
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
