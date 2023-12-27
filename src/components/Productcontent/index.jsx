import { useState } from "react"


export default function index() {
  const [isTag, setIsTag] = useState({
    details: true,
    shipping: false,
    returns: false
  })

  const onDetails = () => {
    setIsTag({
      details: true,
      shipping: false,
      returns: false,
    })
  }

  const onShipping = () => {
    setIsTag({
      details: false,
      shipping: true,
      returns: false,
    })
  }

  const onReturns = () => {
    setIsTag({
      details: false,
      shipping: false,
      returns: true,
    })
  }

  const tagStyles = `font-SG text-base
    font-medium leading-6 cursor-pointer`

  return (
    <section className="w-[90%]  mx-auto md:w-[50%] md:mx-0 md:ml-[5%] mt-9
       2xl:w-[40%] 2xl:ml-[17.5%] mb-10">
      <p className="w-[100%] text-base font-SG leading-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Suspendisse varius enim in eros elementum tristique. 
        Duis cursus, mi quis viverra ornare, eros dolor
      </p>

      <section className="mt-8">
        <div className="flex flex-row">
          <div className={`${tagStyles} ${isTag.details ? 
            'transition duration-150 ease text-[#c19b7c] border-b border-[#c19b7c] pb-3' : 
            'text-[#222]' } mr-auto`}
            onClick={onDetails}
          >
            Details
          </div>
          <div className={`${tagStyles} ${isTag.shipping ? 
            'transition duration-150 ease text-[#c19b7c] border-b border-[#c19b7c] pb-3' : 
            'text-[#222]' } mr-auto`}
            onClick={onShipping}
          >
            Shipping
          </div>
          <div className={`${tagStyles} ${isTag.returns ? 
            'transition duration-150 ease text-[#c19b7c] border-b border-[#c19b7c] pb-3' : 
            'text-[#222]' }`}
            onClick={onReturns}
          >
            Returns
          </div>
        </div>

          
        {isTag.details && (
          <div className="mt-7">
            <p className="transition duration-150 ease text-base font-SG text-[#222] leading-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Suspendisse varius enim in eros elementum tristique. 
              Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. 
              Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.

              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Suspendisse varius enim in eros elementum tristique. 
              Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. 
              Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. 
              Nunc ut sem vitae risus tristique posuere.

              Suspendisse varius enim in eros elementum tristique. 
              Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. 
              Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. 
              Nunc ut sem vitae risus tristique posuere.
            </p>
          </div>
        ) }

       {isTag.shipping && (
          <div className="mt-7">
            <p className="transition duration-150 ease text-base font-SG text-[#222] leading-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Suspendisse varius enim in eros elementum tristique. 
              Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. 
              Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.

              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Suspendisse varius enim in eros elementum tristique. 
              Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. 
              Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
          </div>
        ) }

        {isTag.returns && (
          <div className="mt-7">
            <p className="transition duration-150 ease text-base font-SG text-[#222] leading-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Suspendisse varius enim in eros elementum tristique. 
              Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. 
              Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
          </div>
        ) }

      </section>
    </section>
  )
}