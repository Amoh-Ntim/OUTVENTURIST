import { useState } from "react"
import { Link } from "react-router-dom"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom"

import { app } from "../../utils/firebaseConfig"
import { Logo } from "../../assets"
import { Form } from "../../components"


export default function index() {
  const navigate = useNavigate()
  const auth = getAuth();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  })


  const onInputChangeHandler = (event) => {
    const { name, value } = event.target
    setUser(prevUser => ({...prevUser, [name]: value}))
  }

 
  const onSubmitHandler = (event) => {
    event.preventDefault()

    createUserWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        const userResponse = userCredential.user
        localStorage.setItem("user", JSON.stringify(userResponse))
        localStorage.setItem("details", JSON.stringify(user))
        navigate("/account/log-in")
      })
      .catch((error) => {
        const errorMessage = error.message
        alert("Error creating account : ", errorMessage)

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

            <Link to={"/account/log-in"} style={{ textDecoration: "none"}}>
              <p className="text-base font-SG underline cursor-pointer">
                Log In
              </p>
            </Link>
          </div>

        </div>

        <div className="md:w-[68%] mx-auto lg:w-[45%] xl:w-[40%] 2xl:w-[28%]
          mt-[10%] lg:mt-[10%] md:mt-[23%]">
          <h1 className="text-2xl font-SG text-primary-color 
            font-bold leading-[33.6px] trakcing-[-0.8px] text-center
            xl:text-[32px]">
            Create Account
          </h1>
          <p className="text-base lg:text-lg font-SG leading-6 text-center mt-4
            ">
            Lorem ipsum dolor sit amet adipiscing elit. 
          </p>
          <Form
            email={user.email}
            passwowrd={user.password}
            onEmailChange={onInputChangeHandler}
            onPasswordChange={onInputChangeHandler}
            onSubmit={onSubmitHandler}
            text1="CREATE ACCOUNT"
            text2="SIGN UP WITH GOOGLE"
          >
          <div className="mb-6">
            <label htmlFor="email"
              className="text-base font-SG leading-6"
            >
              Name*
            </label> <br />
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={onInputChangeHandler}
              className="mt-2 py-2 border border-secondary-color
              outline-none rounded-md px-[10px] text-base w-[100%]"
            />
          </div>
          </Form>
        </div>

    </section>
  )
}
