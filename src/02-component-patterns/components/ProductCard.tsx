import { createContext, CSSProperties, ReactNode } from "react";
import { useProduct } from "../hooks/useProduct";
import { Product, ProductContextProps } from "../interfaces/interfaces";
import estilos from "../styles/styles.module.css";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
   children?: ReactNode;
   product: Product;
   className?: string;
   style?: CSSProperties;
}

export const ProductCard = ({ product, children, className, style }: Props) => {
   const { counter, increaseBy } = useProduct();

   return (
      <Provider
         value={{
            counter,
            increaseBy,
            product,
         }}
      >
         <div
            className={`${estilos.productCard} ${className ? className : ""}`}
            style={style}
         >
            {children}
         </div>
      </Provider>
   );
};
