import { useEffect, useState } from 'react';
import { useShoppingCardContext } from '../../../hooks/shoppingCardItemHooks/shoppingCardItemHooks';
import { getPruductByID } from '../../../servises/Api';

interface cartItemType {
  id: number,
  productNumber: number,
}
interface productType {
  id: string,
  image: string,
  description: string,
  category: string,
  rating: {
    count: number
    rate: number
  },
  price: number,
  title: string
}

function ShoppingCartItem({ id, productNumber }: cartItemType) {
  const [products, setProducts] = useState<productType>();
  useEffect(() => {
    getPruductByID(id).then((result) => {
      console.log(result)
       setProducts(result);
    }).catch((err) => {
       console.log(err);
    });
 }, []);
  const stringID = String(id);
  const { addProduct, reduceProduct, removeProduct } = useShoppingCardContext();
  return (
    <div className='flex flex-row-reverse mt-6 pb-2'>
      <img src={products?.image} alt="" className="rounded-md w-32" />
      <div className='mr-3 w-full border-b border-b-gray-700 '>
        <h2 className='font-vazirmatn400 text-xl flex flex-row-reverse'>{products?.title}</h2>
        <div className='flex flex-row'>
          <div><button className='bg-red-600 font-vazirmatn400 text-Slate-50 w-16 h-7 rounded-md' onClick={() => { removeProduct(stringID) }}> حذف <i className='fa-solid fa-trash text-sm'></i></button></div>
          <div className='flex items-center justify-center'>
            <button className='bg-Blue text-Slate-50 w-7 h-7 text-2xl mx-2 rounded-md flex items-center justify-center' onClick={() => { addProduct(stringID) }}>+</button>
            <span className='text-xl'>{productNumber}</span>
            <button className='bg-Blue text-Slate-50 w-7 h-7 text-2xl mx-2 rounded-md flex items-center justify-center' onClick={() => { reduceProduct(stringID) }}>-</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShoppingCartItem