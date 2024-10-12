import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center px-8 py-6 w-full">
      <Logo />
      <Menu />
    </div>
  );
};

export default NavBar;
