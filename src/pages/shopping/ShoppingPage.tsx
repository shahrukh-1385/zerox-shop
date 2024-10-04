import Container from "../../components/container/Container";
import PersianNumber from "../../components/persianNumber/PersianNumber";
import ShoppingCartItem from "./shoppingCartItem/ShoppingCartItem";
import { useShoppingCardContext } from "../../hooks/shoppingCardItemHooks/shoppingCardItemHooks";
function ShoppingPage() {
  const { cartItem } = useShoppingCardContext();

  const cartItems = cartItem.map((item, index) => {
    return (
      <ShoppingCartItem key={index} {...item} />
    )
  })
  return (
    <Container>
      {
        cartItem.length == 0
          ? <div className="h-64 flex justify-center items-center"><span className="font-vazirmatn400 text-2xl">سبد خرید شما خالیه</span></div>
          :
          <>
            <div className="">
              {cartItems}
            </div>
            <div className="flex flex-col items-end mr-4">
              <span>قیمت کالاها: {PersianNumber(1000)}</span>
              <span>تخفیف: {PersianNumber(20)}</span>
              <span>قیمت نهایی: {PersianNumber(8000)}</span>
            </div>
            <button className="bg-green text-Slate-50 mb-16 py-1.5 px-3.5 rounded-md font-vazirmatn400"> ثبت سفارش </button>
          </>
      }
    </Container>
  );
  
}

export default ShoppingPage;