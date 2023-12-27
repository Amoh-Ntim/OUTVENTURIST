import { Link } from "react-router-dom"

import { Banner, Button } from ".."
import { Hero, LineBow, LineBow01 } from "../../assets"

export default function index() {
  return (
    <section className="relative mt-3 w-[100%] h-[63vh] md:h-[35vh]
      lg:h-[60vh] 2xl:h-[44vh]">
        <Banner />


        <section className="relative w-[100%] h-[100%] overflow-clip
          2xl:w-[65%] mx-auto">
          <img
            src={Hero}
            alt="Hero"
            className="absolute top-0 left-0 z-[-1] w-full h-[100%] 
            object-cover object-center rounded-none 2xl:rounded"
          />
          <img
            src={LineBow}
            alt="line"
            className="absolute bottom-0 left-0 z-[-1] md:w-[60%]
            md:bottom-[-10%] md:left-[30%] 2xl:w-[40%] 2xl:left-[50%]"
          />

          <img
            src={LineBow01}
            alt="line bow 01"
            className="absolute bottom-0 left-0 z-[-1] md:w-[60%]
            md:left-[50%] 2xl:w-[40%] 2xl:left-[60%] 2xl:bottom-[-10%]"
          />

          <div className="absolute z-0 top-0 left-0 h-[100%] w-full 
          bg-blur"/>

          <div className="absolute top-[12%] left-[5%] lg:top-[20%] ">
            <h1 className="text-white text-[2.5rem] md:text-[52px] font-SG
              leading-[40px] md:leading-[52px] w-[80%] md:w-[90%] ">
              The <span className="font-bold"> Great Outdoors</span>{" "}
              with <span className="font-bold"> Outventurist</span>
            </h1>
            <p className="font-SG text-white text-base md:text-lg italic 
              w-[98%] md:w-[75%] leading-6 mt-5">
              We're passionate about the outdoors and believe that every adventure deserves the best gear.
            </p>
            <Link style={{ textDecoration: "none" }} to={"/shop-all-products"}>
              <Button
                className="text-base font-SG text-white font-semibold
                border-2 border-white py-3 px-6 bg-transparent rounded
                mt-6 cursor-pointer"
              >
                SHOP NOW
              </Button>
            </Link>
          </div>
        </section>

    </section>
  )
}
