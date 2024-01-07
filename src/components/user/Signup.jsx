import React, { useState } from 'react'

export default function Signup(props) {
  const [newUser , setNewUser] = useState({});
  const [image,setImage]=useState();

  const handleImg = (e)=>{
    console.log(e.target.files);
    setImage(e.target.files[0]);
  }

  const handleChange = (event) => {
    const user = {...newUser};
    user[event.target.name] = event.target.value;
    console.log(user);
    setNewUser(user);
  }
  const registerHandler = (e) => {
    e.preventDefault();
    const formData = new FormData()
    formData.append("user",JSON.stringify(newUser));
    formData.append("image",image);
    props.register(formData);
    e.target.reset();
  }

  return (
    <div class="form-signin w-75 m-auto mx-auto my-5">
    <form onSubmit={registerHandler} encType='multipart/form-data'>
        {/* <img class="mb-4" src="" alt="" width="72" height="57"/> */}
        <h1 class="h3 mb-3 fw-normal">Sign Up</h1>
    
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="floatingInput" name="firstName"    onChange={handleChange}/>
          <label for="floatingInput">first Name</label>
        </div>
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="floatingInput"   name="lastName"  onChange={handleChange}/>
          <label for="floatingInput">Last name</label>
        </div>
        <div class="form-floating mb-3">
          <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"  name="emailAddress"  onChange={handleChange}/>
          <label for="floatingInput">Email</label>
        </div>
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com"  name="username" onChange={handleChange}/>
          <label for="floatingInput">Username</label>
        </div>
        <div class="form-floating mb-3">
          <input type="password" class="form-control" id="floatingPassword" placeholder="Password" name="password" onChange={handleChange}/>
          <label for="floatingPassword">Password</label>
        </div>

        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="floatingPassword" placeholder="Password" name="phoneNumber" onChange={handleChange}/>
          <label for="floatingPassword">Phone Number</label>
        </div>
        <div class="form-floating mb-3">
          <input type="file" class="form-control"  name="image" onChange={handleImg}/>
          <label for="floatingPassword">Upload Image</label>
        </div>
        <button class="btn btn-primary  py-2 mt-3" type="submit">Sign Up</button>
      
      </form>
    </div>
  )
}
