import React from "react";
import Navebar from "../Main-session/Navebar";
import Image from "../images/1.png";
import "./Profile.css";
import { useSelector } from "react-redux";
import { selectUser } from "../store/userSlice";
import { auth } from "../User/firebase";
function Profile() {
  const user = useSelector(selectUser);
  const today = new Date();
  let date =  today.getDate()+'/'  + (today.getMonth() + 1) + '/' + today.getFullYear() ;
  return (
    <div className="profileScreen">
      <Navebar />
      <div className="profile_screen_body">
        <h1>Edit Profile</h1>
        <div className="profile_info">
          <img className="avatar" src={Image} alt="Netflix logo" />
          <div className="profile_details">
            <h2>{user.email}</h2>
            <div className="profile_plan">
              <h3>Plans (Current Plan: premium)</h3>
              <h4>Renewal date: {date} </h4>

              <div className="netflix_subscribes" >
                <h3>Netflix Standard  <span>1080p</span> </h3>
                <button className="subcribe" >Subcribe</button>
              </div>
              <div className="netflix_subscribes" >
                <h3>Netflix Basic<span>480p</span> </h3>
                <button className="subcribe" >Subcribe</button>
              </div>
              <div className="netflix_subscribes" >
                <h3 className="prem">Netflix Premium <span className="k" >4K+HDR</span></h3>
                <button className="subcribecurent" >Current Package</button>
              </div>
              <button
                onClick={() => auth.signOut()}
                className="profile_singout"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
