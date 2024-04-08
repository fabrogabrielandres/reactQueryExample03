import { useQuery } from "@tanstack/react-query";
import { fetchProductById } from "../services/actions";


interface Options{ 
  id:number
}



export const useQueryProduct = ( {id}:Options) => {
  
  const { data: product,error, isError, isFetching, isLoading,  } = useQuery({
    queryKey: ["product",{ id: id }],queryFn:()=>fetchProductById({id}), staleTime: 1000 * 60 * 60 //1 hora
  });

  return ({product,error, isError, isFetching, isLoading});
};
