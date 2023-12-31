
import React, { useEffect, useState } from 'react'
import Category from './Category';
import  Axios  from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import CategoryCreateForn from './CategoryCreateForn';


export default function CategoryList() {

    const[category,setCategory]= useState([]);

    useEffect(()=>{
        loadCategoryList();
    },[])
    const loadCategoryList =()=>{
        Axios.get("category/index")
        .then((response)=>{
            console.log(response);
            setCategory(response.data.categories);
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    const addCategory = (category) =>{
        Axios.post("category/add",category)
           .then(res =>{
            console.log("Category Added successfuly !!");
            loadCategoryList();
           })
           .catch(err =>{
            console.log("Error adding Category");
            console.log(err);
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
    

  return (
    <><div>CtegoryList</div>
     <div>
        <h3>chose a category:</h3>
        <div className="row">{categoryList}</div>
     </div>

    <CategoryCreateForn addCategory={addCategory}></CategoryCreateForn>
    </>
  )
}


