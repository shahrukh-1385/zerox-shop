import Container from "../../components/container/Container";
import PersianNumber from "../../components/persianNumber/PersianNumber";
import ShoppingCartItem from "./shoppingCartItem/ShoppingCartItem";
function ShoppingPage() {
  return (
    <Container>
      <div className="">
        <ShoppingCartItem />
        <ShoppingCartItem />
        <ShoppingCartItem />
        <ShoppingCartItem />
        <ShoppingCartItem />
      </div>
      <div className="flex flex-col items-end mr-4">
        <span>قیمت کالاها: {PersianNumber(1000)}</span>
        <span>تخفیف: {PersianNumber(20)}</span>
        <span>قیمت نهایی: {PersianNumber(8000)}</span>
      </div>
      <button className="bg-green text-Slate-50 mb-16 py-1.5 px-3.5 rounded-md font-vazirmatn400"> ثبت سفارش </button>
    </Container>
  )
}

export default ShoppingPage;