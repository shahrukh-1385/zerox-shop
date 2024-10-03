import { createContext, useEffect, useState } from "react";
import { getPruducts } from "../../servises/Api";
import { uselocalstorageShopItem } from "../../hooks/localstorage/localstorage";


// types:

interface ShoppingCardItemProvider {
   children: React.ReactNode;
}
interface cartItem {
   id: number,
   productNumber: number,
}
interface products {
   image: any,
   title: string,
   price: number,
   description: string,
}
interface shoppingCardContextType {
   shopQty: number,
   products: products[],
   cartItem: cartItem[],
   addProduct: (id: string) => void,
   reduceProduct: (id: string) => void,
   getProductNumber: (id: string) => number,
   removeProduct: (id: string) => void,
}
// export files:

export const shoppingCardContext = createContext({} as shoppingCardContextType);


// ShoppingCardItem
export function ShoppingCardItem({ children }: ShoppingCardItemProvider) {
   const [cartItem, setCartItem] = uselocalstorageShopItem<cartItem[]>('cartItem',[]);
   const [products, setProducts] = useState<products[]>([]);

   // show products in new product 
   useEffect(() => {
      getPruducts().then((result) => {
         setProducts(result);
      }).catch((err) => {
         console.log(err);
      });
   }, []);

   // add product or Add one more
   const addProduct = (id: string) => {
      // change type to number:
      const ParsIntID = parseInt(id);

      setCartItem((cartItem) => {
         // Search to find the product:
         let selectedItem = cartItem.find(item => item.id === ParsIntID);
         // If the product is available, add one to the product:
         if (selectedItem) {
            return cartItem.map(item => {
               if (item.id === ParsIntID) {
                  alert('محصول شما با موفقیت تعدادش بالا رفت');
                  return { ...item, productNumber: item.productNumber + 1 };
                  // Add a product that has not been added:
               } else {
                  return item;
               };
            });
            // add new product:
         } else {
            alert('محصول شما با موفقیت اضافه شد');
            return [...cartItem, { id: ParsIntID, productNumber: 1 }];
         };
      });
   };

   // product product or product one more
   const reduceProduct = (id: string) => {
      // change type to number:
      const ParsIntID = parseInt(id);

      setCartItem((cartItem): any => {
         // Search to find the product:
         let selectedItem = cartItem.find(item => item.id === ParsIntID);

         if (selectedItem?.productNumber === 1) {
            return cartItem.filter((item) => { item.id === ParsIntID })
         }
         else {
            return cartItem.map(item => {
               if (item.id === ParsIntID) {
                  alert('محصول شما با موفقیت تعدادش کم شد');
                  return { ...item, productNumber: item.productNumber - 1 };
                  // subtract a product that has not been subtracted:
               } else {
                  return item;
               };
            });
         }
      })
   }

   const getProductNumber = (id: string) => {
      // change type to number:
      const ParsIntID = parseInt(id);
      // if for find product
      return cartItem.find((item) => item.id === ParsIntID)?.productNumber || 0;
   }
   const removeProduct = (id: string) => {
      // change type to number:
      const ParsIntID = parseInt(id);
      // Remove an item from the shopping cart
      setCartItem(cartItem => cartItem.filter((item) => item.id !== ParsIntID));
   }
   // for red circle shop in navbar
   const shopQty = cartItem.reduce((Qty, item) => Qty + item.productNumber, 0);

   return (
      <shoppingCardContext.Provider value={{ shopQty, cartItem, products, addProduct, reduceProduct, getProductNumber, removeProduct }}>
         {children}
      </shoppingCardContext.Provider>
   );
};