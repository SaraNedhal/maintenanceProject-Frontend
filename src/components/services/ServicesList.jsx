
import React from 'react'
import Services from './Services';
import Axios from 'axios'
import {useState} from 'react'
import {useEffect} from 'react'
import ServicesCreateForm from './ServicesCreateForm';
import ServicesEditForm from './ServicesEditForm';
export default function ServicesList(props) {
    const [services,setServices] = useState([]);
    const [category, setCategory] = useState([]);
    const [editedService, setEditedService] = useState();
    const [isEdit, setIsEdit] = useState(false);
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
        console.log("services added in db: " , services);
        Axios.post("/service/add", services)
        .then(res => {
            console.log("Services added successfully");
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
            setEditedService(service);

        })
        .catch(error=>{
            console.log("error on editing service (fetching info for edit): " , error);
        })
    }
    console.log("edited Service" , editedService);
    const updateService = (service) => {
        Axios.put('/service/update' , service)
        .then(res=> {
            console.log("services updated successfully");
            console.log(res);
            setIsEdit(false);
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
            <Services {...service} editService={editService} deleteService={deleteService} user={props.user}></Services>
        </tr>
    ))
  return (
    <div>
          <div>
        <h3>chose a Service</h3>
        <div className="grid">{allServices}</div>
     </div>
     { (!isEdit) ?
     <ServicesCreateForm addService={addService} loadCategoryList={loadCategoryList} categories={category}  ></ServicesCreateForm>
        :
     <ServicesEditForm editService={editService} editedService={editedService} categories={category} updateService={updateService}/>
    }
    </div>
    
  )
}
