import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Contexts Providers
import { NavigationProvider } from './contexts/NavigationContext'
import { DataProvider } from './contexts/DataContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <DataProvider>
    <NavigationProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </NavigationProvider>
  </DataProvider> 
)
