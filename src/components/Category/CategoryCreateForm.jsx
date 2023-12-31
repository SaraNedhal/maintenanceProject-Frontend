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
    const addCategory = (category) =>{
        let newCategory = {
            ...category, 
             userId: props.user.id
        }
        const formData = new FormData()
        formData.append("addCategory",JSON.stringify(newCategory))
        formData.append("image", file)
        Axios.post("/category/add",formData , { headers: {'Content-Type': 'multipart/form-data'}})
           .then(res =>{
            console.log("Category Added successfuly !!");
            console.log(res);
           })
           .catch(err =>{
            console.log("Error adding Category :" , err);
           })
        } 

        const editCategory = () => {
            
        }
    const handleSubmit = (event) =>{
        event.preventDefault();
        addCategory(NewCategory);
        navigate("/category/index");
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
            <input type='submit' value="Add Category"></input>
        </div>


      </form></>
  )
}
