import { 
  FaFacebookF, FaTwitter, FaLinkedin, FaYoutube 
} from "react-icons/fa"
import { FaInstagram } from "react-icons/fa6"


export default function index({ store }) {
  return (
    <section className="mb-20">
      <img
        src={store.image}
        alt="image"
        className="object-cover rounded-lg object-center"
      />
      <p className="text-lg font-SG text-primary-color font-semibold mt-5">
        {store.name}
      </p>
      <small className="text-xs font-SG leading-4">
        Address
      </small>
      <p className="font-SG text-base leading-6 mb-2">
        {store.address}
      </p>
      <small className="text-xs font-SG leading-4">
        Phone
      </small>
      <p className="text-base font-SG leading-6 underline">
        {store.phone}
      </p>
      <div className="flex flex-row items-center gap-4 mt-6 text-primary-color
        text-lg font-SG">
        <FaFacebookF fontSize={20} />
        <FaInstagram fontSize={20}/>
        <FaTwitter fontSize={20}/>
        <FaLinkedin fontSize={20}/>
        <FaYoutube fontSize={20}/>
      </div>
    </section>
  )
}
