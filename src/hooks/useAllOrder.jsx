import React from 'react'
import usePrivateServer from './usePrivateServer';
import { useQuery } from '@tanstack/react-query';

const useAllOrder = () => {
    const privateServer = usePrivateServer();

  const {
    data: allOrder,
    isLoading: allOrderLoading,
    refetch,
  } = useQuery({
    queryKey: ["allOrder"],
    queryFn: async () => {
      const { data } = await privateServer.get(`/allOrder`);
      return data;
    },
  });
  return {allOrder, allOrderLoading, refetch}
 
}

export default useAllOrder