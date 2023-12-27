import { createPortal } from "react-dom"

import { Navlinks } from ".."

export default function index() {
  return createPortal(
    <div 
        className="absolute top-[7.3%] z-[150] left-0 bg-white w-[100%] h-screen
        pl-[6%] pt-[6%]"
        data-aos="fade-down"
        data-aos-duration="300"
    >
      <Navlinks 
        liStyles = "text-lg text-primary-color font-SG leading-7 pb-5"
      />
    </div>,
    document.getElementById("nav-mobile")
  )
}
