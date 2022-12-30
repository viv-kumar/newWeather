import React, { useEffect } from "react";
import "./GetIp.css"
import GetData from "../GetData/GetData";
function GetIp(){
    const [state,setState]=React.useState("");
    const [check,setCheck]=React.useState(false);
     useEffect(()=>{
        fetch("https://api.ipify.org?format=json").then((res)=>res.json()).then((data)=>(setState(data.ip)))
     })
     function getfun(){
        setCheck(true)
     }
     
    return (
      <div>
        {check ? (
          <GetData info={state}/>
        ) : (
          <div id="ip-box">
            <h2>My Personal Ip Addrres is:{state}</h2>
            <button onClick={getfun}>GetData</button>
          </div>
        )}
      </div>
    );
}
export default GetIp;