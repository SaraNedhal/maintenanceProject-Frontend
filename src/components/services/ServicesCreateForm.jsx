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
        const newValue = event.target.value;
        const service = {...NewServices}
        service[attributeTochange]= newValue;
        console.log(service);
        setNewServices(service);
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        props.addService(NewServices);
    }

  
  return (
    <div>ServicesCreateForm
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

<div class="form-floating">
  <select class="form-select" id="floatingSelect" aria-label="Floating label select example" name="categoryId"  onChange={handleChange}>
    <option selected>Open this select menu to select category</option>
    {props.categories && props.categories.map((category,index) =>( 
            <option key={index} value={category._id}>
            {category.name}
          </option>
             ))}
  </select>
  <label for="floatingSelect">Select a Category:</label>
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
