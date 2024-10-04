import { useEffect, useState } from "react";


export function uselocalstorageShopItem<T>(key: string, value: T) {
   const [values, setvalues] = useState<T>(() => {
      let localValue = localStorage.getItem("cartItem");
      if (localValue !== null) {
         return JSON.parse(localValue);
      } else {
         return value;
      }
   });

   useEffect(() => {
      localStorage.setItem(key, JSON.stringify(values))
   }, [key, values]);
   return [values, setvalues] as [typeof values, typeof setvalues];
};

interface Theme {
   background: '#e9e9e9' | "#162447";
   color: '#e9e9e9' | "#162447";
}

export function uselocalstorageTheme(key: string, Value: Theme) {
   const [theme, setTheme] = useState<Theme>(() => {
      const localValue = localStorage.getItem(key);
      return localValue ? JSON.parse(localValue) : Value;
   });

   useEffect(() => {
      localStorage.setItem(key, JSON.stringify(theme));
   }, [key, theme]);

   console.log(`Theme::: ${JSON.stringify(theme)}`);
   return { theme, setTheme };
}