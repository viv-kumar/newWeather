import React, { useEffect, useState } from "react";

import "../GetPost/GetPost.css";
// import GetData from "../GetData/GetData";

function GetPost(props) {
  // let newArr=[];
  let ans = 1;
  console.log(props.pin);
  let post = props.pin;
  console.log(typeof post);
  let [state, setState] = React.useState([]);
  function postoffice() {
    console.log(ans);
    ans = 2;
    console.log(ans);
    fetch(`https://api.postalpincode.in/pincode/${props.pin}`)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setState(response[0].PostOffice);
      })
      .catch((err) => console.error(err));
  }
  // console.log(ans);

  function filterfun() {
    let valuee = document.getElementById("filter").value;
    // state=state.filter((ele)=>{
    //   return ele.Name===valuee;
    // })
    console.log(valuee);

    let newArr = state.filter((ele) => {
      return ele.Name === valuee;
    });
    console.log(newArr);
    setState(newArr);
  }

  // window.onload=postoffice()
  // postoffice()
  // setMsg(state[0].Message)
  console.log(post);
  console.log(state);

  return (
    <div>
      {console.log(props.pin)}
      <p>
        <h6>Message:</h6>Number of Pincode found(s):{state.length}
        <button onClick={postoffice} id="post">
          SeeHere(click)
        </button>
      </p>
      <input placeholder="Filter" id="filter"></input>
      <button id="click" onClick={filterfun}>
        click to Filter
      </button>
      {state.length>=1 ? (
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
      ) : (
        (<h2>...Loading</h2>)
      )}
    </div>
  );
}
export default GetPost;
