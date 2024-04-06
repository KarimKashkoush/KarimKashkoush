import { Link, NavLink } from "react-router-dom";
import './header.css'

export default function Header() {
    function openNav() {
        document.getElementById('nav').style.top = '20%'
    }
    function closeNav() {
        document.getElementById('nav').style.top = '-500%'
    }

    return (
        <section className="header">
            <section className="logo">
                <Link to='./'><span>.</span>Karim Kashkoush</Link>
            </section>
            <nav id="nav">
                <section className="top-nav">
                    <p>navigation</p>
                    <button className="icon-remove" onClick={()=>{closeNav()}}></button>
                </section>

                <ul className="nav-list">
                    <li className="nav-item" >
                        <NavLink to="/about" className='nav-link'>about</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/articles" className='nav-link'>articles</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/projects" className='nav-link'>projects</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/speaking" className='nav-link'>speaking</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/uses" className='nav-link'>uses</NavLink>
                    </li>
                </ul>
            </nav>

            <section className="theme">
                <button className="icon-moon-stars"></button>
            </section>

            <section className="nav-icon">
                <button className="icon-menu" onClick={()=>{openNav()}}></button>
            </section>
        </section>
    )
}
