import React, { useState } from 'react'

export default function ServicesEditForm(props) {
  console.log("props.editedService", props.editedService)
  const [service, setService] = useState(props.editedService)
  //const [categories, setCategories] = useState(props.editedService.categoryId);

  const handleChange = (event) =>{
    const attributeTochange = event.target.name;
    let newValue = event.target.value;
    const updatedService = {...service}

    if(event.target.tagName == "SELECT" && event.target.multiple){
        newValue = Array.from(event.target.options).filter((option)=>option.selected).map((option)=>option.value);
        console.log("new value: " , newValue);
        //setCategories(newValue)
        updatedService.categoryId = newValue;
      }else{
        updatedService[attributeTochange]= newValue;
      }
      // if (Array.isArray(categories) && categories.length > 0) {
      //   updatedService["categoryId"] = categories;
      // } else {
      //   // If no categories are selected, you might want to handle it accordingly.
      //   // For example, set categoryId to null or an empty array.
      //   updatedService["categoryId"] = null; // or updatedService["categoryId"] = [];
      // }
    console.log("chhosen categories" , service.categoryId);
    // updatedService["categoryId"]= categories;
    console.log(" updatedService[categoryId]" ,  updatedService["categoryId"]);
    // if(updatedService["categoryId"])
    console.log("updatedServices after updating categories", updatedService);
    setService(updatedService);
}



const handleSubmit = (event) =>{
    event.preventDefault();
    props.updateService(service);
}
console.log("props categories :" , props.categories);
console.log("State categories :" , service.categoryId);
// props.editedService.categoryId.map((index,category)=>(console.log("hvjdkfh")))

// const allcat = props.categories.map((category,index) => (
//   console.log(categories, category._id, categories.includes(category._id.toString()) )
// ))

  return (
    <div>Services edit Form
    <div>
   <h1>Edit Services</h1>
  <form onSubmit={handleSubmit}> 
   <div>
       <label>Name</label>
       <input type='text' name='name' onChange={handleChange} className='form-control' value={service.name}  ></input>
   </div>
   <div>
       <label>Service Provider</label>
       <input type='text' name='serviceProvider' onChange={handleChange} className='form-control' value={service.serviceProvider}  ></input>
   </div>
   <div>
       <label>Description</label>
       <input type='text' name='description' onChange={handleChange} className='form-control' value={service.description } ></input>
   </div>

<label for="floatingSelect">Select a Category:</label>
<div class="form-control mt-2">
{/* {props.editedService.categoryId.map(index,service)=> */}
<select class="form-select" id="floatingSelect"  name="categoryId"  onChange={handleChange} multiple value={service.categoryId}  > 

<option>Open this select menu to select category</option>
{props.categories && props.categories.map((category,index) =>( 
       <option key={index} value={category._id} 
       {...(service.categoryId.includes(category._id) ? {selected:"selected"} : {})}
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
       <input type='submit' value="Edit Service" ></input>
   </div>
  </form>
  {/* {allcat} */}
</div>
</div>

  )
}
