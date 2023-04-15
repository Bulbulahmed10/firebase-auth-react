import React from "react";
import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  return (
    <div>
      <NavLink
        to={to}
        className={(isActive) =>
          isActive ? "text-red-600" : "text-white font-semibold text-lg mr-6"
        }>
        {children}
      </NavLink>
    </div>
  );
};

export default ActiveLink;