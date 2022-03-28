import { useEffect, useRef, useState } from "react";
import { InitialValues, OnChangeArgs, Product } from "../interfaces/interfaces";

interface UseProductArgs {
   product: Product;
   onChange?: (args: OnChangeArgs) => void;
   value?: number;
   initialValues?: InitialValues;
}

export const useProduct = ({
   product,
   onChange,
   value = 0,
   initialValues,
}: UseProductArgs) => {
   const [counter, setCounter] = useState<number>(
      initialValues?.count || value
   );
   const isMounted = useRef(false);

   const increaseBy = (value: number) => {
      const newValue = Math.max(counter + value, 0);
      const newCount = initialValues?.maxCount
         ? newValue > initialValues.maxCount
            ? initialValues.maxCount
            : newValue
         : newValue;

      setCounter(newCount);
      onChange && onChange({ count: newCount, product });
   };

   const reset = () => {
      setCounter(initialValues?.count || value);
   };

   useEffect(() => {
      if (!isMounted.current) return;

      setCounter(value);
   }, [value]);

   useEffect(() => {
      isMounted.current = true;
   }, []);

   return {
      counter,
      increaseBy,
      maxCount: initialValues?.maxCount,
      isMaxCountReached:
         !!initialValues?.count && initialValues.maxCount === counter,
      reset,
   };
};
