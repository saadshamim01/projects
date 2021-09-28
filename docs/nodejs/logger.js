
// We will get error
//Behind the scene, function has declaration
// function (exports, require, module, __filename, __dirname)
var x =;

var url = 'http://mylogger.io/log';

function log(message) {

    // Send an HTTP request
    console.log(message);
}

/// Exporting
module.exports = log;

