import git from '../GitHub-Logo.png';

const Header = () =>{
    return(
        <nav className = "green lighten-1">
            <div className="nav-wrapper container">
                <a href="/" className="brand-logo">Movies Search</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <a href="https://github.com/rom64">
                            <img className="header-img" src={ git } alt="github"/>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Header;