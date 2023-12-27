import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"


import { Navbar, Banner, Select, Button, Productcontent, Footer} from "../../components"
import { AiFillStar, AiOutlineStar } from "react-icons/ai"
import { BiSolidStarHalf } from "react-icons/bi"
import { addToCart, updateTotal } from "../../features/cart/cartSlice"




export default function index() {
  const products = useSelector((state) => state.products.products)
  const cartItems = useSelector((state) => state.cart.cartItems)
  const [productDetail, setProductDetail] = useState({})
  const [quantity, setQuantity] = useState(1)

  const dispatch = useDispatch()
  const { id } = useParams()

  const itemQuantity = +quantity

  useEffect(() => {
    const product = products.find((prod) => prod.id === +id )
    setProductDetail(product)
  }, [id])

  useEffect(() => {
    dispatch(updateTotal())
  }, [cartItems, dispatch])

  // useEffect(() => {
    
  // }, [])

  const starStyle = "text-[24px]"

  const onInputChangeHandler = (event) => {
    setQuantity(event.target.value)
  }

  const onAddToCartHandler = () => {
    dispatch(addToCart({ productDetail, itemQuantity }))
  }

  return (
    <section>
        <Navbar />
        <div className="mt-3 shadow-button-shadow">
          <Banner />
        </div>
        <section className="w-[90%] 2xl:w-[65%] flex flex-col md:flex-row md:gap-4 
        lg:gap-7 xl:gap-12 mx-auto mt-12">
          <img
            src={productDetail.image}
            alt={productDetail.name}
            className="w-[100%] md:w-[60%] lg:w-[65%] object-cover border border-gray-200"
            data-aos="zoom-in"
          />
          <section className="w-[100%] md:w-[40%] lg:w-[35%] lg:mt-8 2xl:mt-0">
            <h1 className="text-2xl 2xl:text-[32px] tracking-[-0.05rem] font-bold font-SG
              leading-[33.6px] mt-7 md:mt-0">
              {productDetail.name}
            </h1>
            <div className="mt-5 text-2xl 2xl:text-[32px] font-SG font-bold leading-[33.6px]">
              {`$ ${productDetail.price} USD`}
            </div>

            <div className="mt-6">
              <div className="flex flex-row gap-2">
                <AiFillStar className={`${starStyle} text-secondary-color`} />
                <AiFillStar className={`${starStyle} text-secondary-color`} />
                <AiFillStar className={`${starStyle} text-secondary-color`} />
                <BiSolidStarHalf className={`${starStyle} text-secondary-color`} />
                <AiOutlineStar className={`${starStyle} text-secondary-color`} />
              </div>

              <div className="font-SG text-sm leading-5 flex flex-row items-center">
                ({productDetail.stars} stars)
                <p className="w-[4px] h-[4px] bg-[#000] rounded-full mx-1"/>
                <span> 10 reviews</span>
              </div>
            </div>

            <p className="text-xs font-SG underline leading-5 mt-2">
              Add reviews to your Webflow ecommerce project
            </p>

            <p className="text-xs font-SG leading-5">
              Aaron Grieve is in no way affiliated with Supersparks team or product.
            </p>

            <Select
              name={productDetail.product}
              quantity={quantity}
              onInputChangeHandler={onInputChangeHandler}
            />
            <Button
              className="mt-3 bg-primary-color text-white
              py-2 2xl:py-3 px-6 font-SG w-[100%] rounded shadow-button-shadow mb-3
              hover:opacity-90"
              onClick={onAddToCartHandler}
            >
              ADD TO CART
            </Button>
          </section>
        </section>
      <Productcontent />
      <Footer />
    </section>
  )
}