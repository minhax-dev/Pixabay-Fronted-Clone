export const ENV = {
  BASE_URL: import.meta.env.VITE_BASE_URL,
  API_KEY: import.meta.env.VITE_API_KEY,
  PER_PAGE_INITIAL: parseInt(import.meta.env.VITE_PER_PAGE_INITIAL),
  PER_PAGE_LOAD_MORE: parseInt(import.meta.env.VITE_PER_PAGE_LOAD_MORE),
  SCROLL_THRESHOLD: parseInt(import.meta.env.VITE_SCROLL_THRESHOLD),
  LOAD_MORE_DELAY: parseInt(import.meta.env.VITE_LOAD_MORE_DELAY),

}

export const CATEGORIES = [
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
]

export const SCERET_KEY = "pixabay_favorites"