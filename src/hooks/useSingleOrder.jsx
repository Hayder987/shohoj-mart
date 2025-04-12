import React from 'react'
import usePublicServer from './usePublicServer';
import { useQuery } from '@tanstack/react-query';

const useSingleOrder = (id) => {
    const publicServer = usePublicServer();
    const {
        data: singleOrder = {},
        isLoading: singleOrderLoading,
        refetch:singleRefetchPayment,
      } = useQuery({
        queryKey: ["singleOrder", id],
        queryFn: async () => {
          const { data } = await publicServer.get(`/singleOrder/${id}`);
          return data;
        },
      });
  return {singleOrder, singleOrderLoading, singleRefetchPayment} 
}

export default useSingleOrder