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
    <a href="">
          <img src='maintenance.png' className='card-img-top'></img>
          <div className="card-body">
            <h5 className="card-title">{category.name}</h5>
            
          </div>

    </a>
         </div>
    </div>
    
    </>
  )
}
