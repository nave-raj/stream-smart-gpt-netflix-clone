import React, { useEffect } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/store/userSlice';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';

const Body = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=> {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            const {uid, email, displayName} = user;
            dispatch(addUser({uid: uid, email: email, displayName: displayName}));
            navigate('/browse');
          } else {
            // User is signed out
            dispatch(removeUser());
            navigate("/");
          }
        });
    }, []);

  
  return (
    <> 
    </>
  )
}

export default Body