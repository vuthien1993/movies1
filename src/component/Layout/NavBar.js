import React, { useState, useEffect } from "react";
import CartIcon from "../Cart/CartIcon";

import { Link } from "react-router-dom";
import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.css";
function NavBar() {
  const [changeColor, setChangeColor] = useState(false);
  //sử dụng useEffect thây đổi màu cho navbar khi cuộn xuống quá 100px
  useEffect(() => {
    const changeColorHandler = () => {
      //kiểm tra nếu >100px thì set lại giá trị vào state
      if (window.scrollY >= 100) {
        setChangeColor(true);
      } else {
        setChangeColor(false);
      }
    };
    window.addEventListener("scroll", changeColorHandler);
  }, []);
  return (
    <React.Fragment>
      <div
        className={`container-fluid borderTotal sticky ${
          changeColor && "background"
        }`}
      >
        <div className="row borderNavbar">
          <div className="col-md-11 col-sm-11 col-xs-6 text">
            {/* điều hướng trang khi nhấn vào icon vs movie app */}
            <p>
              <Link to="/" className="link textNone">
                Movie App
              </Link>
            </p>
          </div>
          <div className="col-md-1 col-sm-1 col-xs-6 icon ">
            <Link to="/search" className="link">
              <CartIcon />
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default NavBar;
