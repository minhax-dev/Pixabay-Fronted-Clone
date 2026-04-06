import React, { useState } from 'react'
import { ENV } from '../config/env';
import { PixabayService } from '../services/pixabay.service';

const useImageFetch = () => {

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false); // over all loading when we search on Input Field 
  const [loadingMore, setLoadingMore] = useState(false); // Sepeate specific loader when we scroll down 
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true)


  const fetchImages = async (searchQuery, pageNum = 1, append = false) => {
    if (append) {
      setLoadingMore(true) // When the append is true we add more images + previous Images so here we loader for 1.5 sec
      await new Promise((resolve, reject) => {
        setTimeout(() => resolve, ENV.LOAD_MORE_DELAY);
      })
    } else {
      setLoading(true)
    }
    setError(null);


    // Async Task So we wrap into Try-Catch-Finally Block to handle runtime Error or API Fetching Failing

    try {
      const perPage = loadingMore ? ENV.PER_PAGE_LOAD_MORE : ENV.PER_PAGE_INITIAL
      const data = PixabayService.fetchImages(searchQuery, perPage, pageNum)
      console.log(data);

      if (data.hits && data.hits.length > 0) {
        if (append) {
          setImages((prev) => [...prev, ...data.hits])
        } else {
          setImages(data.hits)
        }
        setHasMore(data.hits.length === perPage)
      } else {
        setError("No Images found");
        setHasMore(false);
      }

    } catch (error) {
      setError(error.message)
      setHasMore(false);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }

  }

  const resetImage = () => {
    setImages([])
    setHasMore(true)
  }


  return (
    images,
    loading,
    loadingMore,
    error,
    hasMore,
    fetchImages,
    resetImage
  )
}

export default useImageFetch
