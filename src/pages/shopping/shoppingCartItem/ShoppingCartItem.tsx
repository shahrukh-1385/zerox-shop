import testImg from '../../../assets/img/test-img.webp';
function ShoppingCartItem() {
  return (
    <div className='flex flex-row-reverse mt-6 pb-2'>
      <img src={testImg} alt="" className="rounded-md w-32" />
      <div className='mr-3 w-full border-b border-b-gray-700 '>
        <h2 className='font-vazirmatn400 text-xl flex flex-row-reverse'>عنوان محصول</h2>
        <div className='flex flex-row'>
          <div><button className='bg-red-600 font-vazirmatn400 text-Slate-50 w-16 h-7 rounded-md'> حذف <i className='fa-solid fa-trash text-sm'></i></button></div>
          <div>
            <button className='bg-Blue text-Slate-50 w-7 h-7 text-2xl mx-2 rounded-md'>+</button>
            <span className='text-xl '>{2}</span>
            <button className='bg-Blue text-Slate-50 w-7 h-7 text-2xl mx-2 rounded-md'>-</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ShoppingCartItem