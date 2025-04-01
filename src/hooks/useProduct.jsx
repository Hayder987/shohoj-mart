import { useQuery } from "@tanstack/react-query";
import usePublicServer from "./usePublicServer";

const useProduct = (category) => {
  const publicServer = usePublicServer();

  const { data: productData, isLoading, refetch } = useQuery({
    queryKey: ["product-data", category], 
    queryFn: async () => {
      const { data } = await publicServer.get(`/allProducts?category=${category}`); // Corrected URL
      return data;
    },
  });

  return { productData, isLoading, refetch };
};

export default useProduct;
