"use client";
import { auth } from "@/firebase/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const router = useRouter();

  // Check local storage for user data on component mount
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if(user){
        setUser(user);
        setUserProfile(JSON.parse(localStorage.getItem("userProfile")));
        localStorage.setItem("user", JSON.stringify(user));
      }else {
        setUser(null);
        localStorage.removeItem("userProfile");
        localStorage.removeItem("user");
      }
    })
    return () => unsubscribe();
  }, [auth]);

  const login = (userData) => {
    setUser(userData);
    // Save user data to local storage
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    // setUser(null);
    // // Remove user data from local storage on logout
    // localStorage.removeItem("user");
    // router.push("/");
    
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        router.push("/");
        localStorage.removeItem("user");
        localStorage.removeItem("userProfile");
      })
      .catch((error) => {
        // An error happened.
        console.log(error)
      });
  };

  const isAuthenticated = () => {
    return user !== null;
  };

  return (
    <AuthContext.Provider value={{ user, userProfile, setUserProfile, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
