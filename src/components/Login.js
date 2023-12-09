import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BACKGROUD_IMG, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const disPatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = (e) => {
    setErrorMessage(null);
    setIsSignInForm(!isSignInForm);
  };

  const handleBtnClick = (e) => {
    e.preventDefault();
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      //sign up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up\
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              disPatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    } else {
      //sign in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          //const errorMessage = error.message;
          setErrorMessage(errorCode.split("/")[1]);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="brightness-50 h-screen w-screen object-cover"
          src={BACKGROUD_IMG}
          alt="background"
        />
      </div>
      <form className="w-10/12 md:w-3/12 absolute bg-black m-36 mx-auto right-0 left-0 p-16 rounded-md bg-opacity-80">
        <h1 className="font-semi  bold text-white text-4xl mb-8">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full name"
            className="w-full mb-5 p-3 bg-[#333333] rounded-md text-white focus:outline-none"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email or phone number"
          className="w-full mb-5 p-3 bg-[#333333] rounded-md text-white focus:outline-none"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="w-full mb-5 p-3 bg-[#333333] rounded-md text-white focus:outline-none"
        />

        <p className="text-[#e87c03] ">{errorMessage}</p>

        <button
          className="text-white bg-red-700 w-full mt-5 p-3 rounded-md mb-10"
          onClick={handleBtnClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="text-[#737373]">
          {isSignInForm ? "New to Netflix " : "Already registered? "}
          <span
            className="text-white cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignInForm ? "Sign up now." : "Sign in now."}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
