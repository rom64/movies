import me from "../Roman.png";

const Footer = () =>{
    return(
        <footer className="page-footer green" >
            <div className="footer-copyright" style={{textAlign:"center"}}>
                <div className="container" style={{position: 'relative'}}>
                    © { new Date().getFullYear() } Roman Litvinov
                    <a href="https://litvinov.co.ua/" className="hide-on-med-and-down"><img src= {`${me}`} alt="Roman" style={{height: 40, opacity: 0.6, position: "absolute", bottom: -10, right: 0}}/></a>
                </div>
            </div>
        </footer>
    )
}
export default Footer;