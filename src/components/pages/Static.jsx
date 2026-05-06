import React, {useState} from "react";
import DataList from "../views/local/DataList";
import DataChart from "../views/local/DataChart";
import Foot from "../views/global/Foot";


const Static =(props)=>{
    const {statDate} = props;
    const [isShowChart, setShowChart] = useState(true)
    return(
        <React.Fragment>
            <DataList setShow = {setShowChart} $data = {statDate}/>
            <DataChart show = {isShowChart} data = {statDate}/>
            <Foot/>
            
        </React.Fragment>
    );
}

export default Static;