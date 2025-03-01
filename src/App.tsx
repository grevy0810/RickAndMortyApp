import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeScreen from './pages/HomeScreen'
import CharacterDetailScreen from './pages/CharacterDetailScreen'
import { ToastContainer } from 'react-toastify'
import CssBaseline from '@mui/material/CssBaseline';
import { CharacterProvider } from './context/CharacterContext'

function App() {

  return (
    <>
      <CssBaseline />
      <CharacterProvider>

        <BrowserRouter>
          <Routes>
            {/* Página de inicio */}
            <Route path="/" element={<HomeScreen />} />
            <Route path="/character/:id" element={<CharacterDetailScreen />} />
          </Routes>
          
        </BrowserRouter>
      </CharacterProvider>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
    
  )
}

export default App
