import './about.css'
import Lottie from "lottie-react";
import aboutimage from '../../../public/animation/about.json'
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <section className="about" id='about'>
            <section className="title-section">
                <h2>About Me</h2>
            </section>


            <section className="content">

                <section className="image">
                    <Lottie animationData={aboutimage} className="animation" />
                </section>

                <section className="title">
                    <p>Hi, I&apos;m Karim, a passionate Front End React Developer. I love crafting user-friendly interfaces and bringing designs to life through code. With a keen eye for detail and a dedication to creating seamless user experiences, I strive to deliver high-quality and innovative solutions. Explore my portfolio to see some of my projects and feel free to reach out for collaborations or opportunities.</p>

                    <section className="experiences">
                        <section className="box">
                            <span className='icon-suitcase'></span>
                            <h5>Experience</h5>
                            <p>one year working</p>
                        </section>
                        <section className="box">
                            <span className='icon-award-fill'></span>
                            <h5>completed</h5>
                            <p>+15 projects</p>
                        </section>
                        <section className="box">
                            <span className='icon-contact_phone'></span>
                            <h5>Support</h5>
                            <p>Online 24/7</p>
                        </section>
                    </section>

                    <a className='btn' target='_blank' href='https://drive.google.com/file/d/1iNvB3XwAods7lczZWYHnhteprQXbckJ9/view?usp=sharing'>View more <span className='icon-arrow_forward'></span></a>

                    <section className="social">
                        <Link to='http://wa.me/+201033113646' target='_blank'><span className="icon-whatsapp"></span></Link>
                        <Link to='https://www.facebook.com/profile.php?id=100007925707362&mibextid=LQQJ4d' target='_blank'><span className="icon-facebook"></span></Link>
                        <Link to='https://www.instagram.com/karimkashkoush1?igsh=b2poYWpmd2tra2Vi' target='_blank'><span className="icon-instagram"></span></Link>
                        <Link to='https://www.linkedin.com/in/karim-kashkoush-47b27a1a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' target='_blank'><span className="icon-linkedin1"></span></Link>
                        <Link to='https://x.com/Karimkashkoush_?t=8jJ6CfDXwhZPUUYUAkBnrA&s=09' target='_blank'><span className="icon-x"></span></Link>
                        <Link to='https://github.com/KarimKashkoush' target='_blank'><span className="icon-github"></span></Link>
                    </section>
                </section>


            </section>

        </section>
    )
}
