import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

import './header.css'

export default function Header() {
    const [theme, setTheme] = useState(localStorage.getItem('Mood') ?? 'dark')

    useEffect(()=>{
        if (theme === 'light') {
            document.body.classList.remove('dark');
            document.body.classList.add('light');
            document.getElementById('theme').classList.remove("icon-wb_sunny")
            document.getElementById('theme').classList.add("icon-moon-stars")
        } else {
            document.body.classList.remove('light');
            document.body.classList.add('dark');
            document.getElementById('theme').classList.remove("icon-moon-stars")
            document.getElementById('theme').classList.add("icon-wb_sunny")
        }
    }, [theme])

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
                        <a href="#home" className='nav-link'>Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#about" className='nav-link'>about</a>
                    </li>
                    <li className="nav-item">
                        <a href="#projects" className='nav-link'>projects</a>
                    </li>
                    <li className="nav-item">
                        <a href="#skills" className='nav-link'>skills</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className='nav-link'>contact</a>
                    </li>
                </ul>
            </nav>

            <section className="theme">
                <button id="theme" className="icon-wb_sunny" onClick={()=>{
                    localStorage.setItem('Mood', theme === 'light' ? 'dark' : 'light' )

                    setTheme(localStorage.getItem('Mood'))
                }}></button>
            </section>

            <section className="nav-icon">
                <button className="icon-menu" onClick={()=>{openNav()}}></button>
            </section>
        </section>
    )
}
