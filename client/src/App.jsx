import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './App.scss'

import Navbar from './components/Navbar'
import Home from './pages/Home/Home'
import PinMap from './pages/PinMap/PinMap'
// import PinMap from './pages/pinMap/pinMap';
import NotFound from './pages/NotFound/NotFound'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import About from './pages/About/About'
import Loader from './components/Loader';

function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500)
  })
  return (
    <BrowserRouter>
      <header>
        <Navbar />
      </header>
      <main className={loading ? 'hide-content' : ''}>
      {/* <main> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/map' element={<PinMap />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
        <ToastContainer />
      </main>
      {loading && (
        <div className="loading">
          <Loader />
        </div>
      )}
    </BrowserRouter>
  )
}

export default App
