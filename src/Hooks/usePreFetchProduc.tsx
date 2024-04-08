import { useQueryClient } from "@tanstack/react-query";
import { fetchProductById } from "../services/actions";





export const usePreFetchProduc = () => {
    const queryClient = useQueryClient();
    const preFetchProduc = (id:number)=> queryClient.prefetchQuery({queryKey: ["product",{ id: id }],queryFn:()=>fetchProductById({id})
    , staleTime: 1000 * 60 * 60 //1 hora
    })

  return ({preFetchProduc})
    
}
