import React, { useState } from "react";


export default function CategoryCreateForn(props) {
    const [NewCategory,setNewCategory] = useState({});

    const handelChange = (event) =>{
        const attributeToChange = event.target.name;
        const newValue = event.target.value;
        const category = {...NewCategory}
        category[attributeToChange] = newValue;
        console.log(category);
        setNewCategory(category);
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        props.addCategory(NewCategory);
    }
  return (
    <><div>CategoryCreateForn</div>
    <form onSubmit={handleSubmit}>
        <div>
            <label>Name</label>
            <input type='text' name='name' onChange={handelChange} className="form-control"></input>
        </div>
        <div>
            <input type='submit' value="Add Category"></input>
        </div>

      </form></>
  )
}
