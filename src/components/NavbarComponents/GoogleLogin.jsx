import React from "react";
import { FcGoogle } from "react-icons/fc";

const GoogleLogin = ({setSignIn}) => {
  return (
    <div className="flex justify-center">
      <button className="flex cursor-pointer justify-center border border-gray-400 w-full py-2 px-3 rounded-full items-center gap-3">
        <span className="text-2xl">
          <FcGoogle />
        </span>
        <span className="font-semibold">Login With Google</span>
      </button>
    </div>
  );
};

export default GoogleLogin;
