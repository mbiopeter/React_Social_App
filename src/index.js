import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import { DarkModeContextProvider } from './context/DarkModeContext.js'
import { AuthContextProvider } from './context/AuthContext.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </DarkModeContextProvider>
  </React.StrictMode>,
)