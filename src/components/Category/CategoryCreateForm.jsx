import React, { useState } from "react";
import  Axios  from "axios";
import { useNavigate } from "react-router";

export default function CategoryCreateForm(props) {
    const [NewCategory,setNewCategory] = useState({});
    const [file, setFile] = useState();

    const navigate = useNavigate();

    const handelChange = (event) =>{
        const attributeToChange = event.target.name;
        const newValue = event.target.value;
        const category = {...NewCategory}
        category[attributeToChange] = newValue;
        console.log(category);
        setNewCategory(category);
    }

    const handleImage = (event) => {
        console.log(event.target.files[0]);
        setFile(event.target.files[0]);

    }
console.log("logged user" , props.user);
 

       
    const handleSubmit = (event) =>{
        event.preventDefault();
        const formData = new FormData();
        formData.append("category" , JSON.stringify(NewCategory))
        console.log("form data category" , formData);
    console.log("category image:" , file);
    formData.append("image" , file);
    console.log("form data image" , formData);
        props.addCategory(formData);
        // navigate("/category/index");
    }

   
  return (
    <>
    <h1 className="mt-5">Create Category:</h1>
    <form onSubmit={handleSubmit} className="w-75 m-auto mx-auto my-5" encType="multipart/form-data">

        <div class="mb-3">
            <label className="mt-3">Category Name:</label>
            <input type='text' name='name' onChange={handelChange} className="form-control"></input>
        </div>

        <div class="mb-3">
            <label for="formFile" class="form-label mt-3">Upload Category Image:</label>
            <input class="form-control" type="file" id="formFile" name="image"      onChange={handleImage} 
/>
        </div>

        <div>
            <input type='submit' value="Add Category" class="btn btn-sm btn-dark"></input>
        </div>


      </form></>
  )
}
