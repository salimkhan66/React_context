import { AuthContext } from "../ContextProvider/ContextProvider";
import "./App.css";
import React, { useContext } from 'react'
import Counter from "./componet/Counter";
import Home from "./componet/Home";

function App() {

  
   const contextData= useContext(AuthContext) 

  return (
    <div>
      <h1>Current Date</h1>
      <p>{contextData.getDate()}</p>
    
    </div>
  );
}

export default App;
