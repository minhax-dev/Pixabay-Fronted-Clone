import { useState } from 'react'
import Navbar from './components/layouts/Navbar'
import Categories from './components/layouts/Categories'

function App() {
  const [query, setQuery] = useState('Japan');
  const [showFavorites, setShowFavorites] = useState(false);
  const [page, setPage] = useState(1);



  return (
    <>
      <div className="min-h-screen bg-zinc-900">
        <Navbar query={query} setQuery={setQuery} showFavorites={showFavorites} setShowFavorites={setShowFavorites} />
        <Categories />
      </div>
    </>

  )
}

export default App
