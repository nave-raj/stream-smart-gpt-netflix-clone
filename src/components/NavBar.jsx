import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeUser } from '../utils/store/userSlice';
import { LOGO } from '../utils/constant';
import { setIsGptSearchPage, setSelectedLanguage } from '../utils/store/searchSlice';

const NavBar = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isGptSearchPage = useSelector((store) => store.search?.isGptSearchPage);
 
  useEffect(()=> {
    const removeAuthStateChange = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate('/browse');
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    // cleanup - to remove the onAuthStateChange callback
    return () => removeAuthStateChange();
  }, []);

  const handleSignOut = () => {
      signOut(auth).then(() => {
        dispatch(removeUser());
        navigate("/");
      }).catch((error) => {
        navigate("/error")
        console.log(error);
      });
  }

  const toggleButtonClick = () => {
      if(!isGptSearchPage){
        dispatch(setIsGptSearchPage(true));
      } else {
        dispatch(setIsGptSearchPage(false));
      }
  }

  const handleOptionChange = (event) => {
    dispatch(setSelectedLanguage(event.target.value));
  }

  return (
    <div className='absolute py-3 px-10 bg-gradient-to-b from-black z-10 w-screen flex justify-between'>
        <img className='w-40' src={LOGO} alt="logo" />
        <div>
          {isGptSearchPage && 
            <select className='m-2 p-2 rounded-md text-white bg-gray-700' onChange={handleOptionChange}>
              <option value={'en'}>English</option>
              <option value={'spanish'}>Spanish</option>
              <option value={'french'}>French</option>
            </select>}
          <button  onClick={toggleButtonClick} className='text-white m-2 p-2 font-bold'>{!isGptSearchPage ? "Gpt Search" : "Home"}</button>
          <button  onClick={handleSignOut} className='text-white m-2 p-2 font-bold'>Sign Out</button>
        </div>
    </div>
  )
}

export default NavBar