import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

import { shop , navigate, account ,care } from './footer-links'


const index = () => {
    const linkstyles='text-sm py-2 hover:text-gray-400 transition duration-500 ease-in-out cursor-pointer';
    const smalltext = 'text-sm'
    const ptag = 'font-bold text-xl'
    const social = 'text-teal-700	hover:text-teal-500 transition duration-500 ease-in-out cursor-pointer'
  return (
    <div className='bg-gray-100 mt-4 font-SG'>
      <div className='text-black flex flex-col gap-y-8
        lg:flex-row justify-between w-[90%] md:w-[95%]
        lg:w-[90%] 2xl:w-[65%] pt-20 mx-auto'>
      <div className='flex flex-col gap-y-8 lg:flex-row justify-around gap-x-16 2xl:gap-x-20'>
        <div className='flex flex-col gap-y-8 md:flex-row justify-between gap-x-8 2xl:gap-x-20'>

        {/* navigate div */}
        <div>
          <p className ={ptag}>Navigate</p>
              <ul>
                {navigate.map((item) => (
                  <li key={item.id}
                    className={linkstyles}
                  >
                    <Link to={item.link} style={{ textDecoration: "none"}}>
                      {item.title}
                    </Link>
                  </li>))}
              </ul>
          </div>

          {/* shop div */}
          <div>
              <p className ={ptag}>Shop</p>
              <ul>
                {shop.map((item) => (
                  <li key={item.id}
                    className={linkstyles}
                  >
                    <Link to={item.link} style={{ textDecoration: "none"}}>
                      {item.title}
                    </Link>
                  </li>))}
              </ul>
          </div>

          {/* account div */}
          <div>
          <p className ={ptag}>Account</p>
              <ul>
                <Link style={{ textDecoration: "none"}} to={"/account/log-in"}>
                  <li className={linkstyles}>
                    Login
                  </li>
                </Link>

                <Link style={{ textDecoration: "none"}} to={"/account/create-account"}>
                  <li className={linkstyles}>
                    Create Account
                  </li>
                </Link>
                
                {account.map((item) => (
                  <li key={item.id}
                    className={linkstyles}
                  >
                    {item.title}
                  </li>))}
              </ul>
          </div>
      </div>
        {/* care div */}
        <div className='mr-28'>
          <div>
            <p className ={ptag}>Care</p>
            <ul>
              {care.map((item) => (
                <li key={item.id}
                  className={linkstyles}
                >
                  <Link to={item.link}>
                    {item.title}
                  </Link>
                </li>))}
            </ul>
          </div>
        </div>
    </div>


    {/* newsletter email div */}
    <div className=''>
      <div className='font-bold mb-4 text-xl'>Subscribe</div>
      <div className={`${smalltext} mb-3`}>Join our newsletter and get vouchers and exclusive deals straight to your inbox.</div>
      
      <div className="flex flex-col md:flex-row items-center md:gap-x-4 my-2">
        <input 
          type="email" 
          placeholder="Enter Your Email" 
          className="w-[100%] p-1 border border-yellow-700 rounded-md outline-none"
        />
        <button 
          type="button" 
          className="w-[100%] md:w-[40%] mt-3 md:mt-0 flex justify-center items-center py-2 px-6 
            text-xs uppercase text-white bg-primary-color border border-primary-color
            rounded-md shadow-button-shadow"
        >
          Subscribe
        </button>
      </div>

      <div className={smalltext}>
      By subscribing you agree to with our <div className='underline'>Privacy Policy</div> and provide consent to receive updates from our company.
      </div>
    </div>
    {/* teal div */}
    </div>
    <div className="h-0.5 border-b border-primary-color mt-8 px-4 w-[90%] md:w-[95%]
        lg:w-[90%] 2xl:w-[65%] mx-auto"></div>

    <div className='md:flex md:flex-row md:justify-between
      flex flex-col-reverse w-[90%] lg:items-center 2xl:w-[65%] mx-auto mt-5'>
    <div className='flex flex-col-reverse gap-y-4 py-8 md:flex-row md:gap-x-8'>
      <div className='text-sm font-SG'>© Outventurist. All rights reserved.</div>
      <Link to={"/privacy-policy"} style={{ textDecoration: "none"}}>
        <div className='underline hover:cursor-pointer text-sm'>Privacy Policy</div>
      </Link>
      <Link to={"/terms"} style={{ textDecoration: "none"}}>
        <div className='underline hover:cursor-pointer text-sm'>Terms and Conditions</div>
      </Link>
      <div className='underline hover:cursor-pointer text-sm'>Powered by Webflow</div>
    </div>
    <div className='flex flex-row gap-3'>
      <FacebookIcon className={social}/>
      <InstagramIcon className={social}/>
      <TwitterIcon className={social}/>
      <LinkedInIcon className={social}/>
      <YouTubeIcon className={social}/>
    </div>
    </div>
    </div>
  )
}

export default index