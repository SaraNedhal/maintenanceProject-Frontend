import React from 'react'

export default function RequestCreateForm() {
  return (
    <div class="w-75 m-auto mx-auto my-5">
    <form>
        {/* <img class="mb-4" src="" alt="" width="72" height="57"/> */}
        <h1 class="h3 mb-3 fw-normal">Create Request</h1>
    
        <div class="form-floating mb-3">
          <input type="number" class="form-control" id="floatingInput" name="name"  />
          <label for="floatingInput">Request Name</label>
        </div>
        <div class="form-floating mb-3">
          <input type="email" class="form-control" id="floatingInput"  name="quantity" />
          <label for="floatingInput">Quantity</label>
        </div>
        
        {/* <div class="form-floating mb-3">
        <select name="author[]" class="form-control" multiple="multiple">
        <option value=""></option>
    </select>
        </div>
        */}

      <select class="form-select" aria-label="Default select example" name="problem[]">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      
        <button class="btn btn-primary  py-2 mt-3" type="submit">Sign Up</button>
      
      </form>
    </div>
  )
}
