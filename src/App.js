import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Signin from "./components/user/Signin";
import { Routes, Route, Link } from "react-router-dom";
import Axios from "axios";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import Signup from "./components/user/Signup";
import CategoryList from "./components/Category/CategoryList";
import HomePage from "./components/HomePage";
import ServicesList from "./components/services/ServicesList";

import CategoryCreateForm from "./components/Category/CategoryCreateForm";

function App() {
  //check if user authenticated
  const [isAuth, setIsAuth] = useState(false);
  //them store user in state
  const [user, setUser] = useState({});

  const [isSignedup, setIsSignedup] = useState(false);
  useEffect(() => {
    const user = getUser();
    console.log(user);
    if (user) {
      setIsAuth(true);
      setUser(user);
    } else {
      localStorage.removeItem("token");
      setIsAuth(false);
      setUser(null);
    }
  }, []);
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
        }
      })
      .catch((error) => {
        console.log(error);
        console.log(error);
        setIsAuth(false);
        setUser(null);
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

  return (
    <div className="App">
      {/* <nav>
         <HomePage></HomePage>
        <Link to="/">Home</Link>
        <Link to="/signin">Signin</Link>
        <Link to="/signup">Signup</Link>
     <HomePage></HomePage>
  
      </nav>

      <Signin /> */}
      <nav>
        {isAuth ? (
          <div>
            {/* &nbsp; non breakable space -> add a space between the links */}
            <Link to="/">Home</Link> &nbsp;
            <Link to="/logout" onClick={onLogoutHandler}>
              Logout
            </Link>
            &nbsp;
            <Link to="/category/index">Category</Link>&nbsp;
          </div>
        ) : (
          // else if the user is not authenticated then show this nav bar
          <div>
            {/* &nbsp; non breakable space -> add a space between the links */}
            <Link to="/">Home</Link> &nbsp;
            <Link to="/signup">Signup</Link> &nbsp;
            <Link to="/signin">Signin</Link> &nbsp;
            <Link to="/category/index">Category</Link> &nbsp;
          </div>
        )}
      </nav>

      <Routes>
        {/* if user is authenticated then go to home page which is authorlist else if user is not authenticated (not logged in) then display signin page */}
        <Route
          path="/"
          element={
            isAuth ? <HomePage /> : <Signin login={loginHandler}></Signin>
          }
        ></Route>
        <Route
          path="/signup"
          element={
            isSignedup ? (
              <Signin login={loginHandler}></Signin>
            ) : (
              <Signup register={registerHandler} />
            )
          }
        ></Route>
        <Route
          path="/signin"
          element={
            isAuth ? (
              <HomePage user={user}></HomePage>
            ) : (
              <Signin login={loginHandler}></Signin>
            )
          }
        ></Route>
        <Route
          path="/category/index"
          element={
            isAuth ? (
              <CategoryList user={user}  />
            ) : (
              <Signup register={registerHandler} />
            )
          }
        ></Route>

        <Route
          path="/category/add"
          element={
            isAuth ? (
              <CategoryCreateForm user={user} />
            ) : (
              <Signup register={registerHandler} />
            )
          }
        ></Route>
      </Routes>

        <Routes>
          {/* if user is authenticated then go to home page which is authorlist else if user is not authenticated (not logged in) then display signin page */}
          <Route path="/" element={isAuth ?<HomePage /> :<Signin login={loginHandler}></Signin>}></Route>
          <Route
            path="/signup"
            element={isSignedup ? <Signin login={loginHandler}></Signin> : <Signup register={registerHandler}/>}
          ></Route>
          <Route
            path="/signin"
            element ={ isAuth ? <HomePage user={user}></HomePage> : <Signin login={loginHandler}></Signin>}
          ></Route>
          <Route path="/category/index" element={isAuth? <CategoryList user={user}/> :  <Signin login={loginHandler}></Signin>}></Route>
        </Routes>
      {/* <Signup/> */}
    </div>

  );
}

export default App;
