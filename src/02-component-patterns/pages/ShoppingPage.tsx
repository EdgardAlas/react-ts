import {
   ProductButtons,
   ProductCard,
   ProductImage,
   ProductTile,
} from "../components";
import { useShoppingcart } from "../hooks/useShoppingcart";
import "../styles/custom-styles.css";

export const ShoppingPage = () => {
   const { products, shoppingCart, onProductCountChange } = useShoppingcart();

   return (
      <div>
         <h1>Shopping page</h1>
         <hr />
         <div
            style={{
               display: "flex",
               flexDirection: "row",
               flexWrap: "wrap",
            }}
         >
            {products.map((product) => (
               <ProductCard
                  product={product}
                  className="bg-dark text-white"
                  key={product.id}
                  onChange={onProductCountChange}
                  value={shoppingCart[product.id]?.count || 1}
               >
                  <ProductImage />
                  <ProductTile />
                  <ProductButtons className="custom-buttons" />
               </ProductCard>
            ))}
         </div>
         <div className="shopping-cart">
            {Object.entries(shoppingCart).map(([key, product]) => (
               <ProductCard
                  onChange={onProductCountChange}
                  value={product.count}
                  key={key}
                  product={product}
                  className="bg-dark text-white"
                  style={{
                     width: "100px",
                  }}
               >
                  <ProductImage />
                  {/* <ProductTile title={product.count + ""} /> */}
                  <ProductButtons
                     className="custom-buttons"
                     style={{ display: "flex", justifyContent: "center" }}
                  />
               </ProductCard>
            ))}
         </div>
         <code>{JSON.stringify(shoppingCart)}</code>
      </div>
   );
};
