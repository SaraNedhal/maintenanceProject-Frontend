import React from 'react'
import {useState} from 'react'
export default function RequestEditForm(props) {
    const [request, setRequest] = useState(props.request);

    const handleChange = (event) =>{
        const attributeToChange = event.target.name;
        const newValue = event.target.value;

        const updaterequest = {...request}
        updaterequest[attributeToChange] = newValue;
        console.log(updaterequest);
        setRequest(updaterequest);
        console.log(event.target.options);
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        props.updaterequest(request);
        event.target.reset();
    }
  return (

    <div class="w-75 m-auto mx-auto my-5">
    <form onSubmit={handleSubmit}>
        {/* <img class="mb-4" src="" alt="" width="72" height="57"/> */}
        <h1 class="h3 mb-3 fw-normal">Edit Request</h1>
    
        <div class="form-floating mb-3">
          <input type="string" class="form-control" id="floatingInput" name="name" value={request.name} onChange={handleChange}  />
          <label for="floatingInput">Request Name</label>
        </div>
        <div class="form-floating mb-3">
          <input type="number" class="form-control" id="floatingInput"  name="quantity" value={request.quantity} onChange={handleChange} />
          <label for="floatingInput">Quantity</label>
        </div>
        
        {/* <div class="form-floating mb-3">
        <select name="author[]" class="form-control" multiple="multiple">
        <option value=""></option>
    </select>
        </div>
        */}

      <select class="form-select" aria-label="Default select example" name="problem[]" multiple onChange={handleChange}>
        {/* <option disabled>Open this select menu</option> */}
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      
        <button class="btn btn-primary  py-2 mt-3" type="submit">Update Request</button>
      
      </form>
    </div>
       
  )
}
