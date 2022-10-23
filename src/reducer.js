function reducer( state, { type, payload}){
    switch( type ) {
        case "SET_SEARCH":
            return{
                ...state,
                searchBlock: !state.searchBlock
            }
        default :
            return state;
    }
}
export default reducer;