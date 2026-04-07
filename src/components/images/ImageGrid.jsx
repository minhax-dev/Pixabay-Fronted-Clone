import React from 'react'
import ImageCard from './imageCard';

const ImageGrid = ({ images }) => {
  const onToggleFavorites = () => console.log("Togggleeee");
  const isFavoritesCheck = () => console.log("favoriiiiitess");

  return (
    <>
      <div className='column1'>
        {images.map((img) => (
          <ImageCard key={img.id}
            img={img}
            onToggleFavorites={onToggleFavorites}
            isFavorite={isFavoritesCheck(img.id)}
          />
        ))}
      </div>
    </>
  )
}

export default ImageGrid
