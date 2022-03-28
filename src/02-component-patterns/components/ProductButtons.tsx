import { useCallback, useContext } from "react";
import { ProductButtonsProps } from "../interfaces/interfaces";
import estilos from "../styles/styles.module.css";
import { ProductContext } from "./ProductCard";

export const ProductButtons = ({ className, style }: ProductButtonsProps) => {
   const { counter, increaseBy, maxCount } = useContext(ProductContext);
   const isMaxReached = useCallback(
      () => counter === maxCount,
      [counter, maxCount]
   );

   console.log(isMaxReached());

   return (
      <div
         className={`${estilos.buttonsContainer} ${className ? className : ""}`}
         style={style}
      >
         <button className={estilos.buttonMinus} onClick={() => increaseBy(-1)}>
            -
         </button>
         <div className={estilos.countLabel}>{counter}</div>
         <button
            className={`${estilos.buttonAdd} ${
               isMaxReached() ? estilos.disable : ""
            }`}
            onClick={() => increaseBy(1)}
         >
            +
         </button>
      </div>
   );
};
