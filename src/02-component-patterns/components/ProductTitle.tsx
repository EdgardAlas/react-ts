import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import estilos from "../styles/styles.module.css";

export const ProductTile = ({ title }: { title?: string }) => {
   const { product } = useContext(ProductContext);
   return (
      <span className={estilos.productDescription}>
         {title ? title : product.title}
      </span>
   );
};
