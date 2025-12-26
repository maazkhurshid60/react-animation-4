import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  //Adding this line is for Git Activity
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
