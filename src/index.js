import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom'; 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <div >
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content--between py-9 mb-7 border-bottom bg-warning">
            <div className="col-md-3 mb-2 mb-md-0">
                <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
                    <img src='../maintence5.png' alt="logo" width="90" height="70"  />
                </a>
            </div>

            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li><a href="/" className="nav-link px-2 link-secondary">Home</a></li>
                <li><a href="category/index" className="nav-link px-2  link-dark">Category</a></li>
        
            </ul>

            <div className="col-md-3 text-end">
              <button type="button" className="btn btn-dark"><a href="/signin" className="nav-link px-2  link-light">Login</a></button> &nbsp;

                <button type="button" className="btn btn-dark"><a href="/signup" className="nav-link px-2  link-light">SignUp</a></button>
            </div>
        </header>
        
    </div>
    <App />
    
    <div className="b-example-divider">
            <footer className=" container py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    
                 
                </ul>
                <p className="text-center text-body-secondary">&copy; 2023 Company, Inc</p>
            </footer>
            
          </div>
        
       
    </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
