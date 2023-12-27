import { useSelector } from "react-redux"

import { 
  Navbar, ProductCards, Order, 
  Banner, Activity, Footer
} from "../../components"

export default function index() {
  const products = useSelector((state) => state.products.products)
  return (
    <main>
      <Navbar />
      <Banner />
      <section className="w-[90%] 2xl:w-[65%] mt-20 mx-auto">
        <h1 className="text-primary-color text-2xl font-SG font-bold leading-[33.6px]">
          New in
        </h1>
        <ProductCards
          products={products}
        />
        <Order />
      </section>
      <Activity />
      <Footer />
    </main>
  )
}