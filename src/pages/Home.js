import axios from 'axios';
import React, { useState, useEffect } from 'react';
import StoreCard from '../component/StoreCard';

function Home() {
  const [isLoading, setLoading] = useState(true);
  const [allStoreInfo, setAllStoreInfo] = useState([]);
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
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="loadimg">
          <div className="bouncybox">
            <div className="bouncy"></div>
          </div>
        </div>
      ) : (
        <>
          {allStoreInfo.map((storeInfo) => {
            return (
              <>
                <StoreCard
                  key={`storeCard${storeInfo.shop.id}`}
                  storeInfo={storeInfo}
                  className="center"
                />
              </>
            );
          })}
        </>
      )}
    </div>
  );
}

export default Home;
