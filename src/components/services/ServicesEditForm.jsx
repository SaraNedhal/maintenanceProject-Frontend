import React, { useState } from 'react'

export default function ServicesEditForm(props) {
  const [service, setService] = useState({})

  const handleChange = (event) =>{
    const attributeTochange = event.target.name;
    let newValue = event.target.value;
    if(event.target.tagName == "SELECT" && event.target.multiple){
        newValue = Array.from(event.target.options).filter((option)=>option.selected).map((option)=>option.value);
        console.log("new value: " , newValue);
      }
    const updatedService = {...service}
    updatedService[attributeTochange]= newValue;
    console.log(service);
    setService(service);
}
const handleSubmit = (event) =>{
    event.preventDefault();
    props.updateService(service);
}
console.log("props categories :" , props.categories);
// props.editedService.categoryId.map((index,category)=>(console.log("hvjdkfh")))
  return (
    <div>ServicesCreateForm
    <div>
   <h1>Create Services</h1>
  <form onSubmit={handleSubmit}> 
   <div>
       <label>Name</label>
       <input type='text' name='name' onChange={handleChange} className='form-control' value={props.editedService.name}></input>
   </div>
   <div>
       <label>Service Provider</label>
       <input type='text' name='serviceProvider' onChange={handleChange} className='form-control' value={props.editedService.serviceProvider}></input>
   </div>
   <div>
       <label>Description</label>
       <input type='text' name='description' onChange={handleChange} className='form-control' value={props.editedService.description } ></input>
   </div>

<label for="floatingSelect">Select a Category:</label>
<div class="form-control mt-2">
{/* {props.editedService.categoryId.map(index,service)=> */}
<select class="form-select" id="floatingSelect"  name="categoryId"  onChange={handleChange} multiple value={props.editedService.categoryId}>

<option selected>Open this select menu to select category</option>
{props.categories && props.categories.map((category,index) =>( 
       <option key={index} value={category._id} 
       {...(props.editedService.categoryId.includes(category._id) ? {selected:"selected"} : {})}
       >
       {category.name} 
     </option>
        ))}
</select>
</div>
   {/* <label className='mb-3'>Select a Category:</label>
   <div class="form-floating mb-3">
     <select class="form-control" id="floatingInput"  name="categoryId"  onChange={handleChange} >
    {props.categories && props.categories.map((category,index) =>( 
       <option key={index} value={category._id}>
       {category.name}
     </option>
        ))}
       </select>

    </div>
     */}
   <div>
       <input type='submit' value="Add Service" ></input>
   </div>
  </form>
</div>
</div>

  )
}
