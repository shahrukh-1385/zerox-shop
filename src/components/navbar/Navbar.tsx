import { Link } from "react-router-dom";
import Container from "../container/Container";
import { useShoppingCardContext } from "../../hooks/shoppingCardItemHooks/shoppingCardItemHooks";

function Navbar() {
   const { shopQty } = useShoppingCardContext();
   return (
      <div className="h-14 shadow flex items-center sticky top-0 bg-backGround">
         <Container>
            <div className="flex justify-between items-center">
               <div className="gap-3 flex items-center">
                  <Link to="/ShoppingPage" className="btn-shop pr-2 relative">
                     <i className="fa-solid fa-cart-shopping cursor-pointer text-lg text-gray-700"></i>
                     <span className="absolute bg-red-700 rounded-full w-4 h-4 text-sm text-Slate-50 flex justify-center items-center -bottom-0.5 -right-0.5 ">
                        {shopQty === 0 ? '' : shopQty}
                     </span>
                  </Link>
                  <Link to="/Login"><button className="btn-shop border px-2.5 py-1 rounded-md font-vazirmatn300"> ورود | ثبت نام </button></Link>
               </div>
               <ul className="flex gap-4">
                  <li><Link to={"/Store"} className="font-vazirmatn200">فروشگاه</Link></li>
                  <li><Link to={"/"} className="font-vazirmatn200">خانه</Link></li>
               </ul>
            </div>
         </Container>
      </div>
   );
}

export default Navbar;
