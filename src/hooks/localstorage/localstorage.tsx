import { useEffect, useState } from "react";

export function uselocalstorageShopItem<T>(key: string, value: T) {
  const [values, setvalues] = useState<T>(()=> {
   let localValue = localStorage.getItem("cartItem");
   if(localValue !== null) {
      return JSON.parse(localValue);
   }else{
      return value;
   }
  });
  
  useEffect(() => {
   localStorage.setItem(key, JSON.stringify(values))
  }, [key,values]);
  return [values, setvalues] as [typeof values,typeof setvalues];

};