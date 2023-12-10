// Components
import MovieItem from '../MovieItem'

// Hooks
import { useMovies } from '../../hooks/useMovies'

// Types
import { MovieListProps } from './MovieList.types'

// Styles
import styles from './MovieList.module.scss'

// Component
const MovieList: React.FC<MovieListProps> = ({
  query,
  onSelectMovie,
  onAddFavouriteMovie,
}) => {
  // Hooks
  const {movies, error, isLoading} = useMovies(query)

  // JSX
  return (
    query || movies.length > 0 
    ?
    (
      <div className={`${styles['c-movie-list']} mb-5`}>
        <div className='container'>
          {query && (
            <div className={`${styles.query} mt-3 mb-5`}>
              <h1>Search: '{query}'</h1>
            </div>
          )}

          {movies.length > 0 && (
            <div className='row'>
              {movies.map((movie) => (
                movie.poster !== 'N/A'
                ? 
                (
                  <MovieItem
                    key={movie.id}
                    movie={movie}
                    onSelectMovie={onSelectMovie}
                    onAddFavouriteMovie={onAddFavouriteMovie}
                  />
                )
                :
                null
              ))}
            </div>
          )}

          {error && (
            <div className='alert alert-warning' role='alert'>
              {error}
            </div>
          )}

          {isLoading && (
            <div className='d-flex justify-content-center'>
              <div className='spinner-grow text-primary' role='status'>
                <span className='visually-hidden'>Loading...</span>
              </div>
            </div>
          )}
        </div>
      </div>
    )
    :
    null
  )
}

export default MovieList
