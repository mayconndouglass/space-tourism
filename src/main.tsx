import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { NavigationProvider } from './contexts/NavigationContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <NavigationProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </NavigationProvider>
)
