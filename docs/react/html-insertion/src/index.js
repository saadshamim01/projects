var React = require("react");
var ReactDOM = require("react-dom");

const FIRSTNAME = "Saad";
const currentDate = new Date();
console.log(currentDate);
const YEAR = currentDate.getFullYear();

ReactDOM.render(
  <div>
    <p>Created by {FIRSTNAME}</p>
    <p>Copyright {YEAR}</p>
  </div>,
  document.getElementById("root")
);
