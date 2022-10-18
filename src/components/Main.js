import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {API_KEY, API_URL} from '../config';

import MovieList from "./MovieList";
import Preloader from "./Preloader";
import Search from "./Search";
import ArrowToTop from "./ArrowToTop";
import SingleMovie from "./SingleMovie";



const Main = () =>{
    const [ movies, setMovies ] = useState([] );
    const [ loading, setLoading ] = useState(true );
    const [ page, setPage ] = useState(1 );
    const [ disabled, setDisabled ] = useState( false );
    const [ count, setCount ] = useState(0 );
    const [ visible, setVisible ] = useState( false );


    const handleScroll = () =>{
        if( window.pageYOffset > 900 ){
            setVisible( true );
        }else{
            setVisible( false );
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    },[window.pageYOffset] );

    useEffect(()=>{
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=terminator` )
            .then( response => response.json())
            .then( data =>{
                setMovies( data.Search );
                setLoading( false );
                setDisabled(true );
            })
    },[])


    const searchMovies= ( search, type, page ) =>{
        setLoading( true );
        fetch(`${API_URL}${API_KEY}&page=${page}${type !== 'all' ? `&type=${type}` :''}&s=${search}`)
            .then(response => response.json())
            .then(res =>{
                setCount( res.totalResults );
                setMovies( res.Search );
                setLoading( false );
                setDisabled(false );
                setPage(2);
        })

    }


    const loadMore = async( search, type ) => {
        await setPage(page => page + 1);
        const response = await fetch(`${API_URL}${API_KEY}&page=${page}${type !== 'all' ? `&type=${type}` :''}&s=${search}`);
        const res = await response.json();

        if( res.Response === 'False' ){
            setDisabled(true)
            return;
        }
        const result = res.Search ;
            if( result.length < 10 ){
                setDisabled(true );
                setMovies([...movies, ...result]);
                setLoading(false );
                setPage(1);
            }else{
                setDisabled(false);
                setMovies([...movies, ...result]);
                setLoading( false );
            }

    }
    return(
        <main className="content container">

             <Search
                onSearch={ searchMovies }
                loadMore={ loadMore }
                disabled={ disabled }
                count={ count }
                movies={ movies }
            />
            { !loading ?
                <Router>
                    <Routes>
                        <Route path="/" element={<MovieList movies={ movies }/>}/>
                        <Route path="/:title" element={<SingleMovie movies={ movies } />}/>
                    </Routes>
                </Router>

                : <Preloader/>}
            { visible && <ArrowToTop/> }

        </main>
    )
}
export default Main;