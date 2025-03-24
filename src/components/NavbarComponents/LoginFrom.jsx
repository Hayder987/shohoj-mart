
import GoogleLogin from "./GoogleLogin";

const LoginFrom = () => {
  return (
    <div>
      <form className="">
        <div className="flex flex-col gap-4">
          {/* email */}
          <div className="w-full flex flex-col">
            <label className="mb-2">Email </label>
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
            <label className="mb-2">Password</label>
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
           <input type="submit" value="Login" className="w-full py-2 px-3 cursor-pointer font-semibold text-white rounded-full bg-blue-700" />
          </div>
        </div>
      </form>
      {/* divider */}
      <div className="divider">OR</div>
      <GoogleLogin/>
      <div className="mt-6 ">
        <p className="text-center text-sm mb-2">Don't have Account?</p>
        <button className=" hover:bg-blue-700 hover:text-white hover:border-none duration-300 cursor-pointer font-semibold border border-gray-400 w-full py-2 px-3 rounded-full">Register Now</button>
      </div>
    </div>
  );
};

export default LoginFrom;
