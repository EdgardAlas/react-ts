import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImage from "../assets/no-image.jpg";
import estilos from "../styles/styles.module.css";
import { ProductImageProps } from "../interfaces/interfaces";

export const ProductImage = ({ img, className }: ProductImageProps) => {
   const { product } = useContext(ProductContext);
   let imgToshow: string;

   if (img) {
      imgToshow = img;
   } else if (product.img) {
      imgToshow = product.img;
   } else {
      imgToshow = noImage;
   }

   return (
      <img
         src={imgToshow}
         alt="Product"
         className={`${estilos.productImg} ${className ? className : ""}`}
      />
   );
};
