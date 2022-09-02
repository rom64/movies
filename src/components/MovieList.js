import Movie from "./Movie";

const MovieList = ({ movies=[] }) =>{
    return(
        <>
            <div className="movies">
                { movies.length ? movies.map(movie =>{
                    return <Movie key={movie.imdbID} {...movie}/>
                }) : <h4>Nothing found</h4>
                }

            </div>

        </>
    )
}
export default MovieList;