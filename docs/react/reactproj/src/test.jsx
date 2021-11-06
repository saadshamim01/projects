import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React. Component{
    constructor(props){
        super(props);
        this.state = {
            message: "Hello World"
        }
    }
    render (){
        return <h1> {this.state.message}</h1>
    }
}


