import { Link } from "react-router-dom"
import './PageError.css'
function PageError() {
   return (
      <section className="bg-white">
         <div className="Error">404</div>
         <div className="bg"></div>
         <div className="text-btn">
            <div className="text"><h3 className="font-vazirmatn400 text-3xl">.صفحه مورد نظر پیدا نشد</h3></div>
            <Link to={'/Home'} className="btn font-vazirmatn400">صفحه اصلی</Link>
         </div>
      </section>
   )
}

export default PageError