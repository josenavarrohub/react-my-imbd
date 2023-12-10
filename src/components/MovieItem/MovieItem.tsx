// Types
import { MovieItemProps } from './MovieItem.types'

// Styles
import styles from './MovieItem.module.scss'

// Component
const MovieItem: React.FC<MovieItemProps> = ({
    movie,
    onSelectMovie,
    onAddFavouriteMovie,
    onDeleteFavouriteMovie,
}) => {

    // JSX
    return (
        <div className={`${styles['c-movie-item']} col-sm-6 col-md-4 col-lg-3 mb-4`}>
            <div className={`${styles['card']} card`}>
                <img
                    src={movie.poster}
                    alt={movie.title}
                    className={`${styles['poster']} card-img-top`}
                    onClick={() => onSelectMovie(movie.id)}
                />
                <span
                    className='position-absolute top-0 end-0 badge rounded-pill bg-dark mt-1 me-1'>
                    {movie.year}
                </span>
                <div className='card-body'>
                    <h5 className={`${styles['title']} card-title`}>{movie.title}</h5>
                    <button
                        type='button'
                        className='btn btn-primary w-100'
                        onClick={() => onSelectMovie(movie.id)}
                    >
						<i className="bi bi-film"></i> Details
                    </button>
                    {onAddFavouriteMovie && (
                        <button
                            type='button'
                            className='btn btn-primary w-100 mt-2'
                            onClick={() => onAddFavouriteMovie(movie)}
                        >
                            <i className="bi bi-star-fill"></i> Favourite
                        </button>
                    )}
                    {onDeleteFavouriteMovie && (
                        <button
                            type='button'
                            className='btn btn-danger w-100 mt-2'
                            onClick={() => onDeleteFavouriteMovie(movie.id)}
                        >
                            <i className="bi bi-trash3-fill"></i> Remove
                        </button>
                    )}
                </div>
            </div>
      </div>
    )
}

export default MovieItem
