import { useContext } from "react";
import { ProductButtonsProps } from "../interfaces/interfaces";
import estilos from "../styles/styles.module.css";
import { ProductContext } from "./ProductCard";

export const ProductButtons = ({ className }: ProductButtonsProps) => {
   const { counter, increaseBy } = useContext(ProductContext);

   return (
      <div
         className={`${estilos.buttonsContainer} ${className ? className : ""}`}
      >
         <button className={estilos.buttonMinus} onClick={() => increaseBy(-1)}>
            -
         </button>
         <div className={estilos.countLabel}>{counter}</div>
         <button className={estilos.buttonAdd} onClick={() => increaseBy(1)}>
            +
         </button>
      </div>
   );
};
