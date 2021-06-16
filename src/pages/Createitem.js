import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Create({ isLoggedIn, setLoggedIn }) {
  const [inputs, setInputs] = useState({
    itemname: '',
    itemprice: '',
    itemdesc: '',
    itemphoto: '',
  });

  const history = useHistory();

  const inputHandler = (e) => {
    e.target.classList.remove('err');
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const incodingFile = (e) => {
    e.preventDefault();
    // let reader = new FileReader();
    let file = e.target.files[0];
    setInputs({
      ...inputs,
      itemphoto: file,
    });
    // if (file) {
    //   reader.readAsDataURL(file);
    //   reader.onload = (e) => {
    //     setInputs({
    //       ...inputs,
    //       itemphoto: e.target.result,
    //     });
    //   };
    // }
  };

  const CreateRequestHandler = async (e) => {
    if (
      !inputs.itemname ||
      !inputs.itemprice ||
      !inputs.itemdesc ||
      !inputs.itemphoto
    ) {
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
      return;
    }
    e.preventDefault();

    //form-data

    const fd = new FormData();

    fd.append('itemname', inputs.itemname);
    fd.append('itemprice', inputs.itemprice);
    fd.append('itemdesc', inputs.itemdesc);
    fd.append('itemphoto', inputs.itemphoto);
    console.log(fd);

    //axios
    await axios
      .post(`${process.env.REACT_APP_API_URL}/itemregister`, fd, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${isLoggedIn.accessToken}`,
        },
        withCredentials: true,
      })
      .then(() => {
        history.push({ pathname: '/mystore' });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="create container center">
      <div className="subNav">
        <button
          className="mediumBtn reverse"
          onClick={() => {
            history.push('/mystore');
          }}
        >
          상품 관리
        </button>
      </div>
      <h1>상품 등록</h1>
      <form className="storeManagement">
        <label className="itemname" htmlFor="itemname">
          itemname
        </label>
        <input
          name="itemname"
          type="itemname"
          onChange={inputHandler}
          className="inputname"
          required
        ></input>
        <label className="itemprice" htmlFor="itemprice">
          itemprice
        </label>
        <input
          name="itemprice"
          type="itemprice"
          onChange={inputHandler}
          className="inputprice"
          required
        ></input>
        <label className="itemdesc" htmlFor="itemdesc">
          Describe
        </label>
        <textarea
          name="itemdesc"
          type="textarea"
          onChange={inputHandler}
          className="inputdesc"
        ></textarea>
        <label className="itemphoto" htmlFor="itemphoto">
          itemphoto
        </label>
        <input
          type="file"
          name="itemphoto"
          accept="image/jpg, impge/png, image/jpeg, image/gif"
          onChange={incodingFile}
          className="inputphoto"
          required
        ></input>
        <button
          className="mediumBtn createBtn submitBtn"
          onClick={CreateRequestHandler}
        >
          Create
        </button>
      </form>
    </div>
  );
}
export default Create;
