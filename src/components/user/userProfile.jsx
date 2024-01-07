import React, { useEffect, useState } from 'react'
import {Link } from "react-router-dom";

export default function Userprofile(props) {
  const [userProfile , setUserProfile] = useState();
  console.log(userProfile);

  useEffect(() => {

    setUserProfile(props.user);

  }, [])
  
 

  return (
    <div class="form-signin w-75 m-auto mx-auto my-5">
      {userProfile && 
      <div className='card'>
        <div className='text-center'>
      <img className="userProfile" src={"/uploads/"+userProfile.image} alt=""/>
</div>
      <h5>First Name: <>{userProfile.firstName}</></h5>
    
      <h5>Last Name:  <>{userProfile.lastName}</></h5>
      
      <h5>E-mail:  <>{userProfile.emailAddress}</></h5>
     
      <h5>Phone Number: <>{userProfile.phoneNumber}</></h5>
      
      </div>
}

    
        
        <Link class="btn btn-dark  py-2 mt-3" to="/user/profile/edit" onClick={()=>props.editView(userProfile._id)}>Edit</Link>
      
      
    </div>
  
  )
}
