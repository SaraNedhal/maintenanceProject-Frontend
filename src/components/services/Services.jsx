import React, { useEffect } from 'react'

export default function Services(props) {
    //  {/* <td>{props.name}</td>
    // <td>{props.serviceProvider}</td>
    // <td>{props.description}</td> */}
    

    return (
      <div className="card shadow-sm" style={{ width: "25vw" }}>
        <div className="grid">
          <div className="shadow-sm" style={{ border: "1px solid #ccc", alignItems: "center", padding: "10px", borderRadius: "7px", backgroundColor: "#F8F5F1" }}>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li style={{ marginBottom: "10px" }}>
                <span style={{ fontWeight: "bold" }}>Service Name:</span>
                <span style={{ fontWeight: "normal" }}>{props.name}</span>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <span style={{ fontWeight: "bold" }}>Service Provider:</span>
                <span style={{ fontWeight: "normal" }}>{props.serviceProvider}</span>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <span style={{ fontWeight: "bold" }}>Description:</span>
                <span style={{ fontWeight: "normal" }}>{props.description}</span>
              </li>
            </ul>
    
            {console.log("user", props.user)}
            {props.user && props.user.role === "admin" ? (
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <button className="btn btn-sm btn-dark" onClick={() => props.editService(props._id)}>Edit</button>
                <button className="btn btn-sm btn-dark" onClick={() => props.deleteService(props._id)}>Delete</button>
              </div>
            ) : null}
    
            <div>
              <a className="btn btn-sm btn-dark" href={`/request/add/${props._id}`}>Add Request</a>
            </div>
          </div>
        </div>
      </div>
    );
            }    