import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
      </div>
      <form className="w-3/12 absolute bg-black m-36 mx-auto right-0 left-0 p-16 rounded-md bg-opacity-80">
        <h1 className="font-bold text-white text-4xl mb-8">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full name"
            className="w-full mb-5 p-3 bg-[#333333] rounded-md"
          />
        )}

        <input
          type="text"
          placeholder="Email or phone number"
          className="w-full mb-5 p-3 bg-[#333333] rounded-md"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-5 p-3 bg-[#333333] rounded-md"
        />

        <button className="text-white bg-red-700 w-full mt-5 p-3 rounded-md mb-10">
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
