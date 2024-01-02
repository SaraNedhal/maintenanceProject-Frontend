import React from 'react'
import { Link } from 'react-router-dom'
import RequestList from './request/RequestList'
import OrderList from './Order/OrderList'
export default function HomePage() {
    return (
        <><div >
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content--between py-9 mb-7 border-bottom bg-warning">
            <div className="col-md-3 mb-2 mb-md-0">
                <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
                    <img src='../maintence5.png' alt="logo" width="90" height="70"  />
                </a>
            </div>

            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li><a href="/" className="nav-link px-2 link-secondary">Home</a></li>
                <li><a href="category/index" className="nav-link px-2  link-light">Category</a></li>
        
            </ul>

            <div className="col-md-3 text-end">
                <button type="button" className="btn btn-outline-light me-2" >Login</button>
                <button type="button" className="btn btn-outline-light">Sign-up</button>
            </div>
        </header>
        
    </div>
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
        <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg>
        <h2 class="fw-normal">Heading</h2>
        <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
        <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
      </div>
      <div class="col-lg-4">
        <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg>
        <h2 class="fw-normal">Heading</h2>
        <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
        <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
      </div>
      <div class="col-lg-4">
        <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg>
        <h2 class="fw-normal">Heading</h2>
        <p>And lastly this, the third column of representative placeholder content.</p>
        <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
      </div>
    </div>

   </div>
   
</main>
   




    <div className="b-example-divider">
            <footer className=" container py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Features</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Pricing</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">FAQs</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About</a></li>
                </ul>
                <p className="text-center text-body-secondary">&copy; 2023 Company, Inc</p>
            </footer>
            
          </div>
        </>   
       
      )
}
