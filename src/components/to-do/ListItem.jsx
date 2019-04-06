import React from "react";
import styled from "styled-components";

const ListItem = (props) => {
    return <li key={props.itemName}> Item - {props.itemName}</li>
}
export default ListItem;