import React from "react";
import styled from "styled-components";
import ListItem from "./ListItem.jsx"

const List = (props) => {
    return  <div>
        <h1> ToDo List </h1>
        <br></br>
        <input type="text" onChange={props.itemNameChanged} value={props.currentItemName}></input>
        <button onClick={props.addItem}>Add Item</button>
        <ol>
            {props.items.map(i => <ListItem itemName={i}>{i}</ListItem>)}
        </ol>
    </div>
}

export default List;