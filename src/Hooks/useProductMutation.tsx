import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProduct } from "../services/actions";
import { Product } from "../interface/products";

export const useProductMutation = () => {
  const queryClient = useQueryClient();
  const productMutation = useMutation({
    mutationFn: createProduct,

    onMutate: (product) => {
      
      const optimisticProduct = { ...product, id: Math.random() };
      console.log("optimisticProduc", optimisticProduct);
      queryClient.setQueryData(
        ["products", { filterKey: optimisticProduct.category }],
        (old: Product[]) => {
          if (!old) return [optimisticProduct];
          return [...old, optimisticProduct];
        }
      );
      return { optimisticProduct };
    },
    onSuccess: (data, variable, context) => {
      // queryClient.invalidateQueries({
      //   queryKey:["products",{'filterKey':data.category}]
      // })
      console.log("onSuccess", { data, variable, context });
      queryClient.removeQueries({
        queryKey: ["product", context?.optimisticProduct.category],
      });

      queryClient.setQueryData(
        ["products", { filterKey: data.category }],
        (old: Product[]) => {
          if (!old) return [data];
          return old.map((cacheProduct) => {
            return cacheProduct.id === context?.optimisticProduct.id
              ? data
              : cacheProduct;
          });
        }
      );
    },

    onError: (data, variable, context) => {
      console.log("onError", { data, variable, context });
      // queryClient.removeQueries({
      //   queryKey: ["product", context?.optimisticProduct.category],
      // });

      queryClient.setQueryData(["products", { filterKey: variable.category }],
        (old: Product[]) => {
          if (!old) return [];
          return old.filter((cacheProduct,idx) => {
            console.log(old,idx,cacheProduct.id === context?.optimisticProduct.id);
            return cacheProduct.id === context?.optimisticProduct.id ? null : cacheProduct;
          });
        }
      );
    },
  });
  return { productMutation };
};
