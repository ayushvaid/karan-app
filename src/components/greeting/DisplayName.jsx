import React from "react";
import styled from "styled-components";

const RenameButton = styled.button`
    color: blue;
    font-size: 20px;
    background-color: #4CAF50;
`;

const DisplayName = (props) => {
    return  <div> 
        <div>Name - {props.name}</div> 
        <div>Phone - {props.phone}</div>
        <div>Fax - {props.fax}</div>
        <br></br>
        <input type="text" onChange={props.getChangedName}></input>
        <RenameButton onClick={props.changeName}>ChangeName</RenameButton> 
    </div>
}

export default DisplayName;