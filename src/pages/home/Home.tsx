import { useState } from "react";
import { useShoppingCardContext } from "../../hooks/shoppingCardItemHooks/shoppingCardItemHooks";
import { useNavigate } from "react-router-dom";
import { uselocalstorageTheme } from "../../hooks/localstorage/localstorage";

function Home() {
  const { products } = useShoppingCardContext();
  const [inputValue, setInputValue] = useState<string>("");
  const navigate = useNavigate();
  const { theme } = uselocalstorageTheme('appTheme', { background: '#e9e9e9', color: '#162447' });

  const handleSearch = () => {
    const findProduct:any = products.find((item) => item.title === inputValue);
    if (findProduct) {
      navigate(`/ProductPage/${findProduct.id}`);
    } else {
      console.log('No product found');
    }
  };

  return (
    <section className="flex flex-col justify-between items-center " 
    style={{ height: '92vh' , background: theme.background}}>
      <div className="header flex flex-col justify-center mt-4 items-center gap-7">
        <h2 className={`font-vazirmatn400 text-lg `} style={{color: theme.color}}>
          خریدی ایمن با زیروکس
        </h2>
      </div>
      <div className="">
        <input 
          type="text" 
          placeholder="کالات رو جست و جو کن" 
          className="placeholder:text-right placeholder:mr-3 placeholder:font-vazirmatn400 text-gray-900 text-right w-72 h-12 focus:outline-none border-none" 
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="bg-Blue w-20 h-12" onClick={handleSearch}>
          <i className="fa-solid fa-magnifying-glass text-white text-lg"></i>
        </button>
      </div>
      <div className="mb-3">
        <span className="font-vazirmatn400" style={{color: theme.color}}>:)زیروکس تنها فروشگاه انلاین با قابلیت های مسخره</span>
      </div>
    </section>
  );
}

export default Home;