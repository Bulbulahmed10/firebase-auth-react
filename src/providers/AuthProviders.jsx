import {
  createUserWithEmailAndPassword,
  deleteUser,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
  updateEmail,
  updatePassword,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
export const AuthContext = createContext(null);
const auth = getAuth(app);
console.log(auth.currentUser);
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

  const updateUserEmail = (existingUser, newEmail) => {
    return updateEmail(existingUser, newEmail);
  };

  const updateUserPassword = (newPassword) => {
    console.log({user, newPassword});
   return updatePassword(user, newPassword);
  }

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
    updateUserEmail,
    updateUserPassword
  };
  return (
    <AuthContext.Provider value={authInfo}> {children} </AuthContext.Provider>
  );
};

export default AuthProviders;
