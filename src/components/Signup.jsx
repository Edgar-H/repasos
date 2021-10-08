import React, { useState } from "react";
import { auth } from "../services/firebaseConfig";

const Signup = () => {
  const [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [passwordConfirm, setPasswordConfirm] = useState(""),
    [error, setError] = useState("");

  const registered = (e) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      auth.createUserWithEmailAndPassword(email, password);
      alert("User created successfully");
      return;
    } catch (error) {
      console.log(error);
    }
  };
  console.log(error);

  return (
    <div className="flex">
      <div className="w-1/2">
        <p className="text-center font-medium text-2xl mb-6">Sign Up</p>
        <form onSubmit={registered} className="form-group ">
          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@example.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Min 8 characters"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="passwordConfirm">
            <label htmlFor="passwordConfirm">Password Confirm</label>
            <input
              type="password"
              name="passwordConfirm"
              id="passwordConfirm"
              placeholder="Password Confirm"
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
          </div>
          <div className="btn">
            <button
              type="submit"
              className="bg-blue-600 w-full text-white font-medium py-1 rounded-md"
            >
              Register
            </button>
          </div>
        </form>
      </div>
      <div className="w-1/2 flex justify-center">
        <img
          src="https://source.unsplash.com/user/erondu"
          alt=""
          className="w-10/12"
        />
      </div>
    </div>
  );
};

export default Signup;
