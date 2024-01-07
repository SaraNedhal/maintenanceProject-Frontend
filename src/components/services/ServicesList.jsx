
import React from 'react'
import Services from './Services';
import Axios from 'axios'
import {useState} from 'react'
import {useEffect} from 'react'
import ServicesCreateForm from './ServicesCreateForm';
import ServicesEditForm from './ServicesEditForm';
import {  Routes, Route, Link, useNavigate } from "react-router-dom";
export default function ServicesList() {
    const [services,setServices] = useState([]);
    const [category, setCategory] = useState([]);
    const [editedService, setEditedService] = useState();
    const [isEdit, setIsEdit] = useState(false);
    const [status, setStatus] = useState('list')
    useEffect(()=>{
        loadServiceList()
        loadCategoryList()

    },[])

    const loadServiceList = () => {
        Axios.get("/service/index")
        .then((response)=>{
            console.log("loadServiceList",response.data)
            setServices(response.data.services)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

  
    const loadCategoryList = () => {
        Axios.get('/category/index')
        .then((response)=>{
            console.log("response - loadCategoryList" , response.data);
            setCategory(response.data.categories);
        })
        .catch(error=>{
            console.log("failed to load categories in services: " , error);
        })
    }

    const addService = (services) =>{
        console.log("s ervices added in db: " , services);
        Axios.post("/service/add", services)
        .then(res => {
            setStatus('list')
            loadServiceList()

        })
        .catch(err => {
            console.log("Error adding Services");
        })
    }

    const editService = (id) => {
        Axios.get(`/service/edit?id=${id}`)
        .then(res=>{
            console.log("edited service: " , res.data.service);
            let service = res.data.service
            setIsEdit(true);
            setStatus('edit')
            setEditedService(service);

        })
        .catch(error=>{
            console.log("error on editing service (fetching info for edit): " , error);
        })
    }
    // console.log("edited Service" , editedService);
    const updateService = (service) => {
        Axios.put('/service/update' , service)
        .then(res=> {
            console.log("services updated successfully");
            console.log(res);
            setIsEdit(false);
            setStatus('list')
            loadServiceList()


        })
        .catch(error=> {
            console.log("error in updating service");
            console.log(error);
        })
        
    }

    const deleteService = (id)=> {
        Axios.delete(`/service/delete?id=${id}`)
        .then(res=>{
            console.log("service record deleted successfully from frontend");
            console.log(res);
            loadServiceList();
        })
        .catch(error=>{
            console.log("error on deleting service frontend");
            console.log(error);
        })
    }

    const allServices =    services.map((service,index)=>(
        <tr key={index}>
            <Services {...service} editService={editService} deleteService={deleteService}></Services>
        </tr>
    ))
  return (
    <>
    <div>ServicesList</div>
    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
    <button type='button' className='btn btn-primary me-md-2' onClick={()=>setStatus('create')}>Create</button>
    </div>
    {status !== 'list' && <button type='button' className='btn btn-secondary' onClick={()=>setStatus('list')}>Back</button>}
{
    status==='list' &&
    <>
        <h3>chose a Service:</h3>
        <div className="d-flex justify-content-start flex-wrap">{allServices}</div>    
    </>
}
{
    status==='edit' &&
        <ServicesEditForm editService={editService} editedService={editedService} categories={category} updateService={updateService}/>
}
{
    status==='create' &&
     <ServicesCreateForm addService={addService} setStatus={setStatus} loadCategoryList={loadCategoryList} categories={category}  ></ServicesCreateForm>
}
     
     {/* </div>
     { (!isEdit) ?
        :
    }
   <nav>
    <Link to='/service/create' onClick={addService}>Create</Link>
    </nav>

   <Routes>
    <Route path='/service/create' element={<ServicesCreateForm addService={addService} loadCategoryList={loadCategoryList} categories={category} />}/>  
    
   </Routes> */}
    </>
    
  )
}
