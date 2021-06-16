import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Loading from '../component/Loading';

function Edititem({ chosenId, isLoggedIn, wholeData }) {
  const [isDone, setDone] = useState(false);
  const [Data, setData] = useState({
    itemname: '',
    itemprice: '',
    itemdesc: '',
    itemphoto: '',
    id: '',
  });
  const history = useHistory();

  useEffect(() => {
    for (let n = 0; n < wholeData.length; n++) {
      if (Number(wholeData[n].id) === Number(chosenId)) {
        setData({
          itemname: wholeData[n].itemname,
          itemprice: wholeData[n].itemprice,
          itemphoto: wholeData[n].itemphoto,
          itemdesc: wholeData[n].itemdesc,
          id: wholeData[n].id,
        });
      }
    }
    setDone(true);
  }, []);

  const inputHandler = (e) => {
    if (e.target.name === 'itemphoto') {
      let file = e.target.files[0];
      setData({
        ...Data,
        itemphoto: file,
      });
    } else {
      e.target.classList.remove('err');
      setData({
        ...Data,
        [e.target.name]: e.target.value,
      });
    }

    console.log(Data);
  };

  // const [inputs, setInputs] = useState({
  //   itemname: '',
  //   itemprice: '',
  //   itemdesc: '',
  //   itemphoto: '',
  //   id: '',
  // });

  const fd = new FormData();

  fd.append('itemname', Data.itemname);
  fd.append('itemdesc', Data.itemdesc);
  fd.append('itemprice', Data.itemprice);
  fd.append('itemphoto', Data.itemphoto);
  fd.append('id', Data.id);

  const editRequestHandler = async (e) => {
    //axios
    await axios
      .post(
        `http://ec2-13-209-69-167.ap-northeast-2.compute.amazonaws.com/fixiteminfo`,
        fd,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${isLoggedIn.accessToken}`,
          },
          withCredentials: true,
        }
      )
      .then((response) => {
        console.log(response);
        history.push({ pathname: '/mypage' });
        history.push({ pathname: '/mystore' });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container center">
      <h1>상품 수정</h1>
      {isDone ? (
        <div>
          <form className="storeManagement userInfo">
            <div className="itemname">itemname</div>
            <input
              className="inputname"
              name="itemname"
              placeholder={Data.itemname}
              required
              onChange={inputHandler}
            />

            <div className="itemprice">itemprice</div>
            <input
              className="inputprice"
              name="itemprice"
              placeholder={Data.itemprice}
              required
              onChange={inputHandler}
            />

            <div className="itemdesc">itemdesc</div>
            <textarea
              className="inputdesc"
              name="itemdesc"
              placeholder={Data.itemdesc}
              required
              onChange={inputHandler}
            />

            <div className="itemphoto">itemphoto</div>
            <input
              type="file"
              className="inputphoto"
              name="itemphoto"
              placeholder={Data.itemphoto}
              required
              onChange={inputHandler}
            />
            <button
              className="mediumBtn createBtn"
              onClick={editRequestHandler}
            >
              Edit
            </button>
          </form>
        </div>
      ) : (
        <div>
          <Loading />
        </div>
      )}
    </div>
  );
}

export default Edititem;
