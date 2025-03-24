import React from "react";

const RegisterForm = () => {
  return (
    <div className="py-10">
      <h1 className="text-2xl md:text-3xl font-semibold mb-3">
        Create account
      </h1>
      <p className="text-sm mb-4">Please register below to create an account</p>
      <form className="">
        <div className="flex flex-col gap-6">
            {/* name */}
          <div className="w-full flex flex-col">
            <label className="mb-2">Your Name </label>
            <input
              type="text"
              name="name"
              className="border border-gray-400 w-full py-2 px-3 rounded-full"
              required
              placeholder="Full Name"
            />
          </div>
          {/* email */}
          <div className="w-full flex flex-col">
            <label className="mb-2">Your Email </label>
            <input
              type="email"
              name="email"
              className="border border-gray-400 w-full py-2 px-3 rounded-full"
              required
              placeholder="Email Address"
            />
          </div>
          {/* password */}
          <div className="w-full flex flex-col">
            <label className="mb-2">Your Password</label>
            <input
              type="password"
              name="password"
              className="border border-gray-400 w-full py-2 px-3 rounded-full"
              required
              placeholder="Enter Password"
            />
          </div>
          {/* submit btn */}
          <div className="mt-2">
            <input
              type="submit"
              value="Create Account"
              className="w-full py-2 px-3 cursor-pointer font-semibold text-white rounded-full bg-blue-700"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
