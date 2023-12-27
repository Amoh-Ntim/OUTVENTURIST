import { Navbar, Footer,Banner } from '../../components'
export default function index () {
  return (
    <div>
     <Navbar/>
     <div className='shadow-card'>
      <Banner/>
     </div>
     <div className='flex flex-col gap-y-4 md:flex-row w-[90%]
      2xl:w-[65%] mx-auto md:mt-12 2xl:mt-20 md:gap-x-10'>
      <div className='font-bold text-[32px] text-primary-color md:text-4xl mt-10 md:mt-0 
      font-SG md:w-[40%]'>Returns Policy</div>
      <div className='text-xl md:w-[60%]'>
        <div className='mb-12 text-base font-SG'>
        <p>At Outventurist, we strive to ensure your complete satisfaction with your purchase.</p>
        <p>In the event that you need to return or exchange an item, our returns policy provides you with</p>
        <p>the necessary guidelines and procedures to follow. Please review the following information carefully.</p>

        <p>1.  Eligibility for Returns:</p>
        <p>1.1 Unworn and Unused Items: To be eligible for a return, the item(s) must be in their original condition,</p>
        <p>unworn, unused, and free from any signs of damage or alteration.</p> 
        <p>All original tags, labels, and packaging must be intact and included with the returned item(s).</p>

        <p>1.2 Timeframe: You must initiate the return process within 30 days from the date of delivery.</p>
        <p>After this period, we may not be able to accept your return or provide a refund or exchange.</p>

        <p>1.3 Non-Returnable Items: Certain items are non-returnable for hygiene or safety reasons.</p>
        <p>These may include, but are not limited to, intimate apparel,</p>
        <p>swimwear, and items marked as "Final Sale" or "Non-Returnable" on our website.</p>
        <p>Please check the product description for any specific return restrictions.</p>


        </div>
        <div className='mb-12 text-base font-SG'>
          <p>Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In</p>
          <p>tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis</p>
          <p>lobortis at sit dictum eget nibh tortor commodo cursus.</p>
        </div>
        <div className='mb-12 text-base font-SG'>
          <p>Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna nisi</p>
          <p>aliquet erat dolor enim. Ornare id morbi eget ipsum. Aliquam senectus neque ut id eget</p>
          <p>consectetur dictum. Donec posuere pharetra odio consequat scelerisque et, nunc tortor.</p>
          <p>Nulla adipiscing erat a erat. Condimentum lorem posuere gravida enim posuere cursus diam.  </p>
        </div>
      </div>
     </div>
     <Footer/>
    </div>
  )
}