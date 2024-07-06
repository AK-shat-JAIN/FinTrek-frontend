
import './App.css'

import { Route, Routes } from 'react-router-dom'

import ConnectWallet from './Components/ConnectWallet'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Premium from './Components/Premium'
import Rankings from './Components/Rankings'
import Signup from './Components/Signup'
import { BrowserMarket } from './Components/BrowserMarket'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> */}
        <Route path="/rankings" element={<Rankings/>}></Route>
        <Route path="/connectwallet" element={<ConnectWallet/>}></Route>
        <Route path="/premium" element={<Premium/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/" element={<Home/>}></Route>
        <Route path='/browsermarket' element={<BrowserMarket/>}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
