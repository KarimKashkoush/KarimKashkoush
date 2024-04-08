import { Link } from 'react-router-dom'
import './projects.css'

// @ts-ignore
import p1 from '../../components/4-projects/P-1/p-1.png'
// @ts-ignore
import p2 from '../../components/4-projects/p-2/p-2.png'
// @ts-ignore
import p3 from '../../components/4-projects/p-3/p-3.png'
// @ts-ignore
import p4 from '../../components/4-projects/p-4/p-4.png'
// @ts-ignore
import p5 from '../../components/4-projects/P-5/p-5.png'
// @ts-ignore
import p6 from '../../components/4-projects/p-6/p6.png'
// @ts-ignore
import p7 from '../../components/4-projects/p-7/p-7.png'
// @ts-ignore
import p8 from '../../components/4-projects/p-8/p8.png'
// @ts-ignore
import p9 from '../../components/4-projects/p-9/p9.png'
// @ts-ignore
import p10 from '../../components/4-projects/p-10/p10.png'
// @ts-ignore
import p11 from '../../components/4-projects/p-7/p-7.png'


import { useState } from 'react'

export default function Projects() {
    const [currentBtn, setCurrentBtn] = useState("All Projects")

    const [filterValue, setFilterValue] = useState(null); // State to hold the filter value
    const projects = [
        {
            id: 1,
            name: 'landing page',
            img: `${p1}`,
            p: "static landing page is designed using Html and Css",
            src: "https://leon-4zg4wkmj4-karimkashkoush.vercel.app/",
            codeSrc: 'https://github.com/KarimKashkoush/leon',
            ategory: 'Category A'
        },
        {
            id: 2,
            name: 'landing page',
            img: `${p2}`,
            p: "static landing page is designed using Html and Css",
            src: "https://karim-9qa946dkd-karimkashkoush.vercel.app/",
            codeSrc: 'https://github.com/KarimKashkoush/Karim',
            category: 'Category A'
        },
        {
            id: 3,
            name: 'landing page',
            img: `${p3}`,
            p: "static landing page is designed using Html and Css",
            src: "https://kasper-eta.vercel.app/",
            codeSrc: 'https://github.com/KarimKashkoush/Kasper',
            category: 'Category A'
        },
        {
            id: 4,
            name: 'landing page',
            img: `${p4}`,
            p: "static landing page is designed using Html and Css",
            src: "https://turbino-gym.vercel.app/",
            codeSrc: 'https://github.com/KarimKashkoush/Turbino-Gym',
            category: 'Category A'
        },
        {
            id: 5,
            name: 'landing page',
            img: `${p5}`,
            p: "static landing page is designed using Html and Css",
            src: "https://steller-five.vercel.app/",
            codeSrc: 'https://github.com/KarimKashkoush/Steller',
            category: 'Category A'
        },
        {
            id: 6,
            name: 'portfolio page',
            img: `${p6}`,
            p: "static landing page is designed using React",
            src: "https://farah-ashraf.vercel.app/",
            codeSrc: 'https://github.com/KarimKashkoush/Farah-Ashraf',
            category: 'Category C'
        },
        {
            id: 7,
            name: 'landing page',
            img: `${p7}`,
            p: "static landing page is designed using Html, Css and Js",
            src: "https://d-sherif-abdelbaeth.vercel.app/",
            codeSrc: 'https://github.com/KarimKashkoush/D.Sherif.Abdelbaeth',
            category: 'Category B'
        },
        {
            id: 8,
            name: 'landing page',
            img: `${p8}`,
            p: "static landing page is designed using Html, Css and Js",
            src: "https://spyro-gym-one.vercel.app/",
            codeSrc: 'https://github.com/KarimKashkoush/Spyro-Gym',
            category: 'Category B'
        },
        {
            id: 9,
            name: 'landing page',
            img: `${p9}`,
            p: "static landing page is designed using Html, Css and Js",
            src: "https://responsive-bakery.vercel.app/",
            codeSrc: 'https://github.com/KarimKashkoush/responsive-bakery',
            category: 'Category B'
        },
        {
            id: 10,
            name: 'landing page',
            img: `${p10}`,
            p: "static landing page is designed using Html, Css and Js",
            src: "https://bsa-lake.vercel.app/",
            codeSrc: 'https://github.com/KarimKashkoush/BSA-Form',
            category: 'Category B'
        },
        {
            id: 11,
            name: 'landing page',
            img: `${p11}`,
            p: "static landing page is designed using React",
            src: "https://sherif.vercel.app/",
            codeSrc: 'https://github.com/KarimKashkoush/sherif',
            category: 'Category C'
        },
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
                    <button onClick={() => { setCurrentBtn('Html & Css'); handleFilterClick('Category A') }} className={`btn ${currentBtn === "Html & Css" ? "active" : null}`} >Html & Css</button>
                    <button onClick={() => { setCurrentBtn('Html & Css & Js'); handleFilterClick('Category B') }} className={`btn ${currentBtn === "Html & Css & Js" ? "active" : null}`} >Html & Css & Js</button>
                    <button onClick={() => { setCurrentBtn('React & MUI'); handleFilterClick('Category C') }} className={`btn ${currentBtn === "React & MUI" ? "active" : null}`} >React & MUI</button>
                </section>
                <section className="all-projects">
                    {filteredProjects.map((project) => (
                        <a key={project.id} className='project' href={project.src}>
                            <img src={project.img} />
                            <section className="title">
                                <h4>{project.name}</h4>
                                <p>static landing page is designed using Html and Css</p>
                                <section className="links">
                                    <Link to={project.src} className='icon-link1'></Link>
                                    <Link to={project.codeSrc} className='icon-github'></Link>
                                </section>
                            </section>
                        </a>
                    ))}
                </section>
            </section>
        </section>
    )
}




