import React from 'react'

export default function Services(props) {
    //  {/* <td>{props.name}</td>
    // <td>{props.serviceProvider}</td>
    // <td>{props.description}</td> */}

  return (
           <di class="row">
          <div className="col-md-4">
         <div className="card shadow-sm ">
          <img src={`/uploads/${props.image}`} className='card-img-top' alt={props.name}></img>
          <div className="card-body text-bg-dark">
            <h5 className="card-title">{}</h5>
            <div class="btn-group">
           <div className='d-flex justify-content-between'>
            <button type="button" class="btn btn-sm btn-outline-light" onClick={()=>props.editService(props._id)}>Edit</button>
            <button type="button" class="btn btn-sm btn-outline-light" onClick={()=>props.deleteService(props._id)}>Delete</button>            </div> 
          </div>
          
          <div>
          <a type='button'class="btn btn-sm btn-outline-light" href={`/request/add/${props._id}`}>Add Request</a>
          </div>
          
         </div>
         </div>
    </div>
    </di>
  )
}
