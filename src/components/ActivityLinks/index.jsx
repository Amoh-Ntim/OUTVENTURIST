import { Link } from "react-router-dom"

export default function index({title, text, img}) {
    return (
      <section className="">
        <Link className="text-[#C19B7C] text-[1em] font-SG font-semibold uppercase flex items-center gap-2" to="/watersports">
          <p>Check it out</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M12.6893 7.25L6.96967 1.53033L8.03033 0.469666L15.5607 8L8.03033 15.5303L6.96967 14.4697L12.6893 8.75H0.5V7.25H12.6893Z" fill="currentColor"></path>
          </svg>
        </Link>
      </section>
    )
  }
  