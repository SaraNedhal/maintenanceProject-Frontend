import React from 'react'
import {useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Axios from 'axios';
export default function RequestCreateForm(props) {
  const [NewRequest, setNewRequest] = useState({});
  // const [currentUser , setNewUser] = useState(props.user)
  // console.log("props.user" , props.user);
  const navigation = useNavigate();
  const {id} = useParams();
  console.log("the service id" , id);
  const handleChange = (event) =>{
    const attributeToChange = event.target.name;
    let newValue = event.target.value;
    if(event.target.tagName == "SELECT" && event.target.multiple){
      newValue = Array.from(event.target.options).filter((option)=>option.selected).map((option)=>option.value);
    }
    const request = {...NewRequest}
    request[attributeToChange] = newValue;
    console.log(request);
    console.log("the user id in requst create list" , props.user._id);
    request.UserId = props.user._id;
      console.log("request.UserId" ,  request.UserId );
    request.serviceId = id;
    setNewRequest(request);
  }
  const handleSubmit = (event) =>{
    event.preventDefault();
    addRequest(NewRequest);
    navigation('/order/index')
  }

  const addRequest = (requests) =>{
    console.log("request data to send", requests);
    Axios.post("/request/add", requests)
    .then(res =>{
      console.log("Request Added successfully");
    })
    .catch(err =>{
         console.log("Error adding Author");
         console.log(err);
    })
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

      <select class="form-select" aria-label="Default select example" multiple name="problem" onChange={handleChange}>
      <option selected>Open this select menu</option>
        <option value="Steering Wheel shaking">Steering Wheel Shaking</option>
        <option value="Overheating">Overheating</option>
        <option value="Oil changes;">Oil changes</option>
         <option value=" garage doors">garage doors</option>
        <option value="Wall cracks">Wall cracks</option>
        <option value="Ceiling leaks">eiling leaks</option>
         <option value="iphone screen repair">iphone screen repair</option>
        <option value="format iphone">format iphone</option>
        <option value="format laptop">format laptop</option>
        <option value="cleaning chairs">cleaning chairs</option>
        <option value="poilish table">poilish tables</option>
        <option value="painting chairs">painting chairs</option>
      </select>

     
      
        <button class="btn btn-dark  py-2 mt-3" type="submit">Create Request</button>
      
      </form>
    </div>
  )
}
