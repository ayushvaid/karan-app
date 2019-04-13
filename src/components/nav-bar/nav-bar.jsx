import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const NavBar = (props)=>{
    return <>
        <ul>
            <li> <Link to="/"> HOME </Link> </li>
            <li> <Link to="/to-do-list"> ToDoList </Link> </li>
            <li> <Link to="/greetings"> Greeting </Link> </li>
        </ul>
    </>
}

export default NavBar;