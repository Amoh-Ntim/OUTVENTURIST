import { Route, Routes } from "react-router-dom"
import { useEffect } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'

import { 
  Home, New, Shop, Productdetail,
  Contact, Watersports, Login,
  Signup, Policy, Category, TAC,
  Returnpolicy, Stores
} from "./pages"

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 200,
      easing: 'ease-in',
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/new-in" element={<New />} />
      <Route path="/shop-all-products" element={<Shop />} />
      <Route path="/product/:id" element={<Productdetail />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/product-detail/:id" element={<Productdetail />} />
      <Route path="/watersports" element={<Watersports />} />
      <Route path="/account/log-in" element={<Login />} />
      <Route path="/account/create-account" element={<Signup />} />
      <Route path="/privacy-policy" element={<Policy />} />
      <Route path="/category/:category" element={<Category /> } />
      <Route path="/terms" element={<TAC />} />
      <Route path="/care/returns-policy" element={<Returnpolicy />} />
      <Route path="/stores" element={<Stores />} />
    </Routes>
  )
}
