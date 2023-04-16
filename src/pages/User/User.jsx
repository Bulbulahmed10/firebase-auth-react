import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import noImage from "../.././assets/no-image.png";

const User = () => {
  const [editing, setEditing] = useState(false);
  const [updatedName, setUpdatedName] = useState(null);
  const [updatedEmail, setUpdatedEmail] = useState(null);
  const [updatedPassword, setUpdatedPassword] = useState("");
  const [updatedImage, setUpdatedImage] = useState(null);

  const { updateUserProfile, user, setUser } = useContext(AuthContext);
  console.log(user);

  useEffect(() => {
    if (user !== null) {
      user.providerData.forEach((profile) => {
        setUpdatedName(profile.displayName);
        setUpdatedEmail(profile.email);
        setUpdatedImage(profile.photoURL);
      });
    }
  }, [user]);

  const handleEditProfile = () => {
    setEditing(true);
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const imageURL = form.imageLink.value;
    updateUserProfile(name, imageURL)
    .then(() => {
      setUser({
        ...user, displayName: name, photoURL: imageURL
      })
      setEditing(false)
    })
    .catch(err => console.log(err))
  };

  return (
    <div className="bg-gradient-to-r from-purple-400 to-pink-500 text-white rounded-lg shadow-md p-6 w-[400px] m-auto mt-44">
      <img
        src={updatedImage ? updatedImage : noImage}
        alt="Profile"
        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
      />
      {editing ? (
        <form onSubmit={handleSaveProfile} className="mt-4 flex flex-col gap-3">
          <input
            type="text"
            name="name"
            value={updatedName}
            onChange={(e) => setUpdatedName(e.target.value)}
            className="text-2xl font-bold text-center w-full bg-transparent border-b-2 border-white focus:outline-none focus:border-pink-800 rounded-md"
            placeholder="Name"
          />
          <input
            type="email"
            name="email"
            value={updatedEmail}
            onChange={(e) => setUpdatedEmail(e.target.value)}
            className="text-lg text-center w-full bg-transparent border border-white focus:outline-none focus:border-pink-800 rounded-md"
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            value={updatedPassword}
            onChange={(e) => setUpdatedPassword(e.target.value)}
            className="text-lg text-center w-full bg-transparent border-b-2 border-white focus:outline-none focus:border-pink-800 rounded-md"
            placeholder="Password"
          />
          <input
            type="text"
            name="imageLink"
            value={updatedImage}
            onChange={(e) => setUpdatedImage(e.target.value)}
            className="text-lg text-center w-full bg-transparent border-b-2 border-white focus:outline-none focus:border-pink-800 rounded-md"
            placeholder="Image Link"
          />
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-white text-purple-500 hover:bg-purple-500 hover:text-white px-4 py-2 rounded-full transition duration-300 ease-in-out focus:outline-none">
              Save Profile
            </button>
          </div>
        </form>
      ) : (
        <>
          <h2 className="text-2xl font-bold text-center mb-2">
            {updatedName ? updatedName : "Update Your Name"}
          </h2>
          <p className="text-lg text-center">{updatedEmail && updatedEmail}</p>
          <div className="flex justify-center mt-6">
            <button
              onClick={handleEditProfile}
              className="bg-white text-purple-500 hover:bg-purple-500 hover:text-white px-4 py-2 rounded-full transition duration-300 ease-in-out focus:outline-none">
              Update Profile
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default User;
