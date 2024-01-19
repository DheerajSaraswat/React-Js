import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const newElement = React.createElement(
  'a',
  {href: 'https://www.youtube.com', target: '_blank'},
  'Visit Youtube'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   {newElement}                  // {} braces helps us to inject evaluated js and that's ehy they are called evaluated expression
  // </React.StrictMode>,

  // newElement

  // <React.StrictMode>
  //     App ()                     // It will also work but it will create issues with optimissation
  // </React.StrictMode>
  
  <React.StrictMode>
      <App />
  </React.StrictMode>
)
