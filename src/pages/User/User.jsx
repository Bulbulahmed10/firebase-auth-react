import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import noImage from "../.././assets/no-image.png";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
const User = () => {
  const [editing, setEditing] = useState(false);
  const [updatedName, setUpdatedName] = useState(null);
  const [updatedEmail, setUpdatedEmail] = useState(null);
  const [updatedPassword, setUpdatedPassword] = useState("");
  const [updatedImage, setUpdatedImage] = useState(null);
  const [updateType, setUpdateType] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };
  const navigate = useNavigate();
  const {
    updateUserProfile,
    user,
    setUser,
    updateUserEmail,
    updateUserPassword,
  } = useContext(AuthContext);

  useEffect(() => {
    if (user !== null) {
      user.providerData.forEach((profile) => {
        setUpdatedName(profile.displayName);
        setUpdatedEmail(profile.email);
        setUpdatedImage(profile.photoURL);
      });
    }
  }, [user]);

  const handleEditProfile = (type) => {
    setEditing(true);
    setUpdateType(type);
  };

  const handleCancel = () => {
    setEditing(false);
    setUpdateType("");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    if (updateType === "nameAndImage") {
      const name = form.name.value;
      const imageURL = form.imageLink.value;

      updateUserProfile(name, imageURL)
        .then(() => {
          setUser({
            ...user,
            displayName: name,
            photoURL: imageURL,
          });
          setEditing(false);
          setUpdateType("");
        })
        .catch((err) => console.log(err));
    } else if (updateType === "email") {
      const email = form.email.value;
      console.log({ user, email });
      updateUserEmail(user, email)
        .then(() => {
          console.log("email updated successfully");
          setEditing(false);
          setUpdateType("");
          navigate("/login");
        })
        .catch((err) => console.log(err));
    } else if (updateType === "password") {
      const password = form.password.value;
      updateUserPassword(password)
        .then(() => {
          console.log("update password successfully");
          setEditing(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      {user?.emailVerified && (
        <div className="bg-gradient-to-r from-purple-400 to-pink-500 text-white rounded-lg shadow-md p-6 w-[400px] m-auto mt-44">
          <img
            src={updatedImage ? updatedImage : noImage}
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
          />
          {editing ? (
            <form
              onSubmit={handleFormSubmit}
              className="mt-4 flex flex-col gap-3">
              {updateType === "nameAndImage" && (
                <>
                  <input
                    type="text"
                    name="name"
                    value={updatedName}
                    onChange={(e) => setUpdatedName(e.target.value)}
                    className="text-2xl font-bold text-center w-full bg-transparent border-b-2 border-white focus:outline-none focus:border-pink-800 rounded-md"
                    placeholder="Name"
                  />
                  <input
                    type="text"
                    name="imageLink"
                    value={updatedImage}
                    onChange={(e) => setUpdatedImage(e.target.value)}
                    className="text-lg text-center w-full bg-transparent border-b-2 border-white focus:outline-none focus:border-pink-800 rounded-md"
                    placeholder="Image Link"
                  />
                </>
              )}
              {updateType === "email" && (
                <>
                  {" "}
                  <input
                    type="email"
                    name="email"
                    value={updatedEmail}
                    onChange={(e) => setUpdatedEmail(e.target.value)}
                    className="text-lg text-center w-full bg-transparent border-b-2 border-white focus:outline-none focus:border-pink-800 rounded-md"
                    placeholder="Email"
                  />
                </>
              )}
              {updateType === "password" && (
                <>
                  <div className="relative">
                    <input
                      type={showPassword ? "password" : "text"}
                      name="password"
                      value={updatedPassword}
                      onChange={(e) => setUpdatedPassword(e.target.value)}
                      className="text-lg text-center w-full bg-transparent border-b-2 border-white focus:outline-none focus:border-pink-800 rounded-md"
                      placeholder="Password"
                    />
                    <div
                      className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                      onClick={handlePasswordToggle}>
                      <FontAwesomeIcon
                        icon={showPassword ? faEye : faEyeSlash}
                      />
                    </div>
                  </div>
                </>
              )}
              <div className="flex justify-center gap-4 mt-4">
                <button
                  type="submit"
                  className="bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded-md focus:outline-none">
                  Save
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="bg-gray-500 hover:bg-gray-600 px-4 py-2 rounded-md focus:outline-none">
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-center mb-2">
                {updatedName}
              </h2>
              <p className="text-lg text-center mb-2">{updatedEmail}</p>
              <div className="flex flex-col gap-4 w-[60%] m-auto mt-6">
                <button
                  onClick={() => handleEditProfile("nameAndImage")}
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md focus:outline-none">
                  Update Name & Image
                </button>
                <button
                  onClick={() => handleEditProfile("email")}
                  className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md focus:outline-none">
                  Update Email
                </button>
                <button
                  onClick={() => handleEditProfile("password")}
                  className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md focus:outline-none">
                  Update Password
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default User;
