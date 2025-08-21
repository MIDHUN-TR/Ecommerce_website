import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Authentications/Pages/Login'
import About from './DetailsPages/Pages/About'
import Contact from './DetailsPages/Pages/Contact'

function App() {
  

  return (
    <>
     <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
     </Routes>
    </>
  )
}

export default App
