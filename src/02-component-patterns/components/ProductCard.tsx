import { createContext, CSSProperties } from "react";
import { useProduct } from "../hooks/useProduct";
import {
   InitialValues,
   OnChangeArgs,
   Product,
   ProductCardHandlers,
   ProductContextProps,
} from "../interfaces/interfaces";
import estilos from "../styles/styles.module.css";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
   children?: (args: ProductCardHandlers) => JSX.Element;
   product: Product;
   className?: string;
   style?: CSSProperties;
   onChange?: (args: OnChangeArgs) => void;
   value?: number;
   initialValues?: InitialValues;
}

export const ProductCard = ({
   product,
   children,
   className,
   style,
   onChange,
   value = 0,
   initialValues,
}: Props) => {
   const { counter, increaseBy, isMaxCountReached, reset } = useProduct({
      onChange,
      product,
      value,
      initialValues,
   });
   return (
      <Provider
         value={{
            counter,
            increaseBy,
            product,
            maxCount: initialValues?.maxCount,
         }}
      >
         <div
            className={`${estilos.productCard} ${className ? className : ""}`}
            style={style}
         >
            {children &&
               children({
                  count: counter,
                  increaseBy,
                  isMaxCountReached,
                  reset,
                  product,
                  maxCount: initialValues?.maxCount,
               })}
         </div>
      </Provider>
   );
};
