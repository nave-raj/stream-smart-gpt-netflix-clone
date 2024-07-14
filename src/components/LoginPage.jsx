import React, { useRef, useState } from 'react'
import NavBar from './NavBar'
import { validateLoginFields } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth} from '../utils/firebase'


const LoginPage = () => {

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
                    console.log(user);
                 }).catch((err) => {
                    const errorCode = err.code;
                    const errorMessage = err.message;
                    setErrorMessage(errorMessage?.toLowerCase()?.replace("_"," "));
                    console.log(errorCode + "-" + errorMessage);
                 });
            } else {
                signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                 .then((userCredential) => {
                   // Signed in 
                    const user = userCredential.user;
                    console.log(user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorMessage?.toLowerCase()?.replace("_"," "));
                });
            }
        }
    }

    return (
        <>
            <div className='absolute h-screen items-center justify-center'>
                <NavBar/>
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/0552717c-9d8c-47bd-9640-4f4efa2de663/52e4cd00-9a33-4f8b-afa0-6623070f7654/US-en-20240701-POP_SIGNUP_TWO_WEEKS-perspective_WEB_6392408d-671b-40c8-83c8-888c04ea535d_medium.jpg' alt='background' />
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