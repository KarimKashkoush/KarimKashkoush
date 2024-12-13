import "./hero.css"
import { Link } from "react-router-dom"
import Lottie from "lottie-react";
// @ts-ignore
import image from '../../../public/images/personal-image.jpg'
import personalAnimation from '../../../public/animation/Animation - 1712407466275.json'
export default function Hero() {
    return (
        <section className="hero" id='home'>
            <section className="content">
                <section className="image-title">
                    <img src={image} alt="" />
                    <span className="icon-verified"></span>
                </section>
                <h2>front-end react developer</h2>
                <p>Hi, I&apos;m Karim Mohamed Kashkoush, a passionate Front-End React Developer.</p>
                <section className="social">
                    <Link to='http://wa.me/+201033113646' target='_blank'><span className="icon-whatsapp"></span></Link>
                    <Link to='https://www.facebook.com/profile.php?id=100007925707362&mibextid=LQQJ4d' target='_blank'><span className="icon-facebook"></span></Link>
                    <Link to='https://www.instagram.com/karimkashkoush1?igsh=b2poYWpmd2tra2Vi' target='_blank'><span className="icon-instagram"></span></Link>
                    <Link to='https://www.linkedin.com/in/karim-kashkoush-47b27a1a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' target='_blank'><span className="icon-linkedin1"></span></Link>
                    <Link to='https://x.com/Karimkashkoush_?t=8jJ6CfDXwhZPUUYUAkBnrA&s=09' target='_blank'><span className="icon-x"></span></Link>
                    <Link to='https://github.com/KarimKashkoush' target='_blank'><span className="icon-github"></span></Link>
                </section>
                <a className='btn' href="https://drive.google.com/file/d/1iNvB3XwAods7lczZWYHnhteprQXbckJ9/view?usp=sharing" target='_blank'>download cv <span className="icon-cloud-download"></span></a>
            </section>
            <section className="animation-hero">
                <Lottie animationData={personalAnimation} className="animation" />
            </section>
        </section>
    )
}
