import axios from 'axios'
import { Routes, Route } from "react-router";
import { useState,useEffect } from "react";
import { HomePage } from "./pages/HomePage";
import { CheckoutPage } from "./pages/CheckoutPage";
import { OrdersPage } from "./pages/OrdersPage";
import "./App.css";
import { TrackingPage } from "./pages/TrackingPage";


function App() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    axios.get("api/cart-items?expand=product").then((response) => {
      console.log('i am cart')
      console.log(response.data);
      setCart(response.data);
    });
  },[]);

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} />} />
      <Route path="checkout" element={<CheckoutPage cart= {cart}/>} />
      <Route path="order" element={<OrdersPage cart={cart}/>} />
      <Route path="tracking" element={<TrackingPage cart={cart} />} />
    </Routes>
  );
}

export default App;
