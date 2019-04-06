import React from "react";
const DisplayName = (props) => {
    return  <div> 
        <div>Name - {props.name}</div> 
        <div>Phone - {props.phone}</div>
        <div>Fax - {props.fax}</div>
    </div>
}

export default DisplayName