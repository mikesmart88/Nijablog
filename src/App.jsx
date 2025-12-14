import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './assets/scss/App.scss'
import Routers from './navigators/Routers'
import { HelmetProvider } from '@vuer-ai/react-helmet-async'

function App() {

  return (
    <HelmetProvider>
      <Routers />
    </HelmetProvider>
  )
}

export default App
