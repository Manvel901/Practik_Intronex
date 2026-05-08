import React, {useState} from "react";
import { useParams } from "react-router-dom";
import DataList from "../views/local/DataList";
import DataChart from "../views/local/DataChart";
import Foot from "../views/global/Foot";


const Static =(props)=>{
    const {statDate} = props;
    const [isShowChart, setShowChart] = useState(true)
    const {viewType} = useParams();
    return(
        <React.Fragment>
            <DataList viewType = {viewType} setShow = {setShowChart} $data = {statDate}/>
            <DataChart viewType = {viewType} show = {isShowChart} data = {statDate}/>
            <Foot/>
            
        </React.Fragment>
    );
}

export default Static;