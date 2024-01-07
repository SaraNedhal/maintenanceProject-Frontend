import React from 'react'
import ServiceDetails from './services/ServiceDetails'


export default function HomePage() {
    return (
        <>
<main>
<div class="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-dark">
    <div class="col-lg-8 px-0">
   {/*<img src='../Maintenance4.png' alt='pic' class="float-end" width="140" height="140"></img>*/} 
      <h1 class="display-4 fst-italic text-light"  style={{textAlign:"left"}}>FixIt</h1>
      <p class="lead my-3 text-light" style={{textAlign:"left"}}>FixIt is comprehensive maintenance platform, which includes repairs for your home, cars,electronics,and furniture</p>
      <p class="lead mb-0 text-light" style={{textAlign:"left"}}><a href="category/index" class=" text-light fw-bold " >Category</a></p>
      
    </div>
    
  </div>

<div class="container marketing">
    <div class="row">
      <h1>Most Recent Services</h1>
      <div class="col-lg-4">
      <img src="../panting.png" alt="Image 1" width="140" height="140" class="bd-placeholder-img rounded-circle"/>
        <h2 class="fw-normal">painting walls</h2>
        <p>Professional painting services provide a stress-free way to change your area. Experts handle everything from preparation to finishing touches, delivering a faultless result. They assess, advise on color, and thoroughly prepare surfaces to ensure a precise paint application. Their skill leaves walls vivid and refreshed, providing a hassle-free method to refresh your home.</p>
       
      </div>
      <div class="col-lg-4">
      <img src="../oil_chang.png" alt="Image 1" width="140" height="140" class="bd-placeholder-img rounded-circle"/>
        <h2 class="fw-normal">Oil Change</h2>
        <p>Oil changes are important car maintenance operations that entail draining old oil, replacing the oil filter, and refilling the engine with new, appropriate-grade oil. This routine maintenance guarantees optimum lubrication, reduces friction, and maintains the engine's performance and longevity, which is an important part of vehicle care.</p>
       
      </div>
      <div class="col-lg-4">
      <img src="../phone.png" alt="Image 1" width="140" height="140" class="bd-placeholder-img rounded-circle"/>
        <h2 class="fw-normal">format phone</h2>
        <p>Formatting a phone implies restoring it to its factory settings and erasing all data and settings. This method provides a fresh start by deleting everything on the device. It's frequently done to troubleshoot issues, prepare for selling the phone, or simply to start over. Users commonly open the settings, select "Reset" or "Factory Reset," and approve the action, but it is critical to back up data first to avoid irreparable loss.</p>
      
      </div>
    </div>

   </div>
   
</main>
   



</>
      )
}
