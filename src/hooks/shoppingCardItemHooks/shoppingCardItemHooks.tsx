import { useContext } from "react";
import { shoppingCardContext } from "../../context/ShoppingContext/ShoppingContext";

export const useShoppingCardContext = () => {
   return useContext(shoppingCardContext);
}