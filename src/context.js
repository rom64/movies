import { createContext, useReducer } from "react";

import reducer from "./reducer";

const MainContext = createContext();

const ContextProvider = ({ children }) =>{
    const initialState = {
        searchBlock: true
    }

    const [ value, dispatch ]  = useReducer( reducer, initialState );
    value.setSearch = () =>{
        dispatch({ type: "SET_SEARCH"})
    }
    return(
        <MainContext.Provider value={ value }>
            { children }
        </MainContext.Provider>
    )
}
export { MainContext, ContextProvider }