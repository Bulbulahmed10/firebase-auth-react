import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../.././firebase/firebase.config";
import {
  faSignInAlt,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const Form = ({
  title,
  authSystemName,
  ExtraLoginComponent,
  ExtraRegisterComponent,
  isRegistration,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const auth = getAuth(app);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (isRegistration) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          const user = result.user;
          navigate("/login");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
          const user = result.user;
          navigate("/user");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg px-8 py-6">
          <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>
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
                name="email"
                className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-2 px-4"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-2 px-4"
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
              />
              <div
                className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                onClick={handlePasswordToggle}>
                <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition duration-300">
            <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
            {authSystemName}
          </button>
          <div>{ExtraRegisterComponent}</div>
          {ExtraLoginComponent}
        </form>
      </div>
    </div>
  );
};
export default Form;
