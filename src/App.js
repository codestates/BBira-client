import React, { useState, useEffect } from "react";
import "./style.css";
import "./components/toggle.css";
import axios from "axios";
import Signup from "./components/Signup.js";
require("dotenv").config();

function App() {
  const [hello, setHello] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchHello = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${process.env.REACT_APP_API_URL}`);
      setHello(response.data);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchHello();
  }, []);

  return (
    <div className="App">
      {loading ? (
        <header className="App-header">로딩중...</header>
      ) : (
        <div>
          <header className="App-header">{hello}</header>
          <Signup />
        </div>
      )}
    </div>
  );
}

export default App;
