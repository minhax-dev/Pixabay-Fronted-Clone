import React from 'react'
import { Aperture, Search, Heart } from 'lucide-react';

const Navbar = ({ query, setQuery, showFavorites, setShowFavorites }) => {

  const favorites = 5;
  const onSearch = () => {
    console.log("Searching..");

  }

  return (
    <div>
      <nav className='bg-black/50 backdrop-blur-xl sticky top-0 z-30 border-b border-white/20'>
        <div className="max-w-7xl mx-auto px-8">

          <div className="flex items-center justify-between text-white h-16 ">

            <div className="flex items-center gap-1">
              <Aperture className='text-orange-500' size={26} />
              <span className='font-bold text-lg '>Pixabay</span>
            </div>


            <div className="flex-1 max-w-xl mx-8">
              <div className="relative">

                <Search className='absolute left-3 top-1/2 -translate-y-1/2 text-white/60 ' size={20} />

                <input type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && onSearch()}
                  placeholder='type to search..'
                  className='w-full px-10 py-3 bg-zinc-700/40 rounded text-white text-sm outline-none border border-white/30 placeholder:text-white/40 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20' />

                <button onClick={onSearch} className='absolute right-2 top-1/2 -translate-y-1/2 bg-orange-500 py-2 px-4 rounded font-bold cursor-pointer hover:scale-90 transition-all duration-150 ease-in-out '>Go</button>

              </div>
            </div>


            <button onClick={() => setShowFavorites(!showFavorites)} className='relative flex items-center gap-1 bg-orange-500 px-4 py-2 rounded cursor-pointer hover:scale-95 duration-150 ease-in-out font-bold text-white'>

              <Heart size={20}
                className='transition-all duration-200'
                fill={showFavorites ? "currentColor" : "none"}
              />
              Favorites


              {favorites > 0 && (
                <>
                  <span className="absolute -top-1.5 -right-1.5 bg-gray-700 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center overflow-visible">
                    {favorites}
                  </span>
                </>
              )}

            </button>

          </div>



        </div>
      </nav >
    </div >
  )
}

export default Navbar
