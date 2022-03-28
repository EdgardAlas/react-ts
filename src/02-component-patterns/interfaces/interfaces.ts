import { CSSProperties } from "react";
import { Props as ProductCardProps } from "../components/ProductCard";

export interface Product {
   id: string;
   title: string;
   img?: string;
}

export interface ProductContextProps {
   counter: number;
   increaseBy: (value: number) => void;
   product: Product;
   maxCount?: number;
}

export interface ProductCardHOCProps {
   ({ product, children }: ProductCardProps): JSX.Element;
   Title: ({ title, className }: ProductTitleProps) => JSX.Element;
   Image: ({ img }: ProductImageProps) => JSX.Element;
   Buttons: ({ className }: ProductButtonsProps) => JSX.Element;
}

export interface ProductImageProps {
   img?: string;
   className?: string;
}

export interface ProductTitleProps {
   title?: string;
   className?: string;
}

export interface ProductButtonsProps {
   className?: string;
   style?: CSSProperties;
}

export interface OnChangeArgs {
   product: Product;
   count: number;
}

export interface ProductInCart extends Product {
   count: number;
}

export interface InitialValues {
   count?: number;
   maxCount?: number;
}

export interface ProductCardHandlers {
   count: number;
   isMaxCountReached: boolean;
   maxCount?: number;
   product: Product;

   increaseBy: (value: number) => void;
   reset: () => void;
}
