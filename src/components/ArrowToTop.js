import arrow from '../arrow.png';

const ArrowToTop = () =>{
    const toTop = () =>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return(
        <div
            className="top"
            onClick={ toTop }
        >
            <img src={ arrow }/>
        </div>
    )
}
export default ArrowToTop;