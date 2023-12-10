import { useEffect, useState } from 'react'

// Types
import { Movie } from '../components/MovieItem/MovieItem.types'

// Constants
const APP_MOVIES = process.env.REACT_APP_MOVIES

// Hook
export const useMovies = (query: string) => {
  // Pieces of state
  const [movies, setMovies] = useState<Array<Movie>>([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  // Effects
  useEffect(() => {
    if (!query) {
      setMovies([])
      setError('')
      return
    }

	const controller = new AbortController();

    const getMovies = async () => {
      try {
        setMovies([])
        setError('')
        setIsLoading(true)
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=${APP_MOVIES}&s=${query}&type=movie&plot=short`,
		  { signal: controller.signal }
        )
        if (!response.ok) throw new Error('Problem getting data')
        const data = await response.json()
        if (!data.Search) throw new Error('Movie not found')
        const moviesData: Array<Movie> = data.Search.map((item: any) => ({
          id: item.imdbID,
          poster: item.Poster,
          title: item.Title,
          year: item.Year,
        }))
        setMovies(moviesData)
      } catch (error) {
        setMovies([])
        if (error instanceof Error && error.name !== 'AbortError') setError(error.message)
      } finally {
        setIsLoading(false)
      }
    }
    getMovies()
	
	// Clean-up function
	return () => {
		controller.abort();
	}
  }, [query])

  // Return the pieces of state
  return {movies, error, isLoading}
}
