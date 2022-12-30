import React, { useEffect } from "react";
import GetPost from "../GetPost/GetPost";

import "../GetData/GetData.css"
function GetData(props){
   const date=Date()
   let ip=props.info;
   const [state,setState]=React.useState([]);
   
   useEffect(() => {
     fetch(`http://ipinfo.io/${props.info}?token=40768a684f0f55`)
       .then((res) => res.json())
       .then((data) => setState(data));
   //   console.log(state);
   }, [])
  
    return (
      <div>
        <div>
          {console.log(state)};<h2>My public ip address is:{props.info}</h2>
          <div id="child-ip">
            <h5>LAT:{state.loc}</h5>
            <h5>City:{state.city}</h5>
            <h5>Organisation:{state.org}</h5>
            <h5>Long:{state.loc}</h5>
            <h5>Region:{state.region}</h5>
            <h5>Hostname:{props.info}</h5>
          </div>
          <div class="mapouter">
            <div class="gmap_canvas">
              <iframe
                class="gmap_iframe"
                id="gmap_canvas"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src={`https://maps.google.com/maps?q=${state.city}&t=&z=14&ie=UTF8&iwloc=B&output=embed`}
              ></iframe>
            </div>
          </div>
        </div>
        <div id="last-div">
          <h5>Time Zone:{state.timezone}</h5>
          <h5>
            Date And Time:{date}
          </h5>
          <h5>Pincode:{state.postal}</h5>
        </div>
        <div>
          <GetPost info={state.postal}/>
        </div>
      </div>
    );
}
export default GetData;