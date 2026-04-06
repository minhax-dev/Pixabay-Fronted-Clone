export const ENV = {
  BASE_URL: import.meta.env.VITE_BASE_URL,
  API_KEY: import.meta.env.VITE_API_KEY,
  PER_PAGE_INITIAL: import.meta.env.VITE_PER_PAGE_INITIAL,
  PER_PAGE_LOAD_MORE: import.meta.env.VITE_PER_PAGE_LOAD_MORE,
  SCROLL_THRESHOLD: import.meta.env.VITE_SCROLL_THRESHOLD,
  LOAD_MORE_DELAY: import.meta.env.VITE_LOAD_MORE_DELAY,

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