import React from 'react'
import ReactDOM from 'react-dom'
import "@babel/polyfill";

import App from './App.js'

console.log("hello World");

ReactDOM.render(<App />, document.getElementById('root'))

module.hot.accept();
