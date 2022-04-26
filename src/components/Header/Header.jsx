import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <>
      <div className="header">
        <Link to="/">
          <div className="logo">movie app</div>
        </Link>

        <div className="user-image">
          <img
            src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
            alt="user"
          />
        </div>
      </div>
    </>
  );
}

export default Header;
