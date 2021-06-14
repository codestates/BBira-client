import axios from 'axios';
import React, { useState, useEffect } from 'react';
import StoreCard from '../component/StoreCard';

function Home() {
  const [isLoading, setLoading] = useState(true);
  const [allStoreInfo, setAllStoreInfo] = useState([
    {
      tagname: ['우리동네', '반찬가게'],
      storename: '반찬가게 맛있는',
      item: [
        {
          itemname: '콩나물 무침',
          itemphoto: 4.5,
          itemdesc: '난 무침이다 난 맛있다 무쳤다',
          itemprice: '20,000',
        },
      ],
      phone: '02-123-1234',
    },
    {
      tagname: ['만지는', '고양이', '귀엽다'],
      storename: '고양이 만지기 서비스',
      item: [
        {
          itemname: '차오',
          itemphoto: 5,
          itemdesc: '뚱냥이',
          itemprice: '9,999,900',
        },
      ],
      phone: '010-1234-1234',
    },
  ]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/allstore`, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      })
      .then((res) => {
        setAllStoreInfo(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
  }, []);
  return (
    <div className="App">
      {isLoading ? (
        <div className="loadimg">
          <div className="bouncybox">
            <div className="bouncy"></div>
          </div>
        </div>
      ) : (
        <>
          {allStoreInfo.map((storeInfo, i) => {
            return (
              <>
                <StoreCard key={i} storeInfo={storeInfo} className="center" />
              </>
            );
          })}
        </>
      )}
    </div>
  );
}

export default Home;
