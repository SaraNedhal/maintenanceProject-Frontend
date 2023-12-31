import React from 'react'
import {useState} from 'react'
export default function ServicesCreateForm(props) {
    const [NewServices, setNewServices] = useState({})

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
            <input type='number' name='description' onChange={handleChange} className='form-control' ></input>
        </div>
        <div>
          
            <input type='submit' value="Add Service" ></input>
        </div>
       </form>
    </div>
    </div>

  )
}
