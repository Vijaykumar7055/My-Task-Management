import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);

    setEmail("")
    setPassword("")
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
      <div className="border-2 border-blue-600 p-10 rounded-xl shadow-xl bg-white">
        <form onSubmit={submitHandler} className="flex flex-col gap-5">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 border-gray-300 focus:border-blue-500 outline-none text-lg py-3 px-4 rounded-full"
            type="email"
            placeholder="Enter your email"
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 border-gray-300 focus:border-blue-500 outline-none text-lg py-3 px-4 rounded-full"
            type="password"
            placeholder="Enter your password"
          />

          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;