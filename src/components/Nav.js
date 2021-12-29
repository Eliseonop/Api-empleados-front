import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className="navbar navbar-expand-lg navbar-light mb-5 bg-light">
      <ul className="container fluid mt-2">
        <Link to={"/"} className="mx-5">
          Home
        </Link>
        <Link to={"/Home"} className="mx-5">
          Home
        </Link>
        <Link to={"/"} className="mx-5">
          Home
        </Link>
        <Link to={"/"} className="mx-5">
          Home
        </Link>
      </ul>
    </div>
  );
};

export default Nav;
