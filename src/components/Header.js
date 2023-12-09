import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearch } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const disPatch = useDispatch();

  const user = useSelector((store) => store.user);

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        disPatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        disPatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    disPatch(toggleGptSearch());
  };

  const handleLanguageChange = (e) => {
    disPatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-full px-8 bg-gradient-to-b from-[rgba(0,0,0,.5)] z-10 flex justify-between items-center">
      <img className="w-52" src={LOGO} alt="logo" />
      {user && (
        <div className="flex">
          {showGptSearch && (
            <select
              className="focus:outline-none p-2 bg-gray-900 text-white rounded-md"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option
                  className="focus:outline-none"
                  key={lang.identifier}
                  value={lang.identifier}
                >
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={handleGptSearchClick}
            className="text-white mx-4 bg-purple-800 py-2 px-4 rounded-md"
          >
            {!showGptSearch ? "GPT Search" : "Home Page"}
          </button>
          <img className="w-12 h-12" src={user?.photoURL} alt="user" />
          <button className="text-white font-bold m-2" onClick={handleSignOut}>
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
