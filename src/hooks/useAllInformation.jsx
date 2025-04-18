import { useQuery } from "@tanstack/react-query";
import usePrivateServer from "./usePrivateServer";

const useAllInformation = () => {
  const privateServer = usePrivateServer();

  const {
    data: allInfo,
    isLoading: allinfoLoading,
    refetch,
  } = useQuery({
    queryKey: ["allInfo"],
    queryFn: async () => {
      const { data } = await privateServer.get(`/allInformation`);
      return data;
    },
  });
  return { allInfo, allinfoLoading, refetch };
};

export default useAllInformation;
