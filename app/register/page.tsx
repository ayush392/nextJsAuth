"use client";
import { useState } from "react";
import Link from "next/link";

function Register() {
  const [data, setData] = useState({
    email: "",
    password: "",
    fullName: "",
    state: "",
    country: "",
    username: "",
  });

  const handleRegister = async (e: any) => {
    e.preventDefault();
    try {
      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const json = await res.json();
      if (json.status === 201) {
        localStorage.setItem(
          "token",
          JSON.stringify({ _id: json.id, email: json.email })
        );
        alert(json.message);
        window.location.href = "/dashboard";
      }
      alert(json.message);
    } catch (error: any) {
      alert(error.message);
    }
  };

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="container min-h-dvh flex justify-center items-center">
        <div className=" border max-w-md w-full rounded-md p-6">
          <h1 className="text-3xl font-bold mb-5 text-center">Register</h1>
          <form className=" flex flex-col justify-center w-[94%] mx-auto">
            <div className=" mb-3">
              <label htmlFor="" className=" block">
                Email{" "}
              </label>
              <input
                className=" border p-1 block rounded w-[100%]"
                onChange={handleChange}
                type="email"
                placeholder="test@gmail.com"
              />
            </div>
            <div className=" mb-3">
              <label htmlFor="" className=" block">
                Password{" "}
              </label>
              <input
                className=" border p-1 block rounded w-[100%]"
                onChange={handleChange}
                type="password"
                placeholder="Enter password"
              />
            </div>
            <div className=" mb-3">
              <label htmlFor="" className=" block">
                Full Name
              </label>
              <input
                className=" border p-1 block rounded w-[100%]"
                onChange={handleChange}
                type="text"
                placeholder="name"
              />
            </div>
            <div className=" mb-3">
              <label htmlFor="" className=" block">
                Username
              </label>
              <input
                className=" border p-1 block rounded w-[100%]"
                onChange={handleChange}
                type="text"
                placeholder="username"
              />
            </div>
            <div className=" mb-3">
              <label htmlFor="" className=" block">
                State
              </label>
              <input
                className=" border p-1 block rounded w-[100%]"
                onChange={handleChange}
                type="text"
                placeholder="state"
              />
            </div>
            <div className=" mb-3">
              <label htmlFor="" className=" block">
                Country
              </label>
              <input
                className=" border p-1 block rounded w-[100%]"
                onChange={handleChange}
                type="text"
                placeholder="country"
              />
            </div>

            <button
              className=" text-white bg-blue-500 py-2 my-2 rounded"
              onClick={handleRegister}
            >
              Register
            </button>
          </form>
          <p className=" text-center mt-3 text-slate-700">
            Already have an account?{" "}
            <Link href={"/login"} className=" text-blue-700">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Register;
