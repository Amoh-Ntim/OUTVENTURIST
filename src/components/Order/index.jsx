import { Button } from ".."


export default function index() {
  return (
    <section className="relative mt-12 bg-order-image
          bg-cover bg-center h-[75vh] md:h-[45vh]
          lg:h-[50vh] card 2xl:w-[85%] 2xl:h-[40vh] 2xl:mx-auto rounded-lg">

        <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-blur
          flex flex-col lg:flex-row lg:items-center rounded-lg">
          <div>
            <h2 className="text-4xl text-white font-SG font-bold
                leading-[43.2px] mt-8 ml-5 md:w-[70%] lg:w-[60%] md:mt-[15%]
                lg:ml-12 xl:mt-[7%] header">
                Enjoy 10% OFF your first order
            </h2>
            <p className="text-white font-SG leading-6 text-base mt-4 mb-4
              ml-5 lg:ml-12 lg:w-[80%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            </p>
          </div>
          <div className="w-[90%] md:w-[68%] lg:w-[35%] 2xl:w-[33%] mx-auto flex flex-col 
              bg-bg-gradient backdrop-blur-[2px] p-6 mt-5 lg:mt-7 md:ml-5 lg:ml-0 border border 
              border-[rgba(244,244,244,.2)] rounded-md 2xl:p-0 2xl:pt-8 2xl:pl-8 pb-8">
              
              <div className="flex flex-col md:flex-row md:gap-4">
                <input
                  placeholder="Enter your email"
                  className="outline-none py-2 px-3 rounded
                  text-base placeholder:text-base placeholder:font-SG
                  mb-3 lg:w-[40%]"
                />
                <Button
                  className="bg-primary-color shadow-button-shadow py-3
                  px-6 rounded text-white font-SG leading-6 mb-3"
                >
                  GET CODE
                </Button>
              </div>
                
            <p className="text-xs font-SG leading-[18px] text-white lg:w-[70%] 2xl:mb-5">
              By clicking Sign Up you're confirming that you agree with our
              <span className="underline"> Terms and conditions</span>
            </p>
          </div>
        </div>

    </section>
  )
}
