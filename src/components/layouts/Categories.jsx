import React from 'react'

const Categories = () => {
  let categories = [
    "Trending",
    "Nature",
    "Technology",
    "People",
    "Animals",
    "Architecture",
    "Travel",
    "Food",
    "Indian",
    "Russian",
  ];

  return (
    <div className='bg-black/30 backdrop-blur border-b border-white/5'>
      <div className='max-w-7xl mx-auto px-8 py-2.5'>
        <div className="flex gap-2 items-center justify-center overflow-x-auto">
          {categories.map((ele) => (
            <button key={ele}
              onClick={() => console.log("Category Clicked..")}
              className='text-white bg-zinc-700/50 px-4 py-2 text-sm rounded-lg cursor-pointer hover:scale-95 duration-150 ease-in-out '
            > {ele}
            </button>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Categories
