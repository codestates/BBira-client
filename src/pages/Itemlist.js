import React, { useEffect, useState } from 'react';
import Item from '../component/Item';
import axios from 'axios';

function Itemlist() {
  const [itemData, setItemData] = useState({
    isLoad: true,
    data: [],
  });
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/allstoredata`).then((res) => {
      console.log(res.data);
      setItemData({ data: res.data.data, isLoad: false });
    });
  });

  return (
    <div className="itemlist container center">
      <h1>상품 리스트</h1>
      {itemData.isLoad ? (
        <>
          <div className="loadimg">
            <div className="bouncybox">
              <div className="bouncy"></div>
            </div>
          </div>
        </>
      ) : (
        <div className="grid itemlist">
          {itemData.data.map((el) => {
            <Item data={el} />;
          })}
        </div>
      )}
    </div>
  );
}

export default Itemlist;
