import React from 'react'
import Services from './Services';
import Axios from 'axios'
import {useState} from 'react'
import {useEffect} from 'react'
import ServicesCreateForm from './ServicesCreateForm';
export default function ServicesList() {
    const [services,setServices] = useState([]);

    useEffect(()=>{
        loadServiceList()
    },[])

    const loadServiceList = () => {
        Axios.get("serivice/index")
        .then((response)=>{
            console.log(response)
            setServices(response.data.authors)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    const addService = (services) =>{
        Axios.post("serivice/add", services
        )
        .then(res => {
            console.log("Services added successfully");
        })
        .catch(err => {
            console.log("Error adding Services");
        })
    }
    const allServices = services.map((services,index)=>(
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
     <ServicesCreateForm addService={addService} ></ServicesCreateForm>
    </div>
  )
}
