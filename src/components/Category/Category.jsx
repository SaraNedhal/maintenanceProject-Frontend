import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

export default function Category({category,onClick , editCategory , deleteCategory}) {
  const handleCategoryClick = () =>{
    onClick(category);

  }

  // console.log("the category" , category);

console.log("the category image in image component:" , category.image.trim());
  return (
    <>
    <div className="col-md-4" onClick={handleCategoryClick} >
         <div className="card">
          <img src={`/uploads/${category.image}`} className='card-img-top' alt=""></img>
          <div className="card-body">
            <h5 className="card-title">{category.name}</h5>
           <div className='d-flex justify-content-between'>
            <button  onClick={()=>editCategory(category._id)}>Edit</button>
            <button  onClick={()=>deleteCategory(category._id)}>Delete</button>            </div> 
          </div>

         </div>
    </div>
    
    </>
  )
}
