import React from 'react';
import ReactDOM from 'react-dom';

const H1Style={
    color:'red'
};

function Hello(props){
    return <h1 style={H1Style}>{props.msg}</h1>
}

const Hello_comp = <Hello msg = "Hello World!" />

export default Hello_comp