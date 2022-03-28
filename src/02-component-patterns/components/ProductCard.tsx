import { createContext, CSSProperties, ReactNode } from "react";
import { useProduct } from "../hooks/useProduct";
import {
   OnChangeArgs,
   Product,
   ProductContextProps,
} from "../interfaces/interfaces";
import estilos from "../styles/styles.module.css";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
   children?: ReactNode;
   product: Product;
   className?: string;
   style?: CSSProperties;
   onChange?: (args: OnChangeArgs) => void;
   value?: number;
}

export const ProductCard = ({
   product,
   children,
   className,
   style,
   onChange,
   value = 0,
}: Props) => {
   const { counter, increaseBy } = useProduct({ onChange, product, value });
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
