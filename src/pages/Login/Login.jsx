import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faGoogle, faMicrosoft } from "@fortawesome/free-brands-svg-icons";
import { faSignInAlt, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");
  
    const handlePasswordToggle = () => {
      setShowPassword(!showPassword);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md">
        <form className="bg-white shadow-md rounded-lg px-8 py-6">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-2 px-4"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-2 px-4"
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
              />
              <div
                className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                onClick={handlePasswordToggle}
              >
                <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition duration-300">
            <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
            Login
          </button>
          <div className="text-center mt-4">
            <span className="text-gray-500 text-sm">or login with</span>
          </div>
          <div className="flex justify-center mt-2">
            <button className="w-8 h-8 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center mr-2">
              <span className="sr-only">Login with Google</span>
              <FontAwesomeIcon icon={faGoogle} />
            </button>
            <button className="w-8 h-8 bg-gray-500 hover:bg-gray-600 text-white rounded-full flex items-center justify-center mr-2">
              <span className="sr-only">Login with GitHub</span>
              <FontAwesomeIcon icon={faGithub} />
            </button>
            <button className="w-8 h-8 bg-blue-700 hover:bg-blue-800 text-white rounded-full flex items-center justify-center mr-2">
              <span className="sr-only">Login with Facebook</span>
              <FontAwesomeIcon icon={faFacebook} />
            </button>
            <button className="w-8 h-8 bg-blue-700 hover:bg-blue-800 text-white rounded-full flex items-center justify-center mr-2">
              <span className="sr-only">Login with Microsoft</span>
              <FontAwesomeIcon icon={faMicrosoft} />
            </button>
          </div>
          <div className="text-center mt-4">
            <a href="#" className="text-blue-500 hover:text-blue-600 text-sm">
              Don't have an account? Register here
            </a>
          </div>
          <div className="text-center mt-2">
            <a href="#" className="text-gray-500 hover:text-gray-600 text-sm">
              Forgot password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
