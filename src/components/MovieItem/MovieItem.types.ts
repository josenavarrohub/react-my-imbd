export interface Movie {
    id: string
    poster: string
    title: string
    year: string
    rated: string
    released: string
    runtime: string
    genre: string
    director: string
    writer: string
    actors: string
    plot: string
    language: string
    country: string
    awards: string
    metascore: string
    rating: string
    votes: string
    boxOffice: string
}

export interface MovieItemProps {
    movie: Movie
    onSelectMovie: (id: string) => void
    onAddFavouriteMovie?: (movie: Movie) => void
    onDeleteFavouriteMovie?: (id: string) => void
}
