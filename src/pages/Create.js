import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Create({ isLoggedIn, setLoggedIn }) {
  const [inputs, setInputs] = useState({
    itemname: "",
    itemprice: "",
    itemdesc: "",
  });
  const history = useHistory();

  const inputHandler = (e) => {
    e.target.classList.remove("err");
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
    console.log(inputs);
  };

  const CreateRequestHandler = async (e) => {
    if (!inputs.itemname) {
      e.target.form[0].classList.add("err");
    }
    if (!inputs.itemprice) {
      e.target.form[1].classList.add("err");
    }
    if (!inputs.itemdesc) {
      e.target.form[2].classList.add("err");
    }
    e.preventDefault();

    //axios
    await axios
      .post(
        `${process.env.REACT_APP_API_URL}/itemregister`,
        {
          itemname: inputs.itemname,
          itemprice: inputs.itemprice,
          itemdesc: inputs.itemdesc,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${isLoggedIn.accessToken}`,
          },
          withCredentials: true,
        }
      )
      .then((response) => {
        console.log(response);
        history.push({ pathname: "/itemlist" });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="create container center">
      <h1>상품 등록</h1>
      <form className="grid storeManagement center">
        <label htmlFor="itemname">itemname</label>
        <input
          name="itemname"
          type="itemname"
          onChange={inputHandler}
          required
        ></input>

        <label htmlFor="itemprice">itemprice</label>
        <input
          name="itemprice"
          type="itemprice"
          onChange={inputHandler}
          required
        ></input>

        <label htmlFor="itemdesc">Describe</label>
        <textarea
          name="itemdesc"
          type="textarea"
          className="itemdesc"
          onChange={inputHandler}
        ></textarea>
        <div></div>
        <button className="mediumBtn createBtn" onClick={CreateRequestHandler}>
          Create
        </button>
      </form>
    </div>
  );
}
export default Create;
