import React from 'react'
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom'
import Home from './Home'
import Create from './Create'
import Update from './Update'
import Read from './Read'
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './LoginPage';


function App() {
  return (

    <BrowserRouter>
    <Routes>
    <Route path='/loginpage' element={<LoginPage/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/create' element={<Create/>}></Route>
        <Route path='/update/:id' element={<Update/>}></Route>
        <Route path='/read/:id' element={<Read/>}></Route>
    </Routes>
    </BrowserRouter>

  )
}

export default App