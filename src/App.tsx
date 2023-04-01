import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Main Menu
import { MainMenu } from './layouts/MainMenu'

// Pages
import { Home } from './pages/home'
import { Crew } from './pages/crew'
import { Destination } from './pages/destination'
import { Technology } from './pages/technology'
import { NotFound } from './pages/NotFound'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainMenu />}>
          <Route path='/' element={<Home />} />
          <Route path='/destination' element={<Destination />} />
          <Route path='/crew' element={<Crew />} />
          <Route path='/technology' element={<Technology />} />          
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
