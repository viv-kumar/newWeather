import React, { useEffect } from "react";

import "../GetPost/GetPost.css";

function GetPost(props) {
  // let newArr=[];
  let post = props.info;
  console.log(post);
  const [state, setState] = React.useState([]);
  useEffect(() => {
    fetch(`https://api.postalpincode.in/pincode/${800001}`)
      .then((res) => res.json())
      .then((data) => setState(data[0].PostOffice));
      // newArr=state;
    // console.log(newArr);
    
  },[]);
  // setMsg(state[0].Message)
  console.log(post);
  console.log(state);
 
 return (
   <div>
    <p><h6>Message:</h6>Number of Pincode found(s):{state.length}</p>
     <div id="post-box">
       {/* <p>Number of pincode(s) found:{state}</p> */}
       {/* {newArr.length}; */}
       {console.log(state)}
       {state.map((ele, index) => {
         return (
           <div>
             <p>Name:{ele.Name}</p>
             <p>Branch Type:{ele.BranchType}</p>
             <p>Delivery Status:{ele.DeliveryStatus}</p>
             <p> District:{ele.District}</p>
             <p>Division:{ele.Division}</p>
           </div>
         );
       })}
     </div>
   </div>
 );
}
export default GetPost;
