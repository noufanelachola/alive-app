import { useEffect, useState } from 'react';
import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import Register from "./Components/Register/Register";
import LogIn from './Components/Register/LogIn';

function App() {

  // url
  const url = "http://localhost:3000";

  // Route to store the routes for pages
  const [route,setRoute] = useState("logIn");

  // Route to store user details
  const [user,setUser] = useState({
    name : "",
    username : "",
    status : ""
  })

  // making setStatus to run after user name changes
  useEffect(() => {
    if (user.username) {
      setStatus();
    }
  }, [user.username]);

  // function to change the route
  const changeRoute = (newRoute) => {
    setRoute(newRoute);
  }

  // function to set the status user in state
  const setStatus = () => {
    fetch(`${url}/getStatus?username=${user.username}`)
      .then(response => response.json())
      .then(status => console.log(status))
      .catch(error => console.log("Error fething status"));
      
  }

  return (
    <div className="App">
      <NavBar/>
      { route === "logIn" && <LogIn url={url} changeRoute={changeRoute} setUser={setUser} /> }
      { route === "register" && <Register url={url} changeRoute={changeRoute} /> }
    </div>
  );
}

export default App;
