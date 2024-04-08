import { ProductList } from ".."
import { useQueryProducts } from "../../Hooks/useQueryProducts"


export const CompleteListPage = () => {

  const { products , error, isError,isFetching, isLoading}  = useQueryProducts({});
  

  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Todos los productos</h1>

      { isLoading && <h1>Cargando</h1> }

      <ProductList products={products} />

    </div>
  )
}