import React, { useRef } from 'react'
import { auth } from './firebase';
import './SignIn.css'
function SignIn() {
   const emailRef = useRef(null);
   const passRef = useRef(null);
    const register =(e) =>{
        e.preventDefault()

        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passRef.current.value
        ).then((authUser) =>{
            console.log(authUser)
        }).catch(err =>{
           alert(err.message)
        })
    };


    const signIn =(e) =>{
        e.preventDefault()
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passRef.current.value
        ).then((authUser) =>{
            console.log(authUser)
        }).catch(err =>{
            alert(err.message)
        })
    }

  return (
    <div className='usersign' >
       <form>
           <h1>Sign In</h1>
           <input type="email"  placeholder='Email' ref={emailRef}/>
           <input type="password"  placeholder='Password' ref={passRef}/>
           <button type='submit'onClick={signIn} >Sign In</button>
           <h4>  <span className='gray'> New to Netflix ? </span> 
           <span  className='sign_link' onClick={register} >
           Sing Up now.
           </span>
            </h4>
           </form>    
    </div>
  )
}

export default SignIn