import { useState } from 'react'
import Header from './components/Main/Header';
import './styles/general.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
    </>
  )
}

export default App
