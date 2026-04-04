import { useState } from 'react'
import Navbar from './components/layouts/Navbar'
import Categories from './components/layouts/Categories'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen bg-zinc-900">
        <Navbar />
        <Categories />
      </div>
    </>

  )
}

export default App
