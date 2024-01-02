import React, { useEffect, useState } from 'react'

export default function Userprofile(props) {
  console.log("the user from the component", props.user)
  const [userProfile , setUserProfile] = useState(props.user);
  console.log(userProfile);

  // useEffect(() => {
  //     getUserProfile();
  // }, [])

  // function getUserProfile() {
  //   setUserProfile(props.user);
  // }

  return (
    <div class="form-signin w-75 m-auto mx-auto my-5">
      <h1>{userProfile.firstName}</h1>
      {/* onSumbit should have editget function from the app.js  */}
    <form>
        {/* <img class="mb-4" src="" alt="" width="72" height="57"/> */}
        <h1 class="h3 mb-3 fw-normal">User Profile</h1>
    
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="floatingInput" name="firstName" value={userProfile.firstName}/>
          <label for="floatingInput">first Name</label>
        </div>
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="floatingInput"   name="lastName"   value={userProfile.lastName}/>
          <label for="floatingInput">Last name</label>
        </div>
        <div class="form-floating mb-3">
          <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"  name="emailAddress"   value={userProfile.emailAddress}/>
          <label for="floatingInput">Email</label>
        </div>
      
         <div class="form-floating mb-3">
          <input type="text" class="form-control" id="floatingPassword" placeholder="Password" name="phoneNumber"   value={userProfile.phoneNumber}/>
          <label for="floatingPassword">Phone Number</label>
        </div>
        <button class="btn btn-primary  py-2 mt-3" type="submit">Edit</button>
      
      </form>
    </div>
  
  )
}
