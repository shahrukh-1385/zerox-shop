import { Link } from "react-router-dom";
import Container from "../container/Container";
import { useShoppingCardContext } from "../../hooks/shoppingCardItemHooks/shoppingCardItemHooks";
import { uselocalstorageTheme } from "../../hooks/localstorage/localstorage";


function Navbar() {
   const { isLogin, shopQty } = useShoppingCardContext();
   const { theme, setTheme } = uselocalstorageTheme('appTheme', { background: '#e9e9e9', color: '#162447' });

   const toggleTheme = () => {
      setTheme(prevTheme => ({
         background: prevTheme.background === '#162447' ? '#e9e9e9' : '#162447',
         color: prevTheme.color === '#162447' ? '#e9e9e9' : '#162447',
      }));
   };

   return (
      <div className="h-14 shadow flex items-center sticky top-0" style={{ background: theme.background, color: theme.color }}>
         <Container>
            <div className="flex justify-between items-center">
               <div className="gap-3 flex items-center">
                  <Link to="/ShoppingPage" className="btn-shop pr-2 relative">
                     <i className="fa-solid fa-cart-shopping cursor-pointer text-lg" style={{ background: theme.background, color: theme.color }}></i>
                     <span className="absolute bg-red-700 rounded-full w-4 h-4 text-sm text-Slate-50 flex justify-center items-center -bottom-0.5 -right-0.5 ">
                        {shopQty === 0 ? '' : shopQty}
                     </span>
                  </Link>
                  <span>
                     {
                        isLogin == null
                           ?
                           <Link to="/Login">
                              <button className="btn-shop border px-2.5 py-1 rounded-md font-vazirmatn300"> ورود | ثبت نام </button>
                           </Link>
                           :
                           <span className="font-vazirmatn400">{isLogin}</span>
                     }
                  </span>
               </div>
               <ul className="flex gap-4">
                  <li><Link to={"/Store"} className="font-vazirmatn300">فروشگاه</Link></li>
                  <li><Link to={"/"} className="font-vazirmatn300">خانه</Link></li>
               </ul>
               <button onClick={toggleTheme}>
                  {
                     theme.background == "#162447" ?
                        <i className="fa-solid fa-sun text-lg"></i>
                        :
                        <i className="fa-solid fa-moon text-lg"></i>
                  }
               </button>
            </div>
         </Container>
      </div>
   );
}

export default Navbar;
