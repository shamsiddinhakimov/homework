import { useState } from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='my-site'>
     <Navbar></Navbar>
     <Main></Main>
    </div>
  )
}

export default App
