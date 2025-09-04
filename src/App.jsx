import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Authentications/Pages/Login'
import About from './DetailsPages/Pages/About'
import Contact from './DetailsPages/Pages/Contact'
import Reg from './Authentications/Pages/Reg'
import ForgotPassword from './Authentications/Pages/ForgotPassword'

function App() {
  

  return (
    <>
     <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/reg' element={<Reg/>}/>
      <Route path='/forget' element={<ForgotPassword/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
     </Routes>
    </>
  )
}

export default App
