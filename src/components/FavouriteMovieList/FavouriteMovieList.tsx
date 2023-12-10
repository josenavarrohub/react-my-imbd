// Components
import MovieItem from '../MovieItem'

// Types
import { FavouriteMovieListProps } from './FavouriteMovieList.types'

// Styles
import styles from './FavouriteMovieList.module.scss'

const FavouriteMovieList: React.FC<FavouriteMovieListProps> = ({
    movies,
    onSelectMovie,
    onDeleteFavouriteMovie,
}) => {

  // JSX
  return (
    movies.length > 0 
    ?
    (
      <div className={`${styles['c-favourite-movie-list']} mb-5`}>
        <div className='container'>
            <div className={`${styles.title} mt-3 mb-5`}>
              <h2>My favourite films</h2>
            </div>
            <div className='row'>
                {movies.map((movie) => (
                    <MovieItem
                        key={movie.id}
                        movie={movie}
                        onSelectMovie={onSelectMovie}
                        onDeleteFavouriteMovie={onDeleteFavouriteMovie}
                    />
                ))}
            </div>
        </div>
      </div>
    )
    :
    null
  )
}

export default FavouriteMovieList
