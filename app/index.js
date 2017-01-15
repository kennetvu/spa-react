import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
// Entry file
require('bootstrap/dist/css/bootstrap.css');

console.log('Hello world from client!!');

ReactDOM.render(<App />, document.getElementById('root'));
