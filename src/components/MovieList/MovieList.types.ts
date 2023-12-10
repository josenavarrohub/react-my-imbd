import { Movie } from '../MovieItem/MovieItem.types'

export interface MovieListProps {
    query: string
    onSelectMovie: (id: string) => void
    onAddFavouriteMovie: (movie: Movie) => void
}
