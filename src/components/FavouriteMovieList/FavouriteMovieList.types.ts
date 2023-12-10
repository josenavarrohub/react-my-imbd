import { Movie } from '../MovieItem/MovieItem.types'

export interface FavouriteMovieListProps {
    movies: Array<Movie>
    onSelectMovie: (id: string) => void
    onDeleteFavouriteMovie?: (id: string) => void
}
