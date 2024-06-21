import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import  './index.scss'
import { ThemeProvider } from '@emotion/react'
import { theme } from './theme.js'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <React.StrictMode>
            <ThemeProvider theme={theme}>
            <App />
            </ThemeProvider>
        </React.StrictMode>
  </BrowserRouter>
)
