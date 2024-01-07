import React, { useEffect } from 'react'

export default function Services(props) {
    //  {/* <td>{props.name}</td>
    // <td>{props.serviceProvider}</td>
    // <td>{props.description}</td> */}
    

  return (

    
         
            
          <div className="grid" >
         <div className="shadow-sm"  style={{border:"1px solid #ccc", alignItems:"center",padding: "10px",borderReadius:"7px" ,backgroundColor:"#F8F5F1"}}>
         <ul style={{listStyle:"none",padding:0}}>
          <li style={{marginBottom:"10px"}}>
            <span style={{fontWeight: "bold"}}>Service Name:</span>
            <span style={{fontWeight: "normal"}}>{props.name}</span>
          </li>
          <li style={{marginBottom:"10px"}}>
            <span style={{fontWeight: "bold"}}>Service Provider:</span>
            <span style={{fontWeight: "normal"}}>{props.serviceProvider}</span>
          </li>
          <li style={{marginBottom:"10px"}}>
            <span style={{fontWeight: "bold"}}>Description:</span>
            <span style={{fontWeight: "normal"}}>{props.description}</span>
          </li>
         </ul>
         {console.log("user",props.user)}
          {props.user && props.user.role=="admin" ?<div style={{display: "flex", justifyContent:"space-between",}}>
              <button className='btn btn-sm btn-dark' onClick={()=>props.editService(props._id)}>Edit</button>
              <button className='btn btn-sm btn-dark' onClick={()=>props.deleteService(props._id)}>Delete</button>
          </div>:""}
          <div>
        <a className="btn btn-sm btn-dark" href={`/request/add/${props._id}`}>Add Request</a>
        </div>
         {/*
          <div>
            <h5 style={{textAlign:"inline-start"}} >Service Name: <h6 style={{display:"inline", fontWeight:"normal"}}>{props.name}</h6></h5> <br/>
            <h5 style={{textAlign:"inline-start"}}>serviceProvider: <h6 style={{display:"inline", fontWeight:"normal"}}>{props.serviceProvider}</h6></h5><br/>
            <h5 style={{textAlign:"inline-start"}}>Description: <h6 style={{display:"inline", fontWeight:"normal"}}>{props.description}</h6></h5><br/>
          </div>
           
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
         */}  
          
         </div>
         </div>
       
    
    
   
  )
}
