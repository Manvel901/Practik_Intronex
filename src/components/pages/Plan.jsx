import React, { useEffect} from "react";
import { useParams, useSearchParams } from "react-router-dom";




const Plan =()=>{

    const {demoParam} = useParams()
    const [params, setParams] = useSearchParams()

    useEffect(()=> {
        console.log(demoParam)
        setParams({userName:"Markinio", userAge:"21"})

    },[demoParam, setParams]
    )
// const [count, setCount]= useState(0);
// const [data, setData]= useState({name:'nik', age:'22'});

//  const increment = ()=>{
//    setCount(count+1);
//  }

//  const updateData =() =>{
//     setData({...data, age:"67"});
//  }

    return(
        <React.Fragment>
            
            

             <span style={{display: "block", marginTop: "100px", marginLeft: "100px"}}> {"имя пользователя = "} {params.get("userName")}</span> 

             <span style={{display: "block", marginTop: "50px", marginLeft: "100px"}}> {"возраст пользователя = "} {params.get("userAge")}</span> 
                {/* <button style={{display:"block", marginLeft:"100px", marginTop:"30px"}} onClick={increment}>{"Прибавить"}</button>

                <span style={{display: "block", marginTop: "40px", marginLeft: "100px"}}>{data.name}</span>
                <span style={{display: "block", marginTop: "10px", marginLeft: "100px"}}>{data.age}</span>
                <button style={{display:"block", marginLeft:"100px", marginTop:"30px"}} onClick={updateData}>{"Изменить"}</button> */}
        

        </React.Fragment>
    );
}

export default Plan;