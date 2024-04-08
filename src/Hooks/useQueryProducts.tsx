import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../services/actions";

interface Options{ 
    filterKey?:string
}

export const useQueryProducts = ({filterKey}:Options) => {
    
    const {data:products=[] , error, isError, isFetching, isLoading} = useQuery({queryKey:["products",{filterKey}],queryFn:()=>fetchProducts({filterKey}),
    staleTime: 1000 * 60 * 60 //1 hora 

})

    return ({products, error, isError, isFetching, isLoading})
}
