import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import estilos from "../styles/styles.module.css";
import { ProductTitleProps } from "../interfaces/interfaces";

export const ProductTile = ({ title, className }: ProductTitleProps) => {
   const { product } = useContext(ProductContext);
   return (
      <span
         className={`${estilos.productDescription} ${
            className ? className : ""
         }`}
      >
         {title ? title : product.title}
      </span>
   );
};
