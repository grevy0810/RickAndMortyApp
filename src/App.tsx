import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeScreen from './pages/HomeScreen'
import CharacterDetailScreen from './pages/CharacterDetailScreen'

function App() {

  return (
    <BrowserRouter>
          <Routes>
            {/* Página de inicio */}
            <Route path="/" element={<HomeScreen />} />
            <Route path="/character/:id" element={<CharacterDetailScreen />} />
          </Routes>
          
        </BrowserRouter>
  )
}

export default App
