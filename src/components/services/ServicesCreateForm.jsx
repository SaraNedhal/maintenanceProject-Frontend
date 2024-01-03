import React from 'react'
import {useState , useEffect} from 'react'
export default function ServicesCreateForm(props) {
    const [NewServices, setNewServices] = useState({})

    useEffect(()=>{
        props.loadCategoryList()
    },[])

    console.log("the category list " , props.categories);
    const handleChange = (event) =>{
        const attributeTochange = event.target.name;
        let newValue = event.target.value;
        const service = {...NewServices}
        if(event.target.tagName == "SELECT" && event.target.multiple){
            newValue = Array.from(event.target.options).filter((option)=>option.selected).map((option)=>option.value);
            console.log("new value: " , newValue);
    }
        service[attributeTochange]= newValue;
        console.log(service);
        setNewServices(service);
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        props.addService(NewServices);
    }

  
  return (
    <div>
         <div>
        <h1>Create Services</h1>
       <form onSubmit={handleSubmit}> 
        <div>
            <label>Name</label>
            <input type='text' name='name' onChange={handleChange} className='form-control' ></input>
        </div>
        <div>
            <label>Service Provider</label>
            <input type='text' name='serviceProvider' onChange={handleChange} className='form-control' ></input>
        </div>
        <div>
            <label>Description</label>
            <input type='text' name='description' onChange={handleChange} className='form-control' ></input>
        </div>

<label for="floatingSelect">Select a Category:</label>
<div class="form-control mt-2">
  <select class="form-select" id="floatingSelect"  name="categoryId"  onChange={handleChange} multiple>
    <option selected>Open this select menu to select category</option>
    {props.categories && props.categories.map((category,index) =>( 
            <option key={index} value={category._id}>
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
            <input type='submit' value="Add Service" class="btn btn-sm btn-dark"></input>
        </div>
       </form>
    </div>
    </div>

  )
}
