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
