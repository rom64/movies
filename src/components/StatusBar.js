const StatusBar = ({ count, movies}) =>{
    return(
        <div className="count">
            <span className="marginRight">Total quantity: { count || 0 } </span>  Downloaded: { movies.length }
        </div>
    )
}
export default StatusBar;