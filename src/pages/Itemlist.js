import React, { useEffect, useState } from "react";
import Item from "../component/Item";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Edititem from "../component/EditItem.js";

function Itemlist() {
  const [itemData, setItemData] = useState({
    isLoad: true,
    data: [],
  });
  const [isEdititem, setEdititem] = useState({
    isEdititem: false,
    key: -1,
  });
  const history = useHistory();
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/allstoredata`).then((res) => {
      console.log(res.data);
      setItemData({ data: res.data.data, isLoad: false });
    });
  });
  let A;

  let btnClick = (e) => {
    console.log(e.target.key);
    setEdititem({ isEdititem: true, key: e.target.key });
    A = e.target.key;
  };

  return (
    <div className="itemlist container center">
      {itemData.isLoad ? (
        <div className="container center">
          <form>
            <h1>상품 리스트</h1>
            <div className="loadimg">
              <div className="bouncybox">
                <div className="bouncy"></div>
              </div>
            </div>
          </form>
        </div>
      ) : isEdititem ? (
        <Edititem data={A} />
      ) : (
        <div className="container center">
          <button
            className="mediumBtn reverse"
            onClick={() => {
              history.push("/create");
            }}
          >
            상품 등록
          </button>
          <form>
            <h1>상품 리스트</h1>
            <div className="grid itemlist">
              {itemData.data.map((el, i) => {
                <Item key={i} data={el} editClick={btnClick} />;
              })}
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Itemlist;
