import { useParams } from "react-router-dom";
import { useQueryProduct } from "../../Hooks/useQueryProduct";
import { ProductCard } from "..";



export const ProductsById = () => {
  const {id} = useParams();

  const {product , error, isError,isFetching, isLoading} = useQueryProduct({id: +id!})
  return(
    <div className="flex-col">
    <h1 className="text-2xl font-bold">Productos para hombres</h1>
    { isLoading && <h1>Cargando</h1> }

    {product && <ProductCard product={product}/>}

  </div>
  )
  
};
