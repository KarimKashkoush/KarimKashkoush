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


export default function Projects() {
    return (
        <section className="projects" id='projects'>
            <h2 className="title-section">
                projects
            </h2>
            <section className="content">
                <section className="filter">
                    <button className='btn'>All Projects</button>
                    <button className='btn'>Html& Css</button>
                    <button className='btn'>Html& Css & Js</button>
                    <button className='btn'>React & MUI</button>
                </section>
                <section className="all-projects">
                    <Link to="https://leon-4zg4wkmj4-karimkashkoush.vercel.app/" className="project">
                        <img src={p1} />
                        <section className="title">
                            <h4>landing page</h4>
                            <p>static landing page is designed using Html and Css</p>
                            <section className="links">
                                <Link to="https://leon-4zg4wkmj4-karimkashkoush.vercel.app/" className='icon-link1'></Link>
                                <Link to="https://github.com/KarimKashkoush/Leon" className='icon-github'></Link>
                            </section>
                        </section>
                    </Link>
                    <Link to="https://karim-9qa946dkd-karimkashkoush.vercel.app/" className="project">
                        <img src={p2} />
                        <section className="title">
                            <h4>landing page</h4>
                            <p>static landing page is designed using Html and Css</p>
                            <section className="links">
                                <Link to="https://karim-9qa946dkd-karimkashkoush.vercel.app/" className='icon-link1'></Link>
                                <Link to="https://github.com/KarimKashkoush/Karim" className='icon-github'></Link>
                            </section>
                        </section>
                    </Link>
                    <Link to="https://kasper-hvz2fwlws-karimkashkoush.vercel.app/" className="project">
                        <img src={p3} />
                        <section className="title">
                            <h4>landing page</h4>
                            <p>static landing page is designed using Html and Css</p>
                            <section className="links">
                                <Link to="https://kasper-hvz2fwlws-karimkashkoush.vercel.app/" className='icon-link1'></Link>
                                <Link to="https://github.com/KarimKashkoush/Kasper" className='icon-github'></Link>
                            </section>
                        </section>
                    </Link>

                    <Link to="https://turbino-gym.vercel.app/" className="project">
                        <img src={p4} />
                        <section className="title">
                            <h4>landing page</h4>
                            <p>static landing page is designed using Html and Css</p>
                            <section className="links">
                                <Link to="https://turbino-gym.vercel.app/" className='icon-link1'></Link>
                                <Link to="https://github.com/KarimKashkoush/Turbino-Gym" className='icon-github'></Link>
                            </section>
                        </section>
                    </Link>

                    <Link to="https://steller-five.vercel.app/" className="project">
                        <img src={p5} />
                        <section className="title">
                            <h4>landing page</h4>
                            <p>static landing page is designed using Html and Css</p>
                            <section className="links">
                                <Link to="https://steller-five.vercel.app/" className='icon-link1'></Link>
                                <Link to="https://github.com/KarimKashkoush/Steller" className='icon-github'></Link>
                            </section>
                        </section>
                    </Link>

                    <Link to="https://farah-ashraf.vercel.app/" className="project">
                        <img src={p6} />
                        <section className="title">
                            <h4>portfolio page</h4>
                            <p>static landing page is designed using React</p>
                            <section className="links">
                                <Link to="https://farah-ashraf.vercel.app/" className='icon-link1'></Link>
                                <Link to="https://github.com/KarimKashkoush/Farah-Ashraf" className='icon-github'></Link>
                            </section>
                        </section>
                    </Link>

                    <Link to="https://d-sherif-abdelbaeth.vercel.app/" className="project">
                        <img src={p7} />
                        <section className="title">
                            <h4>landing page</h4>
                            <p>static landing page is designed using Html, Css and Js</p>
                            <section className="links">
                                <Link to="https://d-sherif-abdelbaeth.vercel.app/" className='icon-link1'></Link>
                                <Link to="https://github.com/KarimKashkoush/D.Sherif.Abdelbaeth" className='icon-github'></Link>
                            </section>
                        </section>
                    </Link>

                    <Link to="https://spyro-gym-one.vercel.app/" className="project">
                        <img src={p8} />
                        <section className="title">
                            <h4>landing page</h4>
                            <p>static landing page is designed using Html, Css and Js</p>
                            <section className="links">
                                <Link to="https://spyro-gym-one.vercel.app/" className='icon-link1'></Link>
                                <Link to="https://github.com/KarimKashkoush/Spyro-Gym" className='icon-github'></Link>
                            </section>
                        </section>
                    </Link>

                    <Link to="https://responsive-bakery.vercel.app/" className="project">
                        <img src={p9} />
                        <section className="title">
                            <h4>landing page</h4>
                            <p>static landing page is designed using Html, Css and Js</p>
                            <section className="links">
                                <Link to="https://responsive-bakery.vercel.app/" className='icon-link1'></Link>
                                <Link to="https://github.com/KarimKashkoush/responsive-bakery" className='icon-github'></Link>
                            </section>
                        </section>
                    </Link>

                    <Link to="https://bsa-lake.vercel.app/" className="project">
                        <img src={p10} />
                        <section className="title">
                            <h4>landing page</h4>
                            <p>static landing page is designed using Html, Css and Js</p>
                            <section className="links">
                                <Link to="https://bsa-lake.vercel.app/" className='icon-link1'></Link>
                                <Link to="https://github.com/KarimKashkoush/BSA-Form" className='icon-github'></Link>
                            </section>
                        </section>
                    </Link>
                </section>
            </section>
        </section>
    )
}
