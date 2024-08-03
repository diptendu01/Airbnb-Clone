import React from "react";
// import Navbar from "./component/Navbar";
import Signup from "./component/Signup";
import Main from "./component/Main";
import Login from "./component/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./component/Footer";
import Details from "./component/Details";

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/' element={<Main />} />
        <Route path="/details" element={<Details />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
};

export default App;
