import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
// components imports
import Signin from "./components/user/Signin";
import Signup from "./components/user/Signup";
import CategoryList from "./components/Category/CategoryList";
import HomePage from "./components/HomePage";
import ServicesList from "./components/services/ServicesList";
import Userprofile from "./components/user/userProfile";
import UserProfileEditForm from "./components/user/userProfileEditForm";
import CategoryCreateForm from "./components/Category/CategoryCreateForm";
import ServicesCreateForm from "./components/services/ServicesCreateForm";
import RequestList from "./components/request/RequestList";
import RequestCreateForm from "./components/request/RequestCreateForm";
import OrderList from "./components/Order/OrderList";
import OrderCreateForm from "./components/Order/OrderCreateForm";
// import ServiceDetails from "./components/services/ServiceDetails";

function App() {
  //check if user authenticated
  const [isAuth, setIsAuth] = useState(false);
  //them store user in state
  const [user, setUser] = useState({});
  const [userDetails,setUserDetails]=useState()

  const [isSignedup, setIsSignedup] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const navigate = useNavigate();

  const header = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };
  useEffect(() => {
    const user = getUser();
    console.log(user);
    if (user) {
      setIsAuth(true);
      setUser(user);
      Axios.get(`auth/user/profile?id=${user.id}`)
      .then(res=>{
        setUserDetails(res.data.user);
      })
      .catch(err=>{
        console.log(err);
      })
    } else {
      localStorage.removeItem("token");
      setIsAuth(false);
      setUser(null);
    }
  }, []);

  useEffect(() => {
    if (user != null && typeof user.id != "undefined") {
      userShowGet(user.id);
    }
  }, [user]);
  const registerHandler = (user) => {
    // user has all the user info -> firstname and lastname, email address, password
    //passing user object with post method
    Axios.post("auth/signup", user)
      .then((res) => {
        console.log(res);
        setIsSignedup(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const loginHandler = (credentials) => {
    Axios.post("auth/signin", credentials)
      .then((res) => {
        console.log(res.data.token);
        let token = res.data.token;

        if (token != null) {
          // if the the token is not null then store the token in the user browser local storage as a key value pair . key: token , value:token value
          localStorage.setItem("token", token);
          const user = getUser();
          console.log(user);
          //if  else the user is not found then setIsAuth is false and set user will equal null
          user ? setIsAuth(true) : setIsAuth(false);
          user ? setUser(user) : setUser(null);
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
        console.log(error);
        setIsAuth(false);
        setUser(null);
      });
  };
  const userShowGet = (id) => {
    Axios.get(`/auth/user/profile?id=${id}`)
      .then((res) => {
        console.log();
        let user = res.data.user;
        console.log("the user info 11111: ", user);
        // setIsEdit(true)
        setCurrentUser(user);
      })
      .catch((err) => {
        console.log("Error Show User Information");
        console.log(err);
      });
  };

  const editUserget = (id) => {
    Axios.get(`/auth/user/edit?id=${id}`)
      .then((res) => {
        console.log(res.data.user);
        console.log("Loaded User edit information");
        let user = res.data.user;
        // setIsEdit(true)
        setCurrentUser(user);
      })
      .catch((err) => {
        console.log("Error loading User edit information");
        console.log(err);
      });
  };

  const userProfileUpdate = (userProfile) => {
    Axios.put("/auth/user/update", userProfile, header)
      .then((res) => {
        console.log("User Profile updated sucessfully ");
        console.log(res);
      })
      .catch((err) => {
        console.log("err from userProfileUpdate function");
        console.log(err);
      });
  };

  const getUser = () => {
    const token = getToken();
    // if tokem exist then decoded else return null
    return token ? jwtDecode(token).user : null;
  };

  const getToken = () => {
    const token = localStorage.getItem("token");
    return token;
  };

  const onLogoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    setIsAuth(false);
    setUser(null);
  };

  console.log("the user info ", user);

  return (
    <div className="App">
       <div >
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content--between py-9 mb-7 border-bottom bg-warning">
            <div className="col-md-3 mb-2 mb-md-0">
                <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
                    <img src='../maintence5.png' alt="logo" width="90" height="70"  />
                </a>
            </div>

           
           {isAuth ? (
            <>
             <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
             <li><Link to="/" className="nav-link px-2 link-secondary">Home</Link></li>
             <li><Link to="category/index" className="nav-link px-2  link-dark">Category</Link></li>
             <li><Link to="service/index" className="nav-link px-2  link-dark">Services</Link></li>
             <li><Link to="request/index" className="nav-link px-2  link-dark">Requests</Link></li>
             <li><Link to="order/index" className="nav-link px-2  link-dark">Orders</Link></li>

     
         </ul>

         <div className="col-md-3 text-end">
           <button type="button" className="btn btn-dark"><Link to="/logout" onClick={onLogoutHandler} className="nav-link px-2  link-light">Logout</Link></button> &nbsp;
           <button type="button" className="btn btn-dark"><Link to="/user/profile" className="nav-link px-2  link-light">Profile</Link></button>
             <button type="button" className="btn btn-dark"><Link to="/signup" className="nav-link px-2  link-light">SignUp</Link></button>
         </div>
         </>
           ):(
            <>
            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><Link to="/" className="nav-link px-2 link-secondary">Home</Link></li>
            <li><Link to="category/index" className="nav-link px-2  link-dark">Category</Link></li>
            <li><Link to="service/index" className="nav-link px-2  link-dark">Services</Link></li>
             </ul>
             <div className="col-md-3 text-end">
             <button type="button" className="btn btn-dark"><Link to="/signin" className="nav-link px-2  link-light">Login</Link></button> &nbsp;
              <button type="button" className="btn btn-dark"><Link to="/signup" className="nav-link px-2  link-light">SignUp</Link></button>
           </div>
           </>
           )}
           
        </header>
        
    </div>
    

      <Routes>
        {/* if user is authenticated then go to home page which is authorlist else if user is not authenticated (not logged in) then display signin page */}

        <Route path="/" element={ isAuth ? <HomePage /> : <Signin login={loginHandler}></Signin>  } ></Route>
        <Route  path="/signup" element={isSignedup ? ( <Signin login={loginHandler}></Signin>) : ( <Signup register={registerHandler} />) } ></Route>
        <Route path="/signin" element={  isAuth ? (  <HomePage user={user}></HomePage>  ) : (  <Signin login={loginHandler}></Signin>)  } ></Route>
        <Route path="/category/index" element={ ( <CategoryList user={user}  />)}  /> 
         <Route  path="/category/add" element={ isAuth ? ( <CategoryCreateForm user={user} />) : (<Signup register={registerHandler} /> )    }></Route>

        <Route  path="/service/index" element={  (user && userDetails?<ServicesList user={userDetails} />:<HomePage /> )} ></Route>

        <Route path="/service/add" element={isAuth ? ( <ServicesCreateForm user={user} /> ) : (<Signup register={registerHandler} />) } ></Route>
       
       <Route path="/request/index" element={isAuth? <RequestList user={currentUser}/> : <Signup register={registerHandler}/>}></Route>
      <Route path="/request/add/:id" element={isAuth? <RequestCreateForm user={currentUser}/> : <Signup register={registerHandler}/>}></Route>
     <Route path="/order/index" element={isAuth? <OrderList user={currentUser}/> : <Signup register={registerHandler}/>}></Route>
       
 <Route path="/user/profile" element={isAuth? <Userprofile user={currentUser} editView={editUserget} updateProfile={Userprofile}></Userprofile> : <Signup register={registerHandler}/>}></Route>
   {/* <Route path="/service/detail" element={isAuth? <ServiceDetails user={user}/> : <Signup register={registerHandler}/>}></Route> */}
    <Route path="/user/profile/edit" element={isAuth? <UserProfileEditForm user={currentUser} updateProfile={userProfileUpdate}/>: <Signup register={registerHandler}/>}></Route>

        {/*   <Route path="/service/detail" element={isAuth? <ServiceDetails user={user}/> : <Signup register={registerHandler}/>}></Route> */}
        <Route
          path="/user/profile/edit"
          element={
            isAuth ? (
              <UserProfileEditForm
                user={currentUser}
                updateProfile={userProfileUpdate}
              />
            ) : (
              <Signup register={registerHandler} />
            )
          }
        ></Route>
        <Route
          path="/order/add"
          element={
            isAuth ? (
              <OrderCreateForm
                user={currentUser}
                updateProfile={userProfileUpdate}
              />
            ) : (
              <Signup register={registerHandler} />
            )
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
