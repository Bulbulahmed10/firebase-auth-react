import React, { useContext, useEffect, useRef, useState } from "react";
import ActiveLink from "./ActiveLink";
import { AuthContext } from "../../providers/AuthProviders";

const Header = () => {
  // const {user} = useContext(AuthContext)
  // console.log(user);

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full left-0  top-0 right-0 bg-purple-700 fixed">
      <header className="flex justify-between items-center  py-4 px-8   max-w-[1280px] m-auto">
        <div className="flex items-center">
          <ActiveLink to="/register"> Register </ActiveLink>
          <ActiveLink to="/login"> Login </ActiveLink>
        </div>
        <div className="relative inline-block" ref={dropdownRef}>
          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            className="text-white bg-purple-600 hover:bg-purple-800 font-medium rounded-lg text-sm px-4 py-1.5 text-center inline-flex items-center dark:bg-purple-800 dark:hover:bg-purple-800 duration-300"
            type="button"
            onClick={toggleDropdown}>
            <img
              src="https://plus.unsplash.com/premium_photo-1681248156367-d95876bf885d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="User"
              className="w-10 h-10 rounded-full object-cover mr-4"
            />
            <span className="text-white font-medium text-lg">John Doe</span>
            <svg
              className={`w-4 h-4 ml-2 transition-transform transform ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          <div
            id="dropdown"
            className={`${
              isOpen ? "block" : "hidden"
            } z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute mt-2`}>
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
