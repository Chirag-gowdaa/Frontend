import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Downloads from './pages/Downloads'
import Linux from './pages/linux'
function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/linux" element={<Linux />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App