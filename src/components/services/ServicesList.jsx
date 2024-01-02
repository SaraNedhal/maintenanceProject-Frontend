
import React from 'react'
import Services from './Services';
import Axios from 'axios'
import {useState} from 'react'
import {useEffect} from 'react'
import ServicesCreateForm from './ServicesCreateForm';
export default function ServicesList() {
    const [services,setServices] = useState([]);
    const [category, setCategory] = useState([]);

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
            setCategory(response.data.categories)
        })
        .catch(error=>{
            console.log("failed to load categories in services: " , error);
        })
    }

    const addService = (services) =>{
        console.log("services added in db: " , services);
        Axios.post("/service/add", services
        )
        .then(res => {
            console.log("Services added successfully");
        })
        .catch(err => {
            console.log("Error adding Services");
        })
    }
    const allServices =    services.map((services,index)=>(
        <tr key={index}>
            <Services {...services}
            ></Services>
        </tr>
    ))
  return (
    <div>ServicesList
          <div>
        <h3>chose a Service:</h3>
        <div className="row">{allServices}</div>
     </div>
     <ServicesCreateForm addService={addService} loadCategoryList={loadCategoryList} categories={category} ></ServicesCreateForm>
    </div>
  )
}
