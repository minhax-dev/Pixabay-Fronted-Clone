import { useEffect, useState } from 'react'
import Navbar from './components/layouts/Navbar'
import Categories from './components/layouts/Categories'

import useImageFetch from './hooks/useImageFetch'
import ImageGrid from './components/images/imageGrid';



function App() {
  const [query, setQuery] = useState('Japan');
  const [showFavorites, setShowFavorites] = useState(false);
  const [page, setPage] = useState(1);

  const favorites = "hehehe"

  const {
    images,
    loading,
    loadingMore,
    error,
    hasMore,
    fetchImages,
    resetImage } = useImageFetch();

  useEffect(() => {
    fetchImages(query, 1, false)
  }, [])

  console.log("Images - ", images);



  const displayImage = showFavorites ? favorites : images;

  // useEffect(() => {
  //   if (page > 1) {
  //     fetchImages(query, page, true)
  //   }
  // }, [page])


  return (
    <>
      <div className="min-h-screen bg-zinc-900">
        <Navbar query={query} setQuery={setQuery} showFavorites={showFavorites} setShowFavorites={setShowFavorites} />
        <Categories />

        <ImageGrid images={displayImage} />

      </div>
    </>

  )
}

export default App
