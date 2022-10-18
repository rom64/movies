import { Link } from "react-router-dom";

import Movie from "./Movie";

const MovieList = ({ movies=[] }) =>{
    return(
        <>
            <div className="movies">
                { movies.length ? movies.map(movie =>{
                    return <Link key={movie.imdbID} to={movie.Title}><Movie {...movie}/></Link>
                }) : <h4>Nothing found</h4>
                }

            </div>

        </>
    )
}
export default MovieList;