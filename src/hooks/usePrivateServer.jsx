import axios from "axios";

const axiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_ServerUrl}`,
    // withCredentials:true,
  });

const usePrivateServer = () => {
  return axiosInstance
}

export default usePrivateServer