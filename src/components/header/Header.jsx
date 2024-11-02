import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = ({ isAuth }) => {
  return (
    <header>
      <div className="logo"><Link to={"/"}>Kannada <span>Tutes</span></Link></div>

      <div className="link">
        <span className="mobile-hide"><Link to={"/"}>Home</Link></span>
        <Link to={"/courses"}>Courses</Link>
        <span className="mobile-hide"><Link to={"/about"}>About</Link></span>
        {isAuth ? (
          <Link to={"/account"}>Account <span className='far fa-user-circle'></span></Link>
        ) : (
          <Link to={"/login"}>Login</Link>
        )}
      </div>
    </header>
  );
};

export default Header;
