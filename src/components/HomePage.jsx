import React from 'react'
import ServiceDetails from './services/ServiceDetails'


export default function HomePage() {
    return (
        <>
<main>
<div class="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-dark">
    <div class="col-lg-8 px-0">
   {/*<img src='../Maintenance4.png' alt='pic' class="float-end" width="140" height="140"></img>*/} 
      <h1 class="display-4 fst-italic text-light"  style={{textAlign:"center"}}>Title of a longer featured blog post</h1>
      <p class="lead my-3 text-light" style={{alignItems:"center"}}>Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
      <p class="lead mb-0 text-light"><a href="category/index" class=" text-light fw-bold " >Continue reading...</a></p>
      
    </div>
    
  </div>

<div class="container marketing">
    <div class="row">
      <div class="col-lg-4">
        <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-warning-color)"/></svg>
        <h2 class="fw-normal">Heading</h2>
        <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
        <p><a class="btn btn-warning" href="#">View details &raquo;</a></p>
      </div>
      <div class="col-lg-4">
        <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-warning-color)"/></svg>
        <h2 class="fw-normal">Heading</h2>
        <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
        <p><a class="btn btn-warning" href="#">View details &raquo;</a></p>
      </div>
      <div class="col-lg-4">
        <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-warning-color)"/></svg>
        <h2 class="fw-normal">Heading</h2>
        <p>And lastly this, the third column of representative placeholder content.</p>
        <p><a class="btn btn-warning" href="#">View details &raquo;</a></p>
      </div>
    </div>

   </div>
   
</main>
   



</>
      )
}
