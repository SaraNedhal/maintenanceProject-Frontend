import  Axios  from 'axios'
import React, { useEffect, useState } from 'react'
import  Request  from './Request';
import RequestCreateForm from './RequestCreateForm'
import RequestEditForm from './RequestEditForm';

export default function RequestList() {

  const [requests, setRequests] = useState([]);
  const [ isEdit, setIsEdit] = useState(false);
  const [currentRequests, setCurrentRequest] = useState({})


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
  const addRequest = (requests) =>{
    Axios.post("request/add", requests)
    .then(res =>{
      console.log("Request Added successfully");
      loadRequestList();
    })
    .catch(err =>{
         console.log("Error adding Author");
         console.log(err);
    })
  }
  const editView = (id) =>{
    Axios.get(`request/edit?id=${id}`)
    .then((res)=>{
      console.log(res.data);
      console.log("Loaded Request Information")
      let request = res.data.request;
      setIsEdit(true);
      setCurrentRequest(request);
    })
    .catch(err => {
      console.log("error loading request information");
      console.log(err);
    })
  }

  const updaterequest = (request) => {
    Axios.post("request/update",request)
    .then(res =>{
      console.log("Request Updated successfuly")
      console.log(res);
      loadRequestList();
    })
    .catch(err =>{
      console.log("Error Updating Request");
      console.log(err);
    })
  }
   const deleteRequest = (id) =>{
    Axios.delete(`request/delete?id=${id}`)
    .then(res =>{
      console.log("Record deleted successfully");
      console.log(res);
      loadRequestList();
    })
    .catch(err =>{
      console.log("Error deleting request");
      console.log(err);
    })
   }
  const allRequests = requests.map((request,index)=>(
    <tr key={index}>
     <Request {...request}
     editView={editView}
      deleteRequest={deleteRequest}
     
     ></Request>

    </tr>
  ))

  return (
    <div>
      <h1>Request List</h1><div>
          <table className="table table-striped">
              <tbody>
                  <tr>
                    <th>Name</th>
                    <th>Quantity </th>
                    <th>Problem</th>
                    <th>Edit</th>
                    <th>Delete</th>

                  </tr>
                  {allRequests}
              </tbody>
          </table>
      </div>
     
     {!isEdit?
      <RequestCreateForm addRequest={addRequest}></RequestCreateForm>
      :
      <RequestEditForm key={currentRequests._id} request={currentRequests} updaterequest={updaterequest}></RequestEditForm>
}
    </div>
  )
}
