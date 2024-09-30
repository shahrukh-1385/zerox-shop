import { Link } from "react-router-dom";
import Container from "../../components/container/Container";
import NewProduct from "../product/newProduct/NewProduct";
import { useEffect, useState } from "react";
import { getPruducts } from "../../servises/Api";

function Store() {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    getPruducts().then((result) => {
      console.log(result);
      setProducts(result);
    }).catch((err) => {
      console.log(err);
    });
  }, []);
  
  return (
    <Container>
      <section className="mt-6 p-5">
        <div className="text-right mx-3 mb-3 font-vazirmatn400 text-lg"> جدید ترین محصولات </div>
        <div className="grid grid-cols-4 gap-3 text-right">
          {products.map((item:any, index:number) => (
            <Link key={index} to={`/ProductPage/${item.id}`}>
              <NewProduct {...item}/>
            </Link>
          ))}
        </div>
      </section>
    </Container>
  );
}

export default Store;
