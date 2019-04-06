import React, { Component } from 'react';
import ListItem from './ListItem.jsx'
import List from './List.jsx'

export default
class ToDo extends Component{
    constructor(props){
        super(props);
        this.state =  {
            itemCount: this._itemCount,
            items: []
        };
    }

    //listening to textfield
    itemNameChanged = event =>{
        this.setState({currentItemName: event.target.value})       
    }

    //button click
    addItem = () => {
        this.setState({
            itemCount: this.state.itemCount+1,
            items: [...this.state.items, this.state.currentItemName],
            currentItemName: ""
        })
    }

    render(){
        return <div>
            <List itemNameChanged={this.itemNameChanged} 
            addItem={this.addItem} 
            items={this.state.items} 
            currentItemName={this.state.currentItemName}></List>
        </div>
    }
}
