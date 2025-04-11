
import { useQuery } from "@tanstack/react-query";
import usePrivateServer from "./usePrivateServer";

const useAllUser = () => {
  const publicServer = usePrivateServer();

  const {
    data: allUserData,
    isLoading: allUserLoading,
    refetch,
  } = useQuery({
    queryKey: ["allUser"],
    queryFn: async () => {
      const { data } = await publicServer.get(`/allUser`);
      return data;
    },
  });

  return {allUserData, allUserLoading, refetch}
};

export default useAllUser;
