import React from 'react'
import {useState} from 'react'
export default function RequestCreateForm(props) {
  const [NewRequest, setNewRequest] = useState({});
  const handleChange = (event) =>{
    const attributeToChange = event.target.name;
    const newValue = event.target.value;

    const request = {...NewRequest}
    request[attributeToChange] = newValue;
    console.log(request);
    setNewRequest(request);
  }
  const handleSubmit = (event) =>{
    event.preventDefault();
    props.addRequest(NewRequest);
  }

  return (
    <div class="w-75 m-auto mx-auto my-5">
    <form onSubmit={handleSubmit}>
        {/* <img class="mb-4" src="" alt="" width="72" height="57"/> */}
        <h1 class="h3 mb-3 fw-normal">Create Request</h1>
    
        <div class="form-floating mb-3">
          <input type="String" class="form-control" id="floatingInput" name="name" onChange={handleChange}  />
          <label for="floatingInput">Request Name</label>
        </div>
        <div class="form-floating mb-3">
          <input type="number" class="form-control" id="floatingInput"  name="quantity" onChange={handleChange} />
          <label for="floatingInput">Quantity</label>
        </div>
        
        {/* <div class="form-floating mb-3">
        <select name="author[]" class="form-control" multiple="multiple">
        <option value=""></option>
    </select>
        </div>
        */}

      <select class="form-select" aria-label="Default select example" name="problem[]" onChange={handleChange}>
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      
        <button class="btn btn-primary  py-2 mt-3" type="submit">Create Request</button>
      
      </form>
    </div>
  )
}
