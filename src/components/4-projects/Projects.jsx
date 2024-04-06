import { Link } from 'react-router-dom'
import './projects.css'


export default function Projects() {
    return (
        <section className="projects" id='projects'>
            <h2 className="title-section">
                projects
            </h2>
            <section className="content">
                <section className="filter">
                    <button>All Projects</button>
                    <button>Html& Css</button>
                    <button>Html& Css & Js</button>
                    <button>React & MUI</button>
                </section>
                <section className="all-projects">
                    <Link to="/" className="project">
                        <img src="/public/images/icons8-react-native.svg" />
                        <section className="title">
                            <h4>project 1</h4>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque culpa iure laudantium?</p>
                            <section className="links">
                                <Link to="" className='icon-link1'></Link>
                                <Link to="" className='icon-github'></Link>
                            </section>
                        </section>
                    </Link>
                    <Link to="/" className="project">
                        <img src="/public/images/icons8-react-native.svg" />
                        <section className="title">
                            <h4>project 1</h4>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque culpa iure laudantium?</p>
                            <section className="links">
                                <Link to="" className='icon-link1'></Link>
                                <Link to="" className='icon-github'></Link>
                            </section>
                        </section>
                    </Link>
                    <Link to="/" className="project">
                        <img src="/public/images/icons8-react-native.svg" />
                        <section className="title">
                            <h4>project 1</h4>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque culpa iure laudantium?</p>
                            <section className="links">
                                <Link to="" className='icon-link1'></Link>
                                <Link to="" className='icon-github'></Link>
                            </section>
                        </section>
                    </Link>
                </section>
            </section>
        </section>
    )
}
