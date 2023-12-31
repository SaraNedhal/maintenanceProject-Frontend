import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

export default function Category({category,onClick}) {
  const handleCategoryClick = () =>{
    onClick(category);

  }

  return (
    <>
    <div className="col-md-4" onClick={handleCategoryClick} >
         <div className="card">
    <a href="/abc/">
          <img src={`/uploads/${category.image}`} className='card-img-top' alt=""></img>
          <div className="card-body">
            <h5 className="card-title">{category.name}</h5>
           <div className='d-flex justify-content-between'>
            <a href="/category/edit">Edit</a>
            <a href="/category/delete">Delete</a>
            </div> 
          </div>

    </a>
         </div>
    </div>
    
    </>
  )
}
