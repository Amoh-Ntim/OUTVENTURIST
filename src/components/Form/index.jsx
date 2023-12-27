import { RiGoogleFill } from "react-icons/ri"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { Button } from ".."



export default function index(props) {
  const navigate = useNavigate()
  const auth = getAuth()
  const provider = new GoogleAuthProvider()

  const onGoogleHandler = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user
        localStorage.setItem("user", JSON.stringify(user))
        navigate("/shop-all-products")
      }).catch((error) => {
        const errorMessage = error.message
        alert("Error signing up: ", errorMessage)
      })
  }

  return (
    <section className="mt-10">
        <form onSubmit={props.onSubmit}>
          {props.children}
          <div>
              <label htmlFor="email"
                className="text-base font-SG leading-6"
              >
                Email*
              </label> <br />
              <input
                type="email"
                name="email"
                value={props.email}
                onChange={props.onEmailChange}
                className="mt-2 py-2 border border-secondary-color
                outline-none rounded-md px-[10px] text-base w-[100%]"
              />
          </div>

          <div className="mt-5">
              <label htmlFor="password"
                className="text-base font-SG leading-6"
              >
                Password*
              </label> <br />
              <input
                type="password"
                name="password"
                value={props.password}
                onChange={props.onPasswordChange}
                className="mt-2 py-2 border border-secondary-color
                outline-none rounded-md px-[10px] text-base w-[100%]"
              />
          </div>

          <Button
            className="py-3 bg-primary-color rounded
            cursor-pointer text-white shadow-button-shadow
            font-SG w-[100%] mt-5 2xl:mt-7 hover:opacity-90"
          >
            {props.text1}
          </Button>

          <div
            onClick={onGoogleHandler}
            className="text-primary-color font-semibold border-2
            border-primary-color py-3 w-[100%]
            flex flex-row items-center justify-center gap-3 mt-4"
          >
            <i className="font-SG"><RiGoogleFill fontSize={20} /></i>
            <p className="font-SG text-base font-semibold leading-6
            ">{props.text2}</p>
          </div>
        </form>
    </section>
  )
}
