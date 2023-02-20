import React from 'react'
import {auth,provider} from '../firebaseConfig.js'
import { signInWithPopup } from 'firebase/auth'

import Cookies from 'universal-cookie'
const cookies = new Cookies()

function Auth({setIsAuth}) {
    async function signInWithGoogle(){
        try{
            const result = await signInWithPopup(auth,provider)
            cookies.set("auth-token",result.user.refreshToken)
            cookies.set("displayName",result.user.displayName)
            setIsAuth(result.user.refreshToken)
        }catch(err){
            console.log(err)
        }
    }
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
        <button onClick={signInWithGoogle} 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">Sign in with Google</button>
    </div>
  )
}

export default Auth