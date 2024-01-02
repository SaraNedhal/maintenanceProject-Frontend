import React from 'react'

export default function Request(props) {

  return (
    <>
    <td>{props.name}</td>
    <td>{props.quantity}</td>
    <td>{props.problem}</td>
    <td><button  type="button" class="btn btn-dark" onClick={()=> props.editView(props._id)}>Edit</button></td>
    <td><button  type="button" class="btn btn-dark" onClick={()=> props.deleteRequest(props._id)}>delete</button></td>
    </>
    
  )
}
