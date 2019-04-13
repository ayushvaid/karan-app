import React, { Component } from 'react';
import DisplayName from './DisplayName.jsx'

export default
class Greeting extends Component{
    changedName=''
    constructor(props){
        super(props);
        this.state =  {
            name: "Ayush"
        };
    }
    getChangedName = event =>{
        console.log("input field changed")
        this.changedName = event.target.value;
    }
    changeName = () =>{
        console.log("button click")
        debugger;
        this.setState({name: this.changedName});
    }
    render(){
        console.log("Entered Render")
        return <div>
            <DisplayName 
            name={this.state.name} 
            phone='+91 8826723274' 
            fax='+91 8826723274' 
            getChangedName={this.getChangedName}
             changeName={this.changeName}/> 
        </div>
    }
}