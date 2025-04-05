import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import usePublicServer from "./usePublicServer";

const useWishList = () => {
  const { user } = useAuth();
  const publicServer = usePublicServer();

  const {
    data: wishData,
    isLoading: wishLoading,
    refetch: wishRefetch,
  } = useQuery({
    queryKey: ["wishData", user?.email],
    queryFn: async () => {
      const { data } = await publicServer.get(`/wishlist/${user?.email}`);
      return data;
    },
  });

  return {wishData, wishLoading, wishRefetch};
};

export default useWishList;
