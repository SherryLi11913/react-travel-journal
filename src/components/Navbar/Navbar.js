import './Navbar.css';

function Navbar(props) {
    return (
        <div className="navbar-container">
            {props.icon && <img src={props.icon} className="navbar-icon" alt={props.title}/>}
            <span className="navbar-title">{props.title}</span>
        </div>
    )
}

export default Navbar;