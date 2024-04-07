import { Link } from 'react-router-dom'
import './projects.css'



import { useState } from 'react'

export default function Projects() {
    const [currentBtn, setCurrentBtn] = useState("All Projects")

    const [filterValue, setFilterValue] = useState(null); // State to hold the filter value
    const projects = [
        { id: 1, name: 'landing page', img: '../../components/4-projects/P-1/p-1.png' , p: "static landing page is designed using Html and Css", src: "https://leon-4zg4wkmj4-karimkashkoush.vercel.app/", codeSrc: 'https://leon-4zg4wkmj4-karimkashkoush.vercel.app/', category: 'Category A' },
        { id: 2, name: 'landing page', img: '../../components/4-projects/p-2/p-2.png', p: "static landing page is designed using Html and Css", src: "https://leon-4zg4wkmj4-karimkashkoush.vercel.app/", codeSrc: 'https://leon-4zg4wkmj4-karimkashkoush.vercel.app/', category: 'Category A' },
        { id: 3, name: 'landing page', img: '../../components/4-projects/p-3/p-3.png', p: "static landing page is designed using Html and Css", src: "https://leon-4zg4wkmj4-karimkashkoush.vercel.app/", codeSrc: 'https://leon-4zg4wkmj4-karimkashkoush.vercel.app/', category: 'Category A' },
        { id: 4, name: 'landing page', img: '../../components/4-projects/p-4/p-4.png', p: "static landing page is designed using Html and Css", src: "https://leon-4zg4wkmj4-karimkashkoush.vercel.app/", codeSrc: 'https://leon-4zg4wkmj4-karimkashkoush.vercel.app/', category: 'Category A' },
        { id: 5, name: 'landing page', img: '../../components/4-projects/P-5/p-5.png', p: "static landing page is designed using Html and Css", src: "https://leon-4zg4wkmj4-karimkashkoush.vercel.app/", codeSrc: 'https://leon-4zg4wkmj4-karimkashkoush.vercel.app/', category: 'Category A' },
        { id: 6, name: 'portfolio page', img: '../../components/4-projects/p-6/p6.png', p: "static landing page is designed using React", src: "https://farah-ashraf.vercel.app/", codeSrc: 'https://github.com/KarimKashkoush/Farah-Ashraf', category: 'Category C' },
        { id: 7, name: 'landing page', img: '../../components/4-projects/p-7/p-7.png', p: "static landing page is designed using Html, Css and Js", src: "https://d-sherif-abdelbaeth.vercel.app/", codeSrc: 'https://github.com/KarimKashkoush/D.Sherif.Abdelbaeth', category: 'Category B' },
        { id: 8, name: 'landing page', img: '../../components/4-projects/p-8/p8.png', p: "static landing page is designed using Html, Css and Js", src: "https://spyro-gym-one.vercel.app/", codeSrc: 'https://github.com/KarimKashkoush/Spyro-Gym', category: 'Category B' },
        { id: 9, name: 'landing page', img: '../../components/4-projects/p-9/p9.png', p: "static landing page is designed using Html, Css and Js", src: "https://responsive-bakery.vercel.app/", codeSrc: 'https://github.com/KarimKashkoush/responsive-bakery', category: 'Category B' },
        { id: 10, name: 'landing page', img: '../../components/4-projects/p-10/p10.png', p: "static landing page is designed using Html, Css and Js", src: "https://leon-4zg4wkmj4-karimkashkoush.vercel.app/", codeSrc: 'https://github.com/KarimKashkoush/BSA-Form', category: 'Category B' },
    ];

    // Function to handle button click and set the filter value
    const handleFilterClick = (value) => {
        setFilterValue(value);
    };

    // Filter the projects based on the filterValue
    const filteredProjects = filterValue
        ? projects.filter((project) => project.category === filterValue)
        : projects;
    return (
        <section className="projects" id='projects'>
            <h2 className="title-section">
                projects
            </h2>
            <section className="content">
                <section className="filter">
                    <button onClick={() => { setCurrentBtn('All Projects'); handleFilterClick(null) }} className={`btn ${currentBtn === "All Projects" ? "active" : null}`} >All Projects</button>
                    <button onClick={() => { setCurrentBtn('Html & Css') ; handleFilterClick('Category A') }} className={`btn ${currentBtn === "Html & Css" ? "active" : null}`} >Html & Css</button>
                    <button onClick={() => { setCurrentBtn('Html & Css & Js') ; handleFilterClick('Category B') }} className={`btn ${currentBtn === "Html & Css & Js" ? "active" : null}`} >Html & Css & Js</button>
                    <button onClick={() => { setCurrentBtn('React & MUI') ; handleFilterClick('Category C') }} className={`btn ${currentBtn === "React & MUI" ? "active" : null}`} >React & MUI</button>
                </section>
                <section className="all-projects">
                    {filteredProjects.map((project) => (
                        <a key={project.id} className='project' href= {project.src}>
                            <img src = {project.img} />
                            <section className="title">
                                <h4>{project.name}</h4>
                                <p>static landing page is designed using Html and Css</p>
                                <section className="links">
                                    <Link to={project.src} className='icon-link1'></Link>
                                    <Link to="https://github.com/KarimKashkoush/Leon" className='icon-github'></Link>
                                </section>
                            </section>
                        </a>
                    ))}
                </section>
            </section>
        </section>
    )
}




