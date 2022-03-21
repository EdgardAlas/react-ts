import {
   ProductButtons,
   ProductCard,
   ProductImage,
   ProductTile,
} from "../components";

import "../styles/custom-styles.css";

const product = {
   id: "1",
   title: "Coffie Mug - Card",
   img: "./coffee-mug.png",
};

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
            <ProductCard product={product} className="bg-dark text-white">
               <ProductImage />
               <ProductTile />
               <ProductButtons />
            </ProductCard>

            <ProductCard
               product={product}
               style={{
                  color: "red",
               }}
            >
               <ProductImage />
               <ProductTile />
               <ProductButtons />
            </ProductCard>

            <ProductCard product={product} className="bg-dark text-white">
               <ProductCard.Image className="custom-image" />
               <ProductCard.Title className="text-bold" />
               <ProductCard.Buttons className="custom-buttons" />
            </ProductCard>
         </div>
      </div>
   );
};
