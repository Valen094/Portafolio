import { Home } from './components/Home/Home'
import { Routes, Route } from 'react-router-dom'
import { Projects } from './components/Projects/Projects'
// import { Product } from './components/Product/Product'
import './App.css'

function App() {

  return (
    <> 
      <Routes>
        <Route path='/' element = {<Home></Home>}></Route>
        <Route path='/projects' element = {<Projects></Projects>}></Route>

        </Routes>
        
    </>
  )
}

export default App
