import { useState } from "react"
import { GrMenu } from "react-icons/gr"
import { GoArrowRight } from "react-icons/go"
import { Link } from "react-router-dom"
import { AiOutlineClose } from "react-icons/ai"
import { useSelector } from "react-redux"

import { Logo, Cart } from "../../assets"
import { activity } from "../Activity/activity-data"
import { Basket, Navlinks, Mobile } from ".."



export default function index() {
  const quantity = useSelector((state) => state.cart.quantity)
  const onActivityClick = useSelector((state) => state.activity.click)
  const [mobile, setMobile] = useState(false)
  const [onBasketClick, setOnBasketClick] = useState(false)


  const toggleMobile = () => {
    setMobile(prevMobile => !prevMobile)
  }

  const onBasketClickHandler = () => {
    setOnBasketClick(prevValue => !prevValue)
  }

  return (
    <nav className="relative sticky top-0 z-[100] bg-white pt-1 pb-2">
        { onBasketClick && <Basket  onMobile={onBasketClickHandler}/>}
        { onActivityClick && (
          <div className=" hidden lg:block absolute top-[90%] right-[21.5%] rounded-md 
            shadow-card-shadow"
            data-aos="fade-up">
            {activity.map((item) => (
              <div className="flex flex-row items-center bg-white w-[100%]">
                <div className="w-[40%] ml-4">
                  <h1 className="text-[32px] font-SG text-primary-color font-bold">
                    {item.head}
                  </h1>
                  <div className="flex flex-row  items-center gap-1 text-[#c19b7c]">
                    <p>CHECK IT OUT</p>
                    <span><GoArrowRight /></span>
                  </div>
                </div>
                <img
                  src={item.img}
                  alt="image"
                  className="h-[150px] w-[300px] object-cover"
                  data-aos="zoom-in"
                />
              </div>
            ))}
          </div>
        )}

        <div className="w-[90%] 2xl:w-[65%] mx-auto relative top-0 mt-2 lg:mt-4 
        flex flex-row items-center ">
          <div className="flex flex-row items-center gap-1 mr-auto">
            <Link style={{ textDecoration: "none"}} to={"/"}>
              <img
                src={Logo}
                alt="ovunterist"
                className="w-10 h-10"
              />
            </Link>

            <div>
              <h2 className="text-base md:text-2xl font-bold tracking-[-0.03rem] font-SG leading-4
                text-primary-color">
                OUTVENTURIST
              </h2>
              <p className="text-primary-color text-[0.55rem] font-SG font-semibold
                leading-[8.8px] opacity-60 md:text-[12.8px]">
                OUTDOOR GEAR <span className="underline mt-1 md:text-[9.6px] md:mt-0">SINCE</span> 1996
              </p>
            </div>          
          </div>

          <div className="hidden mr-5 mt-1 lg:flex">
            <Navlinks
              className="flex flex-row items-center gap-8"
              liStyles = "text-lg text-primary-color font-SG leading-7"
            />
          </div>

          { mobile ? (
          <i className="mr-2 lg:hidden">
            <AiOutlineClose
              fontSize={23}
              onClick={toggleMobile}
            />
          </i>
          ) : (
          <i className="mr-2 lg:hidden">
            <GrMenu
              fontSize={23}
              onClick={toggleMobile}
            />
          </i>)}

          {mobile && (<Mobile />)}

          <div
            onClick={onBasketClickHandler} 
            className="flex flex-row items-center 
            px-[2px] py-[2px] bg-[#c19b7c] h-[35px] rounded cursor-pointer">
              <img
                src={Cart}
                alt="cart icon"
                className="w-5 ml-2"
              />
              <p className="ml-2 py-[3px] px-[4px] bg-white font-semibold
              text-primary-color">{quantity}</p>
          </div>

        </div>
    </nav>
  )
}