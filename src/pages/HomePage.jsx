import axios from "axios";
import { useEffect , useState} from "react";
import { Header } from "../components/Header";
//import { products } from "../../ecommerce-project/data/products";
import "./HomePage.css";
export function HomePage() {
  //const [element , updater funclets us update bthe value and regenerate the html ]= useState([]);
  const [products,setProducts]= useState([]);

  // fetch('http://localhost:3000/api/products')
  // .then((response)=>{
  //   //console.log(response.json())
  //   //response.json() is also a promise
  //   response.json()
  //   .then((data)=>{
  //     console.log(data);

  //   });
  //   });

  // instead of this we use
  // fetch("http://localhost:3000/api/products")
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((data) => {
  //     console.log(data);
  //   });
  //we can make it cleaner by using axios
  // axios.get('http://localhost:3000/api/products')
  // .then((response)=>{
  //   console.log(response.data)
  // })

  //this code will run whenever the home page is reloaded
  //but we need to run it once so we will use useEffect
  //use effect run this lines every time the component is updated or created 
  // we can use a dependency array = controls when use effect runs
  //[] empty array means run only once after the component is created 
  useEffect(() => {
    axios.get("http://localhost:3000/api/products").then((response) => {
      //console.log(response.data);
      setProducts(response.data);
    });
  },[]);
  // now to render save the product data inside the state

  return (
    <>
      <title>Ecomerce Project</title>
      <Header />
      <div className="home-page">
        <div className="products-grid">
          {products.map((product) => {
            return (
              <div key={product.id} className="product-container">
                <div className="product-image-container">
                  <img className="product-image" src={product.image} />
                </div>

                <div className="product-name limit-text-to-2-lines">
                  {product.name}
                </div>

                <div className="product-rating-container">
                  <img
                    className="product-rating-stars"
                    src={`images/ratings/rating-${
                      product.rating.stars * 10
                    }.png`}
                  />
                  <div className="product-rating-count link-primary">
                    {product.rating.count}
                  </div>
                </div>

                <div className="product-price">
                  ${(product.priceCents / 100).toFixed(2)}
                </div>

                <div className="product-quantity-container">
                  <select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>

                <div className="product-spacer"></div>

                <div className="added-to-cart">
                  <img src="images/icons/checkmark.png" />
                  Added
                </div>

                <button className="add-to-cart-button button-primary">
                  Add to Cart
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
