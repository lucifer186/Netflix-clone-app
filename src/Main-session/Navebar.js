import React, { useState,useEffect } from "react";
import './Nav.css'
import Image from '../images/1.png'
// import netflix_logo from '../images/netflix-logo.png'
import { useHistory } from "react-router-dom";
function Navebar() {
const [handleShow, setHandleShow] = useState(false)
const history = useHistory()


   useEffect(()=>{
       window.addEventListener('scroll', ()=>{
           if(window.scrollY > 100){
               setHandleShow(true)
           }else setHandleShow(false)
       })
      //  return () =>{
      //      window.removeEventListener("scroll")
      //  }
   })

  return (
    <div className={`nav ${handleShow && "nav_black"}`}>
      <img onClick={()=>{history.push('/')}}
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        // src={netflix_logo}
        alt="Netflix logo"
      />

      <img  onClick={()=>{history.push('/profile')}} className="nav_avatar" src={Image} alt="Netflix logo" />
    </div>
  );
}

export default Navebar;
