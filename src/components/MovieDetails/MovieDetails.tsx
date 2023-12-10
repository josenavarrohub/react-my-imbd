// Types
import { MovieDetailsProps } from './MovieDetails.types'

// Styles
import styles from './MovieDetails.module.scss'

// Component
const MovieDetails: React.FC<MovieDetailsProps> = ({ movie }) => {

  // JSX
  return (
    <div className={styles['c-movie-details']}>
        <div className='row'>
            <div className='col-md-4 mb-3'>
                <img
                    src={movie.poster}
                    alt={movie.title}
                    className='img-fluid rounded'
                />
            </div>
            <div className='col-md-8'>
                <p className='lead'>{movie.plot}</p>
                <p><strong>Director:</strong> {movie.director}</p>
                <p><strong>Genre:</strong> {movie.genre}</p>
                <p><strong>Runtime:</strong> {movie.runtime}</p>
                <p><strong>Language:</strong> {movie.language}</p>
                <p><strong>Country:</strong> {movie.country}</p>
                <p><strong>Rated:</strong> {movie.rated}</p>
                <p><strong>Metascore:</strong> {movie.metascore}</p>
                <p><strong>Rating:</strong> {movie.rating}</p>
                <p><strong>Box office:</strong> {movie.boxOffice}</p>
            </div>
        </div>
    </div>
  )
}

export default MovieDetails
