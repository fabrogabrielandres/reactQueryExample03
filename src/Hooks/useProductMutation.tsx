import { useMutation } from "@tanstack/react-query";
import { createProduct } from "../services/actions";

export const useProductMutation = () => {
  const productMutation = useMutation({
    mutationFn: createProduct,
  });
  return { productMutation };
};
