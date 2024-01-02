import React from 'react'
import { Link } from 'react-router-dom'
import RequestList from './request/RequestList'
import OrderList from './Order/OrderList'
export default function HomePage() {
    return (
        <><div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <div className="col-md-3 mb-2 mb-md-0">
                <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
                    <img src='../maintenance.png' alt="logo" width="40" height="32" />
                </a>
            </div>

            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li><a href="#" className="nav-link px-2 link-secondary">Home</a></li>
                <li><a href="#" className="nav-link px-2">Features</a></li>
                <li><a href="#" className="nav-link px-2">Pricing</a></li>
                <li><a href="#" className="nav-link px-2">FAQs</a></li>
                <li><a href="#" className="nav-link px-2">About</a></li>
            </ul>

            <div className="col-md-3 text-end">
                <button type="button" className="btn btn-outline-primary me-2">Login</button>
                <button type="button" className="btn btn-primary">Sign-up</button>
            </div>
        </header>
        
    </div>
    <div className='container'>
    {/* <CategoryList></CategoryList> */}
    {/*<RequestList></RequestList>
    <OrderList></OrderList>*/}

    </div>
    



    <div className="b-example-divider"></div>
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
        </>    
      )
}
