import React, { useEffect, useState } from 'react'
import {Link } from "react-router-dom";

export default function Userprofile(props) {
  const [userProfile , setUserProfile] = useState(props.user);
  console.log(userProfile);

 

  return (
    <div class="form-signin w-75 m-auto mx-auto my-5">
      
      <h1>First Name:</h1>
      <>{userProfile.firstName}</>
      <h1>Last Name:</h1>
      <>{userProfile.lastName}</>
      <h1>E-mail:</h1>
      <>{userProfile.emailAddress}</>
      <h1>Phone Number</h1>
      <>{userProfile.phoneNumber}</>

    
        
        <Link class="btn btn-primary  py-2 mt-3" to="/user/profile/edit" onClick={()=>props.editView(userProfile._id)}>Edit</Link>
      
      
    </div>
  
  )
}
