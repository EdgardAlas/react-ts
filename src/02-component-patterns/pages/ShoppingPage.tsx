import {
   ProductButtons,
   ProductCard,
   ProductImage,
   ProductTile,
} from "../components";

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
            <ProductCard product={product}>
               <ProductImage />
               <ProductTile />
               <ProductButtons />
            </ProductCard>

            <ProductCard product={product}>
               <ProductCard.Image />
               <ProductCard.Title />
               <ProductCard.Buttons />
            </ProductCard>
         </div>
      </div>
   );
};
