import {
  createUserWithEmailAndPassword,
  deleteUser,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const verifyEmail = (currentUser) => {
    return sendEmailVerification(currentUser);
  };

  const logInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const updateUserProfile = (userName, userPhotoUrl) => {
    return updateProfile(user, {
      displayName: userName,
      photoURL: userPhotoUrl,
    });
  };

  const logOut = () => {
    return signOut(auth);
  };

  const deleteAccount = (currentUser) => {
    return deleteUser(currentUser);
  };

  const authInfo = {
    user,
    setUser,
    createUser,
    verifyEmail,
    logInUser,
    logOut,
    deleteAccount,
    updateUserProfile,
  };
  return (
    <AuthContext.Provider value={authInfo}> {children} </AuthContext.Provider>
  );
};

export default AuthProviders;
