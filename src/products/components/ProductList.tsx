import { ProductCard } from ".."
import { usePreFetchProduc } from "../../Hooks/usePreFetchProduc"
import { Product } from "../../interface/products"


interface Props {
  products:Array<Product>
}



export const ProductList = ({products}:Props) => {

  const {preFetchProduc} = usePreFetchProduc()

  return (
    <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2 justify-center max-w-max">
      {products.map(product=><ProductCard key={product.id} product={product}  preFetchProduc={preFetchProduc}/>)}
    </div>
  )
}