import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeUser } from '../utils/store/userSlice';

const NavBar = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
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
        <img className='w-40' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
      <div>
        <button  onClick={handleSignOut} className='text-white m-2 p-2 font-bold'>Sign Out</button>
      </div>
    </div>
  )
}

export default NavBar