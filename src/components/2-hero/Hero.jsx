import "./hero.css"
import { Link } from "react-router-dom"
import Lottie from "lottie-react";
import personalAnimation from '../../../public/animation/Animation - 1712407466275.json'
export default function Hero() {
    return (
        <section className="hero">
            <section className="content">
                <section className="image-title">
                    <img src="../../../public/images/personal-image.png" alt="" />
                    <span className="icon-verified"></span>
                </section>
                <h2>front-end react developer</h2>
                <p>Hi, I'm Karim Mohamed Kashkoush, a passionate Front-End React Developer</p>
                <section className="social">
                    <Link to=''><span className="icon-facebook"></span></Link>
                    <Link to=''><span className="icon-instagram"></span></Link>
                    <Link to=''><span className="icon-linkedin1"></span></Link>
                    <Link to=''><span className="icon-x"></span></Link>
                    <Link to=''><span className="icon-github"></span></Link>
                </section>
                <a className='cv' href="/public/Karim-Mohamed-Kashkoush-CV.pdf" download>download cv <span className="icon-cloud-download"></span></a>
            </section>
            <section className="animation-hero">
                <Lottie animationData={personalAnimation} className="animation" />
            </section>
        </section>
    )
}
