
import React, {useState} from "react";
import Head from "../src/components/views/global/Head"
import Main from "./components/pages/Main";
import Static from "./components/pages/Static";

function App() {
  const [showPage, setShowPage] = useState("main");
  const [data, setData] = useState([]);

  return (
   <React.Fragment>
    <Head action ={setShowPage}></Head>
    {showPage === "main" ?
     <Main action = {setData}></Main> :
     <Static statDate= {data} ></Static> }
   </React.Fragment>
  );
}

export default App;
