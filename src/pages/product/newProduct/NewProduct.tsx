
import ButtonShopping from '../../../components/button/buttonShopping/ButtonShopping';
import PersianNumber from '../../../components/persianNumber/PersianNumber';
function NewProduct({ title, price,image}:any) {

  return (
    <div className='bg-gray-100 p-2 text-center w-52 rounded-lg h-80 justify-center flex flex-col'>
      <img src={image} alt="محصول" className='rounded-lg h-40 ' />
      <h2 className='font-vazirmatn500 my-2 h-20 mt-3'>{title}</h2>
      <span className='bg-red-600 w-32 mx-8 text-sm text-gray-100 font-vazirmatn400 rounded-lg'>هزار تومان&nbsp;{PersianNumber(price ?? 0)}</span>
      <div className='mt-5'>
        <ButtonShopping onClick={() => { console.log(`clicked!`) }}>
          درباره محصول
        </ButtonShopping>
      </div>
    </div>
  );
}

export default NewProduct;