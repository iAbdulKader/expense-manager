import React from 'react'
import ReactDOM from 'react-dom'
import './styles/global.css'
import App from './App'
import GlobalProvider from "./context/GlobalContext"

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
