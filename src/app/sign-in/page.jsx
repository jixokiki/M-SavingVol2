"use client";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const router = useRouter();
  const handleSignIn = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/users?username=${username}&password=${password}`
      );
      const user = response.data[0];

      if (user) {
        login(user);
        localStorage.setItem("user", JSON.stringify(user));
        router.push("/");
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  return (
    <div className="max-w-xl mx-auto p-6 bg-white md:border rounded-md md:shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Sign In</h2>
      <label className="block mb-4">
        Username:
        <div className="p-3 border rounded my-3">
          <input
            type="text"
            className="form-input mt-1 block w-full rounded-md outline-none border-none"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
      </label>
      <label className="block mb-4">
        Password:
        <div className="p-3 border rounded my-3">
          <input
            type="password"
            className="form-input mt-1 block w-full rounded-md outline-none border-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </label>
      <button
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        onClick={handleSignIn}
      >
        Sign In
      </button>
      <p className="mt-4 text-gray-600">
        Don't have an account?{" "}
        <Link href="/sign-up" className="text-blue-500">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default Signin;
