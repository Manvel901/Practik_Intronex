
import React, {useState} from "react";
import {Routes, Route} from "react-router-dom";
import Head from "../src/components/views/global/Head";
import Main from "./components/pages/Main";
import Static from "./components/pages/Static";
import Plan from "./components/pages/Plan";

function App() {
 
  const [data, setData] = useState([]);

  return (
   <React.Fragment>
      <Head></Head>

    <Routes>
      <Route
      path="/main"
      element= {<Main action = {setData}/>}>
      </Route>

      <Route 
      path="/stat/:viewType"
      element = {<Static statDate= {data}/>}
      >
      </Route>

      <Route
      path="/plan"
      element={<Plan/>}>
      </Route>

      <Route
      path={'*'}
      element={<Main action = {setData}/>}>
      </Route>
      
    </Routes>

   </React.Fragment>
  );
}

export default App;
