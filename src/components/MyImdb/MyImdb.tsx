// React
import { useState, useEffect } from 'react'

// Components
import Header from '../Header'
import MovieList from '../MovieList'
import MovieDetails from '../MovieDetails'
import Modal from '../Modal'
import FavouriteMovieList from '../FavouriteMovieList'
import Footer from '../Footer'

// Types
import { Movie } from '../MovieItem/MovieItem.types'
import { useStateLocalStorage } from '../../hooks/useStageLocalStorage'

// Constants
const APP_MOVIES = process.env.REACT_APP_MOVIES

// Component
const MyImdb: React.FC = () => {
  // Pieces of state
  const [query, setQuery] = useState<string>('godfather') // Example
  const [selectedMovieId, setSelectedMovieId] = useState<null | string>(null)
  const [movie, setMovie] = useState<null | Movie>(null)
  const [isLoadingMovie, setIsLoadingMovie] = useState<boolean>(false)
  const [favouriteMovies, setFavouriteMovies] = useStateLocalStorage<Array<Movie>>('favouriteMovies', [])

  // Effects
  useEffect(() => {
    if (!selectedMovieId) return
    
    const getMovie = async () => {
      try {
        setIsLoadingMovie(true)
        const response = await fetch(
            `https://www.omdbapi.com/?apikey=${APP_MOVIES}&i=${selectedMovieId}&plot=full`
        )
        if (!response.ok) throw new Error('Problem getting data')
        const data = await response.json()
        if (!data) throw new Error('Movie not found')
        const dataMovie:Movie = {
          id: data.imdbID,
          poster: data.Poster,
          title: data.Title,
          year: data.Year,
          rated: data.Rated,
          released: data.Released,
          runtime: data.Runtime,
          genre: data.Genre,
          director: data.Director,
          writer: data.Writer,
          actors: data.Actors,
          plot: data.Plot,
          language: data.Language,
          country: data.Country,
          awards: data.Awards,
          metascore: data.Metascore,
          rating: data.imdbRating,
          votes: data.imdbVotes,
          boxOffice: data.BoxOffice,
        }
        setMovie(dataMovie)
        setIsLoadingMovie(false)
      } catch (error) {
        setMovie(null)
        if (error instanceof Error) alert(error.message)
      }
    }
    getMovie()
  }, [selectedMovieId])

  // Handlers
  const handleSelectMovie = (id: string) => setSelectedMovieId(id)
  const handleCloseMovie = () => {
    setSelectedMovieId(null)
    setMovie(null)
  }
  
  const handleAddFavouriteMovie = (movie: Movie) => {
    setFavouriteMovies(prevMovies => {
		const isMovieAlreadyAdded = prevMovies.some(prevMovie => prevMovie.id === movie.id)
		return isMovieAlreadyAdded ? prevMovies : [...prevMovies, movie]
	})
  }

  const handleDeleteFavouriteMovie = (id: string) => {
    setFavouriteMovies(prevMovies => prevMovies.filter(movie => movie.id !== id))
  }

  // JSX
  return (
    <>
      <Header query={query} setQuery={setQuery} />
      
      <MovieList
        query={query}
        onSelectMovie={handleSelectMovie}
        onAddFavouriteMovie={handleAddFavouriteMovie}
      />
      
      {isLoadingMovie && (
        <Modal
          title='Loading movie...'
          onClose={() => setIsLoadingMovie(false)}
        >
          <div className='d-flex justify-content-center'>
            <div className='spinner-grow text-primary' role='status'>
              <span className='visually-hidden'>Loading...</span>
            </div>
          </div>
        </Modal>
      )}
      
      {selectedMovieId && movie && (
        <Modal
          title={`${movie.title} (${movie.year})`}
          onClose={handleCloseMovie}
        >
          <MovieDetails movie={movie} />
        </Modal>
      )}

	  {favouriteMovies.length > 0 && (
		<FavouriteMovieList
			movies={favouriteMovies}
			onSelectMovie={handleSelectMovie}
			onDeleteFavouriteMovie={handleDeleteFavouriteMovie}
		/>
	  )}

      <Footer />
    </>
  )
}

export default MyImdb
