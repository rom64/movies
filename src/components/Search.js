import { useState } from 'react';
import StatusBar from "./StatusBar";

const Search = ({ onSearch, loadMore, disabled, count, movies }) =>{
    const [ search, setSearch ] = useState('');
    const [ type, setType ] = useState('all');
    const [ loaded, setLoaded ] = useState( false );

    const handleKey = ( e ) =>{
        if(e.key === 'Enter'){
            onSearch( search, type );
            setLoaded( true );
        }
    }
    const handleFilter = (e) =>{
        setType(e.target.dataset.type);
        onSearch( search, e.target.dataset.type );
    }

    return(
        <>
        <div className="row">
            <div className="input-field " >
                <input
                    type="search"
                    className="validate"
                    placeholder="Search"
                    value={ search }
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={handleKey}
                />

                <button className="btn waves-effect waves-light"
                        style={{position: 'absolute', right: 10, top: 0}  }
                        onClick={(e)=>onSearch(search, type)}
                >
                    Submit
                </button>
                <div className='radio'>
                    <label>
                        <input
                            className="with-gap"
                            name="type"
                            type="radio"
                            data-type='all'
                            onChange={handleFilter}
                            checked={type ==='all'}
                        />
                        <span>All</span>
                    </label>
                    <label>
                        <input
                            className="with-gap"
                            name="type"
                            type="radio"
                            data-type='movie'
                            onChange={handleFilter}
                            checked={type ==='movie'}
                        />
                        <span>Movies Only</span>
                    </label>
                    <label>
                        <input
                            className="with-gap"
                            name="type"
                            type="radio"
                            data-type='series'
                            onChange={handleFilter}
                            checked={type ==='series'}
                        />
                        <span>Series Only</span>
                    </label>
                </div>
                <button
                    className="btn waves-effect waves-light more"
                    onClick={ ()=>{loadMore(search, type)} }
                    disabled={disabled}
                >
                    Load more
                </button>
            </div>
            { loaded && <StatusBar count={count} movies={movies}/>}
        </div>

            </>
    )
}
export default Search;