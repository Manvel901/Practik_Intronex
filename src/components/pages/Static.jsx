import React from "react";
import DataList from "../views/local/DataList";


const Static =(props)=>{
    const {statDate} = props;
    return(
        <React.Fragment>
            <DataList $data = {statDate}/>
            
        </React.Fragment>
    );
}

export default Static;