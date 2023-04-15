import React from "react";
import ActiveLink from "./ActiveLink";

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-purple-700 py-4 px-8 fixed left-0 right-0">
      <div className="flex items-center">
        <ActiveLink to="/register"> Register </ActiveLink>
        <ActiveLink to="/login"> Login </ActiveLink>
      </div>
      <div className="flex items-center">
        <img
          src="https://plus.unsplash.com/premium_photo-1681248156367-d95876bf885d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt="User"
          className="w-10 h-10 rounded-full object-cover mr-4"
        />
        <span className="text-white font-medium text-lg">John Doe</span>
      </div>
    </header>
  );
};

export default Header;
