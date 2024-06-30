
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> */}
      </Routes>
      <Footer />
    </>
  )
}

export default App
