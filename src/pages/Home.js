import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AllStore from './AllStore';
import Store from './Store';
import { Route } from 'react-router-dom';

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
    <>
      <div>
        <Route path="/store/:id">
          <Store />
        </Route>
        {isLoading ? (
          <div className="loadimg">
            <div className="bouncybox">
              <div className="bouncy"></div>
            </div>
          </div>
        ) : (
          <AllStore allStoreInfo={allStoreInfo} />
        )}
      </div>
    </>
  );
}

export default Home;
