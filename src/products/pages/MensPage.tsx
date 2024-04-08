import { ProductList } from ".."
import { useQueryProducts } from "../../Hooks/useQueryProducts";

export const MensPage = () => {

  const { products , error, isError,isFetching, isLoading}  = useQueryProducts({filterKey:"men's clothing"});

  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Productos para hombres</h1>
      { isLoading && <h1>Cargando</h1> }

      <ProductList products={products}/>

    </div>
  )
}