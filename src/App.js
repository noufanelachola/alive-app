import { useState } from 'react';
import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import Register from "./Components/Register/Register";
import LogIn from './Components/Register/LogIn';

function App() {
  // Route to store the routes for pages
  const [route,setRoute] = useState("logIn");

  // function to change the route
  const changeRoute = (newRoute) => {
    setRoute(newRoute);
  }

  return (
    <div className="App">
      <NavBar/>
      {
        route === "logIn"?
          <LogIn changeRoute={changeRoute} /> :
          <Register changeRoute={changeRoute} />
      }
    </div>
  );
}

export default App;
