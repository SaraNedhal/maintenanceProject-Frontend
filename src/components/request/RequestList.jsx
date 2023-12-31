import  Axios  from 'axios'
import React, { useEffect, useState } from 'react'

export default function RequestList() {

  const [requests, setRequests] = useState([]);
  useEffect(()=>{
    loadRequestList();
  }, [])
  

 const  loadRequestList= ()=> {
  Axios.get('request/index')
  .then((response)=>{
    console.log("the list of all requests backend to frontend :" , response);
    setRequests(response.data.request);
  })
  .catch(error=>{
    console.log("failed to get the list of all requests backend to frontend  " , error);
  })
  }
  return (
    <div>RequestList</div>
  )
}
