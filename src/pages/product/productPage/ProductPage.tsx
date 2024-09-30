import { useParams } from "react-router-dom"
import ButtonShopping from "../../../components/button/buttonShopping/ButtonShopping";
import Container from "../../../components/container/Container";
import { useEffect, useState } from "react";
import { getPruductByID } from "../../../servises/Api";
import PersianNumber from "../../../components/persianNumber/PersianNumber";
function ProductPage() {
  const [product, setProduct] = useState<any>([]);
  const params = useParams();
  useEffect(() => {
    if (params.id) {
      getPruductByID(params.id).then((result) => {
        setProduct(result)
      }).catch((err) => {
        console.log(err)
      });
    }
  }, [params.id]);
  return (
    <Container>
      <div className="mt-6 grid grid-cols-12 h-96 mb-7">
        <div className="col-span-10 bg-Slate-50 text-right rounded-l-2xl flex flex-col justify-between">
          <div className="mx-4 mt-3 text-xl">
            <h1 className="mb-3 font-vazirmatn400">{product?.title}</h1>
            <p className=" h-60 mr-5 font-vazirmatn400 text-base mt-7">{product?.description}</p>
          </div>
          <div className="mx-4 mb-3 flex justify-start">
            <ButtonShopping onClick={()=>{console.log(`clicked!`)}}>
              <i className="fa-solid fa-cart-shopping cursor-pointer text-base text-gray-100"></i> افزودن به
            </ButtonShopping>
          </div>
        </div>
        <div className="col-span-2 p-4 bg-yellow rounded-r-2xl flex flex-col justify-between">
          <img src={product?.image} alt="" className="rounded-md" />
          <ButtonShopping>قیمت: {PersianNumber(product?.price ?? 0)}</ButtonShopping>
        </div>
      </div>
    </Container>
  )
}

export default ProductPage;