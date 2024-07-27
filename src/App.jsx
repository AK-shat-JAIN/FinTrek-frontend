
import './App.css'

import { Route, Routes } from 'react-router-dom'

import ConnectWallet from './pages/ConnectWallet'
import Footer from './Components/Footer'
import Home from './pages/Home'
import Navbar from './Components/Navbar'
import Premium from './pages/Premium'
import Rankings from './pages/Rankings'
import Signup from './pages/Signup'
import { BrowserMarket } from './pages/BrowserMarket'
import Artist from './pages/Artist'
import Login from './pages/Login'
import Scrolltotop from './Helpers/Scrolltotop'
import Recommandations from './pages/Recommandations'

function App() {

  return (
    <>
      <Scrolltotop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/rankings" element={<Rankings/>}></Route>
        <Route path="/connectwallet" element={<ConnectWallet/>}></Route>
        <Route path="/premium" element={<Premium/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path='/browsermarket' element={<BrowserMarket/>}></Route>
        <Route path="/artist" element={<Artist/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path='/recommandations' element={<Recommandations/>}></Route>
        
        {/* <Route path="/*" element={<Artist/>}></Route> */}
      </Routes>
      <Footer />
    </>
  )
}

export default App
