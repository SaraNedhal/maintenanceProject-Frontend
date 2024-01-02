import  Axios  from "axios";
import Order from "./Order";
import React, { useEffect, useState } from 'react'
import OrderCreateForm from "./OrderCreateForm"
import OrderEditForm from "./OrderEditForm";

export default function OrderList() {
    const [order, setOrder] = useState([]);
    const [IsEdit, setIsEdit] = useState(false);
    const [currentOrder,setCurrentOrder] = useState({})

    useEffect(()=>{
        loadOrderList();
    },[])
    
    const loadOrderList = ()=>{
        Axios.get('order/index')
        .then((response)=>{
            console.log("the list of all orders backend to frontend :", response);
            setOrder(response.data.order);
        })
        .catch(err=>{
            console.log(" failed to get the list of all requests backend to frontend", err);
        })
    }
    const addOrder = (order) =>{
        Axios.post("order/add",order)
        .then(res =>{
            console.log("Order Added Successfully")
            loadOrderList();
        })
        .catch(err =>{
            console.log("error adding Order")
            console.log(err);
        })
    }
    const editView = (id) =>{
        Axios.get(`order/edit?id=${id}`)
        .then((res)=>{
            console.log(res.data);
            console.log("Loaded Order Information")
            let order = res.data.order;
            setIsEdit(true);
            setCurrentOrder(order);
        })
        .catch(err =>{
            console.log("error loading order information");
            console.log(err);
        })
    }
    const updateorder = (order) =>{
        Axios.post("order/update",order)
        .then(res =>{
            console.log("Order Updated successfuly")
            console.log(res);
            loadOrderList();
        })
        .catch(err =>{
            console.log("Error Updating Order");
            console.log(err);
          })
    }
    const deleteOrder = (id) =>{
        Axios.delete(`order/delete?id=${id}`)
        .then(res =>{
          console.log("Record deleted successfully");
          console.log(res);
          loadOrderList();
        })
        .catch(err =>{
          console.log("Error deleting order");
          console.log(err);
        })
       }
      const allOrders = order.map((order,index)=>(
        <tr key={index}>
            <Order {...order}
                editView={editView}
                deleteOrder={deleteOrder}
            ></Order>
    
        </tr>
      ))
    
  return (
    <div>
    <h1>Order List</h1><div>
        <table className="table table-striped">
            <tbody>
                <tr>
                  <th>Request</th>
                  <th>Problem</th>
                  <th>Order Status</th>
                  <th>amount</th>

                  <th>Edit</th>
                  <th>Delete</th>

                </tr>
                {allOrders}
            </tbody>
        </table>
    </div>
   
   {(!IsEdit) ?
   <OrderCreateForm addOrder={addOrder}></OrderCreateForm>
    :
   <OrderEditForm key={currentOrder._id} order={currentOrder} updateorder={updateorder}></OrderEditForm>
    
}
  </div>
  )
}



