import React, { useState } from 'react'

export default function Signin(props) {
const[newUser , setNewUser] = useState({});

const handleChange = (event) => {
  const user = {...newUser};
  user[event.target.name] = event.target.value;
  console.log("logged user info ", user);
  setNewUser(user);
}

const loginHandler = (e) => {
  e.preventDefault();
  props.login(newUser);
  e.target.reset();
}

  return (
    <>
<div class="form-signin w-75 m-auto mx-auto my-5">
<form onSubmit={loginHandler}>
    {/* <img class="mb-4" src="" alt="" width="72" height="57"/> */}
    <h1 class="h3 mb-3 fw-normal">Sign In</h1>

    <div class="form-floating mb-3">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"  name="emailAddress" onChange={handleChange}/>
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password" name="password" onChange={handleChange}/>
      <label for="floatingPassword">Password</label>
    </div>
    <button class="btn btn-dark  py-2 mt-3" type="submit">Sign in</button>
    
  </form>
</div>
    </>


  )
}
