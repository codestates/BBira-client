import React, { useEffect, useState } from "react";
import Item from "../component/Item";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Itemlist() {
  const [itemData, setItemData] = useState({
    isLoad: false,
    data: [],
  });
  const history = useHistory();
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/allstoredata`).then((res) => {
      console.log(res.data);
      setItemData({ data: res.data.data, isLoad: false });
    });
  });

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
              {itemData.data.map((el) => {
                <Item data={el} />;
              })}
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Itemlist;
