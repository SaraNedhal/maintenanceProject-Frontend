// import React, { useState } from 'react'
// import { Axios } from 'axios'
// import Services from './Services';
// import ServicesCreatForm from './ServicesCreatForm';

// export default function ServicesList() {
//     const [services, setServices] = useState([]);
//     const [isEdit, setIsEdit] = useState(false);
//     const [currentServices, setCurrentServices] = useState({})
//     const authheader = {
//         headers:{
//             "Authorization": " Bearer " + localStorage.getItem("token")
//         }
//     }
       
        
    

//     useEffect(()=>{
//       // call API
//       loadServiceList()

//     },[])
//     const loadServiceList = () => {
//         Axios.get("service/index")
//         .then((response)=>{
//             console.log(response)
//             setAuthors(response.data.services)
//         })
//         .catch((err)=>{
//             console.log(err)
//         })
//     }
//     const addService = (service) => {
//         Axios.post("service/add", service,{headers:{
//             "Authorization": " Bearer " + localStorage.getItem("token")
//         }
//         })
    
//         .then( res => {
//             console.log("service Added successfully !!");
//             loadAuthorList();
//         })
//         .catch(err => {
//             console.log("Error adding services");
//             console.log(err);
//         })
//     }
//     const editView = (id) => {
//         Axios.get(`service/edit?id=${id}`)
//         .then((res)=>{
//             console.log(res.data.service);
//             console.log("Loaded service Information")
//             let service = res.data.service;
//             setIsEdit(true);
//             setCurrentServices(service);

//         })
//         .catch(err => {
//             console.log("Error loading services information");
//             console.log(err);
//         })
//     }

//     const updatedService = (service) => {
//         Axios.put("service/update", service, authheader)
//         .then(res =>{
//             console.log("services Updated Successfuly!!");
//             console.log(res);
//             loadServiceList();
//         })
//         .catch(err => {
//             console.log("Error Updating services");
//             console.log(err);
//         })
//     }
    
//     const  deleteService = (id) =>{
//         Axios.delete(`service/delete?id=${id}`, authheader)
//         .then(res => {
//             console.log("Record deleted successfully!!!");
//             console.log(res);
//             loadServiceList();
//         })
//         .catch(err => {
//             console.log("Error deleting service");
//             console.log(err);
//         })
//     }

//     const allservices = services.map((service,index)=>(
//         <tr key={index}>
//             <Services {...service}
//             editView={editView}
//             deleteAuthor={deleteAuthor}
//            />

            
//         </tr>
//     ) )
//   return (

//     <><div>ServicesList</div><div>
//           <h3>chose a Services:</h3>
//           <div className="row">{allservices}</div>
//       </div><ServicesCreatForm addServices={addService} /></>
      
//   );
// }

