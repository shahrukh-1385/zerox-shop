import {ComponentProps } from "react";

type ShoppingButton = ComponentProps<'button'>;

function ButtonShopping({ children, ...rest }:ShoppingButton) {
  return (
   <button {...rest} className="text-lg bg-red-600 py-1.5 px-5 text-gray-100 rounded-lg font-vazirmatn400">
      {children}
   </button>
  )
}

export default ButtonShopping;