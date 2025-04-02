
import usePublicServer from './usePublicServer';
import { useQuery } from '@tanstack/react-query';

const useSingleProduct = (id) => {
    const publicServer = usePublicServer();

    const { data: product, isLoading:productLoading, refetch } = useQuery({
      queryKey: ["single-product", id], 
      queryFn: async () => {
        const { data } = await publicServer.get(`/product/${id}`); 
        return data;
      },
    });

  return {product, productLoading, refetch}
}

export default useSingleProduct