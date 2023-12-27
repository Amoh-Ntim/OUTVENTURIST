import { Navbar, Banner, Footer, Storecard } from "../../components"
import { stores } from "./store-data"

export default function index() {
  return (
    <section>
        <Navbar />
        <div className="shadow-card">
            <Banner />
        </div>

        <section className="w-[90%] mx-auto 2xl:w-[65%] mx-auto">
            <h1 className="font-SG text-primary-color text-[40px] font-bold
                mt-5 2xl:text-[56px] 2xl:mb-5">
                Our stores 
            </h1>
            <p className="text-base font-SG leading-6 2xl:text-lg">Stores across the United Kingdom.</p>

            <section className="mt-8 grid grid-cols-1
              md:grid-cols-3 md:gap-x-7 lg:gap-x-9 ">
              {stores.map((store) => (<Storecard store={store} key={store.id} />))}
            </section>
        </section>
        <Footer />
    </section>
  )
}