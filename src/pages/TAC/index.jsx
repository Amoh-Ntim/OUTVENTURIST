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
      <div className='font-bold text-[32px] md:text-4xl mt-10 md:mt-0 
      font-SG md:w-[40%]'>Terms of service</div>
      <div className='text-xl md:w-[60%]'>
        <div className='mb-12 text-base font-SG'>
          <p>Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies</p>
          <p>ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed.</p>
          <p>Nisl at scelerisque amet nulla purus habitasse.</p>
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
