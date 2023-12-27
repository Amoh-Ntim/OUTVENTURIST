// import { FaTruckMoving } from "react-icons/fa"

import { Ship } from "../../assets"


export default function index() {
  return (
    <section className="w-full bg-primary-color">
        <div className="w-[90%] 2xl:w-[65%] mx-auto flex flex-row items-center
           gap-3 py-[4px]">
            <i>
                <img
                  src={Ship}
                  alt="ship image"
                  className="text-white w-6 h-6"
                />
            </i>
            <p className="font-SG text-white text-[12.8px] md:text-base leading-[19.2px]
                w-[80%]">
                <strong>Free shipping</strong>
                <span> on all order over $50</span>
            </p>
        </div>
    </section>
  )
}
