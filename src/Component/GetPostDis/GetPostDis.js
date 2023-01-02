import React, { useEffect, useState } from "react";
function GetPostDis(props){
    let [state,setState]=React.useState("");
    useEffect(()=>{
      fetch("https://api64.ipify.org/?format=json").then((res)=>{
        // console.log(res.json());
        return   res.json();
      }).then((data)=>{
        console.log(data);
        setState(data.ip)
        console.log(data);
      })
    })
return(
      <div>
        <p>{state}</p>
      </div>
)
}
export default GetPostDis;