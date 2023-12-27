import { Link } from "react-router-dom"
import { Button} from ".."



export default function index({ products }) {
  
  return (
    <section className="mt-6 grid grid-cols-1 gap-y-4 md:grid-cols-2 gap-x-7
      lg:grid-cols-3 lg:gap-y-9">

      { products.map((data) => (
        <div key={data.id} className="relative p-4 rounded shadow-card-shadow
          transition-all duration-150 hover:shadow-card ease-in">

          <div className="absolute w-[78%] top-10 left-8 flex flex-row justify-between
            gap-12 z-[20]">
            <p className="border border-secondary-color rounded-full text-[0.6rem]
              flex justify-center items-center backdrop-blur-[5px] font-SG
              bg-[rgba(193,155,124,.1)] px-[0.5rem] text-secondary-color cursor-pointer">
              {data.delivery}
            </p>
            {data.sale ? (
            <p className="font-SG font-bold text-text-color border cursor-pointer
            border-text-color px-[0.5rem] rounded-full text-[0.7rem] backdrop-blur-[5px]">
              {data.sale}
            </p>
            ): ("")}
          </div>

          <div className="border border-gray-200 w-[100%]">
            <img
              src={data.image}
              alt="product"
              className="rounded object-contain transition-all
              duration-150 ease hover:scale-105"
              data-aos="zoom-in"
              data-aos-duration="300"
            />
          </div>

          <div className="mt-3">
            <h1 className="text-base font-SG font-bold leading-6">
              {data.name}
            </h1>
            <div className="flex flex-row justify-between mt-2">
              {data.cancelled ? (
                  <p className="text-base font-SG leading-6 cursor-pointer line-through">
                    {data.cancelled}
                  </p>
              ) : ("")  
              }
              <p className="font-SG text-base text-text-color cursor-pointer">
                {`$ ${data.price} USD`}
              </p>
            </div>
            <Link style={{ textDecoration: "none" }} to={`/product/${data.id}`}>
              <Button
                className="py-2 px-5 border border-primary-color text-primary-color
                text-[12.8px] font-SG font-medium rounded w-[100%] mt-3"
              >
                SEE DETAILS
              </Button>
            </Link>
          </div>
        </div>
      ))}

    </section>
  )
}