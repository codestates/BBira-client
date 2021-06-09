import React, { useState, useEffect } from "react";
import Signup from "./component/Signup.js";
import "./Style.css";
import Nav from "./component/Nav";
import Login from "./pages/Login";
import axios from "axios";
require("dotenv").config();

function App() {
  return (
    <div>
      <div className="App">
        <Nav />
        <Login />
      </div>
      <div>
        <Signup />
      </div>
    </div>
  );
}

export default App;
