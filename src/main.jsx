import React from 'react'
import ReactDOM from 'react-dom/client'
import ApiFetch from './ApiFetch.jsx'
import App from './App.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApiFetch/>
    <App />
  </React.StrictMode>,
)