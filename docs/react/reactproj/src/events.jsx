import React from 'react';
import ReactDOM from 'react-dom';
class EventTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: ''};

    this.UpdateName = this.UpdateName.bind(this);
    this.testclick = this.testclick.bind(this);
  }

  UpdateName(event) {
    this.setState({name: event.target.value});
  }

  testclick(event) {
    alert("The name entered is: "+ this.state.name);
  }

  render() {
    return (
      <div>
         Enter Your Name:<input type="text" value={this.state.name} onChange={this.UpdateName} /><br/>
        <h2>{this.state.name}</h2>
        <input type="button" value="Click Here" onClick={this.testclick} />
      </div>
    );
  }
}

export default EventTest;
