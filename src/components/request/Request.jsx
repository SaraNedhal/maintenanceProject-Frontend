import React from 'react'

export default function Request(props) {

  return (
    <>
    <td>{props.name}</td>
    <td>{props.quantity}</td>
    <td>{props.problem}</td>
    <td><button onClick={()=> props.editView(props._id)}>Edit</button></td>
    <td><button onClick={()=> props.deleteRequest(props._id)}>delete</button></td>
    </>
    
  )
}
