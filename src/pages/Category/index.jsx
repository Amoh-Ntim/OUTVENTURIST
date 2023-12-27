import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react"
import { MdKeyboardArrowDown } from "react-icons/md"
import "swiper/css"

import { Navbar, Banner, Footer, ProductCards } from "../../components"
import { products } from "../../utils/products-data"




export default function index() {
  const { category } = useParams()
  const [data, setData] = useState([])
  const [onSort, setOnSort] = useState(false)
  const [onClick, setOnClick] = useState({
    woman: true,
    men: false,
    sucks: false,
    footwear: false
  })

  useEffect(() => {
   const productClicked = products.filter(product => product.tag.includes(category))
   setData(productClicked)
  }, [category])

  const onSortClickHandler = () => setOnSort(prevValue => !prevValue)

  const onClickWoman = () => setOnClick({woman: true, men: false, sucks:false, footwear: false})
  const onClickMen = () => setOnClick({woman: false, men:true, sucks: false, footwear: false})
  const onClickSucks = () => setOnClick({woman: false, men: false, sucks: true, footwear: false})
  const onClickWear = () => setOnClick({ woman: false, men: false, sucks: false, footwear: true })

  const categoryStyles = `text-base font-SG font-medium leading-6
    text-primary-color list-none py-[8px] px-[16px] text-center`
  const selectedStyle = "border border-primary-color rounded bg-[rgba(60,100,105,.2)]"


  const liStyles = "text-base font-SG text-primary-color py-3 pr-2 pl-2"

  return (
    <section className="relative">
        <Navbar />
        <div className="shadow-card"><Banner /></div>
        <section className="mt-10">
            <Swiper 
                slidesPerView={3}
                className="w-[100%] lg:w-[60%] mx-auto border-red-500">
                <SwiperSlide
                    onClick={() => console.log("View all")}
                    className={`${categoryStyles}`}
                >
                    <Link to={"/new-in"}>
                        <span>View all</span>
                    </Link>
                </SwiperSlide>
                <SwiperSlide
                    onClick={onClickWoman}
                    className={`${categoryStyles} ${onClick.woman && selectedStyle}`}
                >
                    <Link to={"/category/womans"}>
                        Woman
                    </Link>
                </SwiperSlide>
                <SwiperSlide 
                    onClick={onClickMen} 
                    className={`${categoryStyles} ${onClick.men && selectedStyle}`}>
                    
                    <Link to={"/category/mens"}>
                        Men
                    </Link>
                </SwiperSlide>

                <SwiperSlide 
                    onClick={onClickSucks} 
                    className={`${categoryStyles} ${onClick.sucks && selectedStyle}`}
                >
                    <Link to={"/category/rucksacks"}>
                        Rucksacks
                    </Link>
                </SwiperSlide>

                <SwiperSlide
                    onClick={onClickWear}
                    className={`${categoryStyles} ${onClick.footwear && selectedStyle}`}
                >
                    <Link to={"/category/footwear"}>
                        Footwear
                    </Link>
                </SwiperSlide>
            </Swiper>
            <p className="relative right-0 top-0 text-base text-primary-color font-medium
                flex flex-row gap-1 ml-auto items-center justify-end font-SG
                mt-8 mb-12 mr-4 lg:mr-10 2xl:mr-[20%] cursor-pointer"
               onClick={onSortClickHandler}    
            >
              <span>Sort by</span>
              <MdKeyboardArrowDown fontSize={25} />
            </p>
            { onSort && (
                <ul className="absolute right-[3.5%] 2xl:right-[20%] lg:right-[3%]
                top-[5.5%] lg:top-[20%] bg-white z-[50] shadow-card p-[0.5rem] rounded"
                    data-aos="fade-up"
                >
                    <li className={liStyles}>Name <span className="font-bold">A to Z</span></li>
                    <li className={liStyles}>Name <span className="font-bold">Z to A</span></li>
                    <li className={liStyles}>Price <span className="font-bold">Low to High</span></li>
                    <li className={liStyles}>Price <span className="font-bold">High to Low</span></li>
                </ul>  
            )}
            <section className="mb-10 w-[90%] 2xl:w-[65%] mx-auto">
                <ProductCards
                    products={data}
                />
            </section>
        </section>
        <Footer />
    </section>
  )
}