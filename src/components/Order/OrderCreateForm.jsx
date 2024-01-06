import React, { useState ,useEffect} from 'react'
import Axios  from 'axios';

export default function OrderCreateForm(props) {
 const [NewOrder, setNewOrder] = useState({});
 const [requests, setRequests] = useState([]);
 useEffect(()=>{
  loadRequestList();
}, [])


const  loadRequestList= ()=> {
Axios.get('request/index')
.then((response)=>{
  console.log("the list of all requests backend to frontend :" , response);
  setRequests(response.data.request);
})
.catch(error=>{
  console.log("failed to get the list of all requests backend to frontend  " , error);
})
}
 const handleChange = (event) =>{
    const attributeToChange = event.target.name;
    const newValue = event.target.value;
    const order = {...NewOrder}
    order[attributeToChange] = newValue;
    console.log(order);
    setNewOrder(order);
 }
 const handleSubmit = (event) =>{
    event.preventDefault();
    props.addOrder(NewOrder);
 }

  return (
    <div class="w-75 m-auto mx-auto my-5">
    <form onSubmit={handleSubmit}>
        {/* <img class="mb-4" src="" alt="" width="72" height="57"/> */}
        <h1 class="h3 mb-3 fw-normal">Create Order</h1>
        <div class="form-floating mb-3">
          <select type="number" class="form-control" id="floatingInput"  name="requestId" onChange={handleChange} >
          <option value="">Select an option</option>
            {requests.map((request, index) => (
            <option key={index} value={request._id}>
            {request.name}
          </option>
        ))}
            </select>
            
          <label for="floatingInput">Request</label>
        </div>
        <div class="form-floating mb-3">
          <select type="number" class="form-control" id="floatingInput"  name="requestId" onChange={handleChange} >
          <option value="">Select an option</option>
            {requests.map((request, index) => (
            <option key={index} value={request._id}>
            {request.problem}
          </option>
        ))}
            </select>
            
          <label for="floatingInput">Problem</label>
        </div>
        <div class="form-floating mb-3">
          <input type="String" class="form-control" id="floatingInput" name="orderStatus" onChange={handleChange}  />
          <label for="floatingInput">Order Status</label>
        </div>
        <div class="form-floating mb-3">
          <input type="number" class="form-control" id="floatingInput"  name="amount" onChange={handleChange} />
          <label for="floatingInput">amount</label>
        </div>

        

        <button class="btn btn-dark  py-2 mt-3" type="submit">Create Order</button>
      
      </form>
    </div>
  )
}
