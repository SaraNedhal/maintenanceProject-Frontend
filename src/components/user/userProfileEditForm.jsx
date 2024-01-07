import React, { useState } from 'react'

export default function UserProfileEditForm(props) {
  const [userProfile , setUserProfile] = useState(props.user);
  
  const handleChange = (event)=>{
    const attributeToChange = event.target.name;
     const newValue = event.target.value;
     // user profileUpdate seState should be done
     const updateProfile = {...userProfile}
     updateProfile[attributeToChange] = newValue;
     console.log(updateProfile);
     setUserProfile(updateProfile)
   }
   
   const handleSubmit = (event)=>{
      event.preventDefault();
      // update api and function should be passed from the app js and replaced with the updateAuthor function 
      props.updateProfile(userProfile);
      event.target.reset();
   }
  return (
    <div class="form-signin w-75 m-auto mx-auto my-5">
      
    {/* onSumbit should have editget function from the app.js  */}
  <form onSubmit={handleSubmit}>
      <img class="mb-4" src={"/uploads/"+userProfile.image} alt="" width="90" height="78"/>
      <h1 class="h3 mb-3 fw-normal">User Profile</h1>
  
      <div class="form-floating mb-3">
        <input type="text" class="form-control" id="floatingInput" name="firstName" value={userProfile.firstName} onChange={handleChange}/>
        <label for="floatingInput">first Name</label>
      </div>
      <div class="form-floating mb-3">
        <input type="text" class="form-control" id="floatingInput"   name="lastName"   value={userProfile.lastName} onChange={handleChange}/>
        <label for="floatingInput">Last name</label>
      </div>
      <div class="form-floating mb-3">
        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"  name="emailAddress"   value={userProfile.emailAddress} onChange={handleChange}/>
        <label for="floatingInput">Email</label>
      </div>
    
       <div class="form-floating mb-3">
        <input type="text" class="form-control" id="floatingPassword" placeholder="Password" name="phoneNumber"   value={userProfile.phoneNumber} onChange={handleChange}/>
        <label for="floatingPassword">Phone Number</label>
      </div>
      <button class="btn btn-primary  py-2 mt-3" type="submit">Update</button>
    
    </form>
  </div>
  )}
