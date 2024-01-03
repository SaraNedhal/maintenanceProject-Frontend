import React from 'react'

export default function ServiceDetails() {
    return (
   
        <div class="row">
          <img class="col-6" src='../maintenance.png' style={{border:"inset"}} > 
          
          </img>
         
          <div class="col-6"  style={{border:"inset" ,padding: "70px"}}>
              <h2 style={{margin:"70px"}}>Service Name</h2>
              <h3 style={{margin:"70px"}}>Service Provider</h3>
              <p style={{margin:"70px"}}>Description</p>
              <button type='button' class="btn btn-dark" >Add Request</button>
          </div>
        </div>
         
        
          
        
      
        )
}
