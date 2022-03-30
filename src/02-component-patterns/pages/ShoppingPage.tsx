import {
   ProductButtons,
   ProductCard,
   ProductImage,
   ProductTile,
} from "../components";
import { products } from "../data/products";
import "../styles/custom-styles.css";

const product = products[0];

export const ShoppingPage = () => {
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
            <ProductCard
               initialValues={{
                  count: 6,
                  maxCount: 10,
               }}
               product={product}
               key={product.id}
            >
               {({ reset, maxCount, increaseBy, isMaxCountReached }) => (
                  <>
                     <ProductImage />
                     <ProductTile />
                     <ProductButtons />
                  </>
               )}
            </ProductCard>
         </div>
      </div>
   );
};
