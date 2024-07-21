import React, { useRef, useState } from 'react'
import NavBar from './NavBar'
import { validateLoginFields } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { addUser } from '../utils/store/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BACKGROUND } from '../utils/constant';


const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [isSignInPage, setIsSignInPage] = useState(true);
    const [errorMsg, setErrorMessage] = useState(null);
    const email = useRef(null);
    const password = useRef(null);
    const fullName = useRef(null);

    const toggleLoginPage = () => {
        setIsSignInPage(!isSignInPage)
    }

    const handleButtonClick = () => {

        console.log(email.current.value);
        /* validating form data */
        const message = validateLoginFields(email.current.value, password.current.value, fullName?.current?.value);
        if(message !== null){
            setErrorMessage(message);
        } else {
            if(!isSignInPage){
                createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                 .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(auth.currentUser, {
                        displayName: fullName.current.value,
                    }).then(() => {
                        navigate('/');
                    }).catch((error) => {
                        setErrorMessage(error.message);
                    });
                    console.log(user);
                 }).catch((err) => {
                    const errorCode = err.code;
                    const errorMessage = err.message;
                    setErrorMessage(errorMessage);
                    console.log(errorCode + "-" + errorMessage);
                 });
            } else {
                signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                 .then((userCredential) => {
                   // Signed in 
                    const user = userCredential.user;
                    const {uid, email, displayName} = user;
                    dispatch(addUser({uid: uid, email: email, displayName: displayName}));
                    navigate('/browse');
                    console.log(user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorMessage);
                });
            }
        }
    }

    return (
        <>
            <div className='absolute h-screen items-center justify-center'>
                <NavBar/>
                <img src={BACKGROUND} alt='background' className='h-screen' />
            </div>
            <div className='flex items-center justify-center h-screen relative'>
                <form 
                  onClick={(event)=>{event.preventDefault()}}
                  className='w-1/4 bg-black bg-opacity-85 text-white flex flex-col items-center py-20 rounded-lg'>
                    <h1 className="text-3xl font-bold py-5">
                        {isSignInPage? 'Sign In' : 'Sign Up'}
                    </h1>
                    { !isSignInPage &&
                        <input ref={fullName} type='text' placeholder='Full Name' id='full-name' className='p-4 m-4 w-3/4 bg-black bg-opacity-85 rounded-md' required/>
                    }
                    <input ref={email} type='text' placeholder='Email Address' id='email' className='p-4 m-4 w-3/4 bg-black bg-opacity-85 border-gray-50 rounded-md' required/>
                    <input ref={password} type='password' placeholder='Password' id='password' className='p-4 m-4 w-3/4 bg-black bg-opacity-85 rounded-md' required/>
                    { errorMsg && 
                        <p className='text-red-700 p-2 m-2'>{errorMsg}</p> }
                    <button 
                      id='sign-in'
                      className='p-4 m-4 bg-red-700 w-3/4 rounded-md'
                      onClick={handleButtonClick}>
                        {isSignInPage? 'Sign In' : 'Sign Up'}
                    </button>
                    <p className='p-2 cursor-pointer' onClick={toggleLoginPage}>
                        {isSignInPage? 'New to Netflix? Sign Up Now' : 'Already registered? Sign In'}
                    </p>
                </form>
            </div>
        </>
    )
}

export default LoginPage