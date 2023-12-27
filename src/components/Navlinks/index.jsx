import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { onActivityClick } from "../../features/activity/activitySlice"


export default function index(props) {
  const dispatch = useDispatch()
  
  const onActivityClickHandler = () => {
    dispatch(onActivityClick())
  }
  return (
    <ul className={props.className}>
        <Link style={{ textDecoration: "none" }} to={"/new-in"}>
          <li className={props.liStyles}>New in</li>
        </Link>

        <Link style={{ textDecoration: "none" }} to={"/shop-all-products"}>
          <li className={props.liStyles}>Shop</li>
        </Link>

        <Link style={{ textDecoration: "none" }}>
          <li
            onClick={onActivityClickHandler}
            className={props.liStyles}>
            Activity
          </li>
        </Link>
        <div 
          className="border border-gray-100 mb-6" 
        />
        <Link style={{ textDecoration: "none" }} to={"/contact-us"}>
          <li className="text-sm text-primary-color font-bold font-SG
            leading-[19.2px]">
            CONTACT
          </li>
        </Link>
    </ul>
  )
}
