import { useEffect, useContext } from 'react';
import { useParams, useNavigate } from "react-router-dom";

import { MainContext } from "../context";
import StarRating from './StarRating';

const SingleMovie = ({ movies=[] }) =>{
    const params = useParams();
    const movie = movies.find( movie => movie.Title === params.title ) || [];
    const navigate = useNavigate();

    const { setSearch } = useContext( MainContext );

    const { Title: title, Year: year, Poster: poster } = movie;
    useEffect(()=>{
        setSearch();
        return ()=>{
            setSearch();
        }
    }, [])
    return(

        <div className="single-card">
            <div className="card-image waves-effect ">
                {poster ==="N/A" ?
                    (<img className="activator" src={`https://via.placeholder.com/300x400.png?text=${title} `} alt={title}/>) :
                    (<img className="activator" src={poster} alt={title}/>)}
            </div>
            <div className="single-card-content">
                <div>
                    <span className="card-title activator grey-text text-darken-4">{ title }</span>
                    <p>{ year } </p>
                </div>
                <StarRating />
                <button
                    className="btn"
                    onClick={()=>{
                        navigate(-1);
                    }}
                >
                    Go Back
                </button>
            </div>
        </div>
    )
}
export default SingleMovie;