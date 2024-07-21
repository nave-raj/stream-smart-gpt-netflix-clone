import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeUser } from '../utils/store/userSlice';
import { LOGO } from '../utils/constant';

const NavBar = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

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

    // to remove the onAuthStateChange callback
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

  return (
    <div className='absolute py-3 px-10 bg-gradient-to-b from-black z-10 w-screen flex justify-between'>
        <img className='w-40' src={LOGO} alt="logo" />
      <div>
        <button  onClick={handleSignOut} className='text-white m-2 p-2 font-bold'>Sign Out</button>
      </div>
    </div>
  )
}

export default NavBar