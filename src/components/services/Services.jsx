import React from 'react'

export default function Services(props) {
    //  {/* <td>{props.name}</td>
    // <td>{props.serviceProvider}</td>
    // <td>{props.description}</td> */}

  return (
          <div className="col-md-4">
         <div className="card">
          <img src={`/uploads/${props.image}`} className='card-img-top' alt={props.name}></img>
          <div className="card-body">
            <h5 className="card-title">{}</h5>
           <div className='d-flex justify-content-between'>
            <button  onClick={()=>props.editService(props._id)}>Edit</button>
            <button  onClick={()=>props.deleteService(props._id)}>Delete</button>            </div> 
          </div>
         </div>
    </div>
  
  )
}
