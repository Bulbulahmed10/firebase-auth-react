import React, { useContext, useEffect, useRef, useState } from "react";
import ActiveLink from "./ActiveLink";
import { AuthContext } from "../../providers/AuthProviders";
import { useNavigate } from "react-router-dom";
import noImage from "../.././assets/no-image.png";
const Header = () => {
  const { user, logOut, setUser, deleteAccount } = useContext(AuthContext);

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
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
  //TODO: Code no 09 to 28 kivabe kaj kortece oi ta pore check korte hobe

  const logOutHandler = () => {
    logOut()
      .then(() => {
        console.log("logOut Successful");
        setUser(null);
        navigate("/login");
        setIsOpen(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteAccountHandler = () => {
    deleteAccount(user)
      .then(() => {
        console.log("account deleted Successful");
        navigate("/register");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-full  left-0  top-0 right-0 bg-purple-700 px-6 fixed">
      <header
        className="flex h-[84px] 
           justify-between
         items-center  max-w-[1280px] m-auto">
        <div className="flex items-center">
          {user === null && (
            <>
              <ActiveLink to="/register"> Register </ActiveLink>
              <ActiveLink to="/login"> Login </ActiveLink>
            </>
          )}

          <ActiveLink to="/resource"> Resource </ActiveLink>
        </div>

        {user?.emailVerified && (
          <div className="relative inline-block" ref={dropdownRef}>
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="text-white bg-purple-600 hover:bg-purple-800 font-medium rounded-lg text-sm px-4 py-1.5 text-center inline-flex items-center dark:bg-purple-800 dark:hover:bg-purple-800 duration-300"
              type="button"
              onClick={toggleDropdown}>
              <img
                src={user?.photoURL ? user.photoURL : noImage}
                alt="User"
                className="w-10 h-10 rounded-full object-cover mr-4"
              />
              <span className="text-white font-medium text-lg">
                {user?.displayName ? user.displayName : "No Name"}
              </span>
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
                <li
                  onClick={deleteAccountHandler}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">
                  Delete Account
                </li>
                <li
                  onClick={logOutHandler}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">
                  Logout
                </li>
              </ul>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
