import axios from 'axios';
import React, { useState, useEffect } from 'react';

function Home() {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
    // axios
    //   .get(`${process.env.REACT_APP_API_URL}/allstoredata`)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  });
  return (
    <div className="App">
      {isLoading ? (
        <div className="loadimg">
          <div className="bouncybox">
            <div className="bouncy"></div>
          </div>
        </div>
      ) : (
        <h1>홈홈</h1>
      )}
    </div>
  );
}

export default Home;
