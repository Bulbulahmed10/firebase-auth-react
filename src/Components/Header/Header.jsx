import React, { useContext } from "react";
import ActiveLink from "./ActiveLink";
import { AuthContext } from "../../providers/AuthProviders";

const Header = () => {
  // const {user} = useContext(AuthContext)
  // console.log(user);
  return (
    <div className="w-full left-0  top-0 right-0 bg-purple-700 fixed">
      <header className="flex justify-between items-center  py-4 px-8   max-w-[1280px] m-auto">
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
    </div>
  );
};

export default Header;
