import { useState } from "react"
import { Link } from "react-router-dom"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom"


import { app } from "../../utils/firebaseConfig"
import { Logo } from "../../assets"
import { Form } from "../../components"


export default function index() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const auth = getAuth()


  const onEmailChangeHandler = (event) => {
    setEmail(event.target.value)
  }

  const onPasswordChangeHandler = (event) => {
    setPassword(event.target.value)
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user
      navigate("/shop-all-products")
    })
    .catch((error) => {
      const errorMessage = error.message
      alert("Error signing in: ", errorMessage)
    });
  }

  return (
    <section className="w-[90%] mx-auto">
        <div className="flex flex-row 
          justify-between items-center mt-3">

          <img
            src={Logo}
            alt="logo"
            className="w-10 md:w-12 h-10 md:h-12 object-cover ml-2"
          />

          <div className="flex flex-row items-center gap-2">
            <span className="hidden md:block
              font-SG text leading-6">
              Don't have an account?
            </span>

            <Link to={"/account/create-account"} style={{ textDecoration: "none"}}>
              <p className="text-base font-SG underline cursor-pointer">
                Create Account
              </p>
            </Link>
          </div>

        </div>

        <div className="md:w-[68%] mx-auto lg:w-[45%] xl:w-[40%] 2xl:w-[28%]
          mt-[10%] lg:mt-[10%] md:mt-[23%]">
          <h1 className="text-2xl font-SG text-primary-color 
            font-bold leading-[33.6px] trakcing-[-0.8px] text-center
            xl:text-[32px]">
            Log In
          </h1>
          <p className="text-base lg:text-lg font-SG leading-6 text-center mt-4
            ">
            Lorem ipsum dolor sit amet adipiscing elit. 
          </p>
          <Form
            email={email}
            passwowrd={password}
            onEmailChange={onEmailChangeHandler}
            onPasswordChange={onPasswordChangeHandler}
            onSubmit={onSubmitHandler}
            text1="LOG IN"
            text2="LOG IN WITH GOOGLE"
          />

          <p className="text-base font-SG underline text-center mt-5
          cursor-pointer">
            Forgot your password?
          </p>
        </div>

    </section>
  )
}
