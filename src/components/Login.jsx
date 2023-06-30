import React from "react";
import styles from "../style";
// import { useState } from "react";
// import axiosInstance from "../axios";
// import { useHistory } from "react-router-dom";

import { robot, c, b } from "../assets";

export default function Login() {
  // const history = useHistory();
  // const initialFormData = Object.freeze({
  //   email: "",
  //   password: "",
  // });

  // const [formData, updateFormData] = useState(initialFormData);

  // const handleChange = (e) => {
  //   updateFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value.trim(),
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(formData);

  //   axiosInstance
  //     .post(`auth/token/`, {
  //       grant_type: "password",
  //       username: formData.email,
  //       password: formData.password,
  //     })
  //     .then((res) => {
  //       localStorage.setItem("access_token", res.data.access_token);
  //       localStorage.setItem("refresh_token", res.data.refresh_token);
  //       history.push("/");
  //       window.location.reload();
  //     });
  // };

  return (
    <section
      id="login"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
        <div className="hidden sm:block">
          <img className="w-[100%] h-[100%] relative z-[5]" src={b} alt="" />
        </div>

        <div className="bg-gray-0 flex flex-col justify-center rounded-[100px]">
          <form className="max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8">
            <h2 className="text-3xl  bg-teal-500 text-gradient font-bold text-center">
              Signin
            </h2>
            <div className="flex flex-col text-gray-400 py-2">
              <label>Username</label>
              <input
                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                // type="email"
                type="text"
                // id="email"
                // label="Email Address"
                // name="email"
                // autoComplete="email"
                // autoFocus
                // onChange={handleChange}
              />
            </div>
            <div className="flex flex-col text-gray-400 py-2">
              <label>Password</label>
              <input
                className="p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="password"
                // name="password"
                // label="Password"
                // id="password"
                // autoComplete="current-password"
                // onChange={handleChange}
              />
            </div>
            <div className="flex justify-between text-gray-400 py-2">
              <p className="flex items-center text-gradient font-bold">
                <input className="mr-2" type="checkbox" /> Remember Me
              </p>
              <p flex className="items-center text-gradient font-bold">
                Forgot Password
              </p>
            </div>
            <button className="w-full my-5 py-2  bg-teal-500 shadow-lg text-gradient hover:animate-pulse shadow-teal-500/50  text-white font-bold rounded-lg">
              Login
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
