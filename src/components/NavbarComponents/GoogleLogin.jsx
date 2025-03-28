import React from "react";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const GoogleLogin = ({setSignIn}) => {
  const { googleLoginUser, setLoading} = useAuth();

  return (
    <div className="flex justify-center">
      <button
       onClick={async()=>{
         try{
          await googleLoginUser();
          setSignIn(false)
          toast.success('user login successfully')
         }
         catch(err){
          setLoading(false)
          toast.error(err.message)
         }
       }}
       className="flex cursor-pointer justify-center border border-gray-400 w-full py-2 px-3 rounded-full items-center gap-3">
        <span className="text-2xl">
          <FcGoogle />
        </span>
        <span className="font-semibold">Login With Google</span>
      </button>
    </div>
  );
};

export default GoogleLogin;
