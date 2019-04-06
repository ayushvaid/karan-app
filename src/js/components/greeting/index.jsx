import React, { Component } from 'react';
import DisplayName from './DisplayName.jsx'

export default
class Greeting extends Component{
    constructor(props){
        super(props);
        this.state =  {
            name: "Ayush",
            diplayName: false
        };
    }
    render(){
        return <DisplayName name={this.state.name} phone='+91 8826723274' fax='+91 8826723274'/>
    }
}