
import React, { useEffect, useState } from 'react'
import Category from './Category';
import  Axios  from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import CategoryCreateForn from './CategoryCreateForm';
// import { userInfo } from 'os';


export default function CategoryList(props) {

    const[category,setCategory]= useState([]);

    useEffect(()=>{
        loadCategoryList();
    },[])
    const loadCategoryList =()=>{
        Axios.get("/category/index")
        .then((response)=>{
            console.log(response);
            setCategory(response.data.categories);
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    
    const handleCategoryClick = (category) => {
        console.log("Category clicked:",category);
    }
   /* const allCategory = category.map((category,index)=>(
        <tr key={index}>
        
                <Category {...category}></Category>
              
           
          

        </tr>
    )) */
      const categoryList = category.map((category)=>(
     
        
                <Category key={category._id} category={category} onClick={handleCategoryClick}></Category>
              

    )) 
    
   const loadAllServices = () => {
        Axios.get('service/index')
        .then()
        .catch(error => console.log("failed to load all services for a specific category in the category list front end , " , error));
    }

  return (
    <>
     <div>
        <h3>chose a category:</h3>
    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <a href="/category/add" class="btn btn-primary me-md-2" type="button">Add Category</a>
    </div>       
 <div className="row">{categoryList}</div>
     </div>

    </>
  )
}


