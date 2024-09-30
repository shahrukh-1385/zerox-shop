import { Link } from "react-router-dom";
import Container from "../container/Container";

function Navbar() {
   return (
      <div className="h-14 shadow flex items-center sticky top-0 bg-backGround">
         <Container>
            <div className="flex justify-between items-center">
               <div className="gap-3 flex items-center">
                  <Link to="/ShoppingPage" className="btn-shop pr-2 border-r-gray-950">
                     <i className="fa-solid fa-cart-shopping cursor-pointer text-lg text-gray-700"></i>
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
