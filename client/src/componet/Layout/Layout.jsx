import React, { useState } from "react";

import Home from "../pages/Home/Home";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import "./Layout.css";
import Menu from "../Menu/Menu.jsx";

const Layout = () => {
  const [toggle, setToggle] = useState(true);

  //change Toggle....
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="sidebar-section">
      <div className={toggle ? "sidebaar-toggle sidebaar" : "sidebaar"}>
        <div className="sidebaar-toggle-icon">
          <p onClick={handleToggle}>
            {toggle ? (
              <AiOutlineDoubleLeft size={30} />
            ) : (
              <AiOutlineDoubleRight size={30} />
            )}
          </p>
        </div>
        <Menu toggle={toggle}></Menu>
      </div>
      <div className="container">
        <Home></Home>
      </div>
    </div>
  );
};

export default Layout;
