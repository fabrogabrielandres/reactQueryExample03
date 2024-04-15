import { productsApi } from "../api/products.api"
import { sleep } from "../helpers/sleep";
import { Product, ProductLike } from "../interface/products"


interface GetProductsOptions {
    filterKey?:string,
}

interface GetProductOptions {
    id?:number,
}



export const fetchProducts = async({filterKey}:GetProductsOptions): Promise<Array<Product>> => {

    const params = new URLSearchParams();

    if(filterKey){
        params.append("category",filterKey)
    }        

    const {data} = await productsApi.get<Array<Product>>("/products",{params})
    return data    
}


export const fetchProductById = async({id}:GetProductOptions): Promise<Product> => {

    const {data} = await productsApi.get<Product>(`/products/${id}`)

    return data    
}

export const createProduct = async (newProduct: ProductLike):Promise<Product>=>{
    await sleep(5)
    throw new Error("algo pasa")
    const { data } = await productsApi.post<Product>("/products",newProduct)
    console.log("create product",data); 
    return data 

}